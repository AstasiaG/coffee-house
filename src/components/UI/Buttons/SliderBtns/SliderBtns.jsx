import React, { useContext } from 'react'
import { BtnCircle } from '../BtnCircle/BtnCircle'
import { SliderContext } from '../../../Slider/Slider'
import cl from '../../../Slider/Slider.module.scss'

export const SliderBtns = () => {
  const { ScrollLeft, ScrollRight } = useContext(SliderContext);
  return (
    <div className={ cl.slider__btns}>
      <BtnCircle
        onClick={ ScrollLeft}
        dark={true}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M18.5 12H6M6 12L12 6M6 12L12 18" stroke="#403F3D" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </BtnCircle>

      <BtnCircle
        onClick={ ScrollRight}
        dark={true}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M6 12H18.5M18.5 12L12.5 6M18.5 12L12.5 18" stroke="#403F3D" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </BtnCircle>
    </div>
  )
}
