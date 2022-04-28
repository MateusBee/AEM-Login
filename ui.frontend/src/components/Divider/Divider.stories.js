import React from 'react';
import Divider from './index';

const Template = (args) => <Divider {...args} />;

export const Basic = Template.bind({});
Basic.args = {};

export default {
  title: 'Divider',
  component: Divider,
  argTypes: {}
};
