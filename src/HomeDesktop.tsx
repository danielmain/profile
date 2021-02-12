import React from 'react';
import { Flex, FlexItem, Image, Segment } from '@fluentui/react-northstar';
import { RouteComponentProps } from 'react-router';
import { mergeStyleSets } from '@uifabric/merge-styles';
import 'office-ui-fabric-react/dist/css/fabric.css';
import ProfilePicture from './assets/profile.jpg';
import { Navigation } from './Navigation';
import { AboutMe } from './AboutMe';
import { Imprint } from './Imprint';
import { Contact } from './Contact';
import { Portfolio } from './Portfolio';

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
      paddingLeft: '2vh',
      paddingRight: '2vh',
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
      maxWidth: '30%',
      minWidth: '22vh',
      height: '100vh',
      objectFit: 'cover',
    },
  });
};

interface MatchParams {
  page: string;
}

type HomeProps = RouteComponentProps<MatchParams>;

export const HomeDesktop: React.FC<HomeProps> = ({ match }) => {
  if (!match) {
    // TODO: Add error page
    return <div>empty</div>;
  }

  const {
    rootContainer,
    menuContainer,
    image,
    contentContainer,
  } = getClassNames();
  const [content, setContent] = React.useState<JSX.Element>();

  React.useEffect(() => {
    switch (match?.params?.page) {
      case 'about':
        setContent(<AboutMe />);
        break;
      case 'contact':
        setContent(<Contact />);
        break;
      case 'portfolio':
        setContent(<Portfolio />);
        break;
      case 'imprint':
        setContent(<Imprint />);
        break;
      default:
        setContent(<AboutMe />);
        break;
    }
  }, [match?.params]);

  return (
    <Flex fill className={rootContainer}>
      <FlexItem>
        <Segment className={menuContainer}>
          <Navigation selected={match.params?.page} />
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
