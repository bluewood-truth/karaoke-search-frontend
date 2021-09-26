import React from 'react';
import {BoxModelProps} from '../types';

export interface BoxProps
  extends React.HTMLAttributes<HTMLDivElement>,
    BoxModelProps {}
