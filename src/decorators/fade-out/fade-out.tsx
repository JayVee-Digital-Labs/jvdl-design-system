import React from 'react';
import { TestId } from '@/types/test-id';
import '@/styles/animations/fade-out.scss';

export interface FadeOutProps extends TestId, React.PropsWithChildren {
  /**
   * Duration of the fade-out animation in milliseconds.
   */
  duration?: number;
}

const FadeOut: React.FC<FadeOutProps> = ({
  duration = 300,
  testId,
  children
}) => {
  const style = {
    '--fade-out-duration': `${duration}ms`
  } as React.CSSProperties;

  return (
    <div className='fade-out' style={style} data-testid={testId}>
      {children}
    </div>
  );
};

export default FadeOut;
