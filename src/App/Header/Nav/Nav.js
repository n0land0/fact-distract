import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {

  return (
    <nav className='navbar'>
      <NavLink to='/generate' className='navbar__navlink' activeClassName='navlink-active'>
        new fact
      </NavLink>
      <NavLink to='/saved' className='navbar__navlink' activeClassName='navlink-active'>
        saved facts
      </NavLink>
    </nav>
  )
}

export default Nav;
