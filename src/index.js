import React from 'react';
import ReactDOM from 'react-dom';
import App from './App/index.js';
import './index.css';

/* prettier-ignore */
ReactDOM.render(
  <App />,
  document.getElementById('root')
);
/* prettier-ignore */
ReactDOM.createPortal(
  <App />,
  document.getElementById('modal')
);
