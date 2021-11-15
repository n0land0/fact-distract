import React, { useContext } from 'react';
import { AppContext } from '../../App/AppContextProvider';
import SavedFactItem from './SavedFactItem/SavedFactItem';
import Carousel from 'react-elastic-carousel';

const SavedFacts = () => {
  const { savedFacts } = useContext(AppContext);

  const savedFactItems = savedFacts.map(fact => <SavedFactItem fact={fact}/>);

  return (
    <section className='saved-facts-container'>
      <Carousel>
        { savedFactItems }
      </Carousel>
    </section>
  )
}

export default SavedFacts;
