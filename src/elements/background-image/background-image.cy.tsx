import React from 'react';
import BackgroundImage from './background-image';

describe('BackgroundImage', () => {
  let testImage: string;

  beforeEach(() => {
    cy.fixture('background-image.jpg').then((image) => {
      testImage = `data:image/jpeg;base64,${image}`;
    });
  });

  it('should render the default background image', () => {
    const testId = 'background-image-default';
    cy.mount(
      <BackgroundImage source={testImage} testId={testId}>
        <div style={{ color: 'white', textAlign: 'center', paddingTop: '50%' }}>Default Background Image</div>
      </BackgroundImage>
    );
    cy.findByTestId(testId).matchImageSnapshot();
  });

  it('should render the background image with custom opacity', () => {
    const testId = 'background-image-custom-opacity';
    cy.mount(
      <BackgroundImage source={testImage} opacity={0.7} testId={testId}>
        <div style={{ color: 'white', textAlign: 'center', paddingTop: '50%' }}>Custom Opacity Background Image</div>
      </BackgroundImage>
    );
    cy.findByTestId(testId).matchImageSnapshot();
  });
});