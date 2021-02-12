import React from 'react';
import { Link } from 'react-router-dom';
import {
  Button,
  Flex,
  Segment,
  TeamCreateIcon,
  SpeakerPersonIcon,
  EmailIcon,
  WordColorIcon,
  MentionIcon,
} from '@fluentui/react-northstar';
import { mergeStyleSets } from '@uifabric/merge-styles';

export interface IComponentClassNames {
  smallContainer: string;
  smallSegment: string;
}

interface NavigationProps {
  isMobile?: boolean;
  selected?: string;
}

export const getClassNames = (): IComponentClassNames => {
  return mergeStyleSets({
    smallContainer: {
      maxWidth: '55px',
    },
    smallSegment: {
      backgroundColor: 'black !important',
    },
  });
};

export const Navigation: React.FC<NavigationProps> = ({
  isMobile = false,
  selected,
}) => {
  const { smallContainer, smallSegment } = getClassNames();
  const containerClass = isMobile ? smallContainer : '';
  const segmentClass = isMobile ? smallSegment : '';

  return (
    <Flex fill column className={containerClass}>
      <Segment className={segmentClass}>
        <Link to="/about">
          <Button
            fluid={!isMobile}
            size={isMobile ? 'small' : 'large'}
            icon={<SpeakerPersonIcon />}
            iconOnly={isMobile}
            content={!isMobile && 'about me'}
            primary={selected === 'about'}
          />
        </Link>
      </Segment>
      <Segment className={segmentClass}>
        <Link to="/contact">
          <Button
            fluid={!isMobile}
            size={isMobile ? 'small' : 'large'}
            icon={<EmailIcon />}
            iconOnly={isMobile}
            content={!isMobile && 'contact'}
            primary={selected === 'contact'}
          />
        </Link>
      </Segment>
      <Segment className={segmentClass}>
        <Link to="/public/cv.pdf" target="_blank" download>
          <Button
            fluid={!isMobile}
            size={isMobile ? 'small' : 'large'}
            icon={<WordColorIcon />}
            iconOnly={isMobile}
            content={!isMobile && 'resume'}
            primary={selected === 'resume'}
          />
        </Link>
      </Segment>
      <Segment className={segmentClass}>
        <Link to="/portfolio">
          <Button
            fluid={!isMobile}
            size={isMobile ? 'small' : 'large'}
            icon={<TeamCreateIcon />}
            iconOnly={isMobile}
            content={!isMobile && 'portfolio'}
            primary={selected === 'portfolio'}
          />
        </Link>
      </Segment>
      <Segment className={segmentClass}>
        <Link to="/imprint">
          <Button
            fluid={!isMobile}
            size={isMobile ? 'small' : 'large'}
            icon={<MentionIcon />}
            iconOnly={isMobile}
            content={!isMobile && 'imprint'}
            primary={selected === 'imprint'}
          />
        </Link>
      </Segment>
    </Flex>
  );
};
