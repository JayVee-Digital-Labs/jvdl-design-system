import React from 'react';
import { TestId } from '@/types/test-id';
import '@/styles/image/image.scss';

export type ImagePosition = 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' | 'cover' | 'none';

interface ImageProps extends TestId {
  /**
   * Source URL for the image.
   */
  src: string;

  /**
   * Alt text for the image.
   */
  alt: string;

  /**
   * Position of the image. Can be 'top-left', 'top-right', 'bottom-left', 'bottom-right', 'cover', or 'none'. Defaults to 'cover'. This only applies if Width and Height are set. 
   */
  position?: ImagePosition

  /**
   * Width of the image. Defaults to the image's natural width.
   */
  width?: string;

  /**
   * Height of the image. Defaults to the image's natural height.
   */
  height?: string;
}

export const Image: React.FC<ImageProps> = ({ src, alt, position = 'cover', width, height, testId }) => {
  const positionClass = `image-${position}`;

  return (
    <img
      src={src}
      alt={alt}
      className={positionClass}
      style={{ width, height }}
      data-testid={testId}
    />
  );
};

export default Image;
export type { ImageProps };