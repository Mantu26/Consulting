import React, { Fragment } from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import HomeView from "./views/HomeView";
import InfoView from "./views/InfoView";
import ErrorView from "./views/ErrorView";

function App() {
  return (
    <Fragment>
      <Router>
        <Switch>
          <Route exact path="/" component={HomeView} />
          <Route exact path="/info/:id" component={InfoView} />
          <Route exact path="/error" component={ErrorView} />
         
        </Switch>
      </Router>
    </Fragment>
  );
}
export default App;


