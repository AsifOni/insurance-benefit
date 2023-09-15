import Script from 'next/script';
import { ContentfulLivePreviewProvider } from '@contentful/live-preview/react';
import { NinetailedProvider } from '@ninetailed/experience.js-next';
import { NinetailedPreviewPlugin } from '@ninetailed/experience.js-plugin-preview';
import { NinetailedGoogleTagmanagerPlugin } from '@ninetailed/experience.js-plugin-google-tagmanager';
import SettingsProviderWrapper from '../lib/SettingsProvider';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {  
  return (
    <NinetailedProvider
      /* required */
      clientId={process.env.NEXT_PUBLIC_NINETAILED_CLIENT_ID}
      /* Sets needed plugins */
      plugins={[
        new NinetailedGoogleTagmanagerPlugin({
          template: {
            ninetailed_audience_name: '{{ audience.name }}',
          },
        }),
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
          ui: { opener: { hide: !(process.env.NODE_ENV === 'development') } },
        }),
      ]}
      environment={process.env.NEXT_PUBLIC_NINETAILED_ENVIRONMENT ?? 'main'}
      /* The maximum loading time until the fallback (Baseline) will be shown */
      requestTimeout={500}
    >
      <SettingsProviderWrapper config={pageProps}>
        <Script
          id="gtm-base"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
  new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
  j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
  'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
  })(window,document,'script','dataLayer','${process.env.NEXT_PUBLIC_GTM_ID || ''}');`,
          }}
        />
        <ContentfulLivePreviewProvider locale="en-US" enableLiveUpdates={true}>
          <Component {...pageProps} />
        </ContentfulLivePreviewProvider>
      </SettingsProviderWrapper>
    </NinetailedProvider>
  );
}

export default MyApp;
