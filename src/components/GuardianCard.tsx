import { Gray1, Gray3, Gray4, TextDark, TextLight } from '../colors';

import React from 'react';
import { rem } from 'polished';
import styled from 'styled-components';

type Props = {
  address: string;
  status: number;
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  border: 1px solid ${Gray3};
  width: ${rem(240)};
  height: ${rem(230)};
  border-radius: ${rem(16)};
  background: linear-gradient(to bottom, ${Gray1} 0%, ${Gray1} 64px, #FFFFFF 64px, #FFFFFF 100%);
`;

const Ellipse = styled.div`
  border-radius: 50%;
  background: #EBE4FF;
  height: ${rem(64)};
  width: ${rem(64)};
  margin-top: ${rem(32)};
`;

const Address = styled.div`
  margin-top: ${rem(16)};
  color: ${TextLight};
  font-weight: 500;
`;

const StatusArea = styled.div`
  margin-top: ${rem(16)};
  color: ${Gray4};
`;

export const GuardianCard = (props: Props) => {
  const { address, status } = props;

  const renderStatus = () => {
    return (
      <StatusArea>
        Pending
      </StatusArea>
    );
  }

  return (
    <Container>
      <Ellipse></Ellipse>
      <Address>{address}</Address>
      {renderStatus()}
    </Container>
  );
};