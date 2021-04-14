import React from 'react';
import { GlobalStyles } from '../../src/globalStyles';
import { StylesProvider } from '@material-ui/core/styles';

export const withGlobalStyles = (storyFn: any) => {
  return (
    <>
      <StylesProvider injectFirst>
        <GlobalStyles />
        {storyFn()}
      </StylesProvider>
    </>
  );
};
