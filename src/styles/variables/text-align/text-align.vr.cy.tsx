import React from 'react';
import './text-align.scss';

describe('Text Align Classes', () => {
  const textAlignClasses = [
    { className: 'text-left', description: 'Text Aligned Left' },
    { className: 'text-center', description: 'Text Aligned Center' },
    { className: 'text-right', description: 'Text Aligned Right' },
    {
      className: 'text-justify',
      description: 'Text Justified',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa.'
    }
  ];

  textAlignClasses.forEach(({ className, description, content }) => {
    it(`should render the ${description} class correctly`, () => {
      const testId = `text-align-${className}`;
      cy.mount(
        <div
          className={className}
          data-testid={testId}
          style={{
            border: '1px solid black',
            padding: '10px',
            marginBottom: '10px'
          }}>
          <p>{content || description}</p>
        </div>
      );
      cy.findByTestId(testId).matchImageSnapshot();
    });
  });
});
