import React from 'react';
import {BoxModelProps} from '../_commonStyled/types';

export interface BoxProps
  extends React.HTMLAttributes<HTMLDivElement>,
    BoxModelProps {}
