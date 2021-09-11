import {Box} from './basic';

const PageWrapper = (props: {children?: React.ReactNode}) => {
  return <Box className='pageWrapper'>{props.children}</Box>;
};

export default PageWrapper;
