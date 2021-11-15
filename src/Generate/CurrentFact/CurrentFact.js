import React, { useContext } from 'react';
import { AppContext } from '../../App/AppContextProvider';

const CurrentFact = () => {
  const { currentFact, moveToRecentFacts, addOrRemoveSavedFact, displayButtonText } = useContext(AppContext);

  let buttonText = displayButtonText(currentFact);

  return (
    <section className='current-fact__container'>
    { currentFact
      ? <>
      <p className='current-fact__did-you-know'>did you know?</p>
      <p className='current-fact__text'>{ currentFact }</p>
      <article className='current-fact__buttons-container'>
        <button
          className='current-fact__button save-fact'
          onClick={() => addOrRemoveSavedFact(currentFact)}
        >
          <img className='heart-icon' src={ buttonText } />
        </button>
        <button
          className='current-fact__button new-fact'
          onClick={() => moveToRecentFacts(currentFact)}
        >
          new fact
        </button>
      </article>
    </>
    : <h2 className='loading-message'>loading factoid...</h2>
    }
    </section>
  )
}

export default CurrentFact;
