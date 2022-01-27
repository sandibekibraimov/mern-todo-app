import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <h3 className='h-logo'>ToDo</h3>

      <ul className='h-menu'>
        <li className='h-menu-item'>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/about'>About</Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
