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
    fontSize: fontSizes['xs'],
    padding: `${spacing['xs']} ${spacing['sm']}`,
  },
  md: {
    fontSize: fontSizes['sm'],
    padding: `${spacing['sm']} ${spacing['md']}`,
  },
  lg: {
    fontSize: fontSizes['md'],
    padding: `${spacing['md']} ${spacing['lg']}`,
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

  const fontSize = buttonSizeProps[size]?.fontSize;
  const padding = buttonSizeProps[size]?.padding;
  const variantProps = getVariantProps(theme, variant);

  return {
    theme,
    fontSize,
    padding,
    variantProps,
  };
};

const Styled = (props: ButtonProps) => {
  const styles = getStyleFromProps(props);

  return {
    fontWeight: fontWeights['semibold'],
    cursor: 'pointer',
    opacity: props.disabled ? 0.7 : 1,
    fontSize: styles.fontSize,
    padding: styles.padding,
    ...styles.theme.shape,
    ...styles.variantProps.main,
    transition: 'background-color 0.2s',
    '&:hover': {
      ...styles.variantProps.hover,
    },
    '&:active': {
      ...styles.variantProps.active,
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
