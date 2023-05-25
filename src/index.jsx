import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import './home.css';
import './cars.css';
import store from './app/store';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
    ,
  </Provider>,

);
