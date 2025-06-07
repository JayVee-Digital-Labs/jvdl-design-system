import { Headline } from './headline';

describe('Headline Visual Regression', () => {
  let testAvatar: string;

  beforeEach(() => {
    cy.fixture('dog.jpg').then(image => {
      testAvatar = `data:image/jpeg;base64,${image}`;
    });
  });

  it('should match snapshot for default headline', () => {
    cy.mount(
      <Headline
        source={testAvatar}
        text='Welcome to Our Platform'
        description='Discover amazing features and connect with our community.'
        testId='headline-default'
      />
    );

    cy.findByTestId('headline-default').matchImageSnapshot();
  });

  it('should match snapshot for h1 headline', () => {
    cy.mount(
      <Headline
        source={testAvatar}
        text='Main Title'
        description='This is the primary headline using h1 tag.'
        headingLevel={1}
        testId='headline-h1'
      />
    );

    cy.findByTestId('headline-h1').matchImageSnapshot();
  });

  it('should match snapshot for h2 headline', () => {
    cy.mount(
      <Headline
        source={testAvatar}
        text='Section Title'
        description='This is a section headline using h2 tag.'
        headingLevel={2}
        testId='headline-h2'
      />
    );

    cy.findByTestId('headline-h2').matchImageSnapshot();
  });

  it('should match snapshot for long description', () => {
    cy.mount(
      <Headline
        source={testAvatar}
        text='Extended Headline'
        description='This is a much longer description that demonstrates how the component handles multiple lines of text and provides detailed information about the content.'
        testId='headline-long'
      />
    );

    cy.findByTestId('headline-long').matchImageSnapshot();
  });

  it('should match snapshot for short text', () => {
    cy.mount(
      <Headline
        source={testAvatar}
        text='Hi!'
        description='Brief.'
        testId='headline-short'
      />
    );

    cy.findByTestId('headline-short').matchImageSnapshot();
  });
});
