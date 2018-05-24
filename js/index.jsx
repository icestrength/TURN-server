// @flow

import React from "react";
import { render } from "react-dom";
import App from "./App";


const renderApp = () => {
  const app = document.getElementById("app");
  if (app == null) {
    throw new Error("no app element");
  } else {
    render(<App />, app);
  }
};
renderApp();

if (module.hot) {
  module.hot.accept("./App", () => {
    renderApp();
  });
}
