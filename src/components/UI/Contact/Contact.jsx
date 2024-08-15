import React from 'react';
import cl from './Contact.module.scss';

export const Contact = ({ href, img, text}) => {
  return (
    <a href={href} className={cl.contact}>
      <img src={img} alt={ img } />
      <span>{ text }</span>
    </a>
  )
}
