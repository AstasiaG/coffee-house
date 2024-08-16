import React from 'react'
import { Tab } from './UI/Tab/Tab';

export const TabsList = ({ tabs, changeItems, activeTab }) => {
  console.log(tabs);
  return (
    <div style={{ margin: '0 auto', display: 'flex', gap: '1.6rem', marginBottom: '4rem', width: 'fit-content' }}>
      {tabs.map((tab) => 
        <Tab
          img={tab.img}
          text={tab.name}
          key={tab.id} 
          changeItems={changeItems}
          activeTab={activeTab}
          id={tab.id}
        />
      )}
    </div>
  )
}
