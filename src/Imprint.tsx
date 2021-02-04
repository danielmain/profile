import React from 'react';
import {
  Flex,
  FlexItem,
  Segment,
  Text,
  Card,
  CardHeader,
  CardBody,
} from '@fluentui/react-northstar';
import { mergeStyleSets } from '@uifabric/merge-styles';

interface IComponentClassNames {
  title: string;
  paragraph: string;
}

export const getClassNames = (): IComponentClassNames => {
  return mergeStyleSets({
    title: {
      paddingLeft: 10,
      fontWeight: 600,
      fontSize: 60,
    },
    paragraph: {
      paddingRight: 10,
    },
  });
};
export const Imprint: React.FC = () => {
  const { title, paragraph } = getClassNames();

  return (
    <>
      <Flex gap="gap.small" padding="padding.medium" column>
        <FlexItem push grow>
          <Text size="largest" content="Imprint" className={title} />
        </FlexItem>
        <Segment>
          <Card>
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
          <Card>
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
          <Card>
            <CardHeader>
              <Flex gap="gap.small">
                <Flex column>
                  <Text content="Kontakt:" weight="bold" />
                </Flex>
              </Flex>
            </CardHeader>
            <CardBody>Telefon: + 49 (0) 151 201 83 0 83</CardBody>
          </Card>
        </Segment>
      </Flex>
    </>
  );
};
