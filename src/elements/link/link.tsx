import React from 'react';
import { TestId } from '@/types/test-id';
import ColorTransition, {
  type ColorTransitionProps
} from '@/decorators/color-transitions/color-transition';

export interface LinkProps extends TestId, ColorTransitionProps {
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

const Link: React.FC<LinkProps> = ({
  href,
  children,
  testId,
  openInNewTab = true,
  animation = 'ease-in',
  hoverClass = 'text-secondary-color', // Assuming you have a CSS class for secondary color
  speed = 100,
  mode = 'hover'
}) => {
  return (
    <a
      href={href}
      className='text-primary-color'
      target={openInNewTab ? '_blank' : '_self'}
      rel='noopener noreferrer'
      data-testid={testId}>
      <ColorTransition
        animation={animation}
        hoverClass={hoverClass}
        speed={speed}
        mode={mode}>
        {children}
      </ColorTransition>
    </a>
  );
};

export default Link;
