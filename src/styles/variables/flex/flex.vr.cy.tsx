import React from 'react';
import './flex.scss';

describe('Flex Classes', () => {
  const flexClasses = [
    { className: 'align-left', description: 'Aligned Left' },
    { className: 'align-center', description: 'Aligned Center' },
    { className: 'align-right', description: 'Aligned Right' },
    { className: 'flex-align-left', description: 'Flex Aligned Left' },
    { className: 'flex-align-center', description: 'Flex Aligned Center' },
    { className: 'flex-align-right', description: 'Flex Aligned Right' },
    { className: 'flex-column', description: 'Flex Column', items: ['Item 1', 'Item 2'] },
    { className: 'flex-row', description: 'Flex Row', items: ['Item 1', 'Item 2'] },
    { className: 'flex-wrap', description: 'Flex Wrap', items: ['Item 1', 'Item 2'] },
    { className: 'flex-align-items-center', description: 'Align Items Center', items: ['Item 1', 'Item 2'] },
    { className: 'flex-center-all', description: 'Flex Center All', items: ['Item 1', 'Item 2'] },
  ];

  flexClasses.forEach(({ className, description, items }) => {
    it(`should render the ${description} class correctly`, () => {
      const testId = `flex-${className}`;
      cy.mount(
        <div className={`flex ${className}`} data-testid={testId} style={{ border: '1px solid black', padding: '10px', marginBottom: '10px', height: className === 'align-items-center' ? '100px' : 'auto' }}>
          <p>{description}</p>
          {items && items.map((item, index) => <p key={index}>{item}</p>)}
        </div>
      );
      cy.findByTestId(testId).matchImageSnapshot();
    });
  });
});