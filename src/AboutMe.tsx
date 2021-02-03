import React from 'react';
import {
  Card,
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
import ProfilePicture from './assets/profile.jpg';

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
      fontWeight: 600,
      fontSize: 60,
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
        <Flex column={false}>
          <FlexItem push grow>
            <Text size="largest" content="about me" className={title} />
          </FlexItem>
          <FlexItem>
            <Image className={image} src={ReactLogo} />
          </FlexItem>
        </Flex>

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
              content="I have been working in the last 10 years in both small and big scrum teams assuming the role as lead developer, scrum master and consultant."
              className={paragraph}
            />
          </Segment>
        </FlexItem>
        <FlexItem>
          <Segment>
            <Text
              size="medium"
              content="Having a long journey as a software developer since the year 2002, starting with PHP => C++ => Java => Javascript and ending up with ReactJs and React Native I feel confident to help and assist you with any Mobile Development related project"
              className={paragraph}
            />
            <Text
              size="medium"
              content="In my free time besides of learning new technologies I love to play with my little son and spend time with my family"
              className={paragraph}
            />
          </Segment>
        </FlexItem>
        <FlexItem>
          <Text size="largest" content="my services" className={serviceTitle} />
        </FlexItem>
      </Flex>
      <Flex padding="padding.medium" gap="gap.small">
        <FlexItem size="size.half">
          <Card aria-roledescription="card">
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
        </FlexItem>
        <FlexItem size="size.half">
          <Card aria-roledescription="card">
            <Card.Header fitted>
              <Flex gap="gap.medium">
                <RobotIcon size="large" className={autoIcon} />
                <Flex column>
                  <Text
                    content="Automated testing"
                    weight="bold"
                    size="large"
                  />
                  <Text
                    className={secondaryBoxText}
                    color="brand"
                    content="Helping you to reach a higher test-coverage using unit-test and end-to-end tests based on Appium UI."
                  />
                </Flex>
              </Flex>
            </Card.Header>
          </Card>
        </FlexItem>
      </Flex>
      <Flex padding="padding.medium" gap="gap.small">
        <FlexItem size="size.half">
          <Card aria-roledescription="card">
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
        </FlexItem>
        <FlexItem size="size.half">
          <Card aria-roledescription="card">
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
        </FlexItem>
      </Flex>
    </>
  );
};
