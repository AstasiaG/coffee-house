import React from 'react'
import cl from './Tab.module.scss'

export const Tab = ({children, text, activeTab, id, ...props}) => {
  return (
    <button
      className={`${cl.tab} ${activeTab === id ? cl.active : ""}`}
      {...props}
    >
      {children}
    </button>
  )
}
