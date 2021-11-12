import React, { useContext } from 'react';
import { AppContext } from '../../App/AppContextProvider';

const RecentFacts = () => {
  const {
    user, currentFact, recentFacts, savedFacts, paletteMode, language, allLanguages,
    setUser, setCurrentFact, setRecentFacts, moveToRecentFacts, setSavedFacts, addToSavedFacts, setPaletteMode, setLanguage
 } = useContext(AppContext);

 const [ recentFact1, recentFact2, recentFact3 ] = recentFacts;

  return (
    <section className='recent-facts-container'>
      <article className='recent-fact-1'>
        <p className='recent-fact-1__text'>{ recentFact1 }</p>
        <button className='recent-fact__button save-fact' onClick={() => addToSavedFacts(recentFact1)}>💜</button>
      </article>
      <article className='recent-fact-2'>
        <p className='recent-fact-2__text'>{ recentFact2 }</p>
        <button className='recent-fact__button save-fact' onClick={() => addToSavedFacts(recentFact2)}>💜</button>
      </article>
      <article className='recent-fact-3'>
        <p className='recent-fact-3__text'>{ recentFact3 }</p>
        <button className='recent-fact__button save-fact' onClick={() => addToSavedFacts(recentFact3)}>💜</button>
      </article>
    </section>
  )
}

export default RecentFacts;
