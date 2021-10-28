import {BoxModelProps} from '../_commonStyled/types';

export interface SelectProps
  extends React.HTMLAttributes<HTMLSelectElement>,
    BoxModelProps {
  disabled?: boolean;
}
