import React from 'react';
import Hero from './hero';

describe('Hero', () => {
  beforeEach(() => {
    // Mock the image source
    cy.fixture('background-image.jpg').then(image => {
      cy.mount(
        <Hero
          testId='hero-component'
          title='Test Title'
          subtitle='Test Subtitle'
          backgroundImageProps={{
            source: `data:image/jpeg;base64,${image}`,
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
    });
  });

  it('should render the hero title', () => {
    cy.contains('h1', 'Test Title').should('be.visible');
  });

  it('should render the hero subtitle', () => {
    cy.contains('h2', 'Test Subtitle').should('be.visible');
  });

  it('should render the social media bar with correct links', () => {
    cy.findByTestId('hero-social-media-bar').should('exist');
    cy.findByTestId('hero-social-media-bar-link-github').should(
      'have.attr',
      'href',
      'https://github.com/'
    );
    cy.findByTestId('hero-social-media-bar-link-linkedin').should(
      'have.attr',
      'href',
      'https://linkedin.com/'
    );
  });

  it('should apply white text to headings inside the hero', () => {
    cy.contains('h1', 'Test Title').should(
      'have.class',
      'text-primary-font-white'
    );
    cy.contains('h2', 'Test Subtitle').should(
      'have.class',
      'text-primary-font-white'
    );
  });
});
