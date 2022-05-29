import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./ReduxAssets/store/store";
import { FlagsProvider } from "@atlaskit/flag";

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <FlagsProvider>
        <App />
      </FlagsProvider>
    </Provider>
  </Router>,
  document.getElementById("root")
);
