import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import SimpleNavBar from './simple-nav-bar';

const linkConfigs = [
  {
    name: 'Services',
    active: true
  },
  {
    name: 'Projects'
  },
  {
    name: 'Articles'
  },
  {
    name: 'About',
    href: 'https://google.com'
  }
];

const onClick = (link: string) => {
  console.log(`Link clicked: ${link}`);
};

export default {
  title: 'Components/SimpleNavBar',
  tags: ['autodocs'],
  component: SimpleNavBar,
  parameters: {
    docs: {
      description: {
        component:
          'A Simple Navigation Bar component that renders links based on provided configurations.'
      }
    }
  }
} as Meta;

const Template: StoryFn<typeof SimpleNavBar> = args => (
  <SimpleNavBar {...args} />
);

export const DefaultNavigation = Template.bind({});
DefaultNavigation.args = {
  linkConfigs,
  onClick
};

export const ActiveLinkNavigation = Template.bind({});
ActiveLinkNavigation.args = {
  linkConfigs: [
    {
      name: 'Home',
      active: true
    },
    {
      name: 'Services'
    },
    {
      name: 'Contact',
      href: 'https://example.com'
    }
  ],
  onClick
};

export const WhiteTextNavigation = Template.bind({});
WhiteTextNavigation.args = {
  linkConfigs,
  onClick,
  forceWhiteText: true
};
WhiteTextNavigation.decorators = [
  Story => (
    <div style={{ backgroundColor: '#333', padding: '20px' }}>
      <Story />
    </div>
  )
];
