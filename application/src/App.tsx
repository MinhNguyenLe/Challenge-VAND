import "./App.css";

import { Grid, Typography, List } from "@mui/material";

import ListCountries from "./components/ListCountries";
import CountryDetail from "./components/CountryDetail";

import useDialog from "./hooks/useDialog";
import { useState } from "react";

import { CountryCovid } from "./utils/types";

function App() {
  const { open, handleClickOpen, handleClose } = useDialog();

  const [countryCode, setCountryCode] =
    useState<CountryCovid["CountryCode"]>("");

  const onClickCountryName = (countryCode: CountryCovid["CountryCode"]) => {
    setCountryCode(countryCode);
  };

  return (
    <Grid className="App" item xs={12} md={6}>
      <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
        List countries affected by Covid-19
      </Typography>
      <Grid>
        <List>
          <ListCountries
            onClickCountryName={onClickCountryName}
            handleClickOpen={handleClickOpen}
          />
        </List>
      </Grid>
      <CountryDetail
        open={open}
        handleClickOpen={handleClickOpen}
        handleClose={handleClose}
        countryCode={countryCode}
      />
    </Grid>
  );
}

export default App;
