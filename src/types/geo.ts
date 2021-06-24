export interface GEOIPDataProps {
  ip: string;
  geo: Geo;
  asn: number;
  country: string;
  city: string;
  continent: string;
  postalCode: string;
  region: string;
  regionCode: string;
  timezone: string;
}

export interface Geo {
  latitude: string;
  longitude: string;
}
