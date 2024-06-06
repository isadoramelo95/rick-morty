import { species } from '@/constants/constants'
import { SpeciesProps } from '@/types/type'
import React from 'react'
import Filterbtn from '../Filterbtn'
import styles from '@/components/filter/category/filter.module.css'


const Species = ({ setSpecies, setPageNumber }: SpeciesProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.filter_title}>Species</div>
      <div className={styles.option}>
        {species.map((item, index) => {
          return (
            <Filterbtn
              name="species"
              index={index}
              key={index}
              setPageNumber={setPageNumber}
              task={setSpecies}
              input={item}
            />
          )
        })}
      </div>
    </div>
  )
}

export default Species