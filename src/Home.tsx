import React from 'react';
import {
  MenuButton,
  MenuIcon,
  Image,
  Flex,
  FlexItem,
  Segment,
} from '@fluentui/react-northstar';
import { mergeStyleSets } from '@uifabric/merge-styles';
import ProfilePicture from './assets/profile.jpg';
import { Navigation } from './Navigation';
import { AbountMe } from './AboutMe';

export interface IComponentClassNames {
  rootContainer: string;
  menuContainer: string;
  contentContainer: string;
  image: string;
}

export const getClassNames = (): IComponentClassNames => {
  return mergeStyleSets({
    rootContainer: {
      height: '100vh !important',
      backgroundColor: 'black',
      paddingLeft: 100,
      paddingRight: 100,
    },
    menuContainer: {
      marginTop: 30,
      marginBottom: 30,
    },
    contentContainer: {
      marginTop: 30,
      marginBottom: 30,
    },
    image: {
      // margin: 0,
      // padding: 0,
      maxWidth: '30%',
      minWidth: '29vh',
      height: '100vh',
      objectFit: 'cover',
    },
  });
};
export const Home: React.FC = () => {
  const {
    rootContainer,
    menuContainer,
    image,
    contentContainer,
  } = getClassNames();
  const [content, setContent] = React.useState<JSX.Element>(<AbountMe />);
  return (
    <Flex fill className={rootContainer}>
      <FlexItem>
        <Segment className={menuContainer}>
          <Navigation />
        </Segment>
      </FlexItem>
      <FlexItem grow>
        <Image className={image} src={ProfilePicture} />
      </FlexItem>
      <FlexItem push grow>
        <Segment className={contentContainer}>{content}</Segment>
      </FlexItem>
    </Flex>
  );
};
