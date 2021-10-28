import {Box, Divider} from 'components/basic';
import {BoxProps} from 'components/basic/box/types';

const UnderlineBox = (props: {children?: React.ReactNode} & BoxProps) => {
  const {children, ...boxProps} = props;
  return (
    <Box {...boxProps}>
      {children}
      <Divider color='3' width='2px' />
    </Box>
  );
};

export default UnderlineBox;
