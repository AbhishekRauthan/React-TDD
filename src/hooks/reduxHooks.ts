import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../redux/store";
import type { State } from "../redux/bookSlice";
import { createSelector } from "@reduxjs/toolkit";

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const bookListSelector = createSelector(
  [
    (state: State) => state.books,
    (state: State) => state.error,
    (state: State) => state.loading,
  ],
  (books, error, loading) => ({ books, error, loading })
);
