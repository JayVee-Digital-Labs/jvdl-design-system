import React from 'react';
import { TestId } from '@/types/test-id';

export interface BackgroundImageProps extends TestId {
  /**
   * Source URL for the background image.
   */
  source: string;

  /**
   * Opacity level for the dark overlay on the background image. Default is 40%.
   */
  opacity?: number;

  /**
   * Child components to be rendered inside the background image container.
   */
  children?: React.ReactNode;
}

const BackgroundImage: React.FC<BackgroundImageProps> = ({
  source,
  opacity = 0.4,
  testId = '',
  children
}) => {
  return (
    <div
      className='relative bg-cover bg-center min-h-screen w-full'
      data-testid={testId}
      style={{ backgroundImage: `url(${source})` }}>
      <div className='absolute inset-0 bg-black' style={{ opacity }}></div>
      <div className='relative z-10 flex justify-center items-center h-full w-full'>
        {children}
      </div>
    </div>
  );
};

export default BackgroundImage;
