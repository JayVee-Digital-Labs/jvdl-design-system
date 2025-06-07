import { Headline } from './headline';

describe('Headline Component', () => {
  it('should render all elements with default props', () => {
    cy.mount(
      <Headline
        source='https://via.placeholder.com/150'
        text='Welcome to Our Platform'
        description='Discover amazing features and connect with our community.'
        testId='headline-default'
      />
    );

    cy.findByTestId('headline-default').should('be.visible');
    cy.findByTestId('headline-default-avatar').should('be.visible');
    cy.findByTestId('headline-default-heading').should('be.visible');
    cy.findByTestId('headline-default-description').should('be.visible');
  });

  it('should display correct text content', () => {
    const headingText = 'Test Heading';
    const descriptionText = 'Test description text';

    cy.mount(
      <Headline
        source='https://via.placeholder.com/150'
        text={headingText}
        description={descriptionText}
        testId='headline-content'
      />
    );

    cy.findByTestId('headline-content-heading').should(
      'contain.text',
      headingText
    );
    cy.findByTestId('headline-content-description').should(
      'contain.text',
      descriptionText
    );
  });

  it('should render with different heading levels', () => {
    cy.mount(
      <Headline
        source='https://via.placeholder.com/150'
        text='H1 Heading'
        description='This uses h1 tag'
        headingLevel={1}
        testId='headline-h1'
      />
    );

    cy.findByTestId('headline-h1-heading').should('be.visible');
  });

  it('should handle long text content', () => {
    const longDescription =
      'This is a much longer description that demonstrates how the component handles multiple lines of text and provides detailed information about the content.';

    cy.mount(
      <Headline
        source='https://via.placeholder.com/150'
        text='Extended Headline'
        description={longDescription}
        testId='headline-long'
      />
    );

    cy.findByTestId('headline-long-description').should(
      'contain.text',
      longDescription
    );
  });

  it('should handle short text content', () => {
    cy.mount(
      <Headline
        source='https://via.placeholder.com/150'
        text='Hi!'
        description='Brief.'
        testId='headline-short'
      />
    );

    cy.findByTestId('headline-short-heading').should('contain.text', 'Hi!');
    cy.findByTestId('headline-short-description').should(
      'contain.text',
      'Brief.'
    );
  });

  it('should pass testId to child components', () => {
    cy.mount(
      <Headline
        source='https://via.placeholder.com/150'
        text='Test Component'
        description='Testing testId propagation'
        testId='custom-testid'
      />
    );

    cy.findByTestId('custom-testid-avatar').should('exist');
    cy.findByTestId('custom-testid-heading').should('exist');
    cy.findByTestId('custom-testid-description').should('exist');
  });
});
