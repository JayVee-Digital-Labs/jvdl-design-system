import React from 'react';
import { TestId } from '@/types/test-id';
import '@/styles/image/background-image.scss';

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

const BackgroundImage: React.FC<BackgroundImageProps> = ({ source, opacity = 0.4, testId, children }) => {
  return (
    <div className="background-image" data-testid={testId} style={{ backgroundImage: `url(${source})` }}>
      <div className="background-image__overlay" style={{ opacity }}></div>
      <div className="background-image__content">{children}</div>
    </div>
  );
};

export default BackgroundImage;
