import { Typography } from "@mui/material";
import BookList from "./components/BookList";

const App = () => {
  const books = [
    {
      name: "Refactoring",
    },
    {
      name: "Domain-driven design",
    },
  ];
  return (
    <>
      <Typography variant="h2" component="h2" data-test="heading">
        Bookish
      </Typography>
      <BookList books={books}/>
    </>
  );
};

export default App;
