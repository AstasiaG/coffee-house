import React from 'react'
import cl from './MenuCard.module.scss'

export const MenuCard = ({ ...props }) => {
  
  return (
    <div className={cl.card}>
      <div className={cl.card__img}>
        <img src={props.img} alt={`coffee-${props.id}`}></img>
      </div>
      <div className={cl.card__content}>
        <p className={cl.name}>{props.name}</p>
        <p className={cl.text}>{props.body}</p>
      </div>
      <p className={cl.price}>{ `$${props.price}` }</p>
    </div>
  )
}
