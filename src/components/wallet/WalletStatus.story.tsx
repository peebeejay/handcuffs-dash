import { Story, Meta } from '@storybook/react';
import { WalletStatus as WalletStatusComponent } from './WalletStatus';

export default {
  title: 'app/WalletStatus',
  component: WalletStatusComponent,
} as Meta;

export const WalletStatus: Story = () => {
  return (
    <WalletStatusComponent
      account="0xaE32D159BB3ABFcAdFaBE7aBB461C2AB4805596D"
      onClick={() => console.log('wallet status on click')}
    />
  );
};
