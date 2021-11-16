import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {

  return (
    <nav className='navbar'>
      <NavLink to='/' className='navbar__navlink generate' activeclassname='navlink-active'>
        get facts
      </NavLink>
      <NavLink to='/saved' className='navbar__navlink saved' activeclassname='navlink-active'>
        saved facts
      </NavLink>
    </nav>
  )
}

export default Nav;
