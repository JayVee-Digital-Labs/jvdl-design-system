import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import './flex.scss';

export default {
  tags: ['styles', 'variables', 'autodocs'],
  title: 'Styles/Flex',
  parameters: {
    docs: {
      description: {
        story: 'This story showcases the different flex alignment classes available in the design system.',
      },
    },
  },
} as Meta;

const Template: StoryFn = () => (
  <div>
    <h1 className='heading-1'>Flex Alignment Classes</h1>
    <div className="flex align-left" style={{ border: '1px solid black', padding: '10px', marginBottom: '10px' }}>
      <p>Aligned Left</p>
    </div>
    <div className="flex align-center" style={{ border: '1px solid black', padding: '10px', marginBottom: '10px' }}>
      <p>Aligned Center</p>
    </div>
    <div className="flex align-right" style={{ border: '1px solid black', padding: '10px' }}>
      <p>Aligned Right</p>
    </div>
    <div className="flex flex-align-left" style={{ border: '1px solid black', padding: '10px', marginBottom: '10px' }}>
      <p>Flex Aligned Left</p>
    </div>
    <div className="flex flex-align-center" style={{ border: '1px solid black', padding: '10px', marginBottom: '10px' }}>
      <p>Flex Aligned Center</p>
    </div>
    <div className="flex flex-align-right" style={{ border: '1px solid black', padding: '10px' }}>
      <p>Flex Aligned Right</p>
    </div>
    <div className="flex flex-column" style={{ border: '1px solid black', padding: '10px', marginBottom: '10px' }}>
      <p>Flex Column</p>
      <p>Item 1</p>
      <p>Item 2</p>
    </div>
    <div className="flex flex-row" style={{ border: '1px solid black', padding: '10px', marginBottom: '10px' }}>
      <p>Flex Row</p>
      <p>Item 1</p>
      <p>Item 2</p>
    </div>
  </div>
);

export const Default = Template.bind({});