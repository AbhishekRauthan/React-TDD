import { describe, expect, it, vi } from "vitest";
import store from "./store";
import axios from "axios";
import reducer, { fetchBooks } from "./reducer";

describe("Testing Store", () => {
  it("Fetches book from remote", () => {
    const books = [{ id: 1, name: "Refactoring" }];
    axios.get = vi
      .fn()
      .mockImplementation(() => Promise.resolve({ data: books }));

    store.dispatch(fetchBooks("")).then(() => {
      const state = store.getState().books;
      expect(state.books.length).toEqual(1);
      expect(state.books).toEqual(books);
    });
  });
  it("returns loading to true", async () => {
    const state = {
      loading: false,
      error: false,
      books: [],
    };
    const result = reducer(state,{type: "books/fetchBooks/pending"});
    expect(result.loading).toBeTruthy();
  });
});
