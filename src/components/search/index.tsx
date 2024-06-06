import React from 'react'
import { SearchProps } from '@/types/type'
import styles from '@/app/styles/characters.module.css'

const Search = ({ setSearch, setPageNumber }: SearchProps) => {
  const searchBtn = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
  }
  return (
    <>
      <div className={styles.filterContainer}>
        <input
          onChange={e => {
            setPageNumber(1)
            setSearch(e.target.value)
          }}
          placeholder="Search Something. . ."
          className={styles.inputSearch}
          type="text"
          name="search"
          autoComplete="off"
        />
      </div>
    </>
  )
}

export default Search
