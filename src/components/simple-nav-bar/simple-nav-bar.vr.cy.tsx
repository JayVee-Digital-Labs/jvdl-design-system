import React from 'react';
import SimpleNavBar, { NavLinkConfigs } from './simple-nav-bar';

describe('SimpleNavBar Visual Regression', () => {
  const linkConfigs: NavLinkConfigs[] = [
    { name: 'Home', active: true },
    { name: 'Services' },
    { name: 'Contact', href: 'https://example.com' }
  ];

  it('should match the default navigation bar appearance', () => {
    cy.mount(
      <SimpleNavBar linkConfigs={linkConfigs} testId='simple-nav-bar' />
    );
    cy.findByTestId('simple-nav-bar').matchImageSnapshot();
  });

  it('should match the appearance with a different active link', () => {
    const updatedLinkConfigs = [
      { name: 'Home' },
      { name: 'Services', active: true },
      { name: 'Contact', href: 'https://example.com' }
    ];
    cy.mount(
      <SimpleNavBar linkConfigs={updatedLinkConfigs} testId='simple-nav-bar' />
    );
    cy.findByTestId('simple-nav-bar').matchImageSnapshot();
  });

  it('should match the appearance with only href links', () => {
    const hrefOnlyConfigs = [
      { name: 'Docs', href: 'https://docs.example.com' },
      { name: 'Blog', href: 'https://blog.example.com' }
    ];
    cy.mount(
      <SimpleNavBar linkConfigs={hrefOnlyConfigs} testId='simple-nav-bar' />
    );
    cy.findByTestId('simple-nav-bar').matchImageSnapshot();
  });
});
