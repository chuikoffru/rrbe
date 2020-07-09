import React from "react";
import { createStore, applyMiddleware } from "./store";
import { composeWithDevTools } from "redux-devtools-extension";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { rootReducer } from "./store/rootReducer";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

function RRBE() {
  return /*#__PURE__*/ React.createElement(
    Provider,
    {
      store: store,
    },
    /*#__PURE__*/ React.createElement(App, null)
  );
}

export default RRBE;
