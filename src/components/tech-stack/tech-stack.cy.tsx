import React from 'react';
import { IconName } from '@/elements/icon/icon-map';
import TechStack, { TechIcons } from './tech-stack';

const expectedIcons = Object.values(TechIcons)
  .filter(value => typeof value === 'string')
  .filter(value =>
    Object.values(IconName).includes(value as unknown as IconName)
  );

describe('TechStack', () => {
  beforeEach(() => {
    cy.mount(<TechStack testId='tech-stack-component' iconSize={50} />);
  });

  it('should render the tech stack component', () => {
    cy.findByTestId('tech-stack-component').should('exist');
  });

  it('should render all tech icons from TechIcons enum', () => {
    expectedIcons.forEach(iconName => {
      cy.findByTestId(`tech-stack-component-icon-${iconName}`).should('exist');
    });
  });

  it('should apply correct icon size styling', () => {
    cy.findByTestId('tech-stack-component-icon-react')
      .should('have.css', 'width', '50px')
      .should('have.css', 'height', '50px');
  });

  it('should handle different icon sizes', () => {
    cy.mount(<TechStack testId='tech-stack-custom-size' iconSize={80} />);

    cy.findByTestId('tech-stack-custom-size-icon-react')
      .should('have.css', 'width', '80px')
      .should('have.css', 'height', '80px');
  });

  it('should render all icons in a flex layout', () => {
    cy.findByTestId('tech-stack-component')
      .should('have.class', 'flex')
      .should('have.class', 'flex-wrap')
      .should('have.class', 'items-center')
      .should('have.class', 'justify-center');
  });

  it('should use default icon size when not provided', () => {
    cy.mount(<TechStack testId='tech-stack-default-size' />);

    cy.findByTestId('tech-stack-default-size-icon-react')
      .should('have.css', 'width', '50px')
      .should('have.css', 'height', '50px');
  });

  it('should render the correct number of tech icons', () => {
    cy.findByTestId('tech-stack-component')
      .children()
      .should('have.length', expectedIcons.length);
  });
});
