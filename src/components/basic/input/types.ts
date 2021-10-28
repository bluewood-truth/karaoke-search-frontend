import {BoxModelProps} from '../_commonStyled/types';

export interface InputProps
  extends React.HTMLAttributes<HTMLInputElement>,
    BoxModelProps {
  disabled?: boolean;
}
