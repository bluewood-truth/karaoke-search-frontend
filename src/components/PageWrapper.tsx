import styled from '@emotion/styled';
import {sizes} from './basic/units';

const PageWrapper = styled('main')(() => {
  return {
    className: 'pageWrapper',
    minHeight: sizes.container,
  };
});

export default PageWrapper;
