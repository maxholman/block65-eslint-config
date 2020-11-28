import { Story } from '@storybook/react';
import * as React from 'react';
import { RandomComponent } from './component';

// eslint-disable-next-line react/jsx-props-no-spreading
const Template: Story = (args) => <RandomComponent {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  // primary: true,
  // label: 'RandomComponent',
};
