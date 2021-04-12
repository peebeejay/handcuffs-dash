import { Story, Meta } from '@storybook/react';
import { VaultCreated as VaultCreatedComponent } from './VaultCreated';

export default {
  title: 'CreationForm/VaultCreated',
  component: VaultCreatedComponent,
} as Meta;

export const VaultCreated: Story = () => {
  return <VaultCreatedComponent />;
};
