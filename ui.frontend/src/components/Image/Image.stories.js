import React from 'react';
import Image from './index';

const Template = (args) => <Image {...args} />;

export const Basic = Template.bind({});
Basic.args = {};

export default {
  title: 'Image',
  component: Image,
  argTypes: {}
};
