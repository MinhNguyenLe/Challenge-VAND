import { CountryCovid, CountryDetail } from "./../utils/types";
import { useQuery } from "react-query";

const getCountryDetail = async (
  countryCode: CountryCovid["CountryCode"]
): Promise<CountryDetail> => {
  // must throw snackbar error in fact
  return fetch(`https://restcountries.com/v2/alpha/${countryCode}`)
    .then((data) => data.json())
    .catch((error) =>
      console.error(`At get country information: ${error.message}`)
    );
};

const useCountryDetail = (countryCode: CountryCovid["CountryCode"]) => {
  return useQuery(
    `country-detail-${countryCode}`,
    () => getCountryDetail(countryCode),
    {
      enabled: !!countryCode,
    }
  );
};

export default useCountryDetail;
