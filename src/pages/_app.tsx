import type { AppProps /*, AppContext */ } from 'next/app';
import DefaultPlaceProvider from '../modules/places/provider';
import '../styles/tailwind.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <DefaultPlaceProvider>
      <Component {...pageProps} />
    </DefaultPlaceProvider>
  );
}
export default MyApp;
