import React from 'react';
import {
  Card,
  Grid,
  Flex,
  FlexItem,
  Segment,
  CompanionIcon,
  RobotIcon,
  Text,
  PresenterIcon,
  TableIcon,
  Image,
} from '@fluentui/react-northstar';
import { mergeStyleSets } from '@uifabric/merge-styles';

import ReactLogo from './assets/reactlogo.png';

export interface IComponentClassNames {
  title: string;
  subtitle: string;
  paragraph: string;
  serviceTitle: string;
  secondaryBoxText: string;
  devIcon: string;
  autoIcon: string;
  meetIcon: string;
  dbIcon: string;
  image: string;
}

export const getClassNames = (): IComponentClassNames => {
  return mergeStyleSets({
    rootContainer: {},
    title: {
      paddingLeft: 10,
      fontWeight: 800,
      fontSize: 30,
    },
    subtitle: {
      paddingRight: 10,
      fontStyle: 'italic',
    },
    serviceTitle: {
      paddingLeft: 10,
      fontWeight: 600,
      fontSize: 40,
    },
    paragraph: {
      paddingRight: 10,
    },
    secondaryBoxText: {
      paddingTop: 10,
    },
    devIcon: {
      color: '#887cbe',
    },
    autoIcon: {
      color: '#887cbe',
    },
    meetIcon: {
      color: '#887cbe',
    },
    dbIcon: {
      color: '#887cbe',
    },
    image: {
      maxWidth: 90,
      maxHeight: 60,
    },
  });
};

export const AbountMe: React.FC = () => {
  const {
    title,
    subtitle,
    serviceTitle,
    paragraph,
    secondaryBoxText,
    devIcon,
    autoIcon,
    meetIcon,
    dbIcon,
    image,
  } = getClassNames();

  return (
    <>
      <Flex gap="gap.small" padding="padding.medium" column>
        <FlexItem push grow>
          <Text size="largest" content="about me" className={title} />
        </FlexItem>
        <FlexItem>
          <Segment>
            <Text
              size="medium"
              content="React Maximalist"
              className={subtitle}
              color="brand"
            />
            <Text size="medium" content="/" className={subtitle} />
            <Text
              size="medium"
              content="18 years as a developer"
              className={subtitle}
              color="brand"
            />
            <Text size="medium" content="/" className={subtitle} />
            <Text
              size="medium"
              content="Crypto Enthusiast"
              className={subtitle}
              color="brand"
            />
          </Segment>
        </FlexItem>
        <FlexItem>
          <Segment>
            <Text
              size="medium"
              content="I have worked for the last 10 years in small and big scrum teams assuming the different roles like lead developer, scrum master and consultant."
              className={paragraph}
            />
          </Segment>
        </FlexItem>
        <FlexItem>
          <Text size="largest" content="my services" className={serviceTitle} />
        </FlexItem>
      </Flex>
      <Flex gap="gap.medium" padding="padding.medium" column>
        <Card aria-roledescription="card" elevated fluid>
          <Card.Header fitted>
            <Flex gap="gap.medium">
              <CompanionIcon size="large" className={devIcon} />
              <Flex column>
                <Text
                  content="Web and Mobile in React"
                  weight="bold"
                  size="large"
                />
                <Text
                  className={secondaryBoxText}
                  color="brand"
                  content="Building a custom tailored solution based on your technical specification. Pure Typescript without 'any'."
                />
              </Flex>
            </Flex>
          </Card.Header>
        </Card>
        <Card aria-roledescription="card" elevated fluid>
          <Card.Header fitted>
            <Flex gap="gap.medium">
              <RobotIcon size="large" className={autoIcon} />
              <Flex column>
                <Text content="Automated testing" weight="bold" size="large" />
                <Text
                  className={secondaryBoxText}
                  color="brand"
                  content="Helping you to reach a higher test-coverage using unit-test and end-to-end tests based on Jest and Appium."
                />
              </Flex>
            </Flex>
          </Card.Header>
        </Card>
        <Card aria-roledescription="card" elevated fluid>
          <Card.Header fitted>
            <Flex gap="gap.medium">
              <PresenterIcon size="large" className={meetIcon} />
              <Flex column>
                <Text content="Remote workshops" weight="bold" size="large" />
                <Text
                  className={secondaryBoxText}
                  color="brand"
                  content="I can prepare your team to be ready to start coding with react. The workshop can be done in three different languages: English/German/Spanish"
                />
              </Flex>
            </Flex>
          </Card.Header>
        </Card>
        <Card aria-roledescription="card" elevated fluid>
          <Card.Header fitted>
            <Flex gap="gap.medium">
              <TableIcon size="large" className={dbIcon} />
              <Flex column>
                <Text content="Databases" weight="bold" size="large" />
                <Text
                  className={secondaryBoxText}
                  color="brand"
                  content="Vast experience with SQL databases like Oracle and MySQL. But if relations and consistency is not the key a document based db ist for you."
                />
              </Flex>
            </Flex>
          </Card.Header>
        </Card>
      </Flex>
    </>
  );
};
