import { Story, Meta } from '@storybook/react';
import { LargeHeader as LargeHeaderComponent } from './LargeHeader';

export default {
  title: 'typography/LargeHeader',
  component: LargeHeaderComponent,
} as Meta;

export const LargeHeader: Story = () => {
  return <LargeHeaderComponent>Sample Text</LargeHeaderComponent>;
};
