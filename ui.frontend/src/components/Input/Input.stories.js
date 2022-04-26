import React from 'react';
import Input from './index';

export default {
  title: 'Input',
  component: Input,
  argTypes: {}
};

const Template = (args) => <Input {...args} />;

export const Basic = Template.bind({});
Basic.args = {};

export const Email = Template.bind({});
Email.args = {
  text: 'Email',
  type: 'email',
};

export const Password = Template.bind({});
Password.args = {
  text: 'Password',
  type: 'password',
};
