import React, { useContext } from 'react';
import Logo from './Logo/Logo';
import Nav from './Nav/Nav';
import UserMgmt from './UserMgmt/UserMgmt';

const Header = () => {

  return (
    <header>
      <Logo />
      <Nav />
      <UserMgmt />
    </header>
  )
}

export default Header;
