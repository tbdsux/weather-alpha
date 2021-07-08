import { useState } from 'react';
import SearchPlace from '../components/search-place';
import useDefaultPlace from '../hooks/useDefaultPlace';
import useIP from '../hooks/useIP';
import DefaultLayout from '../layouts/default';
import SearchPlaceResult from '../modules/search/results';
import CurrentWeather from '../modules/weather/current';
import { SearchResultProps } from '../types/search';

export default function Home() {
  const [searchMode, setSearchMode] = useState(false);
  const [searching, setSearching] = useState(false);
  const [searchResult, setSearchResults] = useState<SearchResultProps>(null);

  // get client user ip
  const ip = useIP();
  const { cityId } = useDefaultPlace();

  return (
    <DefaultLayout>
      <div className="w-11/12 sm:max-w-2xl lg:max-w-3xl mx-auto">
        <SearchPlace setSearchResults={setSearchResults} setSearching={setSearching} setSearchMode={setSearchMode} />

        {searchMode ? (
          <SearchPlaceResult results={searchResult} searching={searching} />
        ) : (
          <CurrentWeather geo={ip?.geo} cityId={Number(cityId)} />
        )}
      </div>
    </DefaultLayout>
  );
}
