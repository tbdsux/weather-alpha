import Head from 'next/head';
import useSWR from 'swr';
import Header from '../components/header';
import CurrentWeather from '../modules/weather/current';
import { GEOIPDataProps } from '../types/geo';

export default function Home() {
  const { data } = useSWR<GEOIPDataProps>('https://my-ip.theboringdude.workers.dev/');

  return (
    <div>
      <Head>
        <title>Weather Alpha</title>
      </Head>

      <Header />

      <CurrentWeather geo={data?.geo} />
    </div>
  );
}
