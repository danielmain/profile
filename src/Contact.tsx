import React from 'react';
import {
  Card,
  Flex,
  FlexItem,
  Text,
  Image,
  Layout,
} from '@fluentui/react-northstar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faKeybase,
  faXing,
  faGithub,
} from '@fortawesome/free-brands-svg-icons';
import { faAt } from '@fortawesome/free-solid-svg-icons';
import { mergeStyleSets } from '@uifabric/merge-styles';
import { Link } from 'react-router-dom';
import Email from './assets/email.png';

interface IComponentClassNames {
  title: string;
  secondaryBoxText: string;
  email: string;
}

export const getClassNames = (): IComponentClassNames => {
  return mergeStyleSets({
    title: {
      paddingLeft: 10,
      fontWeight: 800,
      fontSize: 30,
    },
    secondaryBoxText: {
      paddingTop: 10,
    },
    email: {
      maxWidth: '230px',
      marginTop: '10px',
    },
  });
};
export const Contact: React.FC = () => {
  const { title, secondaryBoxText, email } = getClassNames();

  return (
    <>
      <Flex gap="gap.small" padding="padding.medium" column>
        <FlexItem push grow>
          <Text size="largest" content="Contact" className={title} />
        </FlexItem>
        <Flex gap="gap.medium" padding="padding.medium" column>
          <Card aria-roledescription="card" elevated fluid>
            <Card.Header fitted>
              <Flex gap="gap.medium">
                <FontAwesomeIcon icon={faXing} size="4x" />
                <Flex column>
                  <Text content="My Xing Profile" weight="bold" size="large" />
                  <Link
                    to={{
                      pathname: 'https://www.xing.com/profile/Daniel_Main/cv',
                    }}
                    target="_blank"
                  >
                    <Text
                      className={secondaryBoxText}
                      color="brand"
                      content="www.xing.com"
                    />
                  </Link>
                </Flex>
              </Flex>
            </Card.Header>
          </Card>
          <Card aria-roledescription="card" elevated fluid>
            <Card.Header fitted>
              <Flex gap="gap.medium">
                <FontAwesomeIcon icon={faGithub} size="4x" />
                <Flex column>
                  <Text
                    content="My Github repositories"
                    weight="bold"
                    size="large"
                  />
                  <Link
                    to={{
                      pathname: 'https://github.com/danielmain',
                    }}
                    target="_blank"
                  >
                    <Text
                      className={secondaryBoxText}
                      color="brand"
                      content="www.github.com"
                    />
                  </Link>
                </Flex>
              </Flex>
            </Card.Header>
          </Card>
          <Card aria-roledescription="card" elevated fluid>
            <Card.Header fitted>
              <Flex gap="gap.medium">
                <FontAwesomeIcon icon={faAt} size="4x" />
                <Flex column>
                  <Text
                    content="Write me an E-Mail"
                    weight="bold"
                    size="large"
                  />
                  <Flex className={email} hAlign="start">
                    <Image src={Email} fluid />
                  </Flex>
                </Flex>
              </Flex>
            </Card.Header>
          </Card>
          <Card aria-roledescription="card" elevated fluid>
            <Card.Header fitted>
              <Flex gap="gap.medium">
                <FontAwesomeIcon icon={faKeybase} size="4x" />
                <Flex column>
                  <Text
                    content="Find me in the secure chat Keybase"
                    weight="bold"
                    size="large"
                  />
                  <Link
                    to={{
                      pathname: 'https://keybase.io/danielmain',
                    }}
                    target="_blank"
                  >
                    <Text
                      className={secondaryBoxText}
                      color="brand"
                      content="www.keybase.io"
                    />
                  </Link>
                </Flex>
              </Flex>
            </Card.Header>
          </Card>
        </Flex>
      </Flex>
    </>
  );
};
