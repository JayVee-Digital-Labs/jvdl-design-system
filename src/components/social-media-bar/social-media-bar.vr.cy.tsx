import React from 'react';
import SocialMediaBar from '@/components/social-media-bar/social-media-bar';
import { mount } from 'cypress/react';
import configs from '@/components/social-media-bar/test-config';

describe('SocialMediaBar', () => {
  it('should render the social media bar with icons and links', () => {
    const testId = 'social-media-bar';
    mount(<SocialMediaBar configs={configs} testId={testId} />);
    cy.findByTestId(testId).matchImageSnapshot();
  });

  it('should render the social media bar with icons and links without drop shadow', () => {
    const testId = 'social-media-bar-no-shadow';
    mount(
      <SocialMediaBar
        configs={configs}
        testId={testId}
        applyDropShadow={false}
      />
    );
    cy.findByTestId(testId).matchImageSnapshot();
  });
});
