import { useContext } from 'react';
import styled from 'styled-components';
import { rem } from 'polished';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import LuxonUtils from '@date-io/luxon';
import { ProgressBar } from '../ProgressBar';
import { CreationFormState, CreationFormDispatch, Stages } from './CreationFormProvider';
import { FirstStage } from './FirstStage';
import { SecondStage } from './SecondStage';
import { Success } from './Success';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Form = styled.div`
  width: ${rem(370)};
  margin-top: ${rem(150)};
`;

export const CreationForm = () => {
  const formData = useContext(CreationFormState);
  const dispatch = useContext(CreationFormDispatch);

  return (
    <>
      <MuiPickersUtilsProvider utils={LuxonUtils}>
        <ProgressBar percentFilled={((formData.stage + 1) / 3) * 100} />
        <Container>
          <Form>
            {formData.stage === Stages.First && <FirstStage />}
            {formData.stage === Stages.Second && <SecondStage />}
            {formData.stage === Stages.Third && <Success />}
          </Form>
        </Container>
      </MuiPickersUtilsProvider>
    </>
  );
};
