import {BoxModelProps} from '../types';

export interface SelectProps
  extends React.HTMLAttributes<HTMLSelectElement>,
    BoxModelProps {
  disabled?: boolean;
}
