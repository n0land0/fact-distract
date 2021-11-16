import React, { useContext } from 'react';
import { AppContext } from '../App/AppContextProvider';
import CurrentFact from './CurrentFact/CurrentFact';
import RecentFacts from './RecentFacts/RecentFacts';

const Generate = () => {
  const { error } = useContext(AppContext);
  
  return (
    <section className='generate-container'>
      { error
        ? <h2 className='error'>{ error.message }</h2>
        : <>
          <CurrentFact />
          <RecentFacts />
          </>
      }
    </section>
  )
}

export default Generate;
