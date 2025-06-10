import type { Meta, StoryObj } from '@storybook/react';
import TechStack from './tech-stack';

const meta: Meta<typeof TechStack> = {
  title: 'Components/TechStack',
  component: TechStack,
  tags: ['autodocs']
};

export default meta;

type Story = StoryObj<typeof TechStack>;

export const Default: Story = {
  args: {
    testId: 'tech-stack-default'
  }
};

export const SmallIcons: Story = {
  args: {
    iconSize: 30,
    testId: 'tech-stack-small'
  }
};

export const LargeIcons: Story = {
  args: {
    iconSize: 80,
    testId: 'tech-stack-large'
  }
};

export const ExtraLargeIcons: Story = {
  args: {
    iconSize: 120,
    testId: 'tech-stack-extra-large'
  }
};

export const TinyIcons: Story = {
  args: {
    iconSize: 20,
    testId: 'tech-stack-tiny'
  }
};
