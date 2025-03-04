import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import './headers.scss';

export default {
  tags: ['styles', 'header', 'autodocs'],
  title: 'Styles/Headers',
  parameters: {
    docs: {
      description: {
        story: 'You can use classes `header-1` through `header-6` to style your headers.',
      },
    },
  },
} as Meta;

const Template: StoryFn = () => 
  <>
    <h1 className='header-1'>Header 1</h1>
    <h2 className='header-2'>Header 2</h2>
    <h3 className='header-3'>Header 3</h3>
    <h4 className='header-4'>Header 4</h4>
    <h5 className='header-5'>Header 5</h5>
    <h6 className='header-6'>Header 6</h6>
  </>
;

export const Default = Template.bind({});