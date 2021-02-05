import React from 'react';
import {
  Avatar,
  Card,
  CardHeader,
  CardBody,
  Flex,
  FlexItem,
  Image,
  List,
  Segment,
  Text,
} from '@fluentui/react-northstar';
import { mergeStyleSets } from '@uifabric/merge-styles';
import PhpLogo from './assets/phplogo.png';
import CLogo from './assets/clogo.jpg';
import JavaLogo from './assets/javalogo.png';
import ReactLogo from './assets/reactlogo.png';

interface IComponentClassNames {
  title: string;
  paragraph: string;
}

export const getClassNames = (): IComponentClassNames => {
  return mergeStyleSets({
    title: {
      paddingLeft: 10,
      fontWeight: 800,
      fontSize: 30,
    },
    paragraph: {
      paddingRight: 10,
    },
  });
};

const items = [
  {
    key: 'php',
    media: <Image src={PhpLogo} avatar />,
    header: '3 Years coding in PHP',
  },
  {
    key: 'c',
    media: <Image src={CLogo} avatar />,
    header: '2 Years writing almost bare metal c++',
  },
  {
    key: 'java',
    media: <Image src={JavaLogo} avatar />,
    header: '6 Years in the dark era of object oriented in java',
  },
  {
    key: 'react',
    media: <Image src={ReactLogo} avatar />,
    header:
      '7 Years discovering how to write simple code in React and React Native',
  },
];

export const Portfolio: React.FC = () => {
  const { title, paragraph } = getClassNames();

  return (
    <>
      <Flex gap="gap.medium" padding="padding.medium" column>
        <FlexItem push grow>
          <Text size="largest" content="Portfolio" className={title} />
        </FlexItem>
        <Segment>
          <Text
            size="medium"
            content="Having a long journey as a software developer since the year 2002, starting with:"
            className={paragraph}
          />
        </Segment>
        <Card aria-roledescription="card" size="largest" elevated fluid>
          <CardHeader>
            <Flex gap="gap.small">
              <Avatar image={ReactLogo} />
              <Flex column>
                <Text
                  size="largest"
                  content="ReactJs and React-Native"
                  weight="bold"
                  color="brand"
                />
                <Text
                  content="Mobile and Web development in Javascript"
                  size="small"
                />
              </Flex>
            </Flex>
          </CardHeader>
          <CardBody>
            Seven years writing code in Javascript and the last four years
            writing ReactJS and React Native components
          </CardBody>
        </Card>
        <Card aria-roledescription="card" size="largest" elevated fluid>
          <CardHeader>
            <Flex gap="gap.small">
              <Flex column>
                <Text content="Old technologies" weight="bold" />
                <Text
                  content="Worked many years but not interested to touch again"
                  size="small"
                />
              </Flex>
            </Flex>
          </CardHeader>
          <CardBody>
            <List items={items} />
          </CardBody>
        </Card>
        <Segment>
          <Text
            size="medium"
            content="That is why I feel confident to help and assist you with any Web or Mobile Development related project"
            className={paragraph}
          />
        </Segment>
      </Flex>
    </>
  );
};
