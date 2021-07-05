import { useRouter } from 'next/dist/client/router';
import { useState } from 'react';
import SearchPlace from '../components/search-place';
import DefaultLayout from '../layouts/default';
import SearchPlaceResult from '../modules/search/results';
import CurrentWeather from '../modules/weather/current';
import { SearchResultProps } from '../types/search';
import { joinString } from '../utils/joinstring';

const PlacesPage = () => {
  const router = useRouter();
  const [searchMode, setSearchMode] = useState(false);
  const [searching, setSearching] = useState(false);
  const [searchResult, setSearchResults] = useState<SearchResultProps>(null);

  // get route query
  const { cityId } = router.query; // TODO:  include => latitude, longitude,

  return (
    <DefaultLayout>
      <div className="w-11/12 sm:max-w-2xl lg:max-w-3xl mx-auto">
        <SearchPlace setSearchResults={setSearchResults} setSearching={setSearching} setSearchMode={setSearchMode} />

        {searchMode ? (
          <SearchPlaceResult results={searchResult} searching={searching} />
        ) : (
          <CurrentWeather cityId={Number(joinString(cityId))} />
        )}
      </div>
    </DefaultLayout>
  );
};

export default PlacesPage;
