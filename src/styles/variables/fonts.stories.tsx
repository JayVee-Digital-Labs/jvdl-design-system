import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import './index.scss';

export default {
  tags: ['styles', 'variables', 'autodocs'],
  title: 'Styles/Font Sizes',
  parameters: {
    docs: {
      description: {
        story:
          'This story showcases the different font sizes available in the design system.'
      }
    }
  }
} as Meta;

const Template: StoryFn = () => (
  <div>
    <h1 className='heading-1'>Font Sizes</h1>
    <p>
      Note that the header class name will not match semantically with the
      element use. See header style documentation.
    </p>
    <p className='font-size-heading-1'>Header 1</p>
    <p className='font-size-heading-2'>Header 2</p>
    <p className='font-size-heading-3'>Header 3</p>
    <p className='font-size-heading-4'>Header 4</p>
    <p className='font-size-heading-5'>Header 5</p>
    <p className='font-size-heading-6'>Header 6</p>
  </div>
);

export const Default = Template.bind({});
