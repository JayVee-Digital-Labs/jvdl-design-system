import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import './text-align.scss';

export default {
  tags: ['styles', 'variables', 'autodocs'],
  title: 'Styles/Text Align',
  parameters: {
    docs: {
      description: {
        story: 'This story showcases the different text alignment classes available in the design system.',
      },
    },
  },
} as Meta;

const Template: StoryFn = () => (
  <div>
    <h1 className='heading-1'>Text Alignment Classes</h1>
    <div className="text-left" style={{ border: '1px solid black', padding: '10px', marginBottom: '10px' }}>
      <p>Text Aligned Left</p>
    </div>
    <div className="text-center" style={{ border: '1px solid black', padding: '10px', marginBottom: '10px' }}>
      <p>Text Aligned Center</p>
    </div>
    <div className="text-right" style={{ border: '1px solid black', padding: '10px', marginBottom: '10px' }}>
      <p>Text Aligned Right</p>
    </div>
    <div className="text-justify" style={{ border: '1px solid black', padding: '10px' }}>
      <p>
        Text Justified. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa.
      </p>
    </div>
  </div>
);

export const Default = Template.bind({});