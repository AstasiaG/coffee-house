import React from 'react'
import { Tab } from './UI/Tab/Tab';

export const TabsList = ({ tabs, changeItems, activeTab }) => {

  return (
    <div style={{ margin: '0 auto', display: 'flex', gap: '1.6rem', marginBottom: '4rem', width: 'fit-content' }}>
      {tabs.map((tab) => 
        <Tab
          key={tab.id} 
          onClick={() => changeItems(tab.id)}
          activeTab={activeTab}
          id={tab.id}
        >
          <img src={tab.img} alt={tab.text} />
          {tab.name}
        </Tab>
      )}
    </div>
  )
}
