import getData from "../../hooks/getData";
import BookList from "../BookList";

const BooklistContainer = () => {
  const {books,error,loading} = getData("http://localhost:8080/books")
  return <BookList books={books} error={error} loading={loading} />;
};

export default BooklistContainer;
