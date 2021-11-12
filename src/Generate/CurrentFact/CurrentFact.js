import React, { useContext } from 'react';
import { AppContext } from '../../App/AppContextProvider';

const CurrentFact = () => {
  const { currentFact, moveToRecentFacts, addOrRemoveSavedFact } = useContext(AppContext);

  return (
    <section className='current-fact__container'>
    { currentFact
      ? <>
      <p className='current-fact__text'>{ currentFact }</p>
      <article className='current-fact__buttons-container'>
        <button
          className='current-fact__button save-fact'
          onClick={() => addOrRemoveSavedFact(currentFact)}
        >
          💜
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
