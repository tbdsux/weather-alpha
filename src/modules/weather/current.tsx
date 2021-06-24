import useSWR from 'swr';
import EmptyComponent from '../../components/empty';
import { Geo } from '../../types/geo';

type CurrentWeatherProps = {
  geo: Geo;
};

const CurrentWeather = ({ geo }: CurrentWeatherProps) => {
  const { data } = useSWR(
    geo
      ? `/api/weather?url=${encodeURIComponent(
          `https://api.openweathermap.org/data/2.5/weather?lat=${geo.latitude}&lon=${geo.longitude}&appid=`
        )}`
      : null
  );

  if (!geo || !data) return <EmptyComponent />;

  return <>{data && <p>{JSON.stringify(data)}</p>}</>;
};

export default CurrentWeather;
