import type { Meta, StoryObj } from '@storybook/react';
import Hero, { HeroProps } from './hero';

const meta: Meta<typeof Hero> = {
  title: 'Sections/Hero',
  component: Hero,
  tags: ['autodocs']
};

export default meta;

type Story = StoryObj<typeof Hero>;

export const Default: Story = {
  args: {
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
  } as HeroProps
};
