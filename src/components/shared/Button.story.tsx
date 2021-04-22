import { Story, Meta } from '@storybook/react';
import { rem } from 'polished';
import styled from 'styled-components';
import { Button as ButtonComponent } from './Button';

export default {
  title: 'shared/Button',
  component: ButtonComponent,
} as Meta;

const Container = styled.div`
  display: flex;
  flex-direction: column;

  > div {
    margin-bottom: ${rem(15)};
  }
`;

export const Button: Story = () => {
  return (
    <Container>
      <ButtonComponent>Sample Text</ButtonComponent>
      <ButtonComponent disabled>Disabled Button</ButtonComponent>
    </Container>
  );
};
