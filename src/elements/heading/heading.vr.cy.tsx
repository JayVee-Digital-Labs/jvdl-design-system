import React from 'react';
import Heading, { HeaderLevels } from './heading';

describe('heading', () => {
  const levels: HeaderLevels[] = [1, 2, 3, 4, 5, 6];

  levels.forEach(level => {
    it(`should render the proper heading ${level} tag`, () => {
      const testId = `heading-${level}`;
      cy.mount(
        <Heading level={level} testId={testId}>
          This is a H{level} Element
        </Heading>
      );
      cy.findByTestId(testId).matchImageSnapshot();
    });
  });

  it('should render a heading with white text', () => {
    const testId = 'heading-white';
    cy.mount(
      <div style={{ backgroundColor: 'black' }}>
        <Heading level={1} testId={testId} isWhite>
          This is a H1 Element with white text
        </Heading>
      </div>
    );
    cy.findByTestId(testId).matchImageSnapshot();
  });

  it('should render a heading with custom red color', () => {
    const testId = 'heading-custom-red';
    cy.mount(
      <Heading level={1} testId={testId} headingColor='text-red-500'>
        This is a H1 Element with red color
      </Heading>
    );
    cy.findByTestId(testId).matchImageSnapshot();
  });

  it('should render a heading with custom blue color', () => {
    const testId = 'heading-custom-blue';
    cy.mount(
      <Heading level={2} testId={testId} headingColor='text-blue-500'>
        This is a H2 Element with blue color
      </Heading>
    );
    cy.findByTestId(testId).matchImageSnapshot();
  });

  it('should render a heading with custom green color', () => {
    const testId = 'heading-custom-green';
    cy.mount(
      <Heading level={3} testId={testId} headingColor='text-green-500'>
        This is a H3 Element with green color
      </Heading>
    );
    cy.findByTestId(testId).matchImageSnapshot();
  });
});
