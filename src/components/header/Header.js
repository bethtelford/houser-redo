import React from 'react';

import logo from './../../assets/houser_logo.png';
import './Header.css';

export default function Header() {
  return (
    <div className='Header'>
      <img src={logo} alt='logo' />
      <h1>Houser</h1>
    </div>
  )
}