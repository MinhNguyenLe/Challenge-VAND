import "./App.css";
import { Grid, Typography, List } from "@mui/material";
import ListCountries from "./components/ListCountries";

function App() {
  return (
    <Grid className="App" item xs={12} md={6}>
      <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
        List countries affected by Covid-19
      </Typography>
      <Grid>
        <List>
          <ListCountries />
        </List>
      </Grid>
    </Grid>
  );
}

export default App;
