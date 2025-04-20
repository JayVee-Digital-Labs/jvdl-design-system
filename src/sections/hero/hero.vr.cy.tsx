import React from 'react';
import Hero from './hero';

describe.skip('Hero Visual Regression', () => {
  it('matches snapshot', () => {
    cy.mount(
      <Hero
        testId='hero-vr'
        backgroundProps={{
          source: 'https://via.placeholder.com/1920x1080',
          opacity: 0.4
        }}
        avatarProps={{
          src: 'https://via.placeholder.com/150',
          size: 'medium',
          alt: 'User Avatar'
        }}
        headingProps={{ children: 'Hello World' }}
        subheadingProps={{ children: 'Subheading Text' }}
        socialMediaProps={{
          configs: [
            { icon: 'github', href: 'https://github.com' },
            { icon: 'linkedin', href: 'https://linkedin.com' }
          ]
        }}
        navBarProps={{
          linkConfigs: [
            { name: 'Home', href: '#' },
            { name: 'Services', href: '#' }
          ]
        }}
        scrollThreshold={200}
      />
    );
    cy.findByTestId('hero-vr').matchImageSnapshot();
  });
});
