import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import FadeOut, { FadeOutProps } from './fade-out';
import Heading from '@/elements/heading/heading';

export default {
  title: 'Decorators/FadeOut',
  tags: ['decorators', 'fade-out', 'autodocs'],
  component: FadeOut,
  parameters: {
    docs: {
      description: {
        component:
          'A decorator component that applies a CSS fade-out animation to its children.'
      }
    }
  }
} as Meta;

const Template: StoryFn<FadeOutProps> = args => (
  <FadeOut {...args}>
    <Heading level={1} testId='heading-fade-out'>
      This Heading will fade out
    </Heading>

    <div>
      <Heading level={2} testId='sub-heading-fade-out'>
        This Sub-Heading will fade out
      </Heading>
    </div>
  </FadeOut>
);

export const DefaultFadeOut = Template.bind({});
DefaultFadeOut.args = {
  duration: 500,
  testId: 'default-fade-out'
};
