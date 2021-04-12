import { Story, Meta } from '@storybook/react';
import { SubHeader as SubHeaderComponent } from './SubHeader';

export default {
  title: 'typography/SubHeader',
  component: SubHeaderComponent,
} as Meta;

export const SubHeader: Story = () => {
  return <SubHeaderComponent>Sample Text</SubHeaderComponent>;
};
