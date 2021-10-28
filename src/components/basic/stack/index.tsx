import React from 'react';
import getUnitValue from 'utils/getUnitValue';
import Flex from '../flex';
import {spacing as spacingUnits} from '../units';
import StackProps from './types';

const Stack = (props: StackProps) => {
  let { spacing, children, direction, ...others } = props;

  if (direction === undefined) {
    direction = 'vertical';
  }

  if (direction === 'vertical') {
    others.flexDirection = 'column';
  } else if (direction === 'horizontal') {
    others.flexDirection = 'row';
  }

  return (
    <Flex {...others}>
      {React.Children.map(children, (child, index) => {
        if (index === 0 || spacing === undefined) {
          return child;
        }

        return React.cloneElement(
          child as React.ReactElement<any>,
          direction === 'vertical'
            ? {
                marginTop: getUnitValue(spacingUnits, spacing),
              }
            : {
                marginLeft: getUnitValue(spacingUnits, spacing),
              }
        );
      })}
    </Flex>
  );
};

export default Stack;
