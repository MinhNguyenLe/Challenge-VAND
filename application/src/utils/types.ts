export interface CountryCovid {
  Country: string;
  CountryCode: string;
  ID: string;
  TotalConfirmed: number;
  TotalDeaths: number;
  TotalRecovered: number;
}

export interface CountryDetail {
  name: string;
  flag: string;
  population: string;
  capital: string;
  region: string;
  subregion: string;
}
