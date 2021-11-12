import React, { useContext } from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';
import AppContextProvider from './AppContextProvider';
import Header from './Header/Header';


const App = () => {

  return (
    <AppContextProvider>
      <main>
        <Header />
        <Outlet />
      </main>
    </AppContextProvider>
  )
}

export default App;
