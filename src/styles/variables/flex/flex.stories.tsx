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
      <code>.flex .align-left</code>
    </div>
    <div className="flex align-center" style={{ border: '1px solid black', padding: '10px', marginBottom: '10px' }}>
      <code>.flex .align-center</code>
    </div>
    <div className="flex align-right" style={{ border: '1px solid black', padding: '10px' }}>
      <code>.flex .align-right</code>
    </div>
    <div className="flex flex-align-left" style={{ border: '1px solid black', padding: '10px', marginBottom: '10px' }}>
      <code>.flex .flex-align-left</code>
    </div>
    <div className="flex flex-align-center" style={{ border: '1px solid black', padding: '10px', marginBottom: '10px' }}>
      <code>.flex .flex-align-center</code>
    </div>
    <div className="flex flex-align-right" style={{ border: '1px solid black', padding: '10px' }}>
      <code>.flex .flex-align-right</code>
    </div>
    <div className="flex flex-column" style={{ border: '1px solid black', padding: '10px', marginBottom: '10px' }}>
      <code>.flex .flex-column</code>
      <code>&nbsp; Item</code>
      <code>&nbsp; Item</code>
    </div>
    <div className="flex flex-row" style={{ border: '1px solid black', padding: '10px', marginBottom: '10px' }}>
      <code>.flex .flex-row </code>
      <code>&nbsp; Item</code>
      <code>&nbsp; Item</code>
    </div>
    <div className="flex flex-align-items-center" style={{ border: '1px solid black', padding: '10px', marginBottom: '10px', height: '100px' }}>
      <code>.flex .flex-align-items-center</code>
      <code>&nbsp; Item</code>
      <code>&nbsp; Item</code>
    </div>
    <div className="flex flex-wrap" style={{ border: '1px solid black', padding: '10px', marginBottom: '10px', height: '100px' }}>
      <code>.flex .flex-wrap</code>
    </div>
    <div className="flex-center-all" style={{ border: '1px solid black', padding: '10px', height: '100px' }}>
      <code>.flex-center-all</code>
    </div>
  </div>
);

export const Default = Template.bind({});