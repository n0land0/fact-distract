import React, { useContext } from 'react';
import { AppContext } from '../../App/AppContextProvider';

const RecentFacts = () => {
  const {
   user, currentFact, recentFacts, savedFacts, paletteMode, language, allLanguages,
   setUser, setCurrentFact, setRecentFacts, setSavedFacts, setPaletteMode, setLanguage
 } = useContext(AppContext);


  return (
    <section>

    </section>
  )
}

export default RecentFacts;
