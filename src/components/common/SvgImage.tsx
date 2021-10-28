import styled from "@emotion/styled";

const SvgImage = styled('span')(
  (props: {src: string; width: string; height: string}) => {
    const {src, width, height} = props;
    return {
      display: 'inline-block',
      backgroundImage: `url(/assets/${src}.svg)`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center center',
      width,
      height,
    };
  }
);

export default SvgImage;
