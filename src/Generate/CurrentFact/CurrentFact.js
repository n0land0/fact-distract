import React, { useContext } from 'react';
import { AppContext } from '../../App/AppContextProvider';

const CurrentFact = () => {
  const {
     user, currentFact, recentFacts, savedFacts, paletteMode, language, allLanguages,
     setUser, setCurrentFact, setRecentFacts, setSavedFacts, setPaletteMode, setLanguage
   } = useContext(AppContext);

   const moveToRecentFacts = (fact) => {
     // Context's useEffect is watching recentFacts, so this triggers a new fetch
     setRecentFacts([fact, recentFacts[0], recentFacts[1]])
   }

   const addToSavedFacts = (fact) => {
     if (!savedFacts.includes(currentFact)) {
       setSavedFacts([fact, ...savedFacts])
     }
   }

  return (
    <section className='current-fact__container'>
      <p className='current-fact__text'>{ currentFact }</p>
      <article className='current-fact__buttons'>
        <button onClick={() => addToSavedFacts(currentFact)}>💜</button>
        <button onClick={() => moveToRecentFacts(currentFact)}>new fact</button>
      </article>
    </section>
  )
}

export default CurrentFact;
