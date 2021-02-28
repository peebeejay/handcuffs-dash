import React from 'react';
import styled from 'styled-components';
import { rem } from 'polished';
import { Gray1, Gray2, Gray3, Gray4, TextDark } from '../colors';
import { MoonIcon } from './icons/Moon';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: ${rem(70)};
  border-bottom: 1px solid ${Gray2};
`;

const ContentLeft = styled.div`
  margin-left: ${rem(32)};
`;

const Name = styled.div`
  color: ${TextDark};
  font-size: ${rem(16)};
`;

const ContentRight = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const ConnectWalletButton = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: ${rem(10)} ${rem(24)};
  width: ${rem(125)};
  height: ${rem(24)};
  font-size: ${rem(16)};
  color: ${TextDark};
  border-radius: ${rem(8)};
  border: 1px solid ${Gray3};
  transition: 250ms background ease;
  cursor: pointer;

  &:hover {
    background: ${Gray1};
  }
`;

const ThemeToggleButton = styled.div`
  margin: auto ${rem(22)} auto ${rem(10)};
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: ${rem(44)};
  width: ${rem(44)};
  transition: 250ms background ease, 250ms fill ease;
  cursor: pointer;
  border-radius: ${rem(8)};

  &:hover {
    background: ${Gray1};
    path {
      fill: ${TextDark};
    }
  }
`;

const StyledMoonIcon = styled(MoonIcon)`
  path {
    transition: 250ms ease;
    fill: ${Gray4};
  }
`;

export const Navbar = () => {
  return (
    <Container>
      <ContentLeft>
        <Name>Handcuffs</Name>
      </ContentLeft>
      <ContentRight>
        <ConnectWalletButton>Connect Wallet</ConnectWalletButton>
        <ThemeToggleButton>
          <StyledMoonIcon />
        </ThemeToggleButton>
      </ContentRight>
    </Container>
  );
};
