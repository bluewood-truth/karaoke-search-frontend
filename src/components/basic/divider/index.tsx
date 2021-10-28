import styled from '@emotion/styled';
import isPropValid from '@emotion/is-prop-valid';
import {mainColor} from 'components/basic/colors';
import {DividerProps} from './types';

const Styled = (props: DividerProps) => {
  const colorSet = mainColor;
  const orientation = props.orientation ? props.orientation : 'horizontal';
  const {color, width, opacity} = props;
  const defaultStyle = {
    width: orientation === 'horizontal' ? '100%' : 0,
    height: orientation === 'vertical' ? '100%' : 0,
    borderColor: color
      ? color.length === 1
        ? colorSet[parseInt(color)]
        : color
      : colorSet[4],
    borderWidth: 0,
    borderBottomWidth:
      orientation === 'horizontal' ? (width ? width : '1px') : 0,
    borderLeftWidth: orientation === 'vertical' ? (width ? width : '1px') : 0,
    opacity,

    borderStyle: 'solid',
  };

  return {
    ...defaultStyle,
  };
};

const ignoredProps: string[] = [];

const options = {
  shouldForwardProp: (prop: any) =>
    isPropValid(prop) && !ignoredProps.includes(prop),
};

const Divider = styled('hr', options)(Styled);

export default Divider;
