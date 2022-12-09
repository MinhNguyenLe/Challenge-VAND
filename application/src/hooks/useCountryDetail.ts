import { useQuery } from "react-query";

const getCountryDetail = async (): Promise<any> => {
  return fetch("https://restcountries.com/v2/alpha/pe").then((data) =>
    data.json()
  );
};

const useCountryDetail = () => {
  return useQuery("countries-covid", getCountryDetail);
};

export default useCountryDetail;
