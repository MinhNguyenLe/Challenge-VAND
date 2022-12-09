import { cloneElement, useState, useEffect } from "react";

import { Button, Grid, ListItem, ListItemText } from "@mui/material";

import useCountriesCovid from "../hooks/useCountriesCovid";
import { UseDialogReturn } from "../hooks/useDialog";

import { CountryCovid } from "../utils/types";

interface ListCountriesProp {
  onClickCountryName: (countryCode: CountryCovid["CountryCode"]) => void;
  handleClickOpen: UseDialogReturn["handleClickOpen"];
}

const ListCountries = ({
  onClickCountryName,
  handleClickOpen,
}: ListCountriesProp) => {
  const { data, isLoading, status } = useCountriesCovid();

  const [localCountries, setLocalCountries] = useState<CountryCovid[]>([]);

  useEffect(() => {
    if (status === "success") setLocalCountries(data);
  }, [status, data]);

  if (isLoading) return <span>Loading data...</span>;

  if (!data) return null;

  const filterByMostTotalConfirmed = () => {
    let mostTotalConfirmed = 0;

    data.forEach((country) => {
      if (country.TotalConfirmed > mostTotalConfirmed) {
        mostTotalConfirmed = country.TotalConfirmed;
      }
    });

    setLocalCountries(
      data.filter((country) => country.TotalConfirmed === mostTotalConfirmed)
    );
  };

  const filterByHighestDeaths = () => {
    let highestDeaths = 0;

    data.forEach((country) => {
      if (country.TotalDeaths > highestDeaths) {
        highestDeaths = country.TotalDeaths;
      }
    });

    setLocalCountries(
      data.filter((country) => country.TotalDeaths === highestDeaths)
    );
  };

  const filterByLeastRecovered = () => {
    let leastRecovered: number = -1;

    data.forEach((country) => {
      if (leastRecovered < 0 || country.TotalRecovered < leastRecovered) {
        leastRecovered = country.TotalRecovered;
      }
    });

    setLocalCountries(
      data.filter((country) => country.TotalRecovered === leastRecovered)
    );
  };

  return (
    <>
      <Grid>
        <Button
          sx={{ m: 2 }}
          variant="outlined"
          onClick={filterByMostTotalConfirmed}
        >
          Most total confirmed cases
        </Button>
        <Button
          sx={{ m: 2 }}
          variant="outlined"
          onClick={filterByHighestDeaths}
        >
          Highest number of deaths
        </Button>
        <Button
          sx={{ m: 2 }}
          variant="outlined"
          onClick={filterByLeastRecovered}
        >
          Least number of recovered cases
        </Button>
        <Button
          sx={{ m: 2 }}
          variant="outlined"
          onClick={() => {
            setLocalCountries(data);
          }}
        >
          Reset
        </Button>
      </Grid>
      <>
        {localCountries.map((value) =>
          cloneElement(
            <ListItem>
              <ListItemText
                primary={value.Country}
                onClick={() => {
                  handleClickOpen();
                  onClickCountryName(value.CountryCode);
                }}
              />
            </ListItem>,
            {
              key: value.ID,
            }
          )
        )}
      </>
    </>
  );
};

export default ListCountries;
