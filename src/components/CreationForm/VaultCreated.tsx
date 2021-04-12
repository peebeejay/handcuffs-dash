import styled from 'styled-components';
import { rem, transparentize } from 'polished';
import { StepHeader as SharedStepHeader } from '../typography/StepHeader';
import { SubHeader as SharedSubHeader } from '../typography/SubHeader';
import { ShieldGreen } from '../../colors';
import { ShieldWithCheckMark } from '../icons/ShieldWithCheckMark';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Shield = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: ${rem(44)};
  height: ${rem(44)};
  background-color: ${transparentize(0.8, ShieldGreen)};
  border-radius: 50%;
  margin-bottom: ${rem(16)};

  path {
    fill: ${ShieldGreen};
  }
`;

const StepHeader = styled(SharedStepHeader)`
  text-align: center;
  margin-bottom: ${rem(5)};
`;

const SubHeader = styled(SharedSubHeader)`
  text-align: center;
  margin-bottom: ${rem(32)};
`;

export const VaultCreated = () => {
  return (
    <Container>
      <Shield>
        <ShieldWithCheckMark />
      </Shield>
      <StepHeader>{'Vault Created'}</StepHeader>
      <SubHeader>
        {'Congratulations, your tokens are full protected with social security.'}
      </SubHeader>
    </Container>
  );
};
