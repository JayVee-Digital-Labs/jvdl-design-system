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
   * CSS class to apply on hover.
   */
  hoverClass?: string;

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
  hoverClass,
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

  // In hover mode, if hoverClass is provided, use it; otherwise, fall back to inline variable styling.
  const hoverEffectClass =
    mode === 'hover'
      ? hoverClass
        ? `hover:${hoverClass}`
        : 'hover:text-[var(--hover-color)]'
      : '';

  const baseClasses =
    'inline-block transition-colors duration-[var(--hover-speed)] ease-[var(--hover-timing)] [&>*]:text-inherit [&>*]:transition-inherit';

  /**
   * ! Important: Rollup DTS Plugin does not like `className` to be a template literal with dynamic variables.
   */
  const classes = `${baseClasses} ${hoverEffectClass}`;

  return (
    <div className={classes} style={style} data-testid={testId}>
      {children}
    </div>
  );
};

export default ColorTransition;
