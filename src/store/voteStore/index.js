import { createStore } from "redux";
import myApp from "../reducers";
export const store = createStore(
  myApp,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
