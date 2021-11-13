import React, { useContext } from 'react';
import { AppContext } from '../../App/AppContextProvider';

const PromptIfNoneSaved = () => {
  const {
    user, currentFact, recentFacts, savedFacts, paletteMode, language, allLanguages,
    setUser, setCurrentFact, setRecentFacts, setSavedFacts, setPaletteMode, setLanguage
  } = useContext(AppContext);

  return (
    <>

    </>
  )
}

export default PromptIfNoneSaved;
