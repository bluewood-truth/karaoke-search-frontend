import filterUndefined from 'utils/filterUndefined';
import isObjectEmpty from 'utils/isObjectEmpty';
import colors from '../colors';
import {InputProps, InputVariant} from '../input/types';
import {SelectProps} from '../select/types';
import defaultTheme, {Theme} from '../theme';
import {BoxModelProps, Map} from '../types';
import {fontSizes, fontWeights, spacing} from '../units';
import {BoxStyled} from './boxStyled';

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

const getStyleFromProps = (props: InputProps | SelectProps) => {
  const theme =
    !props.theme || isObjectEmpty(props.theme) ? defaultTheme : props.theme;
  const size = props.size ? props.size : 'md';
  const variant = props.variant ? props.variant : 'outline';

  const {fontSize, padding, height} = inputSizeProps[size];
  const variantProps = getVariantProps(theme, variant);

  const boxModelProps: BoxModelProps = props;
  const boxModelStyle = filterUndefined(BoxStyled(boxModelProps));

  return {
    ...{theme, variantProps, fontSize, padding, height},
    ...boxModelStyle,
  };
};

export const InputStyled = (props: InputProps | SelectProps) => {
  const {theme, variantProps, ...others} = getStyleFromProps(props);

  return {
    ...{
      fontWeight: fontWeights.medium,
      cursor: 'text',
      opacity: props.disabled ? 0.7 : 1,
    },
    ...theme.shape,
    ...variantProps.main,
    ...others,
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
