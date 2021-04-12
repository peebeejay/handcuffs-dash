import styled from 'styled-components';
import { rem, transparentize } from 'polished';
import { Gray2, Gray4, TextDark, TextLight } from '../../colors';

const VaultCardContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid ${Gray2};
  box-shadow: 0px ${rem(4)} ${rem(16)} rgba(187, 196, 239, 0.35);
  background-color: white;
  border-radius: ${rem(15)};
  padding: ${rem(16)};
  height: ${rem(150)};
  width: ${rem(350)};
`;

const TopContent = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const LockedBadge = styled.div`
  width: ${rem(55)};
  font-weight: 600;
  font-size: ${rem(14)};
  line-height: ${rem(21)};
  color: ${Gray4};
  text-align: center;
  background-color: ${transparentize(0.9, Gray4)};
  padding: ${rem(5)} ${rem(16)} ${rem(4)};
  border-radius: ${rem(8)};
`;

const Unlock = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  line-height: ${rem(21)};
`;

const UnlockText = styled.div`
  color: ${TextLight};
  padding-right: ${rem(3)};
`;

const MiddleContent = styled.section``;

const VaultNumber = styled.div`
  font-weight: bold;
  font-size: ${rem(24)};
  line-height: ${rem(26)};
  color: ${TextDark};
`;

const BottomContent = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Balance = styled.div``;

const Beneficiary = styled.div``;

const SmallHeader = styled.div`
  font-size: ${rem(16)};
  line-height: ${rem(24)};
  color: ${TextLight};
`;

const Value = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  color: ${TextDark};
  font-weight: 600;
  font-size: ${rem(16)};
  line-height: ${rem(24)};
`;

const SubValue = styled.div`
  padding-left: ${rem(3)};
  font-weight: 400;
  font-size: ${rem(14)};
  line-height: ${rem(21)};
  color: ${TextLight};
`;

export const VaultCard = () => {
  return (
    <VaultCardContainer>
      <TopContent>
        <LockedBadge>{'LOCKED'}</LockedBadge>
        <Unlock>
          <UnlockText>{'Unlock date: '}</UnlockText>
          <span>{`04/12/2021`}</span>
        </Unlock>
      </TopContent>
      <MiddleContent>
        <VaultNumber>{`Vault #4238`}</VaultNumber>
      </MiddleContent>
      <BottomContent>
        <Balance>
          <SmallHeader>{'Balance'}</SmallHeader>
          <Value>
            {'Ξ 0.25'}
            <SubValue>{'($407.63)'}</SubValue>
          </Value>
        </Balance>
        <Beneficiary>
          <SmallHeader>{'Beneficiary'}</SmallHeader>
          <Value>
            {'0xca...4d67'}
            <SubValue>{'(you)'}</SubValue>
          </Value>
        </Beneficiary>
      </BottomContent>
    </VaultCardContainer>
  );
};
