import Image from 'next/image';
import useSWR from 'swr';
import EmptyComponent from '../../components/empty';
import LoadingComponent from '../../components/loading';
import { CurrentWeatherResponseProps } from '../../types/current-weather';
import { Geo } from '../../types/geo';
import { KelvinToCelsius } from '../../utils/converter';

type CurrentWeatherProps = {
  geo?: Geo;
  cityId?: number;
  initialData?: CurrentWeatherResponseProps;
};

const CurrentWeather = ({ geo, cityId, initialData }: CurrentWeatherProps) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?${
    geo ? `lat=${geo.latitude}&lon=${geo.longitude}` : `id=${cityId}`
  }&appid=`;

  console.log(url);

  const { data } = useSWR<CurrentWeatherResponseProps>(
    geo || cityId ? `/api/weather?url=${encodeURIComponent(url)}` : null,
    { initialData }
  );

  if (!geo && !cityId) return <EmptyComponent />;

  if (!data) return <LoadingComponent />;

  return (
    <div className="p-8 border-2 border-pink-300 rounded-lg">
      <div>
        <h3 className="text-2xl font-extrabold tracking-wide text-gray-700">
          <span className="text-pink-500">{data.name}</span>, {data.sys.country}
        </h3>
      </div>
      <div className="text-center">
        <Image
          title={data.weather[0].description}
          src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`}
          height="200"
          width="200"
        />
        <h4 className="text-4xl font-black tracking-wider text-pink-500 underline">{data.weather[0].main}</h4>
        <ul className="mt-4">
          <li className="text-2xl font-extrabold text-gray-800 my-1">
            <span className="text-sm font-normal">(temp)</span> {KelvinToCelsius(data.main.temp)} &#8451;
          </li>
          <li className="text-2xl font-extrabold text-gray-800 my-1">
            <span className="text-sm font-normal">(feels_like)</span> {KelvinToCelsius(data.main.feels_like)} &#8451;
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CurrentWeather;
