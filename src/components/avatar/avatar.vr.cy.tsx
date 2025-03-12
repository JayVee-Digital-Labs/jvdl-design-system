import React from 'react';
import Avatar, { AvatarSize } from '@/components/avatar/avatar';
import { mount } from 'cypress/react';

describe('Avatar', () => {
  const sizes: AvatarSize[] = ['small', 'medium', 'large'];
  const customSize = '100px';
  let testAvatar: string;

  beforeEach(() => {
    cy.fixture('dog.jpg').then((image) => {
      testAvatar = `data:image/jpeg;base64,${image}`;
    });
  });

  sizes.forEach(size => {
    it(`should render the proper avatar ${size} size with drop shadow`, () => {
      const testId = `avatar-${size}`;
      mount(<Avatar src={testAvatar} alt={`${size} Avatar`} size={size} testId={testId} applyDropShadow={true} />);
      cy.findByTestId(testId).matchImageSnapshot();
    });

    it(`should render the proper avatar ${size} size without drop shadow`, () => {
      const testId = `avatar-${size}-no-shadow`;
      mount(<Avatar src={testAvatar} alt={`${size} Avatar`} size={size} testId={testId} applyDropShadow={false} />);
      cy.findByTestId(testId).matchImageSnapshot();
    });
  });

  it('should render the avatar with custom size and drop shadow', () => {
    const testId = 'avatar-custom';
    mount(<Avatar src={testAvatar} alt="Custom Size Avatar" customSize={customSize} testId={testId} applyDropShadow={true} />);
    cy.findByTestId(testId).matchImageSnapshot();
  });

  it('should render the avatar with custom size without drop shadow', () => {
    const testId = 'avatar-custom-no-shadow';
    mount(<Avatar src={testAvatar} alt="Custom Size Avatar" customSize={customSize} testId={testId} applyDropShadow={false} />);
    cy.findByTestId(testId).matchImageSnapshot();
  });
});