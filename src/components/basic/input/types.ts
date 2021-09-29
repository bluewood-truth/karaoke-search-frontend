import {Theme} from '../theme';
import { BoxModelProps } from '../types';

export interface InputProps
  extends React.HTMLAttributes<HTMLInputElement>,
    BoxModelProps {
  size?: 'sm' | 'md' | 'lg';
  variant?: InputVariant;
  disabled?: boolean;
  theme?: Theme;
}

export type InputVariant = 'outline' | 'filled' | 'underline';
