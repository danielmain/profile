import React from 'react';
import {
  Card,
  CardBody,
  CardHeader,
  Flex,
  FlexItem,
  Image,
  Segment,
  Text,
} from '@fluentui/react-northstar';
import { mergeStyleSets } from '@uifabric/merge-styles';
import Tel from './assets/tel.png';

interface IComponentClassNames {
  title: string;
  tel: string;
}

export const getClassNames = (): IComponentClassNames => {
  return mergeStyleSets({
    title: {
      paddingLeft: 10,
      fontWeight: 800,
      fontSize: 30,
    },
    tel: {
      maxWidth: '230px',
      marginTop: '10px',
    },
  });
};
export const Imprint: React.FC = () => {
  const { title, tel } = getClassNames();

  return (
    <>
      <Flex gap="gap.small" padding="padding.medium" column>
        <FlexItem push grow>
          <Text size="largest" content="Imprint" className={title} />
        </FlexItem>
        <Segment>
          <Card elevated fluid>
            <CardHeader>
              <Flex gap="gap.small">
                <Flex column>
                  <Text
                    content="Die Vorgaben von § 5 TMG sind durch die folgenden Angaben erfüllt:"
                    weight="bold"
                  />
                </Flex>
              </Flex>
            </CardHeader>
            <CardBody>
              <Flex gap="gap.small">
                <Flex column>
                  <Text content="Daniel Main" />
                  <Text content="Zuckerleweg 46 70374 Stuttgart" />
                </Flex>
              </Flex>
            </CardBody>
          </Card>
        </Segment>
        <Segment>
          <Card elevated fluid>
            <CardHeader>
              <Flex gap="gap.small">
                <Flex column>
                  <Text
                    content="Die Umsatzsteuer-Identifikation lautet:"
                    weight="bold"
                  />
                </Flex>
              </Flex>
            </CardHeader>
            <CardBody>DE278408110</CardBody>
          </Card>
        </Segment>
        <Segment>
          <Card elevated fluid>
            <CardHeader>
              <Flex gap="gap.small">
                <Flex column>
                  <Text content="Kontakt:" weight="bold" />
                </Flex>
              </Flex>
            </CardHeader>
            <CardBody>
              <Flex className={tel} hAlign="start">
                <Image src={Tel} fluid />
              </Flex>
            </CardBody>
          </Card>
        </Segment>
      </Flex>
    </>
  );
};
