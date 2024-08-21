import React from 'react'
import { Tab } from './UI/Tab/Tab'

export const Selector = ({ items, styles, text, callback, activeTab }) => {
  return (
    <div className={styles.card__tabs_wrap}>
      <span className={ styles.text}>{ text }</span>
      <div className={styles.card__tabs}>
        {items.map((prop) => 
          <Tab
            id={prop.id}
            activeTab={activeTab}
            onClick={() => 
              callback(prop.id)
            }
          >
            <div>{prop.id}</div>
            {prop.name}
          </Tab>
        )}
      </div>
    </div>
  )
}
