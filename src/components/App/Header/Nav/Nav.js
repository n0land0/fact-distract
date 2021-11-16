import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {

  return (
    <nav className='navbar'>
      <NavLink to='/' className='navbar__navlink generate' activeClassName='navlink-active'>
        new fact
      </NavLink>
      <NavLink to='/saved' className='navbar__navlink saved' activeClassName='navlink-active'>
        saved facts
      </NavLink>
    </nav>
  )
}

export default Nav;
