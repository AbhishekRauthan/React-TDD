import { describe, expect, it, vi } from "vitest";
import store from "./store";
import axios from "axios";

import * as actions from "./actions";

describe("Testing Store", () => {
  it("Fetches book from remote", () => {
    const books = [{ id: 1, name: "Refactoring" }];
    axios.get = vi
      .fn()
      .mockImplementation(() => Promise.resolve({ data: books }));

    store.dispatch(actions.fetchBooks("")).then(() => {
      const state = store.getState();
      expect(state.books.length).toEqual(1);
      expect(state.books).toEqual(books);
    });
  });
});
