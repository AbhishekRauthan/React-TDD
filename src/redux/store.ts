import {
  applyMiddleware,
  legacy_createStore as createStore,
  compose,
} from "redux";
import thunk from "redux-thunk";

import reducer from "./reducer";
const initialState = {};
const middlewares = [thunk];
const composeEnhancers = compose(applyMiddleware(...middlewares));

const store = createStore(reducer, initialState, composeEnhancers);

export default store;
