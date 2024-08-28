import React from 'react'
import cl from './Tab.module.scss'

export const Tab = ({ children, activeTab, id, ...props }) => {
  let classes = [cl.tab];

  if (Array.isArray(activeTab)) { activeTab.includes(id) && classes.push(cl.active)  }
  activeTab === id && classes.push(cl.active)

  return (
    <button
      className={classes.join(' ')}
      {...props}
    >
      {children}
    </button>
  )
}
