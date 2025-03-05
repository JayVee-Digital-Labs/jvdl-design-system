import React from 'react';
import '@/styles/heading/heading.scss';

interface HeadingsProps {
  /**
   * Renders h1 to h6 tags based on the level prop.
   */
  level: 1 | 2 | 3 | 4 | 5 | 6;

  /**
   * Content.
   */
  children: React.ReactNode;
}

const Headings: React.FC<HeadingsProps> = ({ level, children }) => {
  const Tag = `h${level}`;
  const className = `heading-${level}`;

  return React.createElement(Tag, { className }, children);
};

export default Headings;