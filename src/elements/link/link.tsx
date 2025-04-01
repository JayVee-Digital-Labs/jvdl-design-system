import React from 'react';
import { AdditionalClassNames, TestId } from '@/types';

export interface LinkProps extends AdditionalClassNames, TestId {
  /**
   * Content of the link.
   */
  children: React.ReactNode;

  /**
   * The URL that the hyperlink points to.
   */
  href?: string;

  /**
   * Whether to open the link in a new tab. Defaults to true.
   */
  openInNewTab?: boolean;

  /**
   * Click Handler when link is clicked
   */
  onClick?: () => void;
}

const Link: React.FC<LinkProps> = ({
  additionalClassNames = '',
  children,
  href,
  onClick,
  openInNewTab = true,
  testId
}) => {
  const classes = `text-primary-color cursor-pointer transition-colors duration-100 ease-in hover:text-secondary-color ${additionalClassNames}`;

  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    if (onClick) {
      event.preventDefault(); // Prevent default behavior if onClick is provided
      onClick();
    }
  };

  return (
    <a
      onClick={handleClick}
      href={href}
      className={classes}
      target={openInNewTab ? '_blank' : '_self'}
      data-testid={testId}>
      {children}
    </a>
  );
};

export default Link;
