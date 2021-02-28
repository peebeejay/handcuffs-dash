import React from 'react';
import styled from 'styled-components';
import { rem } from 'polished';
import { TextDark, PrimaryBlue, PrimaryBlueDark } from '../colors';
import { Link } from 'react-router-dom';

const LandingHeader = styled.div`
  font-weight: 700;
  font-size: ${rem(42)};
  margin-top: ${rem(100)};
  color: ${TextDark};
  max-width: ${rem(550)};
  text-align: center;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const CreateVaultButton = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: ${rem(24)};
  background-color: ${PrimaryBlue};
  padding: ${rem(16)} ${rem(24)};
  border-radius: ${rem(8)};

  transition: 250ms background-color ease;
  cursor: pointer;
  margin-top: ${rem(24)};

  &:hover {
    background-color: ${PrimaryBlueDark};
  }
`;

const CreateLink = styled(Link)`
  font-weight: 500;
  font-size: 16px;
  text-align: center;
  color: white;
  text-decoration: none;
`;

export const Landing = () => {
  return (
    <Container>
      <LandingHeader>{'Hey, protect your tokens with social recovery.'}</LandingHeader>
      <CreateVaultButton>
        <CreateLink to="/create">Create Vault</CreateLink>
      </CreateVaultButton>
    </Container>
  );
};
