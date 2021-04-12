import { Story, Meta } from '@storybook/react';
import { StepNumber as StepNumberComponent } from './StepNumber';

export default {
  title: 'typography/StepNumber',
  component: StepNumberComponent,
} as Meta;

export const StepNumber: Story = () => {
  return <StepNumberComponent>Sample Text</StepNumberComponent>;
};
