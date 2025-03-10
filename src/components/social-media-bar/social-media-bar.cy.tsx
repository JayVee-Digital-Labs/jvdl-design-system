import React from 'react';
import SocialMediaBar, { SocialMediaConfig } from '@/components/social-media-bar/social-media-bar';
import { mount } from 'cypress/react';

describe('SocialMediaBar', () => {
  const configs: Array<SocialMediaConfig> = [
    { icon: 'github', href: 'https://github.com' },
    { icon: 'linkedin', href: 'https://linkedin.com' },
    { icon: 'instagram', href: 'https://instagram.com' },
    { icon: 'strava', href: 'https://strava.com' },
    { icon: 'email', href: 'mailto:example@example.com' },
    { icon: 'profile-card', href: 'https://profile.com' },
  ];

  it('should render the social media bar with icons and links', () => {
    const testId = 'social-media-bar';
    mount(<SocialMediaBar configs={configs} testId={testId} />);
    cy.findByTestId(testId).matchImageSnapshot();
  });

  it('should render the social media bar with icons and links without drop shadow', () => {
    const testId = 'social-media-bar-no-shadow';
    mount(<SocialMediaBar configs={configs} testId={testId} applyDropShadow={false} />);
    cy.findByTestId(testId).matchImageSnapshot();
  });

  configs.forEach((config) => {
    it(`should render the ${config.icon} icon with the correct href`, () => {
      const testId = `social-media-bar-${config.icon}`;
      mount(<SocialMediaBar configs={[config]} testId={testId} />);
      cy.findByTestId(testId).find(`a[href="${config.href}"]`).should('exist');
    });
  });
});