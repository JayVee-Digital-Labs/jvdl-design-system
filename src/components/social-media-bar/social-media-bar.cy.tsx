import React from 'react';
import SocialMediaBar from '@/components/social-media-bar/social-media-bar';
import { mount } from 'cypress/react';
import configs from '@/components/social-media-bar/test-config';

describe('SocialMediaBar', () => {
  configs.forEach((config) => {
    it(`should render the ${config.icon} icon with the correct href`, () => {
      const testId = `social-media-bar-${config.icon}`;
      mount(<SocialMediaBar configs={[config]} testId={testId} />);
      cy.findByTestId(testId).find(`a[href="${config.href}"]`).should('exist');
    });
  });
});