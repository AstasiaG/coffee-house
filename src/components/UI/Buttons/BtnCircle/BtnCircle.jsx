import React from 'react';
import cl from './BtnCircle.module.scss';

export const BtnCircle = ({ children, dark, ...props }) => {
  const theme = dark ? cl.dark : cl.light;
  const classes = props.visible
    ?
    `${cl.btnCircle} ${theme} ${cl.active}`
    :
    `${cl.btnCircle} ${theme}`;

  return (
    <button {...props} className={classes}>
      { children }
    </button>
  )
}
