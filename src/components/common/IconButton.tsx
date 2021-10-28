import { Button } from 'components/basic';
import React from 'react';
import SvgImage from './SvgImage';

const IconButton = (
  props: React.ButtonHTMLAttributes<HTMLButtonElement> & {
    src: string;
    width: string;
    height: string;
  }
) => {
  const {src, width, height, ...buttonProps} = props;
  return (
    <Button {...buttonProps} padding='0' margin='0'>
      <SvgImage {...{src, width, height}} />
    </Button>
  );
};

export default IconButton;
