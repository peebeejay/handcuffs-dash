import React from 'react';
import styled from 'styled-components';
import { rem } from 'polished';
import { PrimaryBlue, PrimaryBlueDark } from '../../colors';

type Props = {
  children: React.ReactNode;
  className?: string;
  onClick?: React.MouseEventHandler;
};

const StyledButton = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-size: ${rem(16)};
  line-height: ${rem(24)};
  height: ${rem(24)};
  background-color: ${PrimaryBlue};
  padding: ${rem(16)} ${rem(24)};
  border-radius: ${rem(8)};
  transition: 250ms background-color ease;
  cursor: pointer;
  color: white;

  &:hover {
    background-color: ${PrimaryBlueDark};
  }
`;

export const Button = ({ children, className, onClick }: Props) => {
  return (
    <StyledButton className={className} onClick={onClick}>
      {children}
    </StyledButton>
  );
};
