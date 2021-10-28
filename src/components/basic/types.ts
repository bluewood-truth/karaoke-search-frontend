import React from "react";
import { FontSize, FontWeight, Size, Spacing } from "./units";

export interface Map {
  [key: string]: any;
}

export interface BoxModelProps {
  display?: React.CSSProperties['display'];
  position?: React.CSSProperties['position'];
  flex?: React.CSSProperties['flex'];
  flexDirection?: React.CSSProperties['flexDirection'];
  alignItems?: React.CSSProperties['alignItems'];
  justifyContent?: React.CSSProperties['justifyContent'];
  boxShadow?: React.CSSProperties['boxShadow'];

  color?: string;
  fontSize?: FontSize;
  fontWeight?: FontWeight;

  width?: Size;
  minWidth?: Size;
  maxWidth?: Size;
  height?: Size;
  minHeight?: Size;
  maxHeight?: Size;

  padding?: Spacing;
  paddingX?: Spacing;
  paddingY?: Spacing;
  paddingTop?: Spacing;
  paddingBottom?: Spacing;
  paddingLeft?: Spacing;
  paddingRight?: Spacing;

  margin?: Spacing;
  marginX?: Spacing;
  marginY?: Spacing;
  marginTop?: Spacing;
  marginBottom?: Spacing;
  marginLeft?: Spacing;
  marginRight?: Spacing;

  border?: string;
  borderRadius?: Spacing;
  borderWidth?: string;
}