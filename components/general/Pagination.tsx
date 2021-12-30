import stls from '@/styles/components/general/Pagination.module.sass'
import { useState } from 'react'
import cn from 'classnames'
import { IconSpinner, IconArrowLeft } from '@/components/icons'

const Pagination = ({
  numberOfPages,
  itemsPerPage,
  totalItems,
  lastShownItem = totalItems,
  showNextPage,
  loadMoreItems = _ => {},
  toggleItems = () => {},
  onlyPagination = false,
  semiTransparentBg = false
}) => {
  const [currentPage, setCurrentPage] = useState(0)

  const handlePaginationBtnClick = clickedBtnIndex => {
    setCurrentPage(clickedBtnIndex)
    showNextPage(itemsPerPage * clickedBtnIndex)
  }

  const handleLoadMoreBtnClick = () => {
    loadMoreItems(prevLastItem => prevLastItem + 5)
  }

  const paginationBtns = []

  for (let i = 0; i < numberOfPages; i++) {
    paginationBtns.push(
      <button
        key={`btn${i}`}
        className={cn({
          [stls.paginationBtn]: true,
          [stls.semiTransparentBg]: semiTransparentBg,
          [stls.ordinaryBg]: !semiTransparentBg,
          [stls.active]: i === currentPage
        })}
        onClick={() => handlePaginationBtnClick(i)}>
        {i + 1}
      </button>
    )
  }

  return (
    <div
      className={cn({
        [stls.container]: true,
        [stls.onlyPagination]: onlyPagination
      })}>
      {paginationBtns}
      <button
        className={cn(stls.loadMoreBtn, {
          [stls.btnHidden]: lastShownItem >= totalItems
        })}
        onClick={handleLoadMoreBtnClick}>
        <IconSpinner />
        Еще {itemsPerPage} курсов из {totalItems}
      </button>
      <button className={stls.toggleItemsBtn} onClick={toggleItems}>
        <span>Скрыть все</span>
        <IconArrowLeft fill={'#ff3535'} />
      </button>
    </div>
  )
}

export default Pagination
