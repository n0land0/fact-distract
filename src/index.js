import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './components/App/AppContextProvider';
import Generate from './components/Generate/Generate';
import Saved from './components/Saved/Saved';
import './styles/base.scss';

const root = document.getElementById('root');

render(
  <Router>
    <Routes>
      <Route path='/' element={ <App /> }>
        <Route index element={ <Generate /> } />
        <Route path='saved' element={ <Saved /> } />
        <Route path='*' element={ <h1>404!</h1> } />
      </Route>
    </Routes>
  </Router>
  , root
)
