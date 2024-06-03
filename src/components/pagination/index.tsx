import { PaginationProps } from '@/types/type'
import React, { useEffect, useState } from 'react'
import ReactPaginate from 'react-paginate'

const Pagination = ({ pageNumber, info, setPageNumber }: PaginationProps) => {
  const pageChange = (data: { selected: number }) => {
    setPageNumber(data.selected + 1)
  }

  const [width, setWidth] = useState(window.innerWidth)
  const updateDimensions = () => {
    setWidth(window.innerWidth)
  }
  useEffect(() => {
    window.addEventListener('resize', updateDimensions)
    return () => window.removeEventListener('resize', updateDimensions)
  }, [])

  return (
    <div className="">
      <ReactPaginate
        className=""
        nextLabel="Next"
        forcePage={pageNumber === 1 ? 0 : pageNumber - 1}
        previousLabel="Prev"
        previousClassName=""
        nextClassName=""
        activeClassName=""
        marginPagesDisplayed={width < 576 ? 1 : 2}
        pageRangeDisplayed={width < 576 ? 1 : 2}
        pageCount={info?.pages || 1}
        onPageChange={pageChange}
        pageClassName=""
        pageLinkClassName=""
      />
    </div>
  )
}

export default Pagination
