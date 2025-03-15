import React from 'react';
import Container from './container';

describe('Container', () => {
  const testCases = [
    {
      description: 'default margins',
      props: {
        testId: 'container-default'
      }
    },
    {
      description: 'custom margins',
      props: {
        marginLeft: '50px',
        marginRight: '50px',
        marginTop: '50px',
        marginBottom: '50px',
        testId: 'container-custom'
      }
    }
  ];

  testCases.forEach(({ description, props }) => {
    it(`should render the container with ${description}`, () => {
      cy.mount(
        <Container {...props}>
          <div
            style={{ width: '100%', height: '100%', backgroundColor: 'black' }}>
            <p style={{ color: 'white', textAlign: 'center' }}>
              This is a container
            </p>
          </div>
        </Container>
      );
      cy.findByTestId(props.testId).matchImageSnapshot();
    });
  });
});
