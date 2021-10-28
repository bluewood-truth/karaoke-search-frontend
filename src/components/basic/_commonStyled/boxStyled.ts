import getUnitValue from 'utils/getUnitValue';
import {BoxProps} from '../box/types';
import {fontSizes, fontWeights, sizes, spacing, zIndexes} from '../units';
import {BackgroundProps} from './types';

const getMargin = (props: BoxProps) => {
  const {
    margin,
    marginX,
    marginY,
    marginTop,
    marginBottom,
    marginLeft,
    marginRight,
  } = props;

  const m = {
    top: getUnitValue(spacing, margin),
    right: getUnitValue(spacing, margin),
    bottom: getUnitValue(spacing, margin),
    left: getUnitValue(spacing, margin),
  };

  m.right = getUnitValue(spacing, marginX, m.right);
  m.left = getUnitValue(spacing, marginX, m.left);

  m.top = getUnitValue(spacing, marginY, m.top);
  m.bottom = getUnitValue(spacing, marginY, m.bottom);

  m.top = getUnitValue(spacing, marginTop, m.top);
  m.right = getUnitValue(spacing, marginRight, m.right);
  m.bottom = getUnitValue(spacing, marginBottom, m.bottom);
  m.left = getUnitValue(spacing, marginLeft, m.left);

  return {
    margin,
    marginTop: m.top,
    marginRight: m.right,
    marginBottom: m.bottom,
    marginLeft: m.left,
  };
};

const getPadding = (props: BoxProps) => {
  const {
    padding,
    paddingX,
    paddingY,
    paddingTop,
    paddingBottom,
    paddingLeft,
    paddingRight,
  } = props;

  const m = {
    top: getUnitValue(spacing, padding),
    right: getUnitValue(spacing, padding),
    bottom: getUnitValue(spacing, padding),
    left: getUnitValue(spacing, padding),
  };

  m.right = getUnitValue(spacing, paddingX, m.right);
  m.left = getUnitValue(spacing, paddingX, m.left);

  m.top = getUnitValue(spacing, paddingY, m.top);
  m.bottom = getUnitValue(spacing, paddingY, m.bottom);

  m.top = getUnitValue(spacing, paddingTop, m.top);
  m.right = getUnitValue(spacing, paddingRight, m.right);
  m.bottom = getUnitValue(spacing, paddingBottom, m.bottom);
  m.left = getUnitValue(spacing, paddingLeft, m.left);

  return {
    padding,
    paddingTop: m.top,
    paddingRight: m.right,
    paddingBottom: m.bottom,
    paddingLeft: m.left,
  };
};

const getSize = (props: BoxProps) => {
  const width = getUnitValue(sizes, props.width);
  const minWidth = getUnitValue(sizes, props.minWidth);
  const maxWidth = getUnitValue(sizes, props.maxWidth);
  const height = getUnitValue(sizes, props.height);
  const minHeight = getUnitValue(sizes, props.minHeight);
  const maxHeight = getUnitValue(sizes, props.maxHeight);

  return {width, minWidth, maxWidth, height, minHeight, maxHeight};
};

const getLayoutProps = (props: BoxProps) => {
  const {
    display,
    position,
    flex,
    flexDirection,
    justifyContent,
    alignItems,
    boxShadow,
    transform,
    top,
    left,
    bottom,
    right,
    textAlign
  } = props;
  const zIndex = getUnitValue(zIndexes, props.zIndex, zIndexes.base);

  return {
    display,
    position,
    flex,
    flexDirection,
    justifyContent,
    alignItems,
    boxShadow,
    transform,
    top,
    left,
    bottom,
    right,
    textAlign,
    zIndex,
  };
};

const getFontProps = (props: BoxProps) => {
  const color = props.color;
  const fontSize = getUnitValue(fontSizes, props.fontSize);
  const fontWeight = getUnitValue(fontWeights, props.fontWeight);

  return {color, fontSize, fontWeight};
};

const getBorder = (props: BoxProps) => {
  const {border, borderWidth} = props;
  const borderRadius = getUnitValue(spacing, props.borderRadius);

  return {border, borderWidth, borderRadius};
};

const getBackground = (props: BackgroundProps) => {
  const {
    background,
    backgroundImage,
    backgroundColor,
    backgroundRepeat,
    backgroundPosition,
    backgroundSize,
    backgroundClip,
  } = props;

  return {
    background,
    backgroundImage,
    backgroundColor,
    backgroundRepeat,
    backgroundPosition,
    backgroundSize,
    backgroundClip,
  };
};

export const BoxStyled = (props: BoxProps) => {
  const layout = getLayoutProps(props);
  const fontProps = getFontProps(props);
  const sizes = getSize(props);
  const margins = getMargin(props);
  const paddings = getPadding(props);
  const border = getBorder(props);
  const background = getBackground(props);

  return {
    ...layout,
    ...fontProps,
    ...sizes,
    ...margins,
    ...paddings,
    ...border,
    ...background,
  };
};
