import styled from 'styled-components';
import { rem } from 'polished';
import { Link } from '../components/shared/Link';
import { LargeHeader } from '../components/typography/LargeHeader';
import { Button } from '../components/shared/Button';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const LandingHeader = styled(LargeHeader)`
  margin-top: ${rem(100)};
  max-width: ${rem(550)};
  text-align: center;
`;

const CreateVaultButton = styled(Button)`
  margin-top: ${rem(24)};
`;

export const Landing = () => {
  return (
    <Container>
      <LandingHeader>{'Hey, protect your tokens with social recovery.'}</LandingHeader>
      <Link to="/create">
        <CreateVaultButton>{'Create Vault'}</CreateVaultButton>
      </Link>
    </Container>
  );
};
