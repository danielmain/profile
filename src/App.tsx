import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { HomeDesktop } from './HomeDesktop';
import { HomeMobile } from './HomeMobile';

const BREAKPOINT = 620;

const getComponent = (width: number) => {
  return width < BREAKPOINT ? (
    <Route path="/:page?" component={HomeMobile} />
  ) : (
    <Route path="/:page?" component={HomeDesktop} />
  );
};

const App: React.FC = () => {
  const [Layout, setLayout] = React.useState<any>();

  React.useEffect(() => {
    setLayout(getComponent(window.innerWidth));
    window.addEventListener('resize', () =>
      setLayout(getComponent(window.innerWidth)),
    );
  }, [window.innerWidth]);
  return (
    <Router>
      <Switch>{Layout}</Switch>
    </Router>
  );
};

export default App;
