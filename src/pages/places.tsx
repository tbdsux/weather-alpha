import { useRouter } from 'next/dist/client/router';
import { useState } from 'react';
import SearchPlace from '../components/search-place';
import useDefaultPlace from '../hooks/useDefaultPlace';
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

  const { cityId: defaultCityId, setCityId } = useDefaultPlace();

  // get route query
  const { cityId } = router.query; // TODO:  include => latitude, longitude,

  const isCitySimilar = (): boolean => {
    return defaultCityId === joinString(cityId);
  };

  const handleSetCityId = () => {
    if (!isCitySimilar()) {
      setCityId(joinString(cityId));
    }
  };

  return (
    <DefaultLayout>
      <div className="w-11/12 sm:max-w-2xl lg:max-w-3xl mx-auto">
        <SearchPlace setSearchResults={setSearchResults} setSearching={setSearching} setSearchMode={setSearchMode} />

        {searchMode ? (
          <SearchPlaceResult results={searchResult} searching={searching} />
        ) : (
          <>
            <CurrentWeather cityId={Number(joinString(cityId))} />
            <button
              onClick={handleSetCityId}
              className="float-right mt-4 hover:underline hover:text-pink-500 text-sm text-gray-700"
              title="Set this place as the default in the homepage when you try to access this website."
              type="button"
            >
              {isCitySimilar() ? 'default place' : 'set as default place'}
            </button>
          </>
        )}
      </div>
    </DefaultLayout>
  );
};

export default PlacesPage;
