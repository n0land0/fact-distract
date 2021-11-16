import React from 'react';
import PaletteMode from './PaletteMode/PaletteMode';
import MenuIcon from './MenuIcon/MenuIcon';

const UserMgmt = () => {
  return (
    <article className='menu'>
      <MenuIcon />
      <article className='user-mgmt-container'>
        <p className='viewing-in'>currently viewing in</p>
        <PaletteMode />
      </article>
    </article>
  )
}

export default UserMgmt;
