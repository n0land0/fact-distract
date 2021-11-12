import React, { useContext } from 'react';
import CurrentFact from './CurrentFact/CurrentFact';
import RecentFacts from './RecentFacts/RecentFacts';

const Generate = () => {

  return (
    <>
      <CurrentFact />
      <RecentFacts />
    </>
  )
}

export default Generate;
