import React, { useState, useContext } from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import AppContextProvider, { AppContext } from './AppContextProvider';
import { darkMode, lightMode, GlobalStyles } from '../styles/palettes';
import Header from './Header/Header';

const StyledApp = styled.main``;

const App = () => {

  return (
    <AppContextProvider>
      <ThemeProvider theme={darkMode}>
          <GlobalStyles />
          <Header />
          <StyledApp>
            <Outlet />
          </StyledApp>
      </ThemeProvider>
    </AppContextProvider>
  )
}

export default App;
