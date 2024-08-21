import React, { useContext } from 'react'
import cl from './Modal.module.scss'
import { ModalCard } from '../../ModalCard/ModalCard'
import { ModalContext } from '../../../context'

export const Modal = () => {
  const {visible, closeModal } = useContext(ModalContext)
  return (
    <div
      className={visible ? `${cl.modal} ${cl.active}` : cl.modal}
      onClick={() => closeModal()}
    >
      <div
        className={cl.modal__content}
        onClick={(e) => e.stopPropagation()}
      >
        <ModalCard />
      </div>
    </div>
  )
}
