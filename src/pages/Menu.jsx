import React, { useState } from 'react'
import { MenuList } from '../components/MenuList/MenuList'
import coffeeCards from '../assets/jsons/coffee.json'
import teaCards from '../assets/jsons/tea.json'
import dessertCards from '../assets/jsons/desserts.json'
import { TabsList } from '../components/TabsList'
import { Modal } from '../components/UI/Modal/Modal'
import { MenuCard } from '../components/MenuCard/MenuCard'


export const Menu = () => {
  const tabs = [
    {
      id: 1,
      name: 'Coffee',
      img: './img/coffe.png',
      cards: coffeeCards
    },
    {
      id: 2,
      name: 'Tea',
      img: './img/tea.png',
      cards: teaCards
    },
    {
      id: 3,
      name: 'Dessert',
      img: './img/desserts.png',
      cards: dessertCards
    }
  ]

  const [activeTab, setActiveTab] = useState(tabs[0].id);
  const [visible, setVisible] = useState(false);
  const [card, setCard] = useState(null)
  const [size, setSize] = useState('S');
  const [add, setAdd] = useState([])

  const cards = tabs.find(tab => tab.id === activeTab).cards;

  const changeItems = (id) => {
    setActiveTab(id);
  }

  return (
    <main className='container'>
      { visible &&
        <Modal visible={visible} setVisible={setVisible} card={card} size={ size } setSize={setSize}/>
      }
      <section className='menu'>
        <h2 className='title'>
          Behind each of our cups hides an
          <span> amazing surprise</span>
        </h2>
        <TabsList tabs={tabs} activeTab={ activeTab } changeItems={changeItems}/>
        <MenuList items={cards} setCard={setCard} setVisible={ setVisible} />
      </section>
    </main>
  )
}
