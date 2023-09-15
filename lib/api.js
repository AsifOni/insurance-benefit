import { createClient } from 'contentful';

import { AudienceMapper, ExperienceMapper } from '@ninetailed/experience.js-utils-contentful';

const IS_DEV = process.env.NODE_ENV === 'development';
const isPreview = process.env.APP_ENV === 'development';

const contentfulClient = createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID ?? '',
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_DELIVERY_TOKEN ?? '',
  environment: process.env.NEXT_PUBLIC_CONTENTFUL_ENVIRONMENT ?? 'master',
});

const previewClient = createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID ?? '',
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_PREVIEW_TOKEN ?? '',
  environment: process.env.NEXT_PUBLIC_CONTENTFUL_ENVIRONMENT ?? 'master',
  host: 'preview.contentful.com',
});

const getClient = (preview) => {
  // console.log('ISPREVIEW ACTIVE', isPreview);
  return preview ? previewClient : contentfulClient;
};

function parseField(value) {
  if (typeof value === 'object' && value.sys) return mapEntry(value);
  if (Array.isArray(value)) return value.map(mapEntry);
  return value;
}

const mapEntry = (entry) => {
  if (!entry) return null;
  const id = entry.sys?.id;
  const type = entry.sys?.contentType?.sys?.id || entry.sys?.type;

  if (entry.sys?.type === 'Asset') {
    return {
      sys: { id },
      id,
      type,
      src: `https:${entry.fields.file.url}`,
      alt: entry.fields.title,
    };
  }

  return {
    id,
    sys: { id },
    type,
    ...Object.fromEntries(Object.entries(entry?.fields || {}).map(([key, value]) => [key, parseField(value)])),
  };
};

const getPageQuery = (pageParams) => {
  return {
    limit: 1,
    include: 10,
    'fields.slug': pageParams.slug,
    content_type: 'page',
  };
};

export async function getPage(pageParams) {
  let query = getPageQuery(pageParams);
  let slug = pageParams.slug;

  const client = getClient(pageParams.preview);
  const entries = await client.getEntries(query);
  let pageObj = null;
  const [page] = entries.items;
  pageObj = page;

  if (!pageObj && slug !== '/' && slug.startsWith('/')) {
    query = getPageQuery({ slug: slug.slice(1) });
    const entries = await client.getEntries(query);
    const [page] = entries.items;
    pageObj = page;
  }

  if (!pageObj) throw new Error(`Page not found for slug: ${slug}`);
  return mapEntry(pageObj);
}

export async function getPages(QueryParams) {
  const query = { content_type: 'page' };
  const client = getClient(QueryParams.preview);
  const entries = await client.getEntries(query);
  const pages = entries.items;

  return pages || [];
}

export async function getExperiments(QueryParams) {
  const query = {
    content_type: 'nt_experience',
    'fields.nt_type': 'nt_experiment',
  };
  const client = getClient(QueryParams.preview);
  const entries = await client.getEntries(query);
  const experiments = entries.items;

  const mappedExperiments = (experiments || [])
    .filter((entry) => ExperienceMapper.isExperiment(entry))
    .map((entry) => {
      return ExperienceMapper.mapExperiment(entry);
    });

  return mappedExperiments;
}

export async function getAllExperiences() {
  const query = {
    content_type: 'nt_experience',
    include: 1,
  };

  const client = getClient();

  const entries = await client.getEntries(query);
  const experiences = entries.items;

  const mappedExperiences = (experiences || [])
    .filter((entry) => ExperienceMapper.isExperienceEntry(entry))
    .map((entry) => ExperienceMapper.mapExperience(entry));

  return mappedExperiences;
}

export async function getAllAudiences() {
  const query = {
    content_type: 'nt_audience',
  };

  const client = getClient(true);

  const entries = await client.getEntries(query);
  const audiences = entries.items;

  const mappedAudiences = (audiences || [])
    .filter((entry) => AudienceMapper.isAudienceEntry(entry))
    .map((entry) => AudienceMapper.mapAudience(entry));

  return mappedAudiences;
}

export async function getNavItems() {
  const query = { content_type: 'siteConfig' };
  const client = getClient(true);
  const entries = await client.getEntries(query);
  const navItems = entries.items;

  return navItems || [];
}

// export async function getGlobalConfig() {
//   const query = {
//     content_type: 'ntConfig',
//     limit: 1,
//     include: 3,
//   };
//   const client = getClient();
//   const entries = await client.getEntries(query);
//   return entries?.items[0];
// }
