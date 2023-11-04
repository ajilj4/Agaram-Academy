import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Header} from './header';
// import Button from 'react-bootstrap/Button';
// import Header from './header';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <Header name="software " />
    <App name="sofware acedamy" place="nagercoil" />
    </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
