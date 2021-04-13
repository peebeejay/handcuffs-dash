import React, { useContext } from 'react';
import styled from 'styled-components';
import { rem } from 'polished';
import MUTextField from '@material-ui/core/TextField';
import { InputBadge } from '../InputBadge';
import { variantsList } from '../InputBadge';
import { Divider } from '../shared/Divider';
import { StepNumber } from '../typography/StepNumber';
import { SubHeader } from '../typography/SubHeader';
import { StepHeader as SharedStepHeader } from '../typography/StepHeader';
import { CreationFormState, CreationFormDispatch, Stages } from './CreationFormProvider';
import { Navigation } from './Navigation';

const StepHeader = styled(SharedStepHeader)`
  margin-bottom: ${rem(16)};
`;

const StepSubHeader = styled(SubHeader)`
  margin-bottom: ${rem(40)};
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: ${rem(40)};
  align-items: center;
`;

const Inputs = styled.div``;

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

export const FirstStage = () => {
  const formData = useContext(CreationFormState);
  const { updateState } = useContext(CreationFormDispatch);

  return (
    <>
      <StepNumber>{'Step 01 '}</StepNumber>
      <StepHeader>{'Assign guardians to your vault.'}</StepHeader>
      <StepSubHeader>{`Set the addresses have the honor of protecting this vault. `}</StepSubHeader>
      <Inputs>
        {Object.keys(formData.inputs).map((key: string, idx: number) => {
          return (
            <InputWrapper key={`hc-cf-1-input-wrapper-${key}`}>
              <InputBadge variant={variantsList[idx % variantsList.length]} />
              <Input
                id={`input-${key}`}
                key={`eth-address-${key}`}
                autoFocus={key === '0'}
                value={formData.inputs[key].value}
                variant="outlined"
                placeholder={'Address or ENS'}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  e.preventDefault();
                  updateState({
                    ...formData,
                    inputs: {
                      ...formData.inputs,
                      [key]: {
                        value: e.target.value,
                      },
                    },
                  });
                }}
              />
            </InputWrapper>
          );
        })}
      </Inputs>
      <Divider />
      <Navigation
        onClickBack={() => {}}
        onClickContinue={() => updateState({ ...formData, stage: Stages.Second })}
      />
    </>
  );
};
