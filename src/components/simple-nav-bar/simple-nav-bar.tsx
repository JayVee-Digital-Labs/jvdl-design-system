import React from 'react';
import Link from '@/elements/link/link';
import { TestId } from '@/types/test-id';

export type NavLinkConfigs = {
  /**
   * The name of the link to be displayed.
   * This is also used as a key for the link.
   */
  name: string;

  /**
   * Indicates whether the link is active.
   * If true, the link should be styled as active and not clickable.
   */
  active?: boolean;

  /**
   * Optional property to specify the URL that the link points to.
   */
  href?: string;
};

/**
 * Props for the SimpleNavBar component.
 */
export interface SimpleNavBarProps extends TestId {
  /**
   * Configuration array for the navigation links.
   */
  linkConfigs: NavLinkConfigs[];

  /**
   * Click Handler when link is clicked
   */
  onClick?: (name: string) => void;

  /**
   * If true, forces all text within the nav bar to be white.
   * Useful when the nav bar is placed on a dark or transparent background.
   */
  forceWhiteText?: boolean;
}

/**
 * Navigation component that renders a navigation bar using the Link component.
 * It handles active states and click events based on the provided configurations.
 */
const SimpleNavBar: React.FC<SimpleNavBarProps> = ({
  linkConfigs,
  testId,
  onClick,
  forceWhiteText = false // Default to false
}) => {
  const activeCount = linkConfigs.filter(link => link.active).length;

  if (activeCount > 1) {
    console.error('Only one link can be active at a time.');
  }

  const handleClick = (name: string) => {
    const linkConfig = linkConfigs.find(link => link.name === name);
    if (!linkConfig?.href && onClick) {
      onClick(name); // Call the onClick handler if provided
    }
  };

  return (
    <nav className={`flex items-center`} data-testid={testId}>
      {linkConfigs.map(({ name, active, href }, index) => {
        const isActive = active === true;
        // Determine base text color and styles based on forceWhiteText
        const linkStyle = forceWhiteText
          ? `font-bold text-white underline` // White text styling
          : `font-bold ${isActive ? 'text-secondary-color cursor-default' : 'text-primary-color underline'}`; // Original styling

        const linkProps = {
          key: name,
          testId: `nav-link-${name.toLowerCase()}`,
          onClick: () => handleClick(name),
          additionalClassNames: linkStyle
        };

        // Determine separator color
        const separatorColor = forceWhiteText ? 'text-white' : ''; // Use default text color or white

        return (
          <React.Fragment key={name}>
            {index > 0 && (
              <span className={`mx-1 select-none ${separatorColor}`}>•</span>
            )}
            {href ? (
              <Link {...linkProps} href={href}>
                {name}
              </Link>
            ) : (
              <Link {...linkProps}>{name}</Link>
            )}
          </React.Fragment>
        );
      })}
    </nav>
  );
};

export default SimpleNavBar;
