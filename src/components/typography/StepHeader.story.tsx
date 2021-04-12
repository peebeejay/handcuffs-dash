import { Story, Meta } from '@storybook/react';
import { StepHeader as StepHeaderComponent } from './StepHeader';

export default {
  title: 'typography/StepHeader',
  component: StepHeaderComponent,
} as Meta;

export const StepHeader: Story = () => {
  return <StepHeaderComponent>Sample Text</StepHeaderComponent>;
};
