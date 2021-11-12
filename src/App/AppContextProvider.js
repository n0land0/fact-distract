import React, { createContext, useState, useEffect, useReducer } from 'react';

export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  // hooks

  return (
    <AppContext.Provider value={''}>
      { children }
    </AppContext.Provider>
  )
}

export default AppContextProvider;
