import { Story, Meta } from '@storybook/react';
import { DetailCard as DetailCardComponent } from './DetailCard';

export default {
  title: 'App/DetailCard',
  component: DetailCardComponent,
} as Meta;

export const DetailCard: Story = () => {
  return (
    <>
      <DetailCardComponent title="Balance" amount="Ξ 0.25" subAmount="$407.63" />
      <DetailCardComponent title="Beneficiary" amount="0xca...4d67" subAmount="you" />
    </>
  );
};
