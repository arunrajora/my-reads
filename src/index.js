import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';

console.log('found', process.env.PUBLIC_URL);

ReactDOM.render(
  <BrowserRouter basename={`${process.env.PUBLIC_URL}/`}>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
