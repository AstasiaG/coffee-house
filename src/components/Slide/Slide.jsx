import React from 'react'
import cl from './Slide.module.scss'

export const Slide = ({ img, name, body, price}) => {
  
  return (
    <div className={cl.slide}>
      <div className={cl.slide__content}>
        <img src={img} alt='' />
        <p className={cl.slide__name}>{ name }</p>
        <p className={cl.slide__text}>{body}</p>
        <p className={cl.slide__price}>${price}</p>
      </div>
    </div>
  )
}
