import styled from '@emotion/styled';
import isPropValid from '@emotion/is-prop-valid';
import {SelectProps} from './types';
import {InputStyled} from '../_commonStyled/inputStyled';

const Styled = (props: SelectProps) => {
  return InputStyled(props);
};

const ignoredProps: string[] = [];

const options = {
  shouldForwardProp: (prop: any) =>
    isPropValid(prop) && !ignoredProps.includes(prop),
};

const Select = styled('select', options)(Styled);

export default Select;
