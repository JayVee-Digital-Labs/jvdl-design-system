import React from 'react';
import { TestId } from '@/types/test-id';

export interface ColorTransitionProps extends TestId, React.PropsWithChildren {
  /**
   * Easing function to apply to the transition (e.g., 'ease', 'ease-in', 'ease-out', 'linear').
   */
  animation?: string;

  /**
   * Text color to apply.
   */
  color?: string;

  /**
   * Duration of the transition in milliseconds.
   */
  speed?: number;

  /**
   * Whether to use hover mode (default) or controlled mode.
   */
  mode?: 'hover' | 'controlled';
}

const ColorTransition: React.FC<ColorTransitionProps> = ({
  animation = 'ease-in',
  color,
  speed = 100,
  mode = 'hover',
  testId,
  children
}) => {
  const transitionDuration = `${speed}ms`;

  const style = {
    '--hover-color': color,
    '--hover-speed': transitionDuration,
    '--hover-timing': animation,
    ...(mode === 'controlled' && color ? { color: color } : {})
  } as React.CSSProperties;

  return (
    <div
      className={`inline-block ${
        mode === 'controlled'
          ? 'transition-colors duration-[var(--hover-speed)] ease-[var(--hover-timing)]'
          : 'hover:text-[var(--hover-color)] transition-colors duration-[var(--hover-speed)] ease-[var(--hover-timing)]'
      } [&>*]:text-inherit [&>*]:transition-inherit`}
      style={style}
      data-testid={testId}>
      {children}
    </div>
  );
};

export default ColorTransition;
