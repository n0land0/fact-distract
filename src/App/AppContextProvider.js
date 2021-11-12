import React, { createContext, useState, useEffect, useReducer } from 'react';
import fetchCalls from '../fetchCalls';

export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const [ user, setUser ] = useState('Hingle McCringleberry');
  const [ currentFact, setCurrentFact ] = useState('');
  const [ recentFacts, setRecentFacts ] = useState([
    "Swag thundercats 3 wolf moon, mumblecore paleo pop-up pickled vegan fixie before they sold out tbh",
    "Offal jianbing palo santo, shabby chic semiotics vape organic art party affogato poutine vice vinyl banh mi.",
    "Chicharrones drinking vinegar tilde master cleanse snackwave adaptogen DIY tattooed"
  ]);
  const [ savedFacts, setSavedFacts ] = useState([]);
  const [ paletteMode, setPaletteMode ] = useState('dark');
  const [ language, setLanguage ] = useState('en');
  const allLanguages = ['en', 'de'];

  const value = {
    user, currentFact, recentFacts, savedFacts, paletteMode, language, allLanguages,
    setUser, setCurrentFact, setRecentFacts, setSavedFacts, setPaletteMode, setLanguage
  }

  useEffect(() => {
    fetchCalls.getNewFact(language)
      .then(newFact => setCurrentFact(newFact))
  }, [])

  return (
    <AppContext.Provider value={value}>
      { children }
    </AppContext.Provider>
  )
}

export default AppContextProvider;


// import { AppContext } from
//
// const {
//   user, currentFact, recentFacts, savedFacts, paletteMode, language, allLanguages,
//   setUser, setCurrentFact, setRecentFacts, setSavedFacts, setPaletteMode, setLanguage
// } = useContext(AppContext);
