import React from 'react';
import Button from './index';

const Template = (args) => <Button {...args} />;

export const Basic = Template.bind({});
Basic.args = {};

export const Label = Template.bind({});
Label.args = {
  text: 'Button',
};

export default {
  title: 'Button',
  component: Button,
  argTypes: {}
};
