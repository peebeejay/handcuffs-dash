import React from 'react';
import styled from 'styled-components';
import { rem } from 'polished';
import { Button } from '../shared/Button';

type Props = {
  onClickBack: React.MouseEventHandler;
  onClickContinue: React.MouseEventHandler;
  isBackDisabled?: boolean;
};

const NavigationContainer = styled.div`
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

export const Navigation = (props: Props) => {
  const { onClickBack, onClickContinue, isBackDisabled } = props;

  return (
    <>
      <NavigationContainer>
        <BackButton disabled={isBackDisabled} onClick={onClickBack}>
          {'Back'}
        </BackButton>
        <ContinueButton onClick={onClickContinue}>{'Continue'}</ContinueButton>
      </NavigationContainer>
    </>
  );
};
