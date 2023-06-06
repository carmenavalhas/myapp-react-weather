import React from 'react';
import ReactDOM from 'react-dom/client';
import Footer from "./Footer";

import './styles.css';

import AppWeather from './AppWeather';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
<AppWeather />
<Footer />
  </React.StrictMode>
);

reportWebVitals();
