import { createClient } from 'contentful';

import { AudienceMapper, ExperienceMapper } from '@ninetailed/experience.js-utils-contentful';

const IS_DEV = process.env.NODE_ENV === 'development';

const getClient = () => {
  const client = createClient({
    accessToken: IS_DEV ? process.env.CONTENTFUL_PREVIEW_TOKEN : process.env.CONTENTFUL_DELIVERY_TOKEN,
    space: process.env.CONTENTFUL_SPACE_ID,
    host: IS_DEV ? 'preview.contentful.com' : 'cdn.contentful.com',
  });
  return client;
};

function parseField(value) {
  if (typeof value === 'object' && value.sys) return mapEntry(value);
  if (Array.isArray(value)) return value.map(mapEntry);
  return value;
}

const mapEntry = (entry) => {
  if(!entry) return null;
  const id = entry.sys?.id;
  const type = entry.sys?.contentType?.sys?.id || entry.sys?.type;

  if (entry.sys?.type === 'Asset') {
    return {
      id,
      type,
      src: `https:${entry.fields.file.url}`,
      alt: entry.fields.title,
    };
  }

  return {
    id,
    type,
    ...Object.fromEntries(Object.entries(entry.fields).map(([key, value]) => [key, parseField(value)])),
  };
}

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

  const client = getClient();
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

export async function getPages() {
  const query = { content_type: 'page' };
  const client = getClient();
  const entries = await client.getEntries(query);
  const pages = entries.items;

  return pages || [];
}

export async function getExperiments(QueryParams) {
  const query = {
    content_type: 'nt_experience',
    'fields.nt_type': 'nt_experiment',
  };
  const client = getClient();
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

  // console.log('mappedExperiences', mappedExperiences);

  return mappedExperiences;
}

export async function getAllAudiences() {
  const query = {
    content_type: 'nt_audience',
  };

  const client = getClient();

  const entries = await client.getEntries(query);
  const audiences = entries.items;

  const mappedAudiences = (audiences || [])
    .filter((entry) => AudienceMapper.isAudienceEntry(entry))
    .map((entry) => AudienceMapper.mapAudience(entry));

    // console.log('getAllAudiences', mappedAudiences);

  return mappedAudiences;
}