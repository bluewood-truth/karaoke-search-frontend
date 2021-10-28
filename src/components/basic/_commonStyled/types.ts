import React from 'react';
import {FontSize, FontWeight, Size, Spacing, ZIndex} from '../units';

export interface LayoutProps {
  display?: React.CSSProperties['display'];
  position?: React.CSSProperties['position'];
  flex?: React.CSSProperties['flex'];
  flexDirection?: React.CSSProperties['flexDirection'];
  alignItems?: React.CSSProperties['alignItems'];
  justifyContent?: React.CSSProperties['justifyContent'];
  boxShadow?: React.CSSProperties['boxShadow'];
  transform?: React.CSSProperties['transform'];
  top?: React.CSSProperties['top'];
  bottom?: React.CSSProperties['bottom'];
  left?: React.CSSProperties['left'];
  right?: React.CSSProperties['right'];
  textAlign?: React.CSSProperties['textAlign'];
  letterSpacing?: React.CSSProperties['letterSpacing'];
  zIndex?: ZIndex;
}

export interface FontProps {
  color?: string;
  fontSize?: FontSize;
  fontWeight?: FontWeight;
}

export interface BackgroundProps {
  background?: React.CSSProperties['background'];
  backgroundImage?: React.CSSProperties['backgroundImage'];
  backgroundColor?: React.CSSProperties['backgroundColor'];
  backgroundRepeat?: React.CSSProperties['backgroundRepeat'];
  backgroundPosition?: React.CSSProperties['backgroundPosition'];
  backgroundSize?: React.CSSProperties['backgroundSize'];
  backgroundClip?: React.CSSProperties['backgroundClip'];
}

export interface SizeProps extends PaddingProps, MarginProps {
  width?: Size;
  minWidth?: Size;
  maxWidth?: Size;
  height?: Size;
  minHeight?: Size;
  maxHeight?: Size;
}

export interface PaddingProps {
  padding?: Spacing;
  paddingX?: Spacing;
  paddingY?: Spacing;
  paddingTop?: Spacing;
  paddingBottom?: Spacing;
  paddingLeft?: Spacing;
  paddingRight?: Spacing;
}

export interface MarginProps {
  margin?: Spacing;
  marginX?: Spacing;
  marginY?: Spacing;
  marginTop?: Spacing;
  marginBottom?: Spacing;
  marginLeft?: Spacing;
  marginRight?: Spacing;
}

export interface BorderProps {
  border?: string;
  borderRadius?: Spacing;
  borderWidth?: string;
}

export interface BoxModelPropsUnion extends LayoutProps,
    BackgroundProps,
    FontProps,
    SizeProps,
  BorderProps {}

export interface BoxModelProps extends BoxModelPropsUnion {
  hover?: BoxModelPropsUnion;
  active?: BoxModelPropsUnion;
  focus?: BoxModelPropsUnion;
}
