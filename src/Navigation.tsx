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
import { mergeStyleSets } from '@uifabric/merge-styles';

export interface IComponentClassNames {
  rootContainer: string;
  icon: string;
}

export const getClassNames = (): IComponentClassNames => {
  return mergeStyleSets({
    rootContainer: {},
    icon: {
      width: 20,
      paddingRight: 0,
      marginRight: 0,
    },
  });
};
export const Navigation: React.FC = () => {
  const { rootContainer, icon } = getClassNames();

  return (
    <Flex fill className={rootContainer} column>
      <FlexItem push grow>
        <Segment>
          <Button className={icon} icon={<MenuIcon />} primary />
        </Segment>
      </FlexItem>
      <Segment>
        <Button className={icon} icon={<SpeakerPersonIcon />} />
      </Segment>
      <Segment>
        <Button className={icon} icon={<CallIcon />} />
      </Segment>
      <Segment>
        <Button className={icon} icon={<FilesTxtIcon />} />
      </Segment>
      <Segment>
        <Button className={icon} icon={<TenantWorkIcon />} />
      </Segment>
    </Flex>
  );
};
