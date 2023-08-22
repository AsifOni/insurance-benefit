import { ContentfulContentSource } from '@stackbit/cms-contentful';
import { getLocalizedFieldForLocale } from '@stackbit/types';

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
  modelExtensions: [
    { name: 'page', type: 'page', urlPath: '/{slug}' },
    {
      name: 'abtesthero',
      fieldGroups: [{ name: 'design', label: 'Colors', icon: 'palette' }],
      fields: [
        {
          name: 'styles',
          type: 'style',
          description: 'The styles field is controlled by Stackbit editor',
          styles: {
            self: {
              fontSize: ['14:26:1'],
            },
            tag: {
              fontSize: ['14:26:1'],
            },
            heading: {
              fontSize: ['14:26:1'],
            },
            body: {
              fontSize: ['14:26:1'],
            },
          },
        },
        // {
        //   type: 'color',
        //   name: 'tagColor',
        //   label: 'Tag Color',
        //   group: 'design',
        //   controlType: 'button-group',
        //   options: [
        //     { label: 'Narrow', value: 'narrow' },
        //     { label: 'Wide', value: 'wide' },
        //     { label: 'Full', value: 'full' },
        //   ],
        // },
        { name: 'tagColor', label: 'Tag Color', type: 'color', default: '#ffffff', group: 'design' },
        { name: 'headingColor', label: 'Heading Color', type: 'color', default: '#ffffff', group: 'design' },
        { name: 'subheadingColor', label: 'Sub Heading Color', type: 'color', default: '#ffffff', group: 'design' },
      ],
    },
  ],
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
