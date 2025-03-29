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
  testId,
  children
}) => {
  return (
    <div
      className='fixed top-0 left-0 w-full h-full bg-cover bg-center -z-10'
      data-testid={testId}
      style={{ backgroundImage: `url(${source})` }}>
      <div
        className='absolute top-0 left-0 w-full h-full bg-black'
        style={{ opacity }}></div>
      <div className='relative z-10 flex justify-center items-center w-full h-full'>
        {children}
      </div>
    </div>
  );
};

export default BackgroundImage;
