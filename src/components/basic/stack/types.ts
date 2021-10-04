import {BoxProps} from '../box/types';
import {Spacing} from '../units';

interface StackProps extends BoxProps {
  spacing?: Spacing;
  direction?: StackDirection;
}

type StackDirection = "vertical" | "horizontal";

export default StackProps;
