import React, { useContext } from 'react';
import { AppContext } from '../../AppContextProvider';
import LanguageSelect from './LanguageSelect/LanguageSelect';
import PaletteMode from './PaletteMode/PaletteMode';
import MenuIcon from './MenuIcon/MenuIcon';

const UserMgmt = () => {
  const {
    user, setUser
  } = useContext(AppContext);

  return (
    <article className='menu'>
      <MenuIcon />
      <article className='user-mgmt-container'>
        <h2 className='user-mgmt__greeting'>Hello, { user }!</h2>
        <LanguageSelect />
        <p className='viewing-in'>currently viewing in</p>
        <PaletteMode />
      </article>
    </article>
  )
}

export default UserMgmt;
