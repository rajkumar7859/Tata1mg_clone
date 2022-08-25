import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import Login_Auth from './Context/AuthContext';
import { Provider } from 'react-redux';
import { store } from './Context/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<Provider  store={store}>
  <Login_Auth >
    <BrowserRouter>
       <App />
    </BrowserRouter>
  </Login_Auth>
</Provider>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
