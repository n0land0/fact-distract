import React, { useContext } from 'react';
import { AppContext } from '../../App/AppContextProvider';
import SavedFactItem from './SavedFactItem/SavedFactItem';

const SavedFacts = () => {
  const { savedFacts } = useContext(AppContext);

  const savedFactItems = savedFacts.map(fact => <SavedFactItem fact={fact}/>);

  return (
    <>
      { savedFactItems }
    </>
  )
}

export default SavedFacts;
