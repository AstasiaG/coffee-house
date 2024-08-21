import React from 'react'
import { MenuCard } from '../MenuCard/MenuCard'

export const MenuList = ({ items, setCard, setVisible }) => {
  return (
    <div style={{ display: 'flex', gap: '4rem', flexWrap: 'wrap', justifyContent: 'center'}}>
      {items.map((item) => 
        <MenuCard
          name={item.name}
          body={item.body}
          price={item.price}
          img={item.img}
          key={item.id}
          onClick={() => {
            setVisible(true)
            setCard(item)
          }
          }
        />
      )}
    </div>
  )
}
