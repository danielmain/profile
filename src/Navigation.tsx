import React from 'react';
import { Link } from 'react-router-dom';
import {
  MenuIcon,
  Button,
  Flex,
  FlexItem,
  Segment,
} from '@fluentui/react-northstar';

export interface IComponentClassNames {
  rootContainer: string;
  icon: string;
}
export const Navigation: React.FC = () => {
  return (
    <Flex fill column>
      <FlexItem grow>
        <Segment>
          <Button icon={<MenuIcon size="large" />} primary />
        </Segment>
      </FlexItem>
      <Segment>
        <Link to="/about">
          <Button fluid size="largest" content="about me" />
        </Link>
      </Segment>
      <Segment>
        <Link to="/contact">
          <Button fluid size="largest" content="contact" />
        </Link>
      </Segment>
      <Segment>
        <Link to="/resume">
          <Button fluid size="largest" content="resume" />
        </Link>
      </Segment>
      <Segment>
        <Link to="/portfolio">
          <Button fluid size="largest" content="portfolio" />
        </Link>
      </Segment>
      <Segment>
        <Link to="/imprint">
          <Button fluid size="largest" content="imprint" />
        </Link>
      </Segment>
    </Flex>
  );
};
