import { Dispatch, SetStateAction, useRef } from 'react';
import { SearchResultProps } from '../types/search';
import fetcher from '../utils/fetcher';

type SearchPlaceProps = {
  setSearchResults: Dispatch<SetStateAction<SearchResultProps>>;
  setSearching: Dispatch<SetStateAction<boolean>>;
  setSearchMode: Dispatch<SetStateAction<boolean>>;
};

const SearchPlace = ({ setSearchResults, setSearching, setSearchMode }: SearchPlaceProps) => {
  const inputSearchRef = useRef<HTMLInputElement>(null);

  const searchFunc = async () => {
    setSearching(true);
    setSearchMode(true);

    const searchText = inputSearchRef.current?.value;
    if (!searchText) {
      return;
    }

    const f = await fetcher<SearchResultProps | undefined>(
      `https://openweathermap.org/data/2.5/find?q=${searchText}&type=like&sort=population&cnt=30&appid=439d4b804bc8187953eb36d2a8c26a02`
    );

    if (!f) {
      // search result has failed
    }
    setSearchResults(f);
  };

  return (
    <div className="flex items-center justify-center my-8">
      <input
        ref={inputSearchRef}
        type="text"
        className="border py-2 px-3 rounded-lg w-full sm:w-3/4 xl:w-1/2"
        placeholder="Search a place..."
      />
      <button
        onClick={searchFunc}
        type="button"
        className="p-2 rounded-md ml-1 text-gray-100 bg-pink-400 hover:bg-pink-500"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path
            fillRule="evenodd"
            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
            clipRule="evenodd"
          />
        </svg>
      </button>
    </div>
  );
};

export default SearchPlace;
