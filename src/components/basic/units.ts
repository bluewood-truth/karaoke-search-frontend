import { Map } from "./types";

export const fontSizes: Map = {
  xxs: '0.7rem',
  xs: '0.79rem',
  sm: '0.889rem',
  md: '1rem',
  lg: '1.125rem',
  xl: '1.266rem',
  xxl: '1.424rem',
};

export const fontWeights: Map = {
  thin: 200,
  light: 300,
  normal: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
  extrabold: 800,
};

export const spacing: Map = {
  none: 0,
  xxs: '0.125em',
  xs: '0.25rem',
  sm: '0.5rem',
  md: '1rem',
  lg: '2rem',
  xl: '4rem',
  xxl: '8rem',
};

export const sizes: Map = {
  max: 'max-content',
  min: 'min-content',
  full: '100%',
  xs: '12rem',
  sm: '16rem',
  md: '20rem',
  lg: '28rem',
  xl: '36rem',
  container: '45rem',
}

export type FontSize = keyof typeof fontSizes | string;
export type FontWeight = keyof typeof fontWeights | string;
export type Spacing = keyof typeof spacing | string;
export type Size = keyof typeof sizes | string;
