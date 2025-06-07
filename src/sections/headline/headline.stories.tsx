import type { Meta, StoryObj } from '@storybook/react';
import { Headline } from './headline';

const meta: Meta<typeof Headline> = {
  title: 'Sections/Headline',
  component: Headline,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {
    headingLevel: {
      control: { type: 'select' },
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6']
    }
  }
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    source: '/demo-assets/dog.jpg',
    text: 'Welcome to Our Platform',
    description: 'Discover amazing features and connect with our community.',
    testId: 'headline-default'
  }
};

export const WithH1: Story = {
  args: {
    source: '/demo-assets/dog.jpg',
    text: 'Main Title',
    description: 'This is the primary headline using h1 tag.',
    headingLevel: 1,
    testId: 'headline-h1'
  }
};

export const WithH2: Story = {
  args: {
    source: '/demo-assets/dog.jpg',
    text: 'Section Title',
    description: 'This is a section headline using h2 tag.',
    headingLevel: 2,
    testId: 'headline-h2'
  }
};

export const LongDescription: Story = {
  args: {
    source: '/demo-assets/dog.jpg',
    text: 'Extended Headline',
    description:
      'This is a much longer description that demonstrates how the component handles multiple lines of text and provides detailed information about the content.',
    testId: 'headline-long'
  }
};

export const ShortText: Story = {
  args: {
    source: '/demo-assets/dog.jpg',
    text: 'Hi!',
    description: 'Brief.',
    testId: 'headline-short'
  }
};
