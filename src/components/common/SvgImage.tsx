import styled from '@emotion/styled';
import isDarkMode from 'utils/isDarkMode';

const SvgImage = styled('span')(
  (props: {src: string; width: string; height: string}) => {
    const {src, width, height} = props;
    return {
      display: 'inline-block',
      backgroundImage: `url(/assets/${src}${isDarkMode() ? '_dark' : ''}.svg)`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center center',
      width,
      height,
    };
  }
);

export default SvgImage;
