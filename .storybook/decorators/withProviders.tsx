import React from 'react';

import { BrowserRouter } from 'react-router-dom';

export const withProviders = (storyFn: any) => {
  return <BrowserRouter>{storyFn()}</BrowserRouter>;
};
