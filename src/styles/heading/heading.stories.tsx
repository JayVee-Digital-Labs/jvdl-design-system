import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import './heading.scss';

export default {
  tags: ['styles', 'header', 'autodocs'],
  title: 'Styles/Heading',
  parameters: {
    docs: {
      description: {
        story:
          'You can use classes `heading-1` through `heading-6` to style your Heading.'
      }
    }
  }
} as Meta;

const Template: StoryFn = () => (
  <>
    <h1 className='heading-1'>Header 1</h1>
    <h2 className='heading-2'>Header 2</h2>
    <h3 className='heading-3'>Header 3</h3>
    <h4 className='heading-4'>Header 4</h4>
    <h5 className='heading-5'>Header 5</h5>
    <h6 className='heading-6'>Header 6</h6>
  </>
);
export const Default = Template.bind({});
