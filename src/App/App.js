import React, { useContext } from 'react';
import AppContextProvider from './AppContextProvider';


const App = () => {

  return (
    <AppContextProvider>
      <main>
        <h1>Hello World!</h1>
      </main>
    </AppContextProvider>
  )
}

export default App;
