import React from 'react';
import { hydrate, render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const rootElement = document.getElementById('root');
const AppWrapper = () => (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

if (rootElement.hasChildNodes()) {
  hydrate(<AppWrapper />, rootElement);
} else {
  render(<AppWrapper />, rootElement);
}

reportWebVitals();
