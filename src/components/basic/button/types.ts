import React from 'react';
import {Theme} from '../theme';

export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  size?: 'sm' | 'md' | 'lg';
  variant?: ButtonVariant;
  enableElevation?: boolean;
  disabled?: boolean;
  theme?: Theme;
}

export type ButtonVariant = 'solid' | 'outline';
