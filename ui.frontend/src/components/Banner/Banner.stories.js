import React from 'react';
import Banner from './index';

const Template = (args) => <Banner {...args} />;

export const Basic = Template.bind({});
Basic.args = {};

export default {
  title: 'Banner',
  component: Banner,
  argTypes: {}
};
