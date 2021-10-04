import {Theme} from '../theme';
import {BoxModelProps} from '../types';

export interface SelectProps
  extends React.HTMLAttributes<HTMLSelectElement>,
    BoxModelProps {
  size?: SelectSizes;
  variant?: SelectVariant;
  disabled?: boolean;
  theme?: Theme;
}

export type SelectSizes = 'sm' | 'md' | 'lg';
export type SelectVariant = 'outline' | 'filled';
