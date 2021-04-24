import { PrimaryBlue, PrimaryBlueDark } from './colors';

enum ThemeNames {
  Light = 'Light',
  Dark = 'Dark',
}

type Theme = {
  text: {
    color: string;
    colorDark: string;
  };
};

export const lightTheme: Theme = {
  text: {
    color: PrimaryBlue,
    colorDark: PrimaryBlueDark,
  },
};

export const darkTheme: Theme = {
  text: {
    color: PrimaryBlue,
    colorDark: PrimaryBlueDark,
  },
};

export const themes = {
  [ThemeNames.Light]: lightTheme,
  [ThemeNames.Dark]: darkTheme,
};
