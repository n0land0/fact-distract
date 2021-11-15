import React, { useContext } from 'react';
import { AppContext } from '../../../AppContextProvider';

const MenuIcon = () => {
  const { open, setOpen } = useContext(AppContext);

  return (
    <button
      className='menu-icon'
      onClick={ () => setOpen(!open) }
      aria-label='menu icon'
    >
      <span className='menu-line-1' />
      <span className='menu-line-2' />
      <span className='menu-line-3' />
    </button>
  )
}

export default MenuIcon;
