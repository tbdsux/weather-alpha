import { CurrentWeatherResponseProps } from './current-weather';

export interface SearchResultProps {
  message: string;
  cod: string;
  count: number;
  list: CurrentWeatherResponseProps[];
}
