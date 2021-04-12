import { Story, Meta } from '@storybook/react';
import { Success as SuccessComponent } from './Success';

export default {
  title: 'CreationForm/Success',
  component: SuccessComponent,
} as Meta;

export const Success: Story = () => {
  return <Success />;
};
