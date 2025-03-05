import React from 'react';
import { TestId } from '@/types/test-id'
import '@/styles/heading/heading.scss';

interface HeadingsProps extends TestId{
  /**
   * Renders h1 to h6 tags based on the level prop.
   */
  level: 1 | 2 | 3 | 4 | 5 | 6;

  /**
   * Content.
   */
  children: React.ReactNode;
}

const Headings: React.FC<HeadingsProps> = ({ level, children, testId }) => {
  const Tag = `h${level}`;
  const className = `heading-${level}`;

  return React.createElement(Tag, { className, 'data-testid': testId }, children);
};

export default Headings;