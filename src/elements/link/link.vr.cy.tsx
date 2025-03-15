import React from 'react';
import Link from './link';

describe('Link', () => {
  it('should render the default link', () => {
    const testId = 'default-link';
    cy.mount(
      <Link href='https://example.com' testId={testId}>
        This is a default link
      </Link>
    );
    cy.findByTestId(testId).matchImageSnapshot();
  });
});
