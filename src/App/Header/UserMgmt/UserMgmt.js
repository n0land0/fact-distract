import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AppContext } from '../../AppContextProvider';
import LanguageSelect from './LanguageSelect/LanguageSelect';
import PaletteMode from './PaletteMode/PaletteMode';

const UserMgmt = () => {
  const {
    user, setUser
  } = useContext(AppContext);

  return (
    <article className='user-mgmt-container'>
      <h2 className='user-mgmt__greeting'>Hello, { user }!</h2>
      <LanguageSelect />
      <PaletteMode />
      <button>that's not my name</button>
    </article>
  )
}

export default UserMgmt;
