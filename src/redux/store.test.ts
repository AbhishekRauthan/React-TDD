import { describe, expect, it, vi } from "vitest";
import store from "./store";
import axios from "axios";
import reducer, { fetchBooks } from "./bookSlice";

describe("Testing Store", () => {
  const state = {
    loading: false,
    error: false,
    books: [],
  };
  it("Fetches book from remote", async () => {
    const books = [{ id: 1, name: "Refactoring" }];
    axios.get = vi
      .fn()
      .mockImplementation(() => Promise.resolve(books));

    await store.dispatch(fetchBooks(""));
    const state = store.getState();
    expect(state.books.length).toEqual(1);
    expect(state.books).toEqual(books);
  });
  it("returns loading to be true", async () => {
    const result = reducer(state, { type: "books/fetchBooks/pending" });
    expect(result.loading).toBeTruthy();
  });
  it("returns error to be true", async () => {
    const result = reducer(state, { type: "books/fetchBooks/rejected" });
    expect(result.error).toBeTruthy();
  });
});
