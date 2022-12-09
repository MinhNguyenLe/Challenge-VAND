import { CountryDetail } from "./../utils/types";
import { useQuery } from "react-query";

const getCountryDetail = async (
  countryCode: string
): Promise<CountryDetail> => {
  // must catch Promise's error in fact
  return fetch(`https://restcountries.com/v2/alpha/${countryCode}`).then(
    (data) => data.json()
  );
};

const useCountryDetail = (countryCode: string) => {
  return useQuery(
    `country-detail-${countryCode}`,
    () => getCountryDetail(countryCode),
    {
      enabled: !!countryCode,
    }
  );
};

export default useCountryDetail;
