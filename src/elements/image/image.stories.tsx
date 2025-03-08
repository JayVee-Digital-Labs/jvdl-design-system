import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { Image, ImageProps } from './image';

export default {
  tags: ['elements', 'image', 'autodocs'],
  title: 'Elements/Image',
  component: Image,
  parameters: {
    docs: {
      description: {
        story: 'The Image component renders an image with customizable position and dimensions.',
      },
    },
  },
} as Meta;

const Template: StoryFn<ImageProps> = (args) => <Image {...args} />;

export const Default = Template.bind({});
Default.args = {
  src: '/demo-assets/dog.jpg',
  alt: 'Reference Image',
  position: 'cover',
  width: '300px',
  height: '300px',
};