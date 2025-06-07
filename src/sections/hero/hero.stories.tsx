import type { Meta, StoryObj } from '@storybook/react';
import Hero, { HeroProps } from './hero';

const meta: Meta<typeof Hero> = {
  title: 'Sections/Hero',
  component: Hero,
  tags: ['autodocs']
};

export default meta;

type Story = StoryObj<typeof Hero>;

// Common props to reuse across stories
const commonProps: HeroProps = {
  title: 'Jay Vee Digital Labs',
  subtitle: "Let's build better software together",
  backgroundImageProps: {
    source: '/demo-assets/background-image.jpg'
  },
  socialMediaBarProps: {
    configs: [
      { href: 'https://github.com/', icon: 'github' },
      { href: 'https://linkedin.com/', icon: 'linkedin' }
    ],
    testId: 'social-media-bar'
  }
} as HeroProps;

export const Default: Story = {
  args: {
    ...commonProps
  }
};

// Example with 70% of the viewport height
export const SeventyPercentScreen: Story = {
  args: {
    ...commonProps,
    title: '70% Height Hero',
    showPercentageFullScreen: 70
  }
};

// Example with 50% of the viewport height
export const HalfScreen: Story = {
  args: {
    ...commonProps,
    title: '50% Height Hero',
    showPercentageFullScreen: 50
  }
};
