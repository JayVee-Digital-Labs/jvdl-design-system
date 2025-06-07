import React from 'react';
import BackgroundImage from './background-image';

describe('BackgroundImage', () => {
  let testImage: string;

  beforeEach(() => {
    cy.fixture('background-image.jpg').then(image => {
      testImage = `data:image/jpeg;base64,${image}`;
    });
  });

  it('should render the default background image', () => {
    const testId = 'background-image-default';
    cy.mount(
      <BackgroundImage source={testImage} testId={testId}>
        <div style={{ color: 'white', textAlign: 'center', paddingTop: '50%' }}>
          Default Background Image
        </div>
      </BackgroundImage>
    );
    cy.findByTestId(testId).matchImageSnapshot();
  });

  it('should render the background image with custom opacity', () => {
    const testId = 'background-image-custom-opacity';
    cy.mount(
      <BackgroundImage source={testImage} opacity={0.7} testId={testId}>
        <div style={{ color: 'white', textAlign: 'center', paddingTop: '50%' }}>
          Custom Opacity Background Image
        </div>
      </BackgroundImage>
    );
    cy.findByTestId(testId).matchImageSnapshot();
  });

  it('should render the background image with out bleeding over to the sibling element', () => {
    const testId = 'background-image-custom-opacity';
    cy.mount(
      <>
        <BackgroundImage source={testImage} testId={testId}>
          <div
            style={{ color: 'white', textAlign: 'center', paddingTop: '50%' }}>
            Default BG Image
          </div>
        </BackgroundImage>

        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
          mollitia dicta fuga numquam harum aliquam nemo modi laboriosam cumque
          ratione debitis, facilis autem recusandae doloremque a? Itaque vero
          eum magni. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Est sunt quod illo esse possimus veritatis, placeat consequatur amet
          temporibus, voluptatem doloremque nesciunt nemo voluptates tenetur
          quidem voluptatum. Obcaecati, nihil magni? Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Laboriosam aperiam, accusantium
          reprehenderit animi cupiditate autem voluptatibus culpa temporibus at,
          provident facilis quis. Accusamus voluptate esse saepe eos odit ad
          quia!
        </div>
      </>
    );
    cy.matchImageSnapshot();
  });

  it('should render the background image with custom className for height', () => {
    const testId = 'background-image-custom-class';
    cy.mount(
      <BackgroundImage source={testImage} testId={testId} className='h-64'>
        <div
          style={{
            color: 'white',
            textAlign: 'center',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
          Custom Height Background Image (64 units)
        </div>
      </BackgroundImage>
    );
    cy.findByTestId(testId).matchImageSnapshot(
      'background-image-custom-height'
    );
  });

  it('should render the background image with multiple custom classes', () => {
    const testId = 'background-image-custom-styling';
    cy.mount(
      <BackgroundImage
        source={testImage}
        testId={testId}
        className='h-80 rounded-lg shadow-lg'>
        <div
          style={{
            color: 'white',
            textAlign: 'center',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
          Background Image with Custom Styling
        </div>
      </BackgroundImage>
    );
    cy.findByTestId(testId).matchImageSnapshot(
      'background-image-custom-styling'
    );
  });
});
