import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../../App/AppContextProvider';

const PromptIfNoneSaved = () => {
  const {
    user, currentFact, recentFacts, savedFacts, paletteMode, language, allLanguages,
    setUser, setCurrentFact, setRecentFacts, setSavedFacts, setPaletteMode, setLanguage
  } = useContext(AppContext);

  return (
    <section className='prompt-container'>
      <h2 className='prompt__text'>you haven't saved any facts yet!</h2>
      <Link to='/'>
        <button className='prompt__go-home-btn'>let's go do that</button>
      </Link>
    </section>
  )
}

export default PromptIfNoneSaved;
