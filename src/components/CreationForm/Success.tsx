import styled from 'styled-components';
import { rem } from 'polished';
// import { CreationFormState, CreationFormDispatch } from './CreationFormProvider';
import { Button } from '../shared/Button';
import { VaultCard } from './VaultCard';
import { VaultCreated } from './VaultCreated';
import { Link } from '../shared/Link';

const StyledButton = styled(Button)`
  margin-top: ${rem(40)};
  max-width: ${rem(170)};
`;

const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Success = () => {
  // const formData = useContext(CreationFormState);
  // const dispatch = useContext(CreationFormDispatch);

  return (
    <Container>
      <VaultCreated />
      <VaultCard />
      <Link to="/vaults">
        <StyledButton>{'Go to my Vaults'}</StyledButton>
      </Link>
    </Container>
  );
};
