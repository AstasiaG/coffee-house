import React, { useEffect, useState, createContext } from 'react'
import {BtnCircle} from '../UI/Buttons/BtnCircle/BtnCircle'
import cl from './Slider.module.scss'
import { SlidesList } from '../SlidesList'
import { SliderBtns } from '../UI/Buttons/SliderBtns/SliderBtns';
import { Pagination } from '../UI/Pagination/Pagination';

export const SliderContext = createContext();


export const Slider = ({ slides }) => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [touchPosition, setTouchPosition] = useState(null)
  
  const ScrollLeft = () => {

    setActiveSlide(
      activeSlide > 0 
        ? activeSlide - 1
        : slides.length - 1
    )
  }

  const ScrollRight = () => {

    setActiveSlide(
      activeSlide < slides.length - 1
        ? activeSlide + 1
        : 0
    )
  }

  const handleTouchStart = (e) => {
    const touchDown = e.touches[0].clientX;

    setTouchPosition(touchDown);
  }

  const handleTouchMove = (e) => {
    if (touchPosition === null) {
      return;
    }

    const currentPosition = e.touches[0].clientX;
    const direction = touchPosition - currentPosition;


    if (direction > 5) {
      ScrollRight();
    }

    if (direction < -5) {
      ScrollLeft();
    }

    setTouchPosition(null);
  }

  const ChangeSlide = (slide) => {
    setActiveSlide(slide);
  }

  return (
    <div
      className={cl.slider}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
    >

      <SliderContext.Provider
        value={{
          ScrollRight,
          ScrollLeft,
          activeSlide,
          ChangeSlide,
          slides,
        }}
      >
        <SliderBtns />
        <SlidesList />
        <Pagination />
      </SliderContext.Provider>

    </div>
  )
}
