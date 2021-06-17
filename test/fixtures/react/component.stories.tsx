import { Story } from '@storybook/react';
import * as React from 'react';
import { RandomComponent } from './component.js';

// eslint-disable-next-line react/jsx-props-no-spreading
const Template: Story = (args) => <RandomComponent name="random" {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  // primary: true,
  // label: 'RandomComponent',
};
