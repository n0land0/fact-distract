import React, { useContext } from 'react';
import { AppContext } from '../../../AppContextProvider';

const PaletteMode = () => {
  const {
    currentFact, recentFacts, savedFacts, paletteMode, language, allLanguages,
    setCurrentFact, setRecentFacts, setSavedFacts, setPaletteMode, setLanguage
  } = useContext(AppContext);

  const newPalette = paletteMode === 'dark'
    ? 'light'
    : 'dark';

  const togglePalette = () => {
    setPaletteMode(newPalette);
  }

  return (
    <button
      onClick={togglePalette}
    >
      { newPalette } mode
    </button>
  )
}

export default PaletteMode;
