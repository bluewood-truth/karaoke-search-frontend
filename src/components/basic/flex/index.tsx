import {Box} from '..';
import {BoxProps} from '../box/types';

const Flex = (props: BoxProps) => {
  let {display, ...others} = props;

  return <Box {...others} display='flex' />;
};

export default Flex;
