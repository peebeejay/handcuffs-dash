import React, { useContext } from 'react';
import styled from 'styled-components';
import { rem } from 'polished';
import MUTextField from '@material-ui/core/TextField';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { CreationFormState, CreationFormDispatch, Stages } from './CreationFormProvider';
import { StepNumber } from '../typography/StepNumber';
import { SubHeader } from '../typography/SubHeader';
import { StepHeader as SharedStepHeader } from '../typography/StepHeader';
import { Navigation } from './Navigation';
import { Divider } from '../shared/Divider';

const StepHeader = styled(SharedStepHeader)`
  margin-bottom: ${rem(16)};
`;

const Input = styled(MUTextField)`
  width: 300px;
  && {
    margin-left: ${rem(12)};
    input {
      height: ${rem(15)};
      font-family: 'Poppins', sans-serif;
    }
  }
`;

export const SecondStage = () => {
  const formData = useContext(CreationFormState);
  const { updateState } = useContext(CreationFormDispatch);

  return (
    <>
      <StepNumber>{'Step 02'}</StepNumber>
      <StepHeader>{'Add details & funds.'}</StepHeader>
      <SubHeader>{`Locked until`}</SubHeader>
      <Input
        value={'Today'}
        variant="outlined"
        placeholder={'Address or ENS'}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          e.preventDefault();
        }}
      />

      <SubHeader>{`Beneficary`}</SubHeader>
      <RadioGroup
        aria-label="gender"
        name="gender1"
        value={'female'}
        onChange={() => console.log('test')}
      >
        <FormControlLabel value="female" control={<Radio />} label="Myself" />
        <FormControlLabel value="male" control={<Radio />} label="Other Address" />
      </RadioGroup>
      <SubHeader>{`Protected Amount`}</SubHeader>
      <Input
        value={'Today'}
        variant="outlined"
        placeholder={'Enter ETH Amount'}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          e.preventDefault();
        }}
      />
      <Divider />
      <Navigation
        onClickBack={() => updateState({ ...formData, stage: Stages.First })}
        onClickContinue={() => updateState({ ...formData, stage: Stages.Third })}
      />
    </>
  );
};
