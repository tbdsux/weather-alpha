import { createContext, ReactNode, useState } from 'react';

type DefaultPlaceProviderProps = {
  children: ReactNode;
};

type DefaultPlaceContextProps = {
  cityId: string;
  setCityId: (city: string) => void;
};

const DefaultPlaceContext = createContext<DefaultPlaceContextProps>({
  cityId: '',
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setCityId: () => {}
});

// initial localstorage getter
const getDefaultCity = (): string => {
  if (typeof window !== 'undefined' && window.localStorage) {
    const storedPrefs = window.localStorage.getItem('WEATHER_ALPHA_CITYID');
    if (typeof storedPrefs === 'string') {
      return storedPrefs;
    }
  }

  return '';
};

const DefaultPlaceProvider = ({ children }: DefaultPlaceProviderProps) => {
  const [city, setCity] = useState<string>(getDefaultCity());

  const setCityId = (city: string) => {
    if (!city) return;

    window.localStorage.setItem('WEATHER_ALPHA_CITYID', city);
    setCity(city);
  };

  return <DefaultPlaceContext.Provider value={{ cityId: city, setCityId }}>{children}</DefaultPlaceContext.Provider>;
};

export default DefaultPlaceProvider;
export { DefaultPlaceContext };
