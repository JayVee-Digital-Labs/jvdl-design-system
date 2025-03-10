import React from 'react';
import Icon from '@/elements/icon/icon';
import { IconName } from '@/elements/icon/icon-map';
import Link from '@/elements/link/link';
import { TestId } from '@/types/test-id';
import '@/styles/components/social-media-bar.scss';

export interface SocialMediaConfig {
  /** The name of the icon to render */
  icon: IconName;
  /** The URL that the hyperlink points to */
  href: string;
}

export interface SocialMediaBarProps extends TestId {
  /** Array of social media configurations */
  configs: SocialMediaConfig[];
  /** Whether to apply a drop shadow to the icons */
  applyDropShadow?: boolean;
}

/**
 * SocialMediaBar component that displays a list of social media icons with links.
 * 
 * @param {SocialMediaBarProps} props - The props for the SocialMediaBar component.
 * @returns {JSX.Element} The rendered SocialMediaBar component.
 */
const SocialMediaBar: React.FC<SocialMediaBarProps> = ({ configs, testId, applyDropShadow = true }) => {
  const dropShadowClass = applyDropShadow ? 'social-media-bar__item--drop-shadow' : '';

  return (
    <div className={`social-media-bar ${dropShadowClass}`} data-testid={testId}>
      {configs.map((config, index) => (
        <div key={index} className={`social-media-bar__item`}>
          <Link
            href={config.href}
            testId={`${testId}-link-${config.icon}`}
          >
            <Icon
              icon={config.icon}
              testId={`${testId}-icon-${config.icon}`}
            />
          </Link>
        </div>
      ))}
    </div>
  );
};

export default SocialMediaBar;
