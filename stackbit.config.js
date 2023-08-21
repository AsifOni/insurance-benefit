import { ContentfulContentSource } from '@stackbit/cms-contentful';
import { getLocalizedFieldForLocale } from '@stackbit/types'

const config = {
  stackbitVersion: '~0.6.0',
  ssgName: 'nextjs',
  nodeVersion: '16',
  contentSources: [
    new ContentfulContentSource({
      spaceId: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
      environment: process.env.CONTENTFUL_ENVIRONMENT || 'master',
      previewToken: process.env.NEXT_PUBLIC_CONTENTFUL_PREVIEW_TOKEN,
      accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_MANAGEMENT_TOKEN,
    }),
  ],
  modelExtensions: [{ name: 'page', type: 'page', urlPath: '/{slug}' }],
  // Needed only for importing this repository via https://app.stackbit.com/import?mode=duplicate
  import: {
    type: 'contentful',
    contentFile: 'contentful/export.json',
    uploadAssets: true,
    assetsDirectory: 'contentful',
    spaceIdEnvVar: 'NEXT_PUBLIC_CONTENTFUL_SPACE_ID',
    deliveryTokenEnvVar: 'NEXT_PUBLIC_CONTENTFUL_DELIVERY_TOKEN',
    previewTokenEnvVar: 'NEXT_PUBLIC_CONTENTFUL_PREVIEW_TOKEN',
    accessTokenEnvVar: 'NEXT_PUBLIC_CONTENTFUL_MANAGEMENT_TOKEN',
  },
  siteMap: ({ documents, models }) => {
    const pageModels = models.filter((m) => m.type === 'page').map((m) => m.name);
    return documents
      .filter((d) => pageModels.includes(d.modelName))
      .map((document) => {
        const slug = getLocalizedFieldForLocale(document.fields.slug);
        if (!slug.value) return null;
        const urlPath = '/' + slug.value.replace(/^\/+/, '');
        return { stableId: document.id, urlPath, document, isHomePage: urlPath === '/' };
      })
      .filter(Boolean);
  },
  sidebarButtons: [
    {
      label: 'Navigation',
      type: 'model',
      icon: 'tools',
      modelName: 'siteConfig',
    },
  ],
};

export default config;
