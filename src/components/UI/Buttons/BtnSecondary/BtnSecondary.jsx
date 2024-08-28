import React from 'react'
import cl from './BtnSecondary.module.scss'

export const BtnSecondary = ({ children, ...props }) => {
  return (
    <button className={ cl.secondary } {...props}>
      {children}
    </button>
  )
}
