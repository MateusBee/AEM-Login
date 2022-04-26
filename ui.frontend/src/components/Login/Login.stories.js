import React from 'react';
import Login from './index';

export default {
  title: 'Login',
  component: Login,
  argTypes: {}
};

const Template = (args) => <Login {...args} />;

export const Basic = Template.bind({});
Basic.args = {};
