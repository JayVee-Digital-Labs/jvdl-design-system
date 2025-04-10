import React from 'react';
import SimpleNavBar, { NavLinkConfigs } from './simple-nav-bar';

describe('SimpleNavBar', () => {
  const linkConfigs: NavLinkConfigs[] = [
    { name: 'Home', active: true },
    { name: 'Services' },
    { name: 'Contact', href: 'https://example.com' }
  ];

  it('should render all links', () => {
    const onClick = cy.stub();
    cy.mount(
      <SimpleNavBar
        linkConfigs={linkConfigs}
        onClick={onClick}
        testId='simple-nav-bar'
      />
    );
    cy.findByTestId('simple-nav-bar').within(() => {
      linkConfigs.forEach(link => {
        cy.findByTestId(`nav-link-${link.name.toLowerCase()}`).should('exist');
      });
    });
  });

  it('should apply active styles to the active link', () => {
    // NOTE: cy.stub() cannot be used outside of a `if` block
    const onClick = cy.stub();
    cy.mount(
      <SimpleNavBar
        linkConfigs={linkConfigs}
        onClick={onClick}
        testId='simple-nav-bar'
      />
    );
    cy.findByTestId('nav-link-home').should(
      'have.class',
      'text-secondary-color'
    );
  });

  it('should call onClick handler for non-href links', () => {
    const onClick = cy.stub();
    cy.mount(
      <SimpleNavBar
        linkConfigs={linkConfigs}
        onClick={onClick}
        testId='simple-nav-bar'
      />
    );
    cy.findByTestId('nav-link-services').click();
    cy.wrap(onClick).should('have.been.calledWith', 'Services');
  });

  it('should not call onClick handler for href links', () => {
    const onClick = cy.stub();
    cy.mount(
      <SimpleNavBar
        linkConfigs={linkConfigs}
        onClick={onClick}
        testId='simple-nav-bar'
      />
    );
    cy.findByTestId('nav-link-contact').should(
      'have.attr',
      'href',
      'https://example.com'
    );
  });

  it('should display a separator between links', () => {
    const onClick = cy.stub();
    cy.mount(
      <SimpleNavBar
        linkConfigs={linkConfigs}
        onClick={onClick}
        testId='simple-nav-bar'
      />
    );
    cy.findByTestId('simple-nav-bar').contains('•').should('exist');
  });
});
