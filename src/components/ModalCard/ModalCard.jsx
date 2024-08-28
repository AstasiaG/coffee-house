import React, { useContext } from 'react'
import cl from './Modalcard.module.scss';
import { BtnSecondary } from '../UI/Buttons/BtnSecondary/BtnSecondary';
import { Selector } from '../Selector';
import { ModalContext } from '../../context';

export const ModalCard = () => {
  const { card, closeModal, setSize, size, add, controlAdd } = useContext(ModalContext)
  return (
    <div className={ cl.card }>
      <img src={ card.img} alt='' />
      <div className={ cl.card__content }>
        <h3 className={ cl.title}>{ card.name}</h3>
        <p className={cl.text}>{card.body}</p>

        <Selector
          styles={cl}
          items={card.sizes}
          text="Sizes"
          callback={setSize}
          activeTab={size}
        />

        <Selector
          styles={cl}
          items={card.adds}
          text="Additives"
          callback={controlAdd}
          activeTab={add}
        />

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
          onClick={() => closeModal()}
        >
          Close
        </BtnSecondary>
      </div>
    </div>
  )
}
