import React from 'react';
import { TestId } from '@/types/test-id';

export interface LinkProps extends TestId {
  /**
   * The URL that the hyperlink points to.
   */
  href: string;

  /**
   * Content of the link.
   */
  children: React.ReactNode;

  /**
   * Whether to open the link in a new tab. Defaults to true.
   */
  openInNewTab?: boolean;
}

const Link: React.FC<LinkProps> = ({ href, children, testId, openInNewTab = true }) => {
  return (
    <a href={href} target={openInNewTab ? '_blank' : '_self'} rel="noopener noreferrer" data-testid={testId}>
      {children}
    </a>
  );
};

export default Link;