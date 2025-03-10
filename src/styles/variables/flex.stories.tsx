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
    <div className="align-left" style={{ border: '1px solid black', padding: '10px', marginBottom: '10px' }}>
      <p>Aligned Left</p>
    </div>
    <div className="align-center" style={{ border: '1px solid black', padding: '10px', marginBottom: '10px' }}>
      <p>Aligned Center</p>
    </div>
    <div className="align-right" style={{ border: '1px solid black', padding: '10px' }}>
      <p>Aligned Right</p>
    </div>
  </div>
);

export const Default = Template.bind({});