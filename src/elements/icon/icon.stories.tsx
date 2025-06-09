import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Icon, { IconProps } from './icon';
import icons, { IconName } from './icon-map';

export default {
  title: 'Elements/Icon',
  component: Icon,
  tags: ['autodocs'],
  argTypes: {
    icon: {
      control: 'select',
      options: Object.values(IconName)
    }
  }
} as Meta;

const Template: StoryFn<typeof Icon> = (args: IconProps) => (
  <div>
    <p>All available icons:</p>

    {Object.keys(icons).map(iconName => (
      <Icon
        {...args}
        icon={iconName as IconName}
        key={iconName}
        testId={`icon-${iconName}`}
      />
    ))}
  </div>
);

const TemplateIndividual: StoryFn<typeof Icon> = (args: IconProps) => (
  <div>
    <Icon {...args} />
  </div>
);

export const AllIcons = Template.bind({});
AllIcons.args = {
  size: '24px',
  color: 'black'
};

export const IndividualIcon = TemplateIndividual.bind({});
IndividualIcon.args = {
  size: '24px',
  color: 'black',
  icon: IconName.EMAIL
};
