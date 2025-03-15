import React from 'react';
import { TestId } from '@/types/test-id';
import '@/styles/heading/heading.scss';

export type HeaderLevels = 1 | 2 | 3 | 4 | 5 | 6;

export interface HeadingProps extends TestId {
  /**
   * Renders h1 to h6 tags based on the level prop.
   */
  level: HeaderLevels;

  /**
   * Content.
   */
  children: React.ReactNode;

  /**
   * Override text color to white.
   */
  isWhite?: boolean;
}

const Heading: React.FC<HeadingProps> = ({
  level,
  children,
  testId,
  isWhite = false
}) => {
  const Tag = `h${level}`;
  const className = `heading-${level} ${isWhite ? 'color-font-primary-white' : ''}`;

  return React.createElement(
    Tag,
    { className, 'data-testid': testId },
    children
  );
};

export default Heading;
