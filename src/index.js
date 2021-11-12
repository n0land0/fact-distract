import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App/App';
import './styles/base.scss';

const root = document.getElementById('root');

render(
  <Router>
    <App />
  </Router>
  , root
)
