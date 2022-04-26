import React from 'react';
import Timer from './index';

const Template = (args) => <Timer {...args} />;

export const Basic = Template.bind({});
Basic.args = {};

export default {
  title: 'Timer',
  component: Timer,
  argTypes: {}
};
