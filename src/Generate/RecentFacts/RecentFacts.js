import React, { useContext } from 'react';
import { AppContext } from '../../App/AppContextProvider';

const RecentFacts = () => {
  const { recentFacts, savedFacts, addOrRemoveSavedFact, displayButtonText } = useContext(AppContext);

  const [ recentFact1, recentFact2, recentFact3 ] = recentFacts;

  let buttonText1 = displayButtonText(recentFact1);
  let buttonText2 = displayButtonText(recentFact2);
  let buttonText3 = displayButtonText(recentFact3);

  return (
    <section className='recent-facts-container'>
      { recentFact1 && <article className='recent-fact-1'>
        <p className='recent-fact-1__text'>{ recentFact1 }</p>
        <button
          className='recent-fact__button save-fact'
          onClick={ () => addOrRemoveSavedFact(recentFact1) }
        >
          { buttonText1 }
        </button>
      </article> }
      { recentFact2 && <article className='recent-fact-2'>
        <p className='recent-fact-2__text'>{ recentFact2 }</p>
        <button
          className='recent-fact__button save-fact'
          onClick={ () => addOrRemoveSavedFact(recentFact2) }
        >
          { buttonText2 }
        </button>
      </article> }
      { recentFact3 && <article className='recent-fact-3'>
        <p className='recent-fact-3__text'>{ recentFact3 }</p>
        <button
          className='recent-fact__button save-fact'
          onClick={ () => addOrRemoveSavedFact(recentFact3) }
        >
          { buttonText3 }
        </button>
      </article> }
    </section>
  )
}

export default RecentFacts;
