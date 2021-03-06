import {css} from '@emotion/react';
import {getMainColor} from 'components/basic';

const globalStyles = css`
  * {
    margin: 0;
    font-family: 'NanumSquareRound', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    box-sizing: border-box;
    letter-spacing: -0.05rem;
    transition: background-color 0.2s, border 0.2s, box-shadow 0.2s,
      background 0.2s;
  }

  html {
    background-color: ${getMainColor()[0]};
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }

  :focus {
    outline: 0;
  }
`;

export default globalStyles;
