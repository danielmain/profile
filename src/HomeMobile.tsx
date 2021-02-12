import React from 'react';
import { Flex, FlexItem, Segment } from '@fluentui/react-northstar';
import { RouteComponentProps } from 'react-router';
import { mergeStyleSets } from '@uifabric/merge-styles';
import 'office-ui-fabric-react/dist/css/fabric.css';
import { Navigation } from './Navigation';
import { AboutMe } from './AboutMe';
import { Imprint } from './Imprint';
import { Contact } from './Contact';
import { Portfolio } from './Portfolio';

export interface IComponentClassNames {
  rootContainer: string;
  contentContainer: string;
}

export const getClassNames = (): IComponentClassNames => {
  return mergeStyleSets({
    rootContainer: {
      height: '100vh !important',
      backgroundColor: 'black',
    },
    contentContainer: {
      overflowY: 'auto',
    },
  });
};

interface MatchParams {
  page: string;
}

type HomeProps = RouteComponentProps<MatchParams>;

export const HomeMobile: React.FC<HomeProps> = ({ match }) => {
  const { rootContainer, contentContainer } = getClassNames();
  const [content, setContent] = React.useState<JSX.Element>();

  React.useEffect(() => {
    switch (match.params?.page) {
      case 'about':
        setContent(<AboutMe isMobile={true} />);
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
  }, [match.params]);

  return (
    <Flex fill className={rootContainer} hAlign="start">
      <FlexItem size="size.small">
        <Navigation isMobile={true} selected={match.params?.page} />
      </FlexItem>
      <FlexItem>
        <Segment className={contentContainer}>{content}</Segment>
      </FlexItem>
    </Flex>
  );
};
