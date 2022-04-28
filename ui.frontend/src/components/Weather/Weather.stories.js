import React from 'react';
import Weather from './index';

const Template = (args) => <Weather {...args} />;

export const Basic = Template.bind({});
Basic.args = {};

export default {
  title: 'Weather',
  component: Weather,
  argTypes: {}
};
