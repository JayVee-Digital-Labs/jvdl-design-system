import React from 'react';
import Hero from './hero';

describe('Hero', () => {
  let backgroundImage: string;

  beforeEach(() => {
    cy.fixture('background-image.jpg').then(image => {
      backgroundImage = `data:image/jpeg;base64,${image}`;
    });
  });

  it('should render the default hero correctly', () => {
    const testId = 'hero-default';
    cy.mount(
      <Hero
        testId={testId}
        title='Jay Vee Digital Labs'
        subtitle="Let's build better software together"
        backgroundImageProps={{
          source: backgroundImage,
          testId: 'hero-background'
        }}
        socialMediaBarProps={{
          configs: [
            { href: 'https://github.com/', icon: 'github' },
            { href: 'https://linkedin.com/', icon: 'linkedin' }
          ],
          testId: 'hero-social-media-bar'
        }}
      />
    );
    cy.findByTestId(testId).matchImageSnapshot('hero-default');
  });

  it('should render the hero with different content', () => {
    const testId = 'hero-custom';
    cy.mount(
      <Hero
        testId={testId}
        title='Welcome to My Portfolio'
        subtitle='Software Engineer & UI/UX Designer'
        backgroundImageProps={{
          source: backgroundImage,
          opacity: 0.6,
          testId: 'hero-custom-background'
        }}
        socialMediaBarProps={{
          configs: [
            { href: 'https://github.com/', icon: 'github' },
            { href: 'https://linkedin.com/', icon: 'linkedin' },
            { href: 'mailto:example@example.com', icon: 'email' }
          ],
          testId: 'hero-custom-social-media-bar'
        }}
      />
    );
    cy.findByTestId(testId).matchImageSnapshot('hero-custom');
  });

  it('should render the hero with higher opacity background', () => {
    const testId = 'hero-high-opacity';
    cy.mount(
      <Hero
        testId={testId}
        title='High Opacity Background'
        subtitle='Testing different background settings'
        backgroundImageProps={{
          source: backgroundImage,
          opacity: 0.8,
          testId: 'hero-high-opacity-background'
        }}
        socialMediaBarProps={{
          configs: [
            { href: 'https://github.com/', icon: 'github' },
            { href: 'https://linkedin.com/', icon: 'linkedin' }
          ],
          testId: 'hero-high-opacity-social-media-bar',
          applyDropShadow: false
        }}
      />
    );
    cy.findByTestId(testId).matchImageSnapshot('hero-high-opacity');
  });

  it('should render the hero on mobile', () => {
    cy.viewport(375, 667);
    const testId = 'hero-mobile';
    cy.mount(
      <Hero
        testId={testId}
        title='Mobile Hero'
        subtitle='Testing Mobile Hero'
        backgroundImageProps={{
          source: backgroundImage,
          opacity: 0.8,
          testId: 'hero-high-opacity-background'
        }}
        socialMediaBarProps={{
          configs: [
            { href: 'https://github.com/', icon: 'github' },
            { href: 'https://linkedin.com/', icon: 'linkedin' }
          ],
          testId: 'hero-high-opacity-social-media-bar',
          applyDropShadow: false
        }}
      />
    );
    cy.findByTestId(testId).matchImageSnapshot('hero-mobile');
  });

  it('should render the hero with partial screen height', () => {
    const testId = 'hero-partial-height';
    cy.viewport(1280, 720); // Set viewport size for consistent testing
    cy.mount(
      <Hero
        testId={testId}
        title='Partial Screen Hero'
        subtitle='50% of the viewport height'
        showPercentageFullScreen={50}
        backgroundImageProps={{
          source: backgroundImage,
          testId: 'hero-partial-height-background'
        }}
        socialMediaBarProps={{
          configs: [
            { href: 'https://github.com/', icon: 'github' },
            { href: 'https://linkedin.com/', icon: 'linkedin' }
          ],
          testId: 'hero-partial-height-social-media-bar'
        }}
      />
    );
    cy.findByTestId(testId).matchImageSnapshot('hero-partial-height');
  });
});
