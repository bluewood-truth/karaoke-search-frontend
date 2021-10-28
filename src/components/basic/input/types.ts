import {BoxModelProps} from '../types';

export interface InputProps
  extends React.HTMLAttributes<HTMLInputElement>,
    BoxModelProps {
  disabled?: boolean;
}
