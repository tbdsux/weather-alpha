import Image from 'next/image';
import Link from 'next/link';
import { SearchResultProps } from '../../types/search';

type SearchPlaceResultProps = {
  results: SearchResultProps | null;
  searching: boolean;
};

const SearchPlaceResult = ({ results, searching }: SearchPlaceResultProps) => {
  if (!results && searching) {
    return <p className="text-center">Loading...</p>;
  }

  return (
    <ul className="p-6 border-2 border-pink-300 rounded-lg">
      {results.list.map((r, index) => (
        <li key={index}>
          <Link href="/">
            <a className="flex items-center justify-between border hover:border-pink-300 px-3 rounded-lg my-2 hover:bg-pink-500 text-gray-800 hover:text-white">
              <p className="font-medium tracking-wide">
                {r.name}, {r.sys.country}
              </p>
              <div className="flex items-center">
                <Image
                  title={r.weather[0].description}
                  src={`http://openweathermap.org/img/wn/${r.weather[0].icon}@2x.png`}
                  height="50"
                  width="50"
                />
                <span className="text-sm">({r.weather[0].description})</span>
              </div>
            </a>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default SearchPlaceResult;
