import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import useCountryDetail from "../hooks/useCountryDetail";
import { Typography } from "@mui/material";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

interface CountryDetailProp {
  open: boolean;
  handleClickOpen: () => void;
  handleClose: () => void;
  countryCode: string;
}

// should create pure component Dialog in fact
export default function CountryDetail({
  open,
  handleClickOpen,
  handleClose,
  countryCode,
}: CountryDetailProp) {
  const { data, isLoading } = useCountryDetail(countryCode);

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Slide in alert dialog
      </Button>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="dialog-country-detail"
      >
        <DialogTitle id="dialog-country-detail">
          Country's information
        </DialogTitle>
        <DialogContent>
          {isLoading || !data?.flag ? (
            <span>Loading data...</span>
          ) : (
            <>
              <Typography>Country's name: {data.name}</Typography>
              <Typography>Country's population: {data.population}</Typography>
              <Typography>Country's capital: {data.capital}</Typography>
              <Typography>Country's region: {data.region}</Typography>
              <Typography>Country's subregion: {data.subregion}</Typography>
              <img
                src={data.flag}
                alt="flag of country"
                style={{ width: 400 }}
              ></img>
            </>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
