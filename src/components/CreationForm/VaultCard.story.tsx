import { Story, Meta } from '@storybook/react';
import { VaultCard as VC } from './VaultCard';

export default {
  title: 'CreationForm/VaultCard',
  component: VC,
} as Meta;

export const VaultCard: Story = () => {
  return <VC />;
};
