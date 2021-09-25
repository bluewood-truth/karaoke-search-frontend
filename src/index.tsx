import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {RecoilRoot} from 'recoil';
import {BrowserRouter} from 'react-router-dom';
import {Global} from '@emotion/react';
import globalStyles from 'globalStyles';

ReactDOM.render(
  <React.StrictMode>
    <RecoilRoot>
      <BrowserRouter>
        <Global styles={globalStyles} />
        <App />
      </BrowserRouter>
    </RecoilRoot>
  </React.StrictMode>,
  document.getElementById('root')
);
