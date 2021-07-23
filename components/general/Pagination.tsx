import stls from '@/styles/components/general/Pagination.module.sass'
import classNames from 'classnames'
import { useState } from 'react'
import { IconSpinner, IconArrowLeft } from '@/components/icons'

const Pagination = ({
  numberOfPages,
  itemsPerPage,
  totalItems,
  lastShownItem,
  showNextPage,
  loadMoreItems,
  toggleItems
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
        className={classNames(stls.paginationBtn, {
          [stls.active]: i === currentPage
        })}
        onClick={() => handlePaginationBtnClick(i)}>
        {i + 1}
      </button>
    )
  }

  return (
    <div className={stls.container}>
      {paginationBtns}
      <button
        className={classNames(stls.loadMoreBtn, {
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
