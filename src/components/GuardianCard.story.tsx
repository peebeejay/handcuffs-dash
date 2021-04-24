import { Meta, Story } from '@storybook/react';

import { GuardianCard as GuardianCardComponent } from './GuardianCard';

export default {
  title: 'App/GuardianCard',
  component: GuardianCardComponent,
} as Meta;

export const GuardianCard: Story = () => {
  return <GuardianCardComponent 
    address="0xca...4d67"
    status={1}
    />;
};
