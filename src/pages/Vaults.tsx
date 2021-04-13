import styled from 'styled-components';
import { rem } from 'polished';
import { StepHeader } from '../components/typography/StepHeader';
import { Button } from '../components/shared/Button';
import { Gray2, TextLight } from '../colors';
import { Link } from '../components/shared/Link';

const Container = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: auto ${rem(152)};
`;

const PageHeader = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: ${rem(54)};
  margin-bottom: ${rem(24)};
`;

const TablePlaceholder = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: ${Gray2};
  flex: 1;
  padding: ${rem(10)};
  border-radius: ${rem(10)};
  min-height: ${rem(300)};
  color: ${TextLight};
  font-size: ${rem(32)};
`;

export const Vaults = () => {
  return (
    <Container>
      <PageHeader>
        <StepHeader>{'Vaults'}</StepHeader>
        <Link to="/create">
          <Button>{'Create New'}</Button>
        </Link>
      </PageHeader>
      <TablePlaceholder>{'Placeholder for vaults table'}</TablePlaceholder>
    </Container>
  );
};
