import axios from "axios";
import { Dispatch } from "redux";

export const setSearchTerm = (term: string) => {
  return { type: "SET_SEARCH_TERM", term };
};

export const fetchBooks = (term: string) => {
  return (dispatch: Dispatch) => {
    dispatch({ type: "FETCH_BOOKS_PENDING" });
    return axios
      .get(`http://localhost:8080/books?q=${term}`)
      .then((res) => {
        dispatch({ type: "FETCH_BOOKS_SUCCESS", books: res.data });
      })
      .catch((err) => {
        dispatch({ type: "FETCH_BOOKS_FAILED", err: err.message });
      });
  };
};
