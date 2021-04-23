import React, { useContext } from 'react';
import styled from 'styled-components';
import { rem } from 'polished';
import { DateTime } from 'luxon';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { CreationFormState, CreationFormDispatch, Stages } from './CreationFormProvider';
import { StepNumber } from '../typography/StepNumber';
import { SubHeader } from '../typography/SubHeader';
import { StepHeader as SharedStepHeader } from '../typography/StepHeader';
import { Navigation } from './Navigation';
import { Divider } from '../shared/Divider';
import { Beneficiary } from './CreationFormProvider';
import { PrimaryBlue } from '../../colors';
import { Input } from '../shared/Input';
import { DatePicker } from './DatePicker';

const StepHeader = styled(SharedStepHeader)`
  margin-bottom: ${rem(16)};
`;

const StyledSubHeader = styled(SubHeader)`
  margin-top: ${rem(25)};
  margin-bottom: ${rem(5)};
`;

const StyledDivider = styled(Divider)`
  margin-top: ${rem(35)};
`;

const RadioButton = styled(FormControlLabel)`
  & .MuiRadio-colorSecondary.Mui-checked {
    color: ${PrimaryBlue};
  }
`;

export const SecondStage = () => {
  const formData = useContext(CreationFormState);
  const { updateState } = useContext(CreationFormDispatch);

  return (
    <>
      <StepNumber>{'Step 02'}</StepNumber>
      <StepHeader>{'Add details & funds.'}</StepHeader>
      <StyledSubHeader>{`Locked until`}</StyledSubHeader>
      <DatePicker
        selectedDate={formData.lockedUntilDate}
        setSelectedDate={(date: DateTime | null) =>
          updateState((state) => ({ ...state, lockedUntilDate: date }))
        }
      />

      <StyledSubHeader>{`Beneficary`}</StyledSubHeader>
      <RadioGroup
        aria-label="beneficiary"
        name="beneficiary"
        value={formData.beneficiary}
        onChange={(e: React.ChangeEvent) => {
          updateState((state) => ({
            ...state,
            beneficiary: (e.target as HTMLInputElement).value as Beneficiary,
          }));
        }}
      >
        {Object.values(Beneficiary).map((beneficiary) => (
          <RadioButton value={beneficiary} control={<Radio />} label={beneficiary} />
        ))}
      </RadioGroup>
      <StyledSubHeader>{`Protected Amount`}</StyledSubHeader>
      <Input
        value={'Today'}
        variant="outlined"
        placeholder={'Enter ETH Amount'}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          e.preventDefault();
        }}
      />
      <StyledDivider />
      <Navigation
        onClickBack={() => updateState({ ...formData, stage: Stages.First })}
        onClickContinue={() => updateState({ ...formData, stage: Stages.Third })}
      />
    </>
  );
};
