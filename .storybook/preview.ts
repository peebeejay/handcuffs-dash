import { addDecorator } from '@storybook/react';
import { withGlobalStyles } from './decorators/withGlobalStyles';

addDecorator(withGlobalStyles);

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
};
