import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import App from "./App";
import People from "./People";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <Router>
      <Switch>
        <Route path="/people/:id">
          <People />
        </Route>
        <Route path="/">
          <App />
        </Route>
      </Switch>
    </Router>
  </StrictMode>,
  rootElement
);
