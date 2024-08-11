import React from 'react'
import { BtnPrimary } from '../components/UI/Btn/BtnPrimary';
import hero from '../assets/img/img-hero.png';
import cup from '../assets/svg/coffee-cup.svg';
import { Link, Navigate } from 'react-router-dom';

export const Home = () => {
  return (
    <main className='container'>
      <section className='hero'>
        <div className='hero__image'>
          <img src={hero} alt=''/>
        </div>
        <div className='hero__content'>
          <h2 className='title'><span className='title--i'>Enjoy</span> premium coffee at our charming cafe</h2>
          <p className='text'>
            With its inviting atmosphere and delicious coffee options, the Coffee House Resource is
            a popular destination for coffee lovers and those seeking a warm and inviting space to
            enjoy their favorite beverage.
          </p>
          <Link to="/menu">
            <BtnPrimary>
              Menu
              <img src={cup} alt=''/>
            </BtnPrimary>
          </Link>
        </div>
      </section>
    </main>
  )
}
