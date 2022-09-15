import { describe, it, vi } from "vitest";
import { fetchBooks, setSearchTerm } from "./actions";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import * as types from "./constants";
import axios from "axios";
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("first", () => {
  it("Sets the search keyword", () => {
    const term = "";
    const expected = {
      type: types.SET_SEARCH_TERM,
      term,
    };
    const action = setSearchTerm(term);
    expect(action).toEqual(expected);
  });
  it("Successfully fetches data", () => {
    const books = [
      { id: 1, name: "Refactoring" },
      { id: 2, name: "Domain-driven design" },
    ];
    axios.get = vi
      .fn()
      .mockImplementation(() => Promise.resolve({ data: books }));
    const expectedActions = [
      { type: types.FETCH_BOOKS_PENDING },
      { type: types.FETCH_BOOKS_SUCCESS, books },
    ];
    const store = mockStore({ books: [] });

    store.dispatch(fetchBooks("")).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
  it("Unsuccessfully fetches data", () => {
    axios.get = vi
      .fn()
      .mockImplementation(() =>
        Promise.reject({ message: "Something went wrong" })
      );

    const expectedActions = [
      { type: types.FETCH_BOOKS_PENDING },
      { type: types.FETCH_BOOKS_FAILED, err: "Something went wrong" },
    ];
    const store = mockStore({ books: [] });

    store.dispatch(fetchBooks("")).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
