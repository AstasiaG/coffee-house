import React from 'react'
import { MenuCard } from '../MenuCard/MenuCard'

export const MenuList = ({ items }) => {
  return (
    <div style={{ display: 'flex', gap: '4rem', flexWrap: 'wrap'}}>
      {items.map((item) => 
        <MenuCard name={item.name} body={item.body} price={item.price} img={item.img } key={item.id}/>
      )}
    </div>
  )
}
