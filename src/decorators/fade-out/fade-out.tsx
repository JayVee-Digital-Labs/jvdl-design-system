import React from 'react';
import { TestId } from '@/types/test-id';
// import '@/styles/animations/fade-out.scss';

export interface FadeOutProps extends TestId, React.PropsWithChildren {
  /**
   * Duration of the fade-out animation in milliseconds.
   */
  duration?: number;

  /**
   * Opacity value between 0 and 1.
   * 0 is completely transparent, 1 is fully visible.
   * Only used when mode is set to "controlled".
   * Default: 1
   */
  opacity?: number;

  /**
   * Determines whether the fade effect is triggered by hover or controlled externally.
   * - "hover": Fade effect triggered on hover (default behavior)
   * - "controlled": Opacity controlled by the opacity prop
   */
  mode?: 'hover' | 'controlled';
}

const FadeOut: React.FC<FadeOutProps> = ({
  duration = 300,
  opacity = 1,
  mode = 'hover',
  testId,
  children
}) => {
  const style = {
    '--fade-out-duration': `${duration}ms`,
    ...(mode === 'controlled' ? { opacity } : {})
  } as React.CSSProperties;

  return (
    <div
      className={`fade-out ${mode === 'controlled' ? 'fade-out--controlled' : ''}`}
      style={style}
      data-testid={testId}>
      {children}
    </div>
  );
};

export default FadeOut;
