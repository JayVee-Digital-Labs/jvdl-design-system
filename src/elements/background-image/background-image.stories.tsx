import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import BackgroundImage from './background-image';

export default {
  title: 'Elements/BackgroundImage',
  tags: ['Elements', 'background-image', 'autodocs'],
  component: BackgroundImage,
  parameters: {
    docs: {
      description: {
        component:
          'A component that renders a background image with an optional dark overlay. By default, it covers the full screen, but this can be customized via the className prop.'
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

export const CustomHeightBackgroundImage = Template.bind({});
CustomHeightBackgroundImage.args = {
  source: '/demo-assets/background-image.jpg',
  testId: 'background-image-custom-height',
  className: 'h-64', // Custom fixed height using Tailwind
  children: (
    <div
      style={{
        color: 'white',
        textAlign: 'center',
        height: '100%',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
      <h2>Custom Height Background (16rem/256px)</h2>
    </div>
  )
};

export const CustomClassBackgroundImage = Template.bind({});
CustomClassBackgroundImage.args = {
  source: '/demo-assets/background-image.jpg',
  testId: 'background-image-custom-class',
  className: 'h-80 rounded-lg shadow-lg',
  children: (
    <div
      style={{
        color: 'white',
        textAlign: 'center',
        height: '100%',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
      <h2>Custom Styling with Rounded Corners</h2>
    </div>
  )
};
