// @flow

import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

const FourOhFour = () => <h1>404402</h1>;

const App = () => (
  <BrowserRouter>
    <div className="app">
      <Switch>
        <Route component={FourOhFour} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default App;
