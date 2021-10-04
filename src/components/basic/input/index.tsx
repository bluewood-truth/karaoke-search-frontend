import styled from '@emotion/styled';
import isPropValid from '@emotion/is-prop-valid';
import {InputStyled} from '../_commonStyled/inputStyled';

const ignoredProps: string[] = [];

const options = {
  shouldForwardProp: (prop: any) =>
    isPropValid(prop) && !ignoredProps.includes(prop),
};

const Input = styled('input', options)(InputStyled);

export default Input;
