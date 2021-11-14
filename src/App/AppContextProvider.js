import React, { createContext, useState, useEffect, useReducer } from 'react';
import { Outlet } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import { darkMode, lightMode, GlobalStyles } from '../styles/palettes';
import fetchCalls from '../fetchCalls';
import Header from './Header/Header';

export const AppContext = createContext();

const StyledApp = styled.main``;

const App = ({ children }) => {
  const [ user, setUser ] = useState('Hingle McCringleberry');
  const [ currentFact, setCurrentFact ] = useState('');
  const [ recentFacts, setRecentFacts ] = useState([
    "Swag thundercats 3 wolf moon, mumblecore paleo pop-up pickled vegan fixie before they sold out tbh",
    "Offal jianbing palo santo, shabby chic semiotics vape organic art party affogato poutine vice vinyl banh mi.",
    "Chicharrones drinking vinegar tilde master cleanse snackwave adaptogen DIY tattooed"
  ]);
  const [ savedFacts, setSavedFacts ] = useState([
    // "I'm baby ramps synth chartreuse street art pork belly, tofu banh mi iPhone small batch photo booth farm-to-table beard selvage lomo PBR&B",
    // "Sriracha dreamcatcher cronut tbh quinoa organic butcher keytar pour-over cloud bread offal ethical occupy bitters",
    // "Green juice pork belly lumbersexual direct trade kombucha jean shorts roof party shoreditch bitters umami everyday carry lyft intelligentsia tofu"
  ]);
  const [ paletteMode, setPaletteMode ] = useState('dark');
  const [ language, setLanguage ] = useState('en');
  const allLanguages = ['en', 'de'];

  const moveToRecentFacts = (fact) => {
    // Context's useEffect is watching recentFacts, so this triggers a new fetch
    setCurrentFact(null);
    setRecentFacts([fact, recentFacts[0], recentFacts[1]]);
  }

  const addOrRemoveSavedFact = (fact) => {
    if (savedFacts.includes(fact)) {
      const filteredFacts = savedFacts.filter(savedFact => savedFact !== fact);
      setSavedFacts(filteredFacts);
    } else {
      setSavedFacts([fact, ...savedFacts]);
    }
  }

  const displayButtonText = (fact) => {
    return savedFacts.includes(fact)
      ? '💔'
      : '💜'
  }

  const togglePalette = () => {
    paletteMode === 'dark'
      ? setPaletteMode('light')
      : setPaletteMode('dark')
  }

  const value = {
    user, currentFact, recentFacts, savedFacts, language, allLanguages, setUser, setCurrentFact, setRecentFacts, moveToRecentFacts, setSavedFacts, addOrRemoveSavedFact, displayButtonText, setLanguage, paletteMode, setPaletteMode, togglePalette
  }

  useEffect(() => {
    fetchCalls.getNewFact(language)
      .then(newFact => {
        // buying time to display loading animation
        setTimeout(() => {
          setCurrentFact(newFact)
        }, 2000)
      })
  }, [ recentFacts ])

  return (
    <AppContext.Provider value={ value }>
      <ThemeProvider theme={ paletteMode === 'dark' ? darkMode : lightMode}>
        <GlobalStyles />
        <Header />
        <StyledApp>
          <Outlet />
        </StyledApp>
      </ThemeProvider>
    </AppContext.Provider>
  )
}

export default App;


// import { AppContext } from
//
// const {
//   user, currentFact, recentFacts, savedFacts, paletteMode, language, allLanguages,
//   setUser, setCurrentFact, setRecentFacts, setSavedFacts, addOrRemoveSavedFact, displayButtonText, setPaletteMode, setLanguage
// } = useContext(AppContext);
