import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Avatar, { AvatarProps } from '@/components/avatar/avatar';
import '@/styles/image/avatar.scss';

export default {
  tags: ['autodocs'],
  title: 'Components/Avatar',
  component: Avatar,
  parameters: {
    docs: {
      description: {
        story: 'Avatar component that displays a circular image with different sizes and optional drop shadow.',
      },
    },
  },
} as Meta;

const Template: StoryFn<AvatarProps> = (args) => <Avatar {...args} />;

export const Small = Template.bind({});
Small.args = {
  src: '/demo-assets/dog.jpg',
  alt: 'Small Avatar',
  size: 'small',
  applyDropShadow: true,
};

export const Medium = Template.bind({});
Medium.args = {
  src: '/demo-assets/dog.jpg',
  alt: 'Medium Avatar',
  size: 'medium',
  applyDropShadow: true,
};

export const Large = Template.bind({});
Large.args = {
  src: '/demo-assets/dog.jpg',
  alt: 'Large Avatar',
  size: 'large',
  applyDropShadow: true,
};

export const CustomSize = Template.bind({});
CustomSize.args = {
  src: '/demo-assets/dog.jpg',
  alt: 'Custom Size Avatar',
  customSize: '100px',
  applyDropShadow: true,
};

export const NoDropShadow = Template.bind({});
NoDropShadow.args = {
  src: '/demo-assets/dog.jpg',
  alt: 'No Drop Shadow Avatar',
  size: 'medium',
  applyDropShadow: false,
};