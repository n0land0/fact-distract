import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {

  return (
    <nav>
      <NavLink to='/generate' className='generate-link' activeClassName='navlink-active'>
        new fact
      </NavLink>
      <NavLink to='/saved' className='saved-link' activeClassName='navlink-active'>
        saved facts
      </NavLink>
    </nav>
  )
}

export default Nav;
