import React,{useState,useEffect, useMemo} from 'react'
import { MenuCard } from '../MenuCard/MenuCard'
import cl from './MenuList.module.scss'
import { BtnCircle } from '../UI/Buttons/BtnCircle/BtnCircle';

export const MenuList = ({ items, setCard, setVisible, count }) => {
  const [width, setWidth] = useState(window.innerWidth);
  const [itemsList, setItemsList] = useState([]);
  const [visibleCards, setVisibleCards] = useState(count);

  useEffect(() => {
    const handleResize = (event) => {
      setWidth(event.target.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [width]);

  useEffect(() => {

    if (width < 748) {
      setItemsList(items.filter((e, index) => index < visibleCards))
    } else {
      setItemsList(items);
      setVisibleCards(count)
    }

  }, [width, items, visibleCards]);

  return (
    <div className={cl.list}>
        {itemsList.map((item, index) => 
          <MenuCard
            name={item.name}
            body={item.body}
            price={item.price}
            img={item.img}
            key={item.id}
            onClick={() => {
              setVisible(true)
              setCard(item)
            }
            }
          />
      )}
      {items.length > itemsList.length && 
        <BtnCircle
          dark={true}
          onClick={() => 
          {
            setVisibleCards(visibleCards + visibleCards)
            setItemsList(items.filter((e, index) => index < visibleCards))
          }
          }
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21.8883 13.5C21.1645 18.3113 17.013 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C16.1006 2 19.6248 4.46819 21.1679 8" stroke="#403F3D" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M17 8H21.4C21.7314 8 22 7.73137 22 7.4V3" stroke="#403F3D" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </BtnCircle>
      }
    </div>
  )
}
