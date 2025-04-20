import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Hero from './hero';

export default {
  title: 'Sections/Hero',
  tags: ['components', 'sections', 'hero', 'autodocs'],
  component: Hero,
  parameters: {
    docs: {
      description: {
        component:
          'A full-page hero section that composes background image, avatar, headings, social media bar, and a fixed nav bar with scroll-triggered transitions.'
      }
    }
  }
} as Meta;

const Template: StoryFn<typeof Hero> = args => (
  <>
    <Hero {...args} />
    <div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum. Lorem ipsum dolor, sit amet consectetur
        adipisicing elit. Ipsa, aliquid repellendus. Placeat recusandae
        inventore doloribus ratione! Atque excepturi illo mollitia, iste optio
        dolorum recusandae assumenda vel quos quis commodi architecto! Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Culpa voluptates
        optio hic molestias dolorem ipsum sunt, nulla eius, blanditiis, fuga
        labore. Quaerat saepe esse beatae, culpa similique quia. Facilis, quo.
      </p>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum. Lorem ipsum dolor, sit amet consectetur
        adipisicing elit. Ipsa, aliquid repellendus. Placeat recusandae
        inventore doloribus ratione! Atque excepturi illo mollitia, iste optio
        dolorum recusandae assumenda vel quos quis commodi architecto! Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Culpa voluptates
        optio hic molestias dolorem ipsum sunt, nulla eius, blanditiis, fuga
        labore. Quaerat saepe esse beatae, culpa similique quia. Facilis, quo.
      </p>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum. Lorem ipsum dolor, sit amet consectetur
        adipisicing elit. Ipsa, aliquid repellendus. Placeat recusandae
        inventore doloribus ratione! Atque excepturi illo mollitia, iste optio
        dolorum recusandae assumenda vel quos quis commodi architecto! Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Culpa voluptates
        optio hic molestias dolorem ipsum sunt, nulla eius, blanditiis, fuga
        labore. Quaerat saepe esse beatae, culpa similique quia. Facilis, quo.
      </p>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum. Lorem ipsum dolor, sit amet consectetur
        adipisicing elit. Ipsa, aliquid repellendus. Placeat recusandae
        inventore doloribus ratione! Atque excepturi illo mollitia, iste optio
        dolorum recusandae assumenda vel quos quis commodi architecto! Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Culpa voluptates
        optio hic molestias dolorem ipsum sunt, nulla eius, blanditiis, fuga
        labore. Quaerat saepe esse beatae, culpa similique quia. Facilis, quo.
      </p>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum. Lorem ipsum dolor, sit amet consectetur
        adipisicing elit. Ipsa, aliquid repellendus. Placeat recusandae
        inventore doloribus ratione! Atque excepturi illo mollitia, iste optio
        dolorum recusandae assumenda vel quos quis commodi architecto! Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Culpa voluptates
        optio hic molestias dolorem ipsum sunt, nulla eius, blanditiis, fuga
        labore. Quaerat saepe esse beatae, culpa similique quia. Facilis, quo.
      </p>
    </div>
  </>
);

export const DefaultHero = Template.bind({});
DefaultHero.args = {
  testId: 'hero-default',
  backgroundProps: {
    source: '/demo-assets/background-image.jpg',
    opacity: 0.4
  },
  avatarProps: {
    src: '/demo-assets/dog.jpg',
    size: 'large',
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
      { icon: 'linkedin', href: 'https://linkedin.com' },
      { icon: 'github', href: 'https://github.com' },
      { icon: 'instagram', href: 'https://instagram.com' }
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

export const AlternateHero = Template.bind({});
AlternateHero.args = {
  testId: 'hero-alternate',
  backgroundProps: {
    source: '/demo-assets/background-image.jpg',
    opacity: 0.5
  },
  avatarProps: {
    src: '/demo-assets/dog.jpg',
    size: 'large',
    alt: 'User Avatar'
  },
  headingProps: {
    children: 'Discover the Difference',
    isWhite: true
  },
  subheadingProps: {
    children: 'Innovation meets excellence',
    isWhite: true
  },
  socialMediaProps: {
    configs: [
      { icon: 'linkedin', href: 'https://linkedin.com' },
      { icon: 'github', href: 'https://github.com' }
    ]
  },
  navBarProps: {
    linkConfigs: [
      { name: 'Portfolio', href: '#' },
      { name: 'Services', href: '#' },
      { name: 'Blog', href: '#' }
    ]
  },
  scrollThreshold: 300
};
