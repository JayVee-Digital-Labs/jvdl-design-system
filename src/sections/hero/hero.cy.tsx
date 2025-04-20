import React from 'react';
import Hero from './hero';
import { IconName } from '@/elements/icon/icon-map';

describe('Hero Component', () => {
  const defaultProps = {
    testId: 'hero-test',
    backgroundProps: {
      source: '/demo-assets/background-image.jpg',
      opacity: 0.4
    },
    avatarProps: {
      src: '/demo-assets/dog.jpg',
      size: 'large' as 'small' | 'medium' | 'large',
      alt: 'User Avatar'
    },
    headingProps: {
      children: 'Welcome to Our Site!',
      isWhite: true
    },
    subheadingProps: {
      children: 'We create amazing experiences',
      isWhite: true
    },
    socialMediaProps: {
      configs: [
        { icon: 'linkedin' as IconName, href: 'https://linkedin.com' },
        { icon: 'github' as IconName, href: 'https://github.com' }
      ]
    },
    navBarProps: {
      linkConfigs: [
        { name: 'Home', href: '#', active: true },
        { name: 'About', href: '#' },
        { name: 'Contact', href: '#' }
      ]
    },
    scrollThreshold: 200
  };

  beforeEach(() => {
    // Add a div with sufficient height to enable scrolling
    cy.viewport(1200, 800);
    cy.mount(
      <>
        <Hero {...defaultProps} />
        <div style={{ height: '2000px' }}></div>
      </>
    );
  });

  it('renders the hero component with all subcomponents', () => {
    cy.get(`[data-testid="hero-test"]`).should('exist');
    cy.get(`[data-testid="hero-test-bg"]`).should('exist');
    cy.get(`[data-testid="hero-test-avatar"]`).should('exist');
    cy.get(`[data-testid="hero-test-heading"]`).should('exist');
    cy.get(`[data-testid="hero-test-subheading"]`).should('exist');
    cy.get(`[data-testid="hero-test-social"]`).should('exist');
    cy.get(`[data-testid="hero-test-inline-nav"]`).should('exist');
    cy.get(`[data-testid="hero-test-fixed-nav"]`).should('exist');
  });

  it('displays correct heading and subheading content', () => {
    cy.get(`[data-testid="hero-test-heading"]`).contains(
      'Welcome to Our Site!'
    );
    cy.get(`[data-testid="hero-test-subheading"]`).contains(
      'We create amazing experiences'
    );
  });

  it('renders the avatar with correct attributes', () => {
    cy.get(`[data-testid="hero-test-avatar"] img`)
      .should('have.attr', 'src', '/demo-assets/dog.jpg')
      .and('have.attr', 'alt', 'User Avatar');
  });

  it('renders social media links with correct hrefs', () => {
    cy.get(`[data-testid="hero-test-social"] a`)
      .should('have.length', 2)
      .first()
      .should('have.attr', 'href', 'https://linkedin.com');

    cy.get(`[data-testid="hero-test-social"] a`)
      .eq(1)
      .should('have.attr', 'href', 'https://github.com');
  });

  it('renders nav links with correct names and active state', () => {
    cy.get(`[data-testid="hero-test-inline-nav"] a`).should('have.length', 3);

    cy.get(`[data-testid="hero-test-inline-nav"] a`)
      .first()
      .should('contain', 'Home')
      .and('have.class', /active/); // Using regex to match any class containing 'active'
  });

  it('fixed navbar should be invisible initially', () => {
    cy.get(`[data-testid="hero-test-fixed-nav"]`)
      .parent()
      .should('have.class', 'opacity-0')
      .and('have.class', 'pointer-events-none');
  });

  it('shows fixed navbar and hides content when scrolled', () => {
    // Scroll down to trigger the fixed navbar
    cy.scrollTo(0, 500);

    // Fixed navbar should become visible
    cy.get(`[data-testid="hero-test-fixed-nav"]`)
      .parent()
      .should('have.class', 'opacity-100')
      .and('not.have.class', 'pointer-events-none');
  });

  it('returns to initial state when scrolled back to top', () => {
    // Scroll down first
    cy.scrollTo(0, 500);

    // Then scroll back to top
    cy.scrollTo('top');

    // Fixed navbar should be invisible again
    cy.get(`[data-testid="hero-test-fixed-nav"]`)
      .parent()
      .should('have.class', 'opacity-0')
      .and('have.class', 'pointer-events-none');

    // Content should be fully visible
    cy.get(`[data-testid="hero-test-heading"]`)
      .parent()
      .parent()
      .parent()
      .should('have.css', 'opacity', '1');
  });
});
