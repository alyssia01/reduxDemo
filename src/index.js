import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import { createStore } from "redux";
import counter from "./reducers/counter";
import { Provider } from "react-redux";

const store = createStore(counter);

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
