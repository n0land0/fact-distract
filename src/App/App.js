import React, { useContext } from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';
import AppContextProvider from './AppContextProvider';
import Generate from '../Generate/Generate';
// import AppRoutes from './AppRoutes';


const App = () => {

  return (
    <AppContextProvider>
      <main>
        <h1>Hello World!</h1>
        <Outlet />
      </main>
    </AppContextProvider>
  )
}

export default App;
