import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { Customizer } from 'office-ui-fabric-react';
import { Grid, Segment, Provider } from "@fluentui/react-northstar";
import { IComponent, IComponentStyles, IStyleableComponentProps } from '@fluentui/foundation-legacy';
import { FluentCustomizations } from '@uifabric/fluent-theme';
import { IStyle, mergeStyleSets } from '@uifabric/merge-styles';

export interface IComponentClassNames {
  rootContainer: string;
  leftContainer: string;
  rightContainer: string;
}

export const getClassNames = (): IComponentClassNames => {
  return mergeStyleSets({
    rootContainer: {
      background: 'white',
    },
    leftContainer: {
      backgroundColor: 'green',
      margin: 10,
      gridColumn: 2,
      girdRow: 2,
    },
    rightContainer: {
      margin: 10,
      backgroundColor: 'red',
      gridColumn: 2,
      girdRow: 2,
    },
  });
};

const App: React.FC = () => {
  let { rootContainer, leftContainer, rightContainer } = getClassNames();

  return (<Router>
    <Switch>
      <Route path="/">
        <Customizer {...FluentCustomizations}>
          <Grid columns="2" className={rootContainer}>
            <Segment content="Home" className={leftContainer} inverted />
            <Segment content="Search" className={rightContainer} inverted />
          </Grid>
        </Customizer>
      </Route>
    </Switch>
  </Router>
);
          }

export default App;
