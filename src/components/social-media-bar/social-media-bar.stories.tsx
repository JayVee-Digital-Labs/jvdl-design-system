import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import SocialMediaBar, { SocialMediaBarProps } from '@/components/social-media-bar/social-media-bar';

export default {
  tags: ['autodocs'],
  title: 'Components/SocialMediaBar',
  component: SocialMediaBar,
  parameters: {
    docs: {
      description: {
        story: 'SocialMediaBar component that displays a list of social media icons with links.',
      },
    },
  },
} as Meta;

const Template: StoryFn<SocialMediaBarProps> = (args) => <div className={'align-center'}><SocialMediaBar {...args} /></div>;

export const Default = Template.bind({});
Default.args = {
  configs: [
    { icon: 'github', href: 'https://github.com' },
    { icon: 'linkedin', href: 'https://linkedin.com' },
    { icon: 'instagram', href: 'https://instagram.com' },
    { icon: 'strava', href: 'https://strava.com' },
    { icon: 'email', href: 'mailto:example@example.com' },
    { icon: 'profile-card', href: 'https://profile.com' },
  ],
  testId: 'social-media-bar',
  applyDropShadow: true,
};

export const NoDropShadow = Template.bind({});
NoDropShadow.args = {
  configs: [
    { icon: 'github', href: 'https://github.com' },
    { icon: 'linkedin', href: 'https://linkedin.com' },
    { icon: 'instagram', href: 'https://instagram.com' },
    { icon: 'strava', href: 'https://strava.com' },
    { icon: 'email', href: 'mailto:example@example.com' },
    { icon: 'profile-card', href: 'https://profile.com' },
  ],
  testId: 'social-media-bar',
  applyDropShadow: false,
};