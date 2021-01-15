import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.css";
import { store } from "./store/voteStore";
import Results from "./components/Results";

function render() {
  ReactDOM.render(
    <React.StrictMode>
      <App store={store} />
      <Results store={store} />
    </React.StrictMode>,
    document.getElementById("root")
  );
}

//call when the store changes
store.subscribe(render);
//Initial call
render();
