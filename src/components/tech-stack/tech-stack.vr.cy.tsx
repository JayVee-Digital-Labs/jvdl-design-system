import React from 'react';
import TechStack from './tech-stack';

describe('TechStack Visual Regression', () => {
  it('should render the default tech stack correctly', () => {
    const testId = 'tech-stack-default';
    cy.mount(<TechStack testId={testId} />);
    cy.findByTestId(testId).matchImageSnapshot('tech-stack-default');
  });

  it('should render small icons correctly', () => {
    const testId = 'tech-stack-small';
    cy.mount(<TechStack testId={testId} iconSize={30} />);
    cy.findByTestId(testId).matchImageSnapshot('tech-stack-small');
  });

  it('should render large icons correctly', () => {
    const testId = 'tech-stack-large';
    cy.mount(<TechStack testId={testId} iconSize={80} />);
    cy.findByTestId(testId).matchImageSnapshot('tech-stack-large');
  });

  it('should render extra large icons correctly', () => {
    const testId = 'tech-stack-extra-large';
    cy.mount(<TechStack testId={testId} iconSize={120} />);
    cy.findByTestId(testId).matchImageSnapshot('tech-stack-extra-large');
  });

  it('should render tiny icons correctly', () => {
    const testId = 'tech-stack-tiny';
    cy.mount(<TechStack testId={testId} iconSize={20} />);
    cy.findByTestId(testId).matchImageSnapshot('tech-stack-tiny');
  });
});
