import getData from "../../../hooks/getData";
import BookList from "..";
import { TextField } from "@mui/material";
import { useEffect, useState } from "react";

const BookContainer = () => {
  const [term, setTerm] = useState("");
  const { data, error, loading, setUrl } = getData(
    "http://localhost:8080/books"
  );
  useEffect(() => {
    setUrl(`http://localhost:8080/books?q=${term}`);
  }, [term]);

  return (
    <>
      <TextField
        label="Search"
        value={term}
        onChange={(e) => {
          console.log(e.target.value);
          setTerm(e.target.value);
        }}
        data-test="search"
        variant="outlined"
        margin="normal"
      />
      <BookList books={data} error={error} loading={loading} />
    </>
  );
};

export default BookContainer;
