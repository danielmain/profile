import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import { Home } from './Home';

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/:page?" component={Home} />
      </Switch>
    </Router>
  );
};

export default App;
