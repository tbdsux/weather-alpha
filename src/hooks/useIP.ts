import useSWR from 'swr';
import { GEOIPDataProps } from '../types/geo';

// custom wrapper to the useSWR
const useIP = () => {
  const { data } = useSWR<GEOIPDataProps>('https://my-ip.theboringdude.workers.dev/');

  return data;
};

export default useIP;
