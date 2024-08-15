import React from 'react';
import cl from './BtnCircle.module.scss';

export const BtnCircle = ({ children, dark, ...props }) => {
  const theme = dark ? cl.dark : cl.light;
  const classes = `${cl.btnCircle} ${theme}`; //[cl.btnCircle, theme].join(' ');

  return (
    <button {...props} className={classes}>
      { children }
    </button>
  )
}
