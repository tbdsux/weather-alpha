import Head from 'next/head';

import Header from '../components/header';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Weather Alpha - Multi Weather</title>
      </Head>

      <Header />

      <div className="w-11/12 mx-auto grid grid-cols-3 gap-6">
        <div className="relative p-2 rounded-md border">
          <span className="absolute top-1 right-1">AccuWeather</span>
          <div></div>
        </div>
      </div>
    </div>
  );
}
