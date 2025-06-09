import React from 'react';
import Icon from '@/elements/icon/icon';
import { IconName, IconNameLegacy } from '@/elements/icon/icon-map';
import Link from '@/elements/link/link';
import { TestId } from '@/types/test-id';
import { DropShadowProps } from '@/types/drop-shadow';

export interface SocialMediaConfig {
  /** The name of the icon to render */
  icon: IconName | IconNameLegacy;
  /** The URL that the hyperlink points to */
  href: string;
}

export interface SocialMediaBarProps extends TestId, DropShadowProps {
  /** Array of social media configurations */
  configs: SocialMediaConfig[];
}

/**
 * SocialMediaBar component that displays a list of social media icons with links.
 */
const SocialMediaBar: React.FC<SocialMediaBarProps> = ({
  configs,
  testId,
  applyDropShadow = true
}) => {
  return (
    <div
      className={`flex gap-4 rounded p-[5px_10px] w-fit bg-white ${applyDropShadow ? 'shadow-lg' : ''}`}
      data-testid={testId}>
      {configs.map((config, index) => (
        <div
          key={index}
          className='inline-flex items-center justify-center relative w-[34px] h-[34px] rounded'>
          <Link href={config.href} testId={`${testId}-link-${config.icon}`}>
            <Icon icon={config.icon} testId={`${testId}-icon-${config.icon}`} />
          </Link>
        </div>
      ))}
    </div>
  );
};

export default SocialMediaBar;
