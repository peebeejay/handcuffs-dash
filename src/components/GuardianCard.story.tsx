import { Story, Meta } from '@storybook/react';
import { GuardianCard as GuardianCardComponent } from './GuardianCard';
import { ShieldPurple, Gray3, TextLight } from '../colors';

export default {
    title: 'App/GuardianCard',
    component: GuardianCardComponent,
} as Meta;

export const GuardianCard: Story = () => {
    return <GuardianCardComponent 
        color = {ShieldPurple}
        address = '0xca...4d67'
        status = 'Pending'
    />;
};
