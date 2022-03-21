import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Icon from './Icon';

export default {
  title: 'UI Components/Icon',
  component: Icon,
} as ComponentMeta<typeof Icon>;

const Template: ComponentStory<typeof Icon> = (args) => <Icon {...args} />;

export const Default = Template.bind({});
Default.args = {
  alt: 'icon',
  width: 32,
  height: 32,
  iconFilename: 'vercel.svg',
};
