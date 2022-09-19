import BookList from "..";
import { useEffect, useState } from "react";
import Search from "../Search";
import {
  useAppDispatch,
  useAppSelector,
  bookListSelector,
} from "../../../hooks/reduxHooks";
import { fetchBooks } from "../../../redux/bookSlice";

const BookContainer = () => {
  const [term, setTerm] = useState("");
  const dispatch = useAppDispatch();

  const { books, error, loading } = useAppSelector(bookListSelector);
  useEffect(() => {
    dispatch(fetchBooks(term));
  }, [term]);

  return (
    <>
      <Search term={term} onSearch={(e) => setTerm(e.target.value)} />
      <BookList books={books} error={error} loading={loading} />
    </>
  );
};

export default BookContainer;
