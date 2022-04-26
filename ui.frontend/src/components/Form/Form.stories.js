import React from 'react';
import Form from './index';

const Template = (args) => <Form {...args} />;

export const Basic = Template.bind({});
Basic.args = {};

export default {
  title: 'Form',
  component: Form,
  argTypes: {}
};
