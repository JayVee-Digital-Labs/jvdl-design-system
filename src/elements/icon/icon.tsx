import React from 'react';
import { TestId } from '@/types/test-id';
import icons, { IconName, IconNameLegacy } from './icon-map';

export type IconColor = 'black' | 'white';

export interface IconProps extends TestId {
  /** The name of icon to render */
  icon: IconName | IconNameLegacy;
  /** The size of the icon */
  size?: string | number; // Accepts both string (e.g., '24px') and number (e.g., 24)
  /** The color of the icon, defaults to black */
  color?: 'black' | 'white';
}

/**
 * Icon component to render different types of icons.
 */
const Icon: React.FC<IconProps> = ({
  icon,
  size = '24px',
  color = 'black',
  testId
}) => {
  const iconSrc = icons[icon];

  if (typeof size === 'number') {
    // Convert number size to string with 'px' suffix
    size = `${size}px`;
  }

  return (
    <img
      src={iconSrc}
      alt={icon}
      data-testid={testId}
      style={{
        width: size,
        height: size,
        display: 'inline', // Ensures no extra space below the image
        filter: color === 'white' ? 'invert(100%)' : 'none'
      }}
    />
  );
};

export default Icon;
