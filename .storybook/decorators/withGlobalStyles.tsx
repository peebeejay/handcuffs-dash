import React from 'react';
import { GlobalStyles } from '../../src/globalStyles';

export const withGlobalStyles = (storyFn: any) => {
  return (
    <>
      <GlobalStyles />
      {storyFn()}
    </>
  );
};
