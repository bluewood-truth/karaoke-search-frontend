import {BoxProps} from '../box/types';
import { DividerProps } from '../divider/types';
import {Spacing} from '../units';

interface StackProps extends BoxProps {
  spacing?: Spacing;
  direction?: StackDirection;
  divider?: boolean;
  dividerProps?: DividerProps;
}

type StackDirection = "vertical" | "horizontal";

export default StackProps;
