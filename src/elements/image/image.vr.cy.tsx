import React from 'react';
import Image, { ImagePosition } from './image';
import { mount } from 'cypress/react';

describe('Image', () => {
  const positions: Array<ImagePosition> = [
    'top-left',
    'top-right',
    'bottom-left',
    'bottom-right',
    'cover',
    'none'
  ];

  const square = '300px';
  let testImage: string;

  beforeEach(() => {
    cy.fixture('dog.jpg').then(image => {
      testImage = `data:image/jpeg;base64,${image}`;
    });
  });

  it('should render the image correctly', function () {
    mount(
      <Image
        src={testImage}
        alt='Test Image'
        testId='image'
        height={square}
        width={square}
      />
    );
    cy.findByTestId('image')
      .should('be.visible')
      .matchImageSnapshot('image-default');
  });

  positions.forEach(position => {
    it(`should render the image with position ${position}`, function () {
      mount(
        <Image
          src={testImage}
          alt='Test Image'
          position={position}
          testId='image'
          height={square}
          width={square}
        />
      );
      cy.findByTestId('image').matchImageSnapshot(`image-${position}`);
    });
  });
});
