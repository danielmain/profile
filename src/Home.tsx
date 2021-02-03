import React from 'react';
import { Image, Flex, FlexItem, Segment } from '@fluentui/react-northstar';
import { RouteComponentProps } from 'react-router';
import { mergeStyleSets } from '@uifabric/merge-styles';
import ProfilePicture from './assets/profile.jpg';
import { Navigation } from './Navigation';
import { AbountMe } from './AboutMe';
import { Imprint } from './Imprint';
import { Contact } from './Contact';
import { Portfolio } from './Portfolio';
import { Resume } from './Resume';

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
      overflowY: 'auto',
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

interface MatchParams {
  page: string;
}

type HomeProps = RouteComponentProps<MatchParams>;

export const Home: React.FC<HomeProps> = ({ match }) => {
  const {
    rootContainer,
    menuContainer,
    image,
    contentContainer,
  } = getClassNames();
  const [content, setContent] = React.useState<JSX.Element>();

  React.useEffect(() => {
    console.log('match.params ==>', match.params);
    switch (match.params?.page) {
      case 'about':
        setContent(<AbountMe />);
        break;
      case 'contact':
        setContent(<Contact />);
        break;
      case 'resume':
        setContent(<Resume />);
        break;
      case 'portfolio':
        setContent(<Portfolio />);
        break;
      case 'imprint':
        setContent(<Imprint />);
        break;
      default:
        setContent(<AbountMe />);
        break;
    }
  }, [match.params]);

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
