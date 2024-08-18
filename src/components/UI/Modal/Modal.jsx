import React from 'react'
import cl from './Modal.module.scss'
import { Tab } from '../Tab/Tab'
import { BtnSecondary } from '../Buttons/BtnSecondary/BtnSecondary'

export const Modal = ({ card, visible, setVisible, size, add, setSize }) => {
  
  return (
    <div className={visible ? `${cl.modal} ${cl.active}` : cl.modal} onClick={() => setVisible(false)}>
      <div className={cl.modal__content} onClick={(e) => e.stopPropagation()} >
        <div className={ cl.card }>
          <img src={ card.img} alt='' />
          <div className={ cl.card__content }>
            <h3 className={ cl.title}>{ card.name}</h3>
            <p className={ cl.text}>{  card.body}</p>
            <div className={cl.card__tabs_wrap}>
              <span className={ cl.text}>Size</span>
              <div className={cl.card__tabs}>
                {card.sizes.map((prop) => 
                  <Tab
                    id={prop.id}
                    activeTab={size}
                    onClick={() => 
                      setSize(prop.id)
                    }
                  >
                    <div>{prop.id}</div>
                    {prop.name}
                  </Tab>
                )}
              </div>
            </div>
            <div className={cl.card__tabs_wrap}>
              <span className={ cl.text}>Additives</span>
              <div className={cl.card__tabs}>
                {card.adds.map((prop, index) => 
                  <Tab id={prop.id} activeTab={ add }>
                    <div>{index + 1}</div>
                    {prop.name}
                  </Tab>
                )}
              </div>
            </div>
            <div className={cl.price}>
              <h3 className={cl.title}>Total:</h3>
              <span className={cl.title}>${ card.price }</span>
            </div>
            <div className={cl.card__info}>
              <img src='./img/info.png' alt='' />
              <p>
                The cost is not final. Download our mobile app to see the final price and place your order.
                Earn loyalty points and enjoy your favorite coffee with up to 20% discount.
              </p>
            </div>
            <BtnSecondary
              onClick={() => setVisible(false)}
            >
              Close
            </BtnSecondary>
          </div>
        </div>
      </div>
    </div>
  )
}
