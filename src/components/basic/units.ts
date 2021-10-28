export const fontSizes = {
  xxs: '0.7rem',
  xs: '0.79rem',
  sm: '0.889rem',
  md: '1rem',
  lg: '1.125rem',
  xl: '1.266rem',
  xxl: '1.424rem',
};

export const fontWeights = {
  thin: 200,
  light: 300,
  normal: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
  extrabold: 800,
};

export const spacing = {
  none: 0,
  xxs: '0.125em',
  xs: '0.25rem',
  sm: '0.5rem',
  md: '1rem',
  lg: '2rem',
  xl: '4rem',
  xxl: '8rem',
};

export const sizes = {
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

export const zIndexes = {
  hide: -1,
  auto: 'auto',
  base: 0,
  nav: 10,
}

type Union<T> = T | (string & {});
export type FontSize = Union<keyof typeof fontSizes>;
export type FontWeight = Union<keyof typeof fontWeights>;
export type Spacing = Union<keyof typeof spacing>;
export type Size = Union<keyof typeof sizes>;
export type ZIndex = Union<keyof typeof zIndexes>;