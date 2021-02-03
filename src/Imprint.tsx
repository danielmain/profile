import React from 'react';
import { Flex, FlexItem, Segment, Text } from '@fluentui/react-northstar';
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
        <FlexItem>
          <Segment>
            <Text
              size="medium"
              content="I have been working in the last 10 years in both small and big scrum teams assuming the role as lead developer, scrum master and consultant."
              className={paragraph}
            />
          </Segment>
        </FlexItem>
      </Flex>
    </>
  );
};
