import { ContentfulLivePreviewProvider } from '@contentful/live-preview/react';
import { NinetailedProvider } from '@ninetailed/experience.js-next';
import { NinetailedPreviewPlugin } from '@ninetailed/experience.js-plugin-preview';
import SettingsProviderWrapper from '../lib/SettingsProvider';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {  
  return (
    <NinetailedProvider
      /* required */
      clientId={process.env.NEXT_PUBLIC_NINETAILED_CLIENT_ID}
      /* Sets needed plugins */
      plugins={[
        new NinetailedPreviewPlugin({
          // Required: Experiences from your CMS
          experiences: pageProps.ninetailed?.preview.allExperiences || [],
          // Required: Audiences from your CMS
          audiences: pageProps.ninetailed?.preview.allAudiences || [],
          // Optional: Callback to handle user forwarding to the experience entry in your CMS
          onOpenExperienceEditor: (experience) => {
            if (process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID) {
              window.open(
                `https://app.contentful.com/spaces/${process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID}/environments/${
                  process.env.NEXT_PUBLIC_CONTENTFUL_ENVIRONMENT || 'master'
                }/entries/${experience.id}`,
                '_blank',
              );
            }
          },
          ui: { opener: { hide: !(process.env.NEXT_PUBLIC_APP_ENV === 'development') } },
        }),
      ]}
      environment={process.env.NEXT_PUBLIC_NINETAILED_ENVIRONMENT ?? 'main'}
      /* The maximum loading time until the fallback (Baseline) will be shown */
      requestTimeout={500}
    >
      <SettingsProviderWrapper config={pageProps}>
        <ContentfulLivePreviewProvider
          locale="en-US"
          enableLiveUpdates={pageProps.preview}
          enableInspectorMode={false}
          debugMode={true}
        >
          <Component {...pageProps} />
        </ContentfulLivePreviewProvider>
      </SettingsProviderWrapper>
    </NinetailedProvider>
  );
}

export default MyApp;
