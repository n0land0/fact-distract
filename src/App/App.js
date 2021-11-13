import React, { useContext } from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';
import AppContextProvider from './AppContextProvider';
import Header from './Header/Header';


const App = () => {

  return (
    <AppContextProvider>
      <Header />
      <main>
        <Outlet />
      </main>
    </AppContextProvider>
  )
}

export default App;
