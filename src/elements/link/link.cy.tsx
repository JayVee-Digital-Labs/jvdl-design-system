import React from 'react';
import Link from './link';

describe('Link', () => {
  it('should render the link that opens in a new tab', () => {
    const testId = 'new-tab-link';
    cy.mount(<Link href="https://example.com" testId={testId} openInNewTab={true}>This link opens in a new tab</Link>);
    cy.findByTestId(testId).should('have.attr', 'href', 'https://example.com');
  });

  it('should render the link that opens in the same tab', () => {
    const testId = 'same-tab-link';
    cy.mount(<Link href="https://example.com" testId={testId} openInNewTab={false}>This link opens in the same tab</Link>);
    cy.findByTestId(testId).should('have.attr', 'target', '_self');
  });
});