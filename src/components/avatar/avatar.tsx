import React from 'react';
import Image, { ImageProps } from '@/elements/image/image';
import { DropShadowProps } from '@/types/drop-shadow';

export type AvatarSize = 'small' | 'medium' | 'large' | 'xlarge' | 'xxlarge';

export interface AvatarProps extends ImageProps, DropShadowProps {
  /** The test ID for the component */
  testId?: string;
  /** The size of the avatar: small, medium, large, xlarge, or xxlarge */
  size?: AvatarSize;
  /** Custom size for the avatar */
  customSize?: string;
}

/**
 * Avatar component that displays a circular image.
 *
 * @param {AvatarProps} props - The props for the Avatar component.
 * @returns {JSX.Element} The rendered Avatar component.
 */
const Avatar: React.FC<AvatarProps> = ({
  testId = '',
  size = 'medium',
  customSize,
  applyDropShadow = true,
  ...imageProps
}) => {
  // Matching exact pixel dimensions from the SCSS file
  const sizeClasses = {
    small: 'w-16 h-16', // 32px
    medium: 'w-32 h-32', // 64px
    large: 'w-48 h-48', // 96px
    xlarge: 'w-64 h-64', // 128px
    xxlarge: 'w-128 h-128' // 160px
  };

  const sizeClass = customSize ? '' : sizeClasses[size];
  const style = customSize ? { width: customSize, height: customSize } : {};
  const shadowClass = applyDropShadow ? 'shadow-2xl' : '';

  return (
    <div
      className={`rounded-full overflow-hidden inline-block relative ${sizeClass} ${shadowClass}`}
      data-testid={testId}
      style={style}>
      <Image
        additionalClassNames='w-full h-full object-cover absolute top-0 left-0'
        {...imageProps}
      />
    </div>
  );
};

export default Avatar;
