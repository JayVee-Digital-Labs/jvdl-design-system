import React from 'react';
import { Icon } from '@/elements';
import { TestId } from '@/types/test-id';
import { IconName } from '@/elements/icon/icon-map';

// Method 1: Enum with selected tech-related icons
export enum TechIcons {
  JAVASCRIPT = IconName.JAVASCRIPT,
  TYPESCRIPT = IconName.TYPESCRIPT,
  REACT = IconName.REACT,
  VUE = IconName.VUE,
  ANGULAR = IconName.ANGULAR,
  SASS = IconName.SASS,
  JEST = IconName.JEST,
  CYPRESS = IconName.CYPRESS,
  FIREBASE = IconName.FIREBASE,
  NODEJS = IconName.NODEJS,
  GITHUB_COPILOT = IconName.GITHUB_COPILOT
}

/**
 * Props for the TechStack component
 */
export interface TechStackProps extends TestId {
  /**
   * Size of each icon in pixels
   * @default 50
   */
  iconSize?: string | number;
}

const TechStack: React.FC<TechStackProps> = ({
  iconSize = '50',
  testId
}: TechStackProps) => {
  // Get only the actual icon name values, not the enum keys
  const techIconValues = Object.values(TechIcons)
    .filter(value => typeof value === 'string')
    .filter(value =>
      Object.values(IconName).includes(value as unknown as IconName)
    )
    .map(value => value as unknown as IconName);

  return (
    <div
      data-testid={testId}
      className='flex flex-wrap items-center justify-center gap-4'>
      {techIconValues.map((iconName, index) => (
        <div
          key={`${iconName}-${index}`}
          data-testid={`${testId}-icon-${iconName}`}
          style={{ width: iconSize, height: iconSize }}
          className='flex items-center justify-center'>
          <Icon icon={iconName} size={iconSize} />
        </div>
      ))}
    </div>
  );
};

export default TechStack;
