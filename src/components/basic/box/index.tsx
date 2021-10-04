import styled from '@emotion/styled';
import isPropValid from '@emotion/is-prop-valid';
import {BoxStyled} from '../_commonStyled/boxStyled';

const options = {shouldForwardProp: (prop: any) => isPropValid(prop)};

const Box = styled('div', options)(BoxStyled);

export default Box;
