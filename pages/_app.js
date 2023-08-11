import { NinetailedProvider } from '@ninetailed/experience.js-next';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <NinetailedProvider
      /* required */
      clientId={process.env.NEXT_PUBLIC_NINETAILED_CLIENT_ID}
      /* Sets needed plugins */
      plugins={[]}
      environment={process.env.NEXT_PUBLIC_NINETAILED_ENVIRONMENT ?? 'main'}
      /* The maximum loading time until the fallback (Baseline) will be shown */
      requestTimeout={500}
    >
      <Component {...pageProps} />
    </NinetailedProvider>
  );
}

export default MyApp;
