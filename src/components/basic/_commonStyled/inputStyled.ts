import filterUndefined from 'utils/filterUndefined';
import hexToRgb from 'utils/hexToRgb';
import {InputProps} from '../input/types';
import {SelectProps} from '../select/types';
import {BoxModelProps} from './types';
import {fontSizes, fontWeights, spacing} from '../units';
import {BoxStyled} from './boxStyled';
import { getMainColor } from '..';

const getStyleFromProps = (props: InputProps | SelectProps) => {
  const boxModelProps: BoxModelProps = props;
  const boxModelStyle = filterUndefined(BoxStyled(boxModelProps));

  return {
    ...boxModelStyle,
  };
};

const getHeight = (defaultProps: any, inputProps: any) => {
  if (inputProps.height) {
    return inputProps.height;
  }

  const fontSize: string = inputProps.fontSize ? inputProps.fontSize : defaultProps.fontSize;
  return `calc(${fontSize} + ${spacing.sm})`;
};

export const InputStyled = (props: InputProps | SelectProps) => {
  const colorSet = getMainColor();
  const inputProps = getStyleFromProps(props);
  const defaultProps = {
    color: colorSet[4],
    backgroundColor: colorSet[0],
    fontSize: fontSizes.sm,
    fontWeight: fontWeights.normal,
    padding: `0 ${spacing.sm}`,
    border: 'none',
    borderRadius: spacing.xs,
    opacity: props.disabled ? 0.7 : 1,
    hover: {
      backgroundColor: `rgb(${hexToRgb(colorSet[1])}, 0.5)`,
    },
    active: {
      backgroundColor: colorSet[1],
    },
    focus: {
      backgroundColor: colorSet[0],
    },
    placeholder: {
      color: colorSet[3],
    },
  };

  return {
    ...defaultProps,
    ...inputProps,
    height: getHeight(defaultProps, inputProps),
    '&:hover': {
      ...defaultProps.hover,
      ...inputProps.hover,
    },
    '&:active': {
      ...defaultProps.active,
      ...inputProps.active,
    },
    '&:focus': {
      ...defaultProps.focus,
      ...inputProps.focus,
    },
    '&::placeholder': {
      ...defaultProps.placeholder,
    },
  };
};
