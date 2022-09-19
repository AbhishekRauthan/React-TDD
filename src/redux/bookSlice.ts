import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { BookType } from "@type/BookTypes";
import axios from "axios";

export type State = {
  books: BookType[];
  loading: boolean;
  error: boolean;
};

const initialState: State = {
  books: [],
  error: false,
  loading: false,
};

export const fetchBooks = createAsyncThunk(
  "books/fetchBooks",
  async (term: string, thunkAPI) => {
    try {
      const response = await axios.get(`http://localhost:8080/books?q=${term}`);
      return response.data;
    } catch (error: any) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const bookSlice = createSlice({
  name: "books",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchBooks.pending, (state) => {
      state.loading = true;
    }),
      builder.addCase(
        fetchBooks.fulfilled,
        (state, action: PayloadAction<BookType[]>) => {
          state.loading = false;
          state.books = action.payload;
        }
      ),
      builder.addCase(fetchBooks.rejected, (state) => {
        state.loading = false;
        state.error = true;
      });
  },
});

export default bookSlice.reducer;
