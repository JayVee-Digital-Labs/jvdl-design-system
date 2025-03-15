import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Heading from './heading';

export default {
  title: 'Elements/Heading',
  tags: ['components', 'elements', 'heading', 'autodocs'],
  component: Heading,
  parameters: {
    docs: {
      description: {
        component:
          'A Header component that renders h1 to h6 tags based on the level prop.'
      }
    }
  }
} as Meta;

const Template: StoryFn<typeof Heading> = args => <Heading {...args} />;

export const Heading1 = Template.bind({});
Heading1.args = {
  level: 1,
  children: 'This is a h1 tag'
};

export const Heading2 = Template.bind({});
Heading2.args = {
  level: 2,
  children: 'This is a h2 tag'
};

export const Heading3 = Template.bind({});
Heading3.args = {
  level: 3,
  children: 'This is a h3 tag'
};

export const Heading4 = Template.bind({});
Heading4.args = {
  level: 4,
  children: 'This is a h4 tag'
};

export const Heading5 = Template.bind({});
Heading5.args = {
  level: 5,
  children: 'This is a h5 tag'
};

export const Heading6 = Template.bind({});
Heading6.args = {
  level: 6,
  children: 'This is a h6 tag'
};

const HeadingWrapper: React.FC<{ children: React.ReactNode }> = ({
  children
}) => (
  <div style={{ backgroundColor: 'black', padding: '10px' }}>{children}</div>
);

export const HeadingWhite = Template.bind({});
HeadingWhite.args = {
  level: 1,
  children: 'This is a h1 tag with white text',
  isWhite: true
};

HeadingWhite.decorators = [
  Story => (
    <HeadingWrapper>
      <Story />
    </HeadingWrapper>
  )
];
