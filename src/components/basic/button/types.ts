import React from 'react';
import {BoxModelProps} from '../_commonStyled/types';

export interface ButtonProps
  extends React.HTMLAttributes<HTMLButtonElement>,
    BoxModelProps {
  disabled?: boolean;
}
