import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux';
import Store from './helpers/store/Store';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css'
import './styles/_index.scss'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Provider store={Store}>
        <App />
      </Provider>
    </Router>
  </React.StrictMode>
);