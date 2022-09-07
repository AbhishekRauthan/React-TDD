import getData from "../../hooks/getData";
import BookList from "../BookList";

const BookContainer = () => {
  const { data, error, loading } = getData("http://localhost:8080/books");
  return <BookList books={data} error={error} loading={loading} />;
};

export default BookContainer;
