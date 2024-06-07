import React from 'react'
import { FilterProps } from '@/types/type'
import Gender from './category/Gender'
import Species from './category/Species'
import Status from './category/Status'

const Filter = ({
  setPageNumber,
  setStatus,
  setGender,
  setSpecies
}: FilterProps) => {
  let clear = () => {
    setStatus('')
    setGender('')
    setSpecies('')
    setPageNumber(1)
    window.location.reload()
  }
  return (
    <div className=''>
        <div className="">Filters</div>
        <div onClick={clear}>
          Clear Filters
        </div>
      <Status setPageNumber={setPageNumber} setStatus={setStatus} />
      <Species setPageNumber={setPageNumber} setSpecies={setSpecies} />
      <Gender setPageNumber={setPageNumber} setGender={setGender} />
    </div>
  )
}

export default Filter
