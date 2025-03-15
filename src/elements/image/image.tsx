import React from 'react';
import { TestId } from '@/types/test-id';
import '@/styles/image/image.scss';

export type ImagePosition =
  | 'top-left'
  | 'top-right'
  | 'bottom-left'
  | 'bottom-right'
  | 'cover'
  | 'none';

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
  position?: ImagePosition;

  /**
   * Width of the image. Defaults to the image's natural width.
   */
  width?: string;

  /**
   * Height of the image. Defaults to the image's natural height.
   */
  height?: string;
}

export const Image: React.FC<ImageProps> = ({
  src,
  alt,
  position = 'cover',
  width,
  height,
  testId
}) => {
  /**
   * Note: Because rollup-plugin-dts is having a hard time parsing data-testid from the JSX, we need to create a separate variable for the class name.
   */
  const positionClass = `image-${position}`;

  // Create attributes object separately
  const attributes: Record<string, unknown> = {
    src,
    alt,
    className: positionClass,
    style: { width, height }
  };

  // Conditionally add data-testid
  if (testId) {
    attributes['data-testid'] = testId;
  }

  return React.createElement('img', attributes);
};

export default Image;
export type { ImageProps };
