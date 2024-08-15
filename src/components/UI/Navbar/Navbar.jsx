import React from 'react';
import { Link } from 'react-router-dom';
import cl from './Navbar.module.scss';
import logo from '../../../assets/svg/logo.svg';
import cup from '../../../assets/svg/coffee-cup.svg';

export const Navbar = () => {
  return (
    <header className={cl.header}>
        <div className={cl.header__logo}>
          <Link to='/'>
            <img src={logo} alt=''/>
          </Link>
        </div>
        <nav className={cl.header__nav}>
          <ul className={cl.header__list}>
            <li>
              <a href='#0' className='link'>
                Favorite coffee
              </a>
            </li>
            <li>
              <a href='#0' className='link'>
                About
              </a>
            </li>
            <li>
              <a href='#0' className='link'>
                Mobile app
              </a>
            </li>
            <li>
              <a href='#footer' className='link'>
                Contact us
              </a>
            </li>
          </ul>
          <Link
            to='/menu'
            className='link'
          >
            Menu
            <img src={cup} alt='' />
          </Link>
        </nav>
      </header>
  )
}
