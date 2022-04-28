import React from 'react';
import Time from './index';

const Template = (args) => <Time {...args} />;

export const Basic = Template.bind({});
Basic.args = {};

export default {
  title: 'Time',
  component: Time,
  argTypes: {}
};
