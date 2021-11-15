import React, { createContext, useState, useEffect, useReducer } from 'react';
import { Outlet } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import { darkMode, lightMode, GlobalStyles } from '../styles/palettes';
import fetchCalls from '../fetchCalls';
import Header from './Header/Header';
import heart from '../assets/heart.png';
import brokenHeart from '../assets/broken_heart.png';

export const AppContext = createContext();

const StyledApp = styled.main``;

const App = () => {
  const [ user, setUser ] = useState('Hingle McCringleberry');
  const [ currentFact, setCurrentFact ] = useState('');
  const [ recentFacts, setRecentFacts ] = useState([
    "Swag thundercats 3 wolf moon, mumblecore paleo pop-up pickled vegan fixie before they sold out tbh",
    "Offal jianbing palo santo, shabby chic semiotics vape organic art party affogato poutine vice vinyl banh mi.",
    "Chicharrones drinking vinegar tilde master cleanse snackwave adaptogen DIY tattooed"
  ]);
  const [ savedFacts, setSavedFacts ] = useState([
    "I'm baby ramps synth chartreuse street art pork belly, tofu banh mi iPhone small batch photo booth farm-to-table beard selvage lomo PBR&B",
    "Sriracha dreamcatcher cronut tbh quinoa organic butcher keytar pour-over cloud bread offal ethical occupy bitters",
    "Green juice pork belly lumbersexual direct trade kombucha jean shorts roof party shoreditch bitters umami everyday carry lyft intelligentsia tofu"
  ]);
  // const [ paletteMode, setPaletteMode ] = useState('dark');
  const [ paletteMode, setPaletteMode ] = useState(
    localStorage.getItem('paletteMode') ? localStorage.getItem('paletteMode') : 'dark'
  );
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
      // saveButtonStatus = 'save-fact';
    } else {
      setSavedFacts([fact, ...savedFacts]);
      // saveButtonStatus = 'unsave-fact';
    }
  }

  const displayButtonText = (fact) => {
    return savedFacts.includes(fact)
      ? brokenHeart
      : heart
  }

  const togglePalette = () => {
    console.log(paletteMode)
    paletteMode === 'dark'
      ? setPaletteMode('light')
      : setPaletteMode('dark')
      console.log(paletteMode)
      // localStorage.setItem('paletteMode', paletteMode)
  }

  const [ open, setOpen ] = useState(false);

  const value = {
    user, currentFact, recentFacts, savedFacts, language, allLanguages, setUser, setCurrentFact, setRecentFacts, moveToRecentFacts, setSavedFacts, addOrRemoveSavedFact, displayButtonText, setLanguage, paletteMode, setPaletteMode, togglePalette, open, setOpen
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
        <footer>
          <h1 className='page-title'>fact • distract</h1>
          <h1 className='page-title-shadow'>fact • distract</h1>
        </footer>
      </ThemeProvider>
    </AppContext.Provider>
  )
}

export default App;


// import { AppContext } from
//
// const {
//  user, currentFact, recentFacts, savedFacts, language, allLanguages, setUser, setCurrentFact, setRecentFacts, moveToRecentFacts, setSavedFacts, addOrRemoveSavedFact, displayButtonText, setLanguage, paletteMode, setPaletteMode, togglePalette
// } = useContext(AppContext);
