import React from 'react';
import { TestId } from '@/types/test-id';
// import '@/styles/animations/color-transition.scss';

export interface ColorTransitionProps extends TestId, React.PropsWithChildren {
  /**
   * CSS animation to apply to the text.
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
  animation = 'fade-in',
  color,
  speed = 100,
  mode = 'hover',
  testId,
  children
}) => {
  const style = {
    '--hover-color': color,
    '--hover-animation': animation,
    '--hover-speed': `${speed}ms`,
    ...(mode === 'controlled' && color ? { color: color } : {})
  } as React.CSSProperties;

  return (
    <div
      className={`color-transition ${mode === 'controlled' ? 'color-transition--controlled' : ''}`}
      style={style}
      data-testid={testId}>
      {children}
    </div>
  );
};

export default ColorTransition;
