import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import ColorTransition, { ColorTransitionProps } from './color-transition';
import Heading from '@/elements/heading/heading';

export default {
  title: 'Decorators/ColorTransition',
  tags: ['decorators', 'color-transition', 'autodocs'],
  component: ColorTransition,
  parameters: {
    docs: {
      description: {
        component:
          'A decorator component that applies CSS animations and color transitions to its children on hover.'
      }
    }
  }
} as Meta;

const Template: StoryFn<ColorTransitionProps> = args => (
  <ColorTransition {...args}>
    <Heading level={1} testId='heading-decorator'>
      Hover over this Heading
    </Heading>
  </ColorTransition>
);

export const HoverFadeInPurple = Template.bind({});
HoverFadeInPurple.args = {
  animation: 'ease-in',
  color: 'purple',
  speed: 200,
  testId: 'hover-fade-in-purple'
};
