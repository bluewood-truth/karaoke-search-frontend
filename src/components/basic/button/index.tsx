import styled from '@emotion/styled';
import isPropValid from '@emotion/is-prop-valid';
import isObjectEmpty from 'utils/isObjectEmpty';
import {ButtonProps, ButtonVariant} from './types';
import defaultTheme, {Theme} from '../theme';
import {fontSizes, fontWeights, spacing} from '../units';
import {Map} from '../types';
import colors from '../colors';

const buttonSizeProps: Map = {
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

const getVariantProps = (theme: Theme, variant: ButtonVariant) => {
  const colorScheme = theme.colorScheme;
  const props = {
    main: {
      border: `1px solid ${colorScheme.main[1]}`,
      backgroundColor: colorScheme.main[1],
      color: colorScheme.main.contrast,
    },
    hover: {
      border: `1px solid ${colorScheme.main[2]}`,
      backgroundColor: colorScheme.main[2],
      color: colorScheme.main.contrast,
    },
    active: {
      border: `1px solid ${colorScheme.main[3]}`,
      backgroundColor: colorScheme.main[3],
      color: colorScheme.main.contrast,
    },
  };

  if (variant === 'outline') {
    props.main.backgroundColor = colors.white;
    props.main.color = colorScheme.main[1];
    props.hover.backgroundColor = colors.white;
    props.hover.color = colorScheme.main[2];
    props.active.backgroundColor = colors.white;
    props.active.color = colorScheme.main[3];
  }

  return props;
};

const getStyleFromProps = (props: ButtonProps) => {
  const theme =
    !props.theme || isObjectEmpty(props.theme) ? defaultTheme : props.theme;
  const size = props.size ? props.size : 'md';
  const variant = props.variant ? props.variant : 'solid';

  const {fontSize, padding, height} = buttonSizeProps[size];
  const variantProps = getVariantProps(theme, variant);

  return {
    theme,
    variantProps,
    fontSize,
    padding,
    height,
  };
};

const Styled = (props: ButtonProps) => {
  const {theme, variantProps, ...others} = getStyleFromProps(props);

  return {
    fontWeight: fontWeights['semibold'],
    cursor: 'pointer',
    opacity: props.disabled ? 0.7 : 1,
    ...others,
    ...theme.shape,
    ...variantProps.main,
    transition: 'background-color 0.2s',
    '&:hover': {
      ...variantProps.hover,
    },
    '&:active': {
      ...variantProps.active,
    },
  };
};

const ignoredProps: string[] = ['color', 'backgroundColor', 'border'];

const options = {
  shouldForwardProp: (prop: any) =>
    isPropValid(prop) && !ignoredProps.includes(prop),
};

const Button = styled('button', options)(Styled);

export default Button;
