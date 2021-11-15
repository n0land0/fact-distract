import React, { useContext } from 'react';
import { AppContext } from '../../../App/AppContextProvider';

const SavedFactItem = ({ fact }) => {
  const {
    user, currentFact, recentFacts, savedFacts, paletteMode, language, allLanguages,
    setUser, setCurrentFact, setRecentFacts, setSavedFacts, addOrRemoveSavedFact, displayButtonText, setPaletteMode, setLanguage
  } = useContext(AppContext);

  const thisFact = savedFacts.find(savedFact => savedFact === fact);
  let buttonText = displayButtonText(thisFact);

  return (
    <article className='saved-fact-item'>
      <p className='saved-fact-item__text'>{ fact }</p>
      <button
        className='saved-fact__unsave-fact-button'
        onClick={ () => addOrRemoveSavedFact(thisFact) }
        aria-label='unsave this fact'
      >
        <img className='heart-icon' src={ buttonText } alt='heart icon' />
      </button>
    </article>
  )
}

export default SavedFactItem;
