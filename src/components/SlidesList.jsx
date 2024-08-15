import React, { useContext } from 'react'
import { Slide } from './Slide/Slide'
import cl from './Slider/Slider.module.scss'
import { SliderContext } from './Slider/Slider'

export const SlidesList = () => {
  const { slides, activeSlide } = useContext(SliderContext);
  console.log(activeSlide)

  return (
    <div className={cl.slides__wrapper} style={{ transform: `translateX(-${activeSlide * 100}%)` }}>
      {slides.map(({ ...props }) => 
          <Slide img={props.img} name={props.name} body={props.body} price={props.price} key={props.id} />
        )}
    </div>
  )
}
