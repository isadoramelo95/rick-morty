import React from 'react'
import { SearchProps } from '@/types/type'
import styles from './search.module.css'

const Search = ({ setSearch, setPageNumber }: SearchProps) => {
  // const searchBtn = (e: React.MouseEvent<HTMLButtonElement>) => {
  //   e.preventDefault()
  // }
  return (
    <>
      <div className={styles.search_container}> 
        <input
          onChange={e => {
            setPageNumber(1)
            setSearch(e.target.value)
          }}
          placeholder="Search a character. . ."
          className={styles.input_search}
          type="text"
          name="search"
          autoComplete="off"
        />
      </div>
    </>
  )
}

export default Search
