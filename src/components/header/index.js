import React from 'react';
import logo from '../../assets/logo.png';
import Links from './Links';
import Social from './Social';

const Header = () => {
  return (
    <section id="header">
      <div class="container">
        <img src={logo} class="logo" />
        <Links />
        <Social />
      </div>
    </section>
  );
};
export default Header;
