import {css} from '@emotion/react';

const globalStyles = css`
  * {
    margin: 0;
    font-family: 'Nanum Gothic', -apple-system, BlinkMacSystemFont, 'Segoe UI',
      'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',
      'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    box-sizing: border-box;
    letter-spacing: -0.05rem;
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
