import {spacing} from './units';
import colors from './colors';

const defaultTheme = {
  colorScheme: {
    main: {
      1: colors.cyan[1],
      2: colors.cyan[2],
      3: colors.cyan[3],
      4: colors.cyan[4],
      contrast: colors.white,
    },
  },

  shadows: {
    none: 'none',
    sm: '0px 5px 10px rgba(0, 0, 0, 0.12)',
    lg: '0px 8px 30px rgba(0, 0, 0, 0.24)',
  },

  shape: {
    borderRadius: spacing['xs'],
  },
};

export type Theme = typeof defaultTheme;
export type ColorScheme = typeof defaultTheme.colorScheme.main;

export default defaultTheme;
