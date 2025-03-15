import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import './index.scss';

export default {
  tags: ['styles', 'variables', 'autodocs'],
  title: 'Styles/Font Weights',
  parameters: {
    docs: {
      description: {
        story:
          'This story showcases the different font weights available in the design system.'
      }
    }
  }
} as Meta;

const Template: StoryFn = () => (
  <div>
    <h1 className='heading-1'>Font Weights</h1>
    <p className='font-weight-extra-light'>
      Extra Small Text - font-weight-extra-light
    </p>
    <p className='font-weight-light'>Small Text - font-weight-light</p>
    <p className='font-weight-normal'>Medium Text - font-weight-normal</p>
    <p className='font-weight-bold'>Large Text - font-weight-bold</p>
    <p className='font-weight-extra-bold'>
      Extra Large Text - font-weight-extra-bold
    </p>
  </div>
);

export const Default = Template.bind({});
