import React from 'react';
import { TestId } from '@/types/test-id';
import '@/styles/animations/color-transition.scss';

export interface ColorTransitionProps extends TestId, React.PropsWithChildren {
  /**
   * CSS animation to apply to the text.
   */
  animation?: string;

  /**
   * Text color to transition to on hover.
   */
  color?: string;

  /**
   * Duration of the animation in milliseconds.
   */
  speed?: number;
}

const ColorTransition: React.FC<ColorTransitionProps> = ({
  animation = 'fade-in',
  color,
  speed = 100,
  testId,
  children
}) => {
  const style = {
    '--hover-color': color,
    '--hover-animation': animation,
    '--hover-speed': `${speed}ms`
  } as React.CSSProperties;

  if (color) {
    style.color = 'var(--hover-color)';
  }

  return (
    <div
      className={`color-transition ${!color ? 'color-primary' : ''}`}
      style={style}
      data-testid={testId}>
      {children}
    </div>
  );
};

export default ColorTransition;
