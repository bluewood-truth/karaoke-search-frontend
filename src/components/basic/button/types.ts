import React from 'react';
import {BoxModelProps} from '../types';

export interface ButtonProps
  extends React.HTMLAttributes<HTMLButtonElement>,
    BoxModelProps {
  disabled?: boolean;
}
