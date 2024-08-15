import React from 'react';
import classes from './BtnPrimary.module.scss';

export const BtnPrimary = ({children, ...props}) => {
  return (
    <button {...props} className={classes.primary}>
      {children}
    </button>
  )
}