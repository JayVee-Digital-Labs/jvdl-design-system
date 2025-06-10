import React from 'react';
import Icon, { IconColor } from './icon';
import icons, { IconName } from './icon-map';

describe('Icon', () => {
  const sizes = ['12px', '24px', '48px', 12];
  const colors: Array<IconColor> = ['black', 'white'];

  sizes.forEach(size => {
    colors.forEach(color => {
      it(`should render all icons with size ${typeof size === 'string' ? size : `${size} and convert to px`} and color ${color}`, () => {
        const testId = `all-icons-${size}-${color}`;
        cy.mount(
          <div data-testid={testId}>
            {Object.keys(icons).map(iconName => (
              <Icon
                icon={iconName as IconName}
                size={size}
                color={color}
                key={`${iconName}-${size}-${color}`}
                testId={`${iconName}-${size}-${color}`}
              />
            ))}
          </div>
        );
        cy.findByTestId(testId).matchImageSnapshot();
      });
    });
  });
});
