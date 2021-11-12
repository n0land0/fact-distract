import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AppContext } from '../../AppContextProvider';
import LanguageSelect from './LanguageSelect/LanguageSelect';
import PaletteMode from './PaletteMode/PaletteMode';

const UserMgmt = () => {
  // const {
  //   currentFact, recentFacts, savedFacts, paletteMode, language, allLanguages,
  //   setCurrentFact, setRecentFacts, setSavedFacts, setPaletteMode, setLanguage
  // } = useContext(AppContext);

  return (
    <article class='user-mgmt-container'>
      <h2>Hello, User!</h2>
      <LanguageSelect />
      <PaletteMode />
    </article>
  )
}

export default UserMgmt;
