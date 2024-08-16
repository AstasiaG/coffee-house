import React from 'react'
import { MenuList } from '../components/MenuList/MenuList'
import cards from '../assets/jsons/coffee.json'

export const Menu = () => {
  return (
    <main className='container'>
      <section className='menu'>
        <h2 className='title'>
          Behind each of our cups hides an
          <span> amazing surprise</span>
        </h2>
        <MenuList items={cards} />
      </section>
    </main>
  )
}
