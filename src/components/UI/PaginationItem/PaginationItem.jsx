import React, { useContext } from 'react'
import cl from './PaginationItem.module.scss'
import { SliderContext } from '../../Slider/Slider'

export const PaginationItem = ({number}) => {
  const { ChangeSlide, activeSlide } = useContext(SliderContext)
  
  return (
    <div
      onClick={() => ChangeSlide(number)}
      className={`${cl.item} ${activeSlide === number ? cl.active : ""}`}
    ></div>
  )
}
