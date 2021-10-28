import styled from '@emotion/styled';
import isPropValid from '@emotion/is-prop-valid';
import {ButtonProps} from './types';
import {fontSizes, fontWeights, spacing} from '../units';
import {BoxModelProps} from '../_commonStyled/types';
import filterUndefined from 'utils/filterUndefined';
import {BoxStyled} from '../_commonStyled/boxStyled';
import {mainColor} from 'components/basic/colors';
import hexToRgb from 'utils/hexToRgb';

const getStyleFromProps = (props: ButtonProps) => {
  const boxModelProps: BoxModelProps = props;
  const boxModelStyle = filterUndefined(BoxStyled(boxModelProps));

  return {
    ...boxModelStyle,
  };
};

const Styled = (props: ButtonProps) => {
  const colorSet = mainColor;
  const inputStyle = getStyleFromProps(props);
  const defaultStyle = {
    color: colorSet[4],
    backgroundColor: colorSet[0],
    fontSize: fontSizes.xs,
    fontWeight: fontWeights.normal,
    padding: `${spacing.xs} ${spacing.md}`,
    border: 'none',
    borderRadius: spacing.xs,
    cursor: 'pointer',
    opacity: props.disabled ? 0.7 : 1,
    transition: 'color 0.3s, background-color 0.3s, opacity 0.3s',
    hover: {
      backgroundColor: `rgb(${hexToRgb(colorSet[1])}, 0.5)`,
    },
    active: {
      backgroundColor: colorSet[1],
    },
  };

  return {
    ...defaultStyle,
    ...inputStyle,
    '&:hover': {
      ...defaultStyle.hover,
      ...inputStyle.hover,
    },
    '&:active': {
      ...defaultStyle.active,
      ...inputStyle.active,
    },
  };
};

const ignoredProps: string[] = [];

const options = {
  shouldForwardProp: (prop: any) =>
    isPropValid(prop) && !ignoredProps.includes(prop),
};

const Button = styled('button', options)(Styled);

export default Button;
