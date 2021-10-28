import React from 'react';
import {Theme} from '../theme';
import {BoxModelProps} from '../types';

export interface ButtonProps
  extends React.HTMLAttributes<HTMLButtonElement>,
    BoxModelProps {
  size?: 'sm' | 'md' | 'lg';
  variant?: ButtonVariant;
  enableElevation?: boolean;
  disabled?: boolean;
  theme?: Theme;
}

export type ButtonVariant = 'solid' | 'outline' | 'none';
