import { ContentfulContentSource } from '@stackbit/cms-contentful';
import { getLocalizedFieldForLocale } from '@stackbit/types';

const allowedStyles = {
  fontSize: ['14:26:1'],
  textAlign: '*',
  fontWeight: '*',
  fontStyle: '*',
  textDecoration: '*',
  borderRadius: '*',
  borderWidth: ['0:10:1'],
  borderStyle: '*',
  borderColor: [
    { value: 'border-primary', label: 'Primary color', color: '#c81faf' },
    { value: 'border-secondary', label: 'Secondary color', color: '#daf851' },
    { value: 'border-dark', label: 'Dark color', color: '#444444' },
  ],
  width: '*',
  height: '*',
  padding: '*',
  margin: '*',
  flexDirection: '*',
  justifyContent: '*',
  alignItems: '*',
};

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
    { name: 'siteConfig', type: 'data', urlPath: '/{slug}' },
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
              flexDirection: '*',
              justifyContent: '*',
              alignItems: '*',
            },
            tag: allowedStyles,
            heading: allowedStyles,
            body: allowedStyles,
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
        { name: 'bodyColor', label: 'Sub Heading Color', type: 'color', default: '#ffffff', group: 'design' },
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
