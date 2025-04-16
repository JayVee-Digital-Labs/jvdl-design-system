import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Link from './link';

export default {
  title: 'Elements/Link',
  tags: ['components', 'elements', 'link', 'autodocs'],
  component: Link,
  parameters: {
    docs: {
      description: {
        component:
          'A Link component that renders an anchor tag with customizable href and target attributes and hover effects.'
      }
    }
  }
} as Meta;

const Template: StoryFn<typeof Link> = args => <Link {...args} />;

export const DefaultLink = Template.bind({});
DefaultLink.args = {
  href: 'https://example.com',
  children: 'This is a default link'
};

export const NewTabLink = Template.bind({});
NewTabLink.args = {
  href: 'https://example.com',
  children: 'This link opens in a new tab',
  openInNewTab: true
};

export const OnClickExample = Template.bind({});
OnClickExample.args = {
  children: 'This link has an onClick handler'
};
OnClickExample.parameters = {
  actions: { argTypesRegex: '^on.*' }
};

export const SameTabLink = Template.bind({});
SameTabLink.args = {
  href: 'https://example.com',
  children: 'This link opens in the same tab',
  openInNewTab: false
};

export const WithAdditionalClasses = Template.bind({});
WithAdditionalClasses.args = {
  href: 'https://example.com',
  children: 'Link with additional classes',
  additionalClassNames: 'font-bold text-lg'
};

export const WithCustomHoverClasses = Template.bind({});
WithCustomHoverClasses.args = {
  href: 'https://example.com',
  children: 'Link with custom hover classes',
  additionalClassNames: 'hover:font-bold  hover:underline'
};

export const WithTestIdLink = Template.bind({});
WithTestIdLink.args = {
  href: 'https://example.com',
  children: 'Link with test ID for testing',
  testId: 'test-link-id'
};
