import React from 'react';
import Footer from './index';

const Template = (args) => <Footer {...args} />;

export const Basic = Template.bind({});
Basic.args = {};

export default {
  title: 'Footer',
  component: Footer,
  argTypes: {}
};
