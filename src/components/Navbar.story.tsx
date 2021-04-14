import { Story, Meta } from '@storybook/react';
import { Navbar as NavbarComponent } from './Navbar';

export default {
  title: 'App/Navbar',
  component: NavbarComponent,
} as Meta;

export const Navbar: Story = () => {
  return <NavbarComponent />;
};
