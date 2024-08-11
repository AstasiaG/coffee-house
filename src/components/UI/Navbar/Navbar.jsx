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
              <Link
                to='/'
                className='link'
              >
                Favorite coffee
              </Link>
            </li>
            <li>
              <Link
                to='/'
                className='link'
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to='/'
                className='link'
              >
                Mobile app
              </Link>
            </li>
            <li>
              <Link
                to='/'
                className='link'
              >
                Contact us
              </Link>
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
