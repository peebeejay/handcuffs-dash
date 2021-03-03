import React, { useState } from 'react';
import styled from 'styled-components';
import { rem } from 'polished';
import MUTextField from '@material-ui/core/TextField';
import { PrimaryBlue, TextDark, TextLight, Gray3 } from '../colors';
import { InputBadge } from './InputBadge';
import { variantsList } from './InputBadge';
import { Button } from './Button';

type Props = {};

type InputData = {
  value: string;
};

type CreationFormData = {
  stage: number;
  inputs: {
    [key: string]: InputData;
  };
};

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: ${rem(150)};
`;

const Form = styled.div`
  width: ${rem(370)};
`;

const StepNumber = styled.div`
  color: ${PrimaryBlue};
  font-weight: 500;
  font-size: ${rem(16)};
`;

const StepHeader = styled.div`
  color: ${TextDark};
  font-size: ${rem(32)};
  line-height: ${rem(42)};
  font-weight: 700;
  margin-bottom: ${rem(16)};
`;

const StepSubHeader = styled.div`
  color: ${TextLight};
  font-weight: 400;
  font-size: ${rem(16)};
  line-height: ${rem(24)};
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

const Divider = styled.div`
  border: ${rem(1)} solid ${Gray3};
  width: ${rem(370)};
`;

const Navigation = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const BackButton = styled(Button)`
  flex: 1;
  margin-right: ${rem(15)};
`;

const ContinueButton = styled(Button)`
  flex: 1;
  margin-left: ${rem(15)};
`;

export const CreationForm = (props: Props) => {
  const [formData, setFormData] = useState<CreationFormData>({
    stage: 0,
    inputs: {
      '0': { value: '' },
      '1': { value: '' },
      '2': { value: '' },
    },
  });

  return (
    <Container>
      <Form>
        <StepNumber>{'Step 01 '}</StepNumber>
        <StepHeader>{'Assign guardians to your vault.'}</StepHeader>
        <StepSubHeader>{`Set the addresses have the honor of protecting this vault. `}</StepSubHeader>
        <Inputs>
          {Object.keys(formData.inputs).map((key: string, idx: number) => {
            return (
              <InputWrapper>
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
                    setFormData({
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
        <Navigation>
          <BackButton>{'Back'}</BackButton>
          <ContinueButton>{'Continue'}</ContinueButton>
        </Navigation>
      </Form>
    </Container>
  );
};
