import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AppContext } from '../../AppContextProvider';
import LanguageSelect from './LanguageSelect/LanguageSelect';
import PaletteMode from './PaletteMode/PaletteMode';

const UserMgmt = () => {

  return (
    <article class='user-mgmt-container'>
      <h2>Hello, User!</h2>
      <LanguageSelect />
      <PaletteMode />
    </article>
  )
}

export default UserMgmt;
