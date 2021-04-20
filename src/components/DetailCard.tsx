import styled from 'styled-components';
import { rem } from 'polished';
import { Gray3, TextLight } from '../colors';

type Props = {
  title: string;
  amount: string;
  subAmount: string;
};

const Container = styled.div`
  width: ${rem(370)};
  border: 1px solid ${Gray3};
  border-radius: ${rem(16)};
  padding: ${rem(12)} ${rem(24)};
`;

const Title = styled.div`
  color: ${TextLight};
  font-size: ${rem(16)};
  line-height: ${rem(24)};
`;

const Values = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

const MainValue = styled.div`
  font-weight: bold;
  font-size: ${rem(26)};
`;

const SubValue = styled.div`
  color: ${TextLight};
  font-size: ${rem(14)};
  margin-left: ${rem(5)};
`;

export const DetailCard = (props: Props) => {
  const { title, amount, subAmount } = props;

  return (
    <Container>
      <Title>{title}</Title>
      <Values>
        <MainValue>{amount}</MainValue>
        <SubValue>{`(${subAmount})`}</SubValue>
      </Values>
    </Container>
  );
};
