import styled from '@emotion/styled';
import isPropValid from '@emotion/is-prop-valid';
import isObjectEmpty from 'utils/isObjectEmpty';
import colors from '../colors';
import defaultTheme, {Theme} from '../theme';
import {Map} from '../types';
import {fontSizes, fontWeights, spacing} from '../units';
import {InputProps, InputVariant} from './types';

const inputSizeProps: Map = {
  sm: {
    fontSize: fontSizes['sm'],
    padding: `0 ${spacing['sm']}`,
    height: spacing['md'],
  },
  md: {
    fontSize: fontSizes['md'],
    padding: `0 ${spacing['md']}`,
    height: spacing['lg'],
  },
  lg: {
    fontSize: fontSizes['lg'],
    padding: `0 ${spacing['lg']}`,
    height: spacing['xl'],
  },
};

const getVariantProps = (theme: Theme, variant: InputVariant) => {
  const colorScheme = theme.colorScheme;
  const props = {
    main: {
      border: `1px solid ${colors.gray[1]}`,
      backgroundColor: colors.white,
      color: colors.black,
    },
    hover: {
      border: `1px solid ${colors.gray[2]}`,
      backgroundColor: colors.white,
      color: colors.black,
    },
    focus: {
      border: `1px solid ${colorScheme.main[3]}`,
      boxShadow: `0 0 0 1pt ${colorScheme.main[3]}`,
      backgroundColor: colors.white,
      color: colors.black,
    },
  };

  if (variant === 'filled') {
    props.main.backgroundColor = colors.gray[1];
    props.hover.backgroundColor = colors.gray[2];
  }

  return props;
};

const getStyleFromProps = (props: InputProps) => {
  const theme =
    !props.theme || isObjectEmpty(props.theme) ? defaultTheme : props.theme;
  const size = props.size ? props.size : 'md';
  const variant = props.variant ? props.variant : 'outline';

  const {fontSize, padding, height} = inputSizeProps[size];
  const variantProps = getVariantProps(theme, variant);

  return {
    theme,
    variantProps,
    fontSize,
    padding,
    height,
  };
};

const Styled = (props: InputProps) => {
  const {theme, variantProps, ...others} = getStyleFromProps(props);

  return {
    fontWeight: fontWeights.medium,
    cursor: 'text',
    opacity: props.disabled ? 0.7 : 1,
    ...others,
    ...theme.shape,
    ...variantProps.main,
    transition: 'background-color 0.2s, border 0.2s, box-shadow 0.2s',
    '&:hover': {
      ...variantProps.hover,
    },
    '&:focus': {
      ...variantProps.focus,
    },
    '&::placeholder': {
      color: colors.gray[4],
      fontWeight: fontWeights.bold,
    },
  };
};

const ignoredProps: string[] = ['color', 'backgroundColor', 'border'];

const options = {
  shouldForwardProp: (prop: any) =>
    isPropValid(prop) && !ignoredProps.includes(prop),
};

const Input = styled('input', options)(Styled);

export default Input;
