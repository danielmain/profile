import React from 'react';
import {
  SpeakerPersonIcon,
  MenuIcon,
  Button,
  Flex,
  FlexItem,
  FilesTxtIcon,
  TenantWorkIcon,
  Segment,
  CallIcon,
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
        <Button fluid size="largest" content="about me" />
      </Segment>
      <Segment>
        <Button fluid size="largest" content="contact" />
      </Segment>
      <Segment>
        <Button fluid size="largest" content="resume" />
      </Segment>
      <Segment>
        <Button fluid size="largest" content="portfolio" />
      </Segment>
      <Segment>
        <Button fluid size="largest" content="inprint" />
      </Segment>
    </Flex>
  );
};
