import React, { useContext } from 'react';
import { AppContext } from '../App/AppContextProvider';
import SavedFacts from './SavedFacts/SavedFacts';
import PromptIfNoneSaved from './PromptIfNoneSaved/PromptIfNoneSaved';

const Saved = () => {
  const { savedFacts } = useContext(AppContext);

  return (
    <>
      { savedFacts.length
        ? <SavedFacts />
        : <PromptIfNoneSaved />
      }
    </>
  )
}

export default Saved;
