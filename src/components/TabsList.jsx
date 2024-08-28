import React from 'react'
import { Tab } from './UI/Tab/Tab';

export const TabsList = ({ tabs, changeItems, activeTab }) => {
  return (
    <div className='tab_list'>
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