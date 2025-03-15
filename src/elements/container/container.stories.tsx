import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Container from './container';

export default {
  title: 'Elements/Container',
  tags: ['components', 'elements', 'container', 'autodocs'],
  component: Container,
  parameters: {
    docs: {
      description: {
        component:
          'The Container component allows you to set custom margins for its content. Useful for creating consistent spacing between elements.'
      }
    }
  }
} as Meta;

const Template: StoryFn = args => (
  <Container {...args}>
    <div style={{ width: '100%', height: '100%', backgroundColor: 'black' }}>
      <p style={{ color: 'white', textAlign: 'center' }}>This is a container</p>
    </div>
  </Container>
);

export const Default = Template.bind({});
Default.args = {
  marginLeft: '20px',
  marginRight: '20px',
  marginTop: '20px',
  marginBottom: '20px'
};

export const CustomMargins = Template.bind({});
CustomMargins.args = {
  marginLeft: '50px',
  marginRight: '50px',
  marginTop: '50px',
  marginBottom: '50px'
};
