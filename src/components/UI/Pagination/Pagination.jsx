import React, { useContext } from 'react'
import { SliderContext } from '../../Slider/Slider'
import { PaginationItem } from '../PaginationItem/PaginationItem'
import cl from './Pagination.module.scss';

export const Pagination = () => {
  const { slides } = useContext(SliderContext)

  const renderPagination = () => {
    const items = []

    for (let i = 0; i < slides.length; i++) {
      items.push(
        <PaginationItem number={i} key={ `pag-${i}`} />
      )
    }

    return items;
  }
  return (
    <div className={cl.pagination}>
      {renderPagination()}
    </div>
  )
}
