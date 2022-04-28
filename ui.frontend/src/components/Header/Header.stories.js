import React from 'react';
import Header from './index';

const Template = (args) => <Header {...args} />;

export const Basic = Template.bind({});
Basic.args = {};

export default {
  title: 'Header',
  component: Header,
  argTypes: {}
};
