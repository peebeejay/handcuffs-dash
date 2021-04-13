import { Story, Meta } from '@storybook/react';
import styled from 'styled-components';
import { Vaults as VaultsPage } from './Vaults';

export default {
  title: 'Pages/Vaults',
  component: VaultsPage,
} as Meta;

const Container = styled.div`
  position: relative;
  background-color: white;
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  min-height: 100vh;
`;

export const Vaults: Story = () => {
  return (
    <Container>
      <VaultsPage />
    </Container>
  );
};
