import React from 'react';

import { Button } from './Button';

export default {
  title: 'Example/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  size: 'medium',
  label: 'Book Now',
};

export const Secondary = Template.bind({});
Secondary.args = {
  size: 'large',
  label: 'Welcome to BodyWorks!',
};

export const Large = Template.bind({});
Large.args = {
  size: 'medium',
  label: 'Cancel Booking',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Like',
};

export const Medium = Template.bind({});
Medium.args = {
  
  size: Medium,
  label: 'Join Now',
};



