import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { Grid, Segment } from "@fluentui/react-northstar";

const App: React.FC = () => (
  <Router>
    <Switch>
      <Route path="/">
        <Grid columns="2">
          <Segment color="brand" content="Home" inverted styles={{
            gridColumn: '1',
            gridRow: '2',
          }}/>
          <Segment color="green" content="Search" inverted styles={{
            gridColumn: '2',
            gridRow: '2',
          }}/>
        </Grid>
      </Route>
    </Switch>
  </Router>
);

export default App;
