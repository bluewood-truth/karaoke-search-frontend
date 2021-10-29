import styled from '@emotion/styled';
import {getMainColor} from './basic';
import {sizes} from './basic/units';

const PageWrapper = styled('main')(() => {
  return {
    className: 'pageWrapper',
    minHeight: sizes.container,
    display: 'flex',
    justifyContent: 'center',
    color: getMainColor()[5],
  };
});

export default PageWrapper;
