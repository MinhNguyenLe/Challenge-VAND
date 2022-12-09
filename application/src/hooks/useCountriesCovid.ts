import { useQuery } from "react-query";
import { CountryCovid } from "../utils/types";

const getCountriesCovid = async (): Promise<{ Countries: CountryCovid[] }> => {
  return fetch("https://api.covid19api.com/summary").then((data) =>
    data.json()
  );
};

const useCountriesCovid = () => {
  return useQuery("countries-covid", getCountriesCovid, {
    select: (data) => {
      return data.Countries;
    },
  });
};

export default useCountriesCovid;
