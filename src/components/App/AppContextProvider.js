import React, { createContext, useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled, { ThemeProvider } from 'styled-components';
import { darkMode, lightMode, GlobalStyles } from '../../styles/palettes';
import Header from './Header/Header';
import fetchCalls from '../../fetchCalls';
import animations from '../../styles/animations';
import heart from '../../assets/heart.png';
import brokenHeart from '../../assets/broken_heart.png';

export const AppContext = createContext();

const StyledApp = styled.main``;

const App = () => {
  const [ error, setError ] = useState('');
  const [ currentFact, setCurrentFact ] = useState('');
  const [ recentFacts, setRecentFacts ] = useState([]);
  const [ savedFacts, setSavedFacts ] = useState([]);
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
    } else {
      setSavedFacts([fact, ...savedFacts]);
    }
  }

  const displayButtonText = (fact) => {
    return savedFacts.includes(fact)
      ? brokenHeart
      : heart
  }

  const togglePalette = () => {
    return paletteMode === 'dark'
      ? (setPaletteMode('light'), localStorage.setItem('paletteMode', 'light'))
      : (setPaletteMode('dark'), localStorage.setItem('paletteMode', 'dark'))
  }

  const value = {
    error,
    currentFact, recentFacts, savedFacts,
    language, allLanguages, setLanguage,
    setCurrentFact, setRecentFacts, setSavedFacts,
    moveToRecentFacts, addOrRemoveSavedFact, displayButtonText,
    paletteMode, setPaletteMode, togglePalette
  }

  // page load/app mount only
  useEffect(() => {
    animations.renderPageElements();
  }, [])

  // change in recent facts triggers new fact
  useEffect(() => {
    animations.renderRecentFacts();
    animations.renderLoadingMessage();
    fetchCalls.getNewFact(language)
      .then(newFact => {
        // buying time to display loading animation
        setTimeout(() => {
          setCurrentFact(newFact)
        }, 2000)
      }
    ).catch(error => setError(error));
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

AppContext.Provider.propTypes = {
  value: PropTypes.shape({
    error: PropTypes.string.isRequired,
    currentFact: PropTypes.string.isRequired,
    recentFacts: PropTypes.array.isRequired,
    savedFacts: PropTypes.array.isRequired,
    language: PropTypes.string.isRequired,
    allLanguages: PropTypes.array.isRequired,
    setLanguage: PropTypes.func.isRequired,
    setCurrentFact: PropTypes.func.isRequired,
    setRecentFacts: PropTypes.func.isRequired,
    setSavedFacts: PropTypes.func.isRequired,
    moveToRecentFacts: PropTypes.func.isRequired,
    addOrRemoveSavedFact: PropTypes.func.isRequired,
    displayButtonText: PropTypes.func.isRequired,
    paletteMode: PropTypes.string.isRequired,
    setPaletteMode: PropTypes.func.isRequired,
    togglePalette: PropTypes.func.isRequired
  })
}
