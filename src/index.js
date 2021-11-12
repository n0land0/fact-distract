import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App/App';
import AppContextProvider from './App/AppContextProvider';
import Generate from './Generate/Generate';
import Saved from './Saved/Saved';
import './styles/base.scss';

const root = document.getElementById('root');

render(
  <Router>
    <Routes>
      <Route path='/' element={ <App /> }>
        <Route path='generate' element={ <Generate /> } />
        <Route path='saved' element={ <Saved /> } />
        <Route path='*' element={ <h1>404!</h1> } />
      </Route>
    </Routes>
  </Router>
  , root
)
