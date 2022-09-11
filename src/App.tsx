import { Typography } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import BookContainer from "./components/BookList/BookContainer";
import BookDetailContainer from "./components/BookDetails/BookDetailsContainer";

const App = () => {
  return (
    <>
      <Typography variant="h2" component="h2" data-test="heading">
        Bookish
      </Typography>
      <Routes>
        <Route element={<BookContainer />} path="/" />
        <Route element={<BookDetailContainer />} path="/books/:id" />
      </Routes>
    </>
  );
};

export default App;
