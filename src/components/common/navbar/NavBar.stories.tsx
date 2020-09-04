import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';
import { NavBarProps } from './NavBar.types';
import { NavBar } from './NavBar';


export default {
  title: 'NavBar',
  component: NavBar,
} as Meta;


const Template: Story<NavBarProps> = (args) => <NavBar {...args}></NavBar>;


export const Basic = Template.bind({});
Basic.args = {


};

