import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import cl from './Navbar.module.scss';
import logo from '../../../assets/svg/logo.svg';
import cup from '../../../assets/svg/coffee-cup.svg';
import {BtnCircle} from '../Buttons/BtnCircle/BtnCircle'

export const Navbar = () => {
  const [visibleNav, setVisibleNav] = useState(false);
  console.log(visibleNav)

  return (
    <header className={cl.header}>
        <div className={cl.header__logo}>
          <Link to='/'>
            <img src={logo} alt=''/>
          </Link>
        </div>
        <nav className={visibleNav ? `${cl.header__nav} ${cl.active}` : cl.header__nav}>
          <ul className={cl.header__list}>
            <li>
              <a href='#favorite' className='link' onClick={() => setVisibleNav(!visibleNav)}>
                Favorite coffee
              </a>
            </li>
            <li>
              <a href='#about' className='link' onClick={() => setVisibleNav(!visibleNav)}>
                About
              </a>
            </li>
            <li>
              <a href='#app' className='link' onClick={() => setVisibleNav(!visibleNav)}>
                Mobile app
              </a>
            </li>
            <li>
              <a href='#footer' className='link' onClick={() => setVisibleNav(!visibleNav)}>
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
      <BtnCircle
        dark={true}
        onClick={() => setVisibleNav(!visibleNav)}
        visible={visibleNav}
      >
        <span></span>
        <span></span>
      </BtnCircle>
    </header>
  )
}
