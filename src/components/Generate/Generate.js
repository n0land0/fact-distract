import React from 'react';
import CurrentFact from './CurrentFact/CurrentFact';
import RecentFacts from './RecentFacts/RecentFacts';

const Generate = () => {

  return (
    <section className='generate-container'>
      <CurrentFact />
      <RecentFacts />
    </section>
  )
}

export default Generate;
