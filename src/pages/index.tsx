import { useState } from 'react';
import useSWR from 'swr';
import SearchPlace from '../components/search-place';
import DefaultLayout from '../layouts/default';
import SearchPlaceResult from '../modules/search/results';
import CurrentWeather from '../modules/weather/current';
import { GEOIPDataProps } from '../types/geo';
import { SearchResultProps } from '../types/search';

export default function Home() {
  const [searchMode, setSearchMode] = useState(false);
  const [searching, setSearching] = useState(false);
  const [searchResult, setSearchResults] = useState<SearchResultProps>(null);

  // get client user ip
  const { data } = useSWR<GEOIPDataProps>('https://my-ip.theboringdude.workers.dev/');

  return (
    <DefaultLayout>
      <div className="w-11/12 sm:max-w-2xl lg:max-w-3xl mx-auto">
        <SearchPlace setSearchResults={setSearchResults} setSearching={setSearching} setSearchMode={setSearchMode} />

        {searchMode ? (
          <SearchPlaceResult results={searchResult} searching={searching} />
        ) : (
          <CurrentWeather geo={data?.geo} />
        )}
      </div>
    </DefaultLayout>
  );
}
