import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import MainProvider from './context/MainProvider';
import './index.css';

ReactDOM.render(
  <MainProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </MainProvider>,
  document.getElementById('root'),
);
