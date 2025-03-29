import React from 'react';
import { TestId } from '@/types/test-id';

export type ImagePosition =
  | 'top-left'
  | 'top-right'
  | 'bottom-left'
  | 'bottom-right'
  | 'cover'
  | 'none';

export interface ImageProps
  extends TestId,
    React.ImgHTMLAttributes<HTMLImageElement> {
  /**
   * Source URL for the image.
   */
  src: string;

  /**
   * Alt text for the image.
   */
  alt: string;

  /**
   * Position of the image. Can be 'top-left', 'top-right', 'bottom-left', 'bottom-right', 'cover', or 'none'.
   * Defaults to 'cover'. This only applies if Width and Height are set.
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

  /**
   * Additional CSS classes
   */
  additionalClassNames?: string;
}

export const Image: React.FC<ImageProps> = ({
  src,
  alt,
  position = 'cover',
  width,
  height,
  additionalClassNames,
  testId
}) => {
  // Map position prop to proper Tailwind classes
  const positionClasses: Record<ImagePosition, string> = {
    'top-left': 'object-none object-left-top',
    'top-right': 'object-none object-right-top',
    'bottom-left': 'object-none object-left-bottom',
    'bottom-right': 'object-none object-right-bottom',
    cover: 'object-cover',
    none: 'object-none'
  };

  const positionClass = positionClasses[position];
  const style = {
    ...(width ? { width } : {}),
    ...(height ? { height } : {})
  };

  // Create attributes object separately
  const attributes: Record<string, unknown> = {
    src,
    alt,
    className: [positionClass, additionalClassNames].join(' '), // Combine position class with any other classes
    style
  };

  // Conditionally add data-testid
  if (testId) {
    attributes['data-testid'] = testId;
  }

  return React.createElement('img', attributes);
};

export default Image;
