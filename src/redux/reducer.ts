import { Reducer } from 'redux';
import * as types from './constants';

const reducer:Reducer = (state:any = [], action:any) => {
  switch (action.type) {
    case types.FETCH_BOOKS_PENDING:
      return { ...state, loading: true };
    case types.FETCH_BOOKS_SUCCESS:
      return { books: action.books };
    default:
      return state;
  }
};
export default reducer;