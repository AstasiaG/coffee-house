import React from 'react'
import cl from './Tab.module.scss'

export const Tab = ({img, text, changeItems, activeTab, id}) => {
  return (
    <button
      className={`${cl.tab} ${activeTab === id ? cl.active : ""}`}
      onClick={() => changeItems(id)}
    >
      <img src={img} alt={text}></img>
      {text}
    </button>
  )
}
