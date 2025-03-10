import React from 'react';
import Image, { ImageProps } from '@/elements/image/image';
import { DropShadowProps } from '@/types/drop-shadow';
import '@/styles/image/avatar.scss';

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
const Avatar: React.FC<AvatarProps> = ({ testId, size = 'medium', customSize, applyDropShadow = true, ...imageProps }) => {
  const sizeClass = customSize ? '' : `avatar--${size}`;
  const style = customSize ? { width: customSize, height: customSize } : {};
  const dropShadowClass = applyDropShadow ? 'drop-shadow' : '';

  return (
    <div className={`avatar ${sizeClass} ${dropShadowClass}`} data-testid={testId} style={style}>
      <Image {...imageProps} />
    </div>
  );
};

export default Avatar;