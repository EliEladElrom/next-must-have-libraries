/*
Author: Eli Elad Elrom
Website: https://EliElrom.com
License: MIT License
*/

import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import TemplateName from './TemplateName';

export default {
  title: 'Components/TemplateName',
  component: TemplateName,
  argTypes: {
    // TODO
  },
} as ComponentMeta<typeof TemplateName>;

const Template: ComponentStory<typeof TemplateName> = (args) => <TemplateName {...args} />;

export const Default = Template.bind({});
Default.args = {
  // TODO
};
