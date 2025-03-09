import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Icon, { IconProps } from './icon';
import icons, { IconName } from './icon-map';

export default {
  title: 'Elements/Icon',
  component: Icon,
  tags: ['autodocs'],
} as Meta;

const Template: StoryFn<typeof Icon> = (args: IconProps) => (
  <div>
    {Object.keys(icons).map((iconName) => (
      <Icon {...args} icon={iconName as IconName} key={iconName} testId={`icon-${iconName}`} />
    ))}
  </div>
);

export const AllIcons = Template.bind({});
AllIcons.args = {
  size: '24px',
  color: 'black',
};
