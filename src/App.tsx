import { Typography } from "@mui/material";
import BookContainer from "./components/BookContainer";

const App = () => {
  return (
    <>
      <Typography variant="h2" component="h2" data-test="heading">
        Bookish
      </Typography>
      <BookContainer />
    </>
  );
};

export default App;
