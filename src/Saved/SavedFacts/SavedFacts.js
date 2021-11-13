import React, { useContext } from 'react';
import { AppContext } from '../../App/AppContextProvider';
import SavedFactItem from './SavedFactItem/SavedFactItem';

const SavedFacts = () => {
  const { savedFacts } = useContext(AppContext);

  const savedFactItems = savedFacts.map(fact => <SavedFactItem fact={fact}/>);

  return (
    <section className='saved-facts-container'>
      <h2 className='saved-facts__header'>my saved facts</h2>
      { savedFactItems }
    </section>
  )
}

export default SavedFacts;
