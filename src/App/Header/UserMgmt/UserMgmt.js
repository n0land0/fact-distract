import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AppContext } from '../../AppContextProvider';
import LanguageSelect from './LanguageSelect/LanguageSelect';
import PaletteMode from './PaletteMode/PaletteMode';
import MenuIcon from './MenuIcon/MenuIcon';

const UserMgmt = () => {
  const {
    user, setUser
  } = useContext(AppContext);

  return (
    <>
    <MenuIcon />
    <article className='user-mgmt-container'>
      <h2 className='user-mgmt__greeting'>Hello, { user }!</h2>
      <LanguageSelect />
      <PaletteMode />
    </article>
    </>
  )
}

export default UserMgmt;
