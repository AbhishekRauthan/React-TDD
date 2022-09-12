import getData from "../../../hooks/getData";
import BookList from "..";
import { useEffect, useState } from "react";
import Search from "../Search";

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
      <Search term={term} onSearch={(e) => setTerm(e.target.value)} />
      <BookList books={data} error={error} loading={loading} />
    </>
  );
};

export default BookContainer;
