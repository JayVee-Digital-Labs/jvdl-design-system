import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import BackgroundImage from './background-image';

export default {
  title: 'Elements/BackgroundImage',
  tags: ['Elements', 'background-image'],
  component: BackgroundImage,
  parameters: {
    docs: {
      description: {
        component:
          'A component that renders a full-screen background image with an optional dark overlay.'
      }
    }
  }
} as Meta;

const Template: StoryFn<typeof BackgroundImage> = args => (
  <BackgroundImage {...args} />
);

export const DefaultBackgroundImage = Template.bind({});
DefaultBackgroundImage.args = {
  source: '/demo-assets/background-image.jpg',
  testId: 'background-image-default',
  children: (
    <div
      style={{
        color: 'white',
        textAlign: 'center',
        paddingTop: '50%',
        height: '500px',
        width: '100%'
      }}>
      Default Background Image
    </div>
  )
};

export const CustomOpacityBackgroundImage = Template.bind({});
CustomOpacityBackgroundImage.args = {
  source: '/demo-assets/background-image.jpg',
  opacity: 0.7,
  testId: 'background-image-custom-opacity',
  children: (
    <div
      style={{
        color: 'white',
        textAlign: 'center',
        paddingTop: '50%',
        height: '500px',
        width: '100%'
      }}>
      Custom Opacity Background Image
    </div>
  )
};
