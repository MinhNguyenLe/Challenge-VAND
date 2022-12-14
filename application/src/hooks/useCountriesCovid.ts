import { useQuery } from "react-query";
import { CountryCovid } from "../utils/types";

const getCountriesCovid = async (): Promise<{ Countries: CountryCovid[] }> => {
  // must throw snackbar error in fact
  return fetch("https://api.covid19api.com/summary")
    .then((data) => data.json())
    .catch((error) =>
      console.error(`At get list countries covid: ${error.message}`)
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
