import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import TemplateName from './TemplateName';

export default {
  title: 'TODO/TemplateName',
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
