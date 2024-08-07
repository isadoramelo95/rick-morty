import { status } from '@/constants/constants'
import React from 'react'
import { StatusProps } from '@/types/type'
import Filterbtn from '../Filterbtn'
import styles from '@/components/filter/filter.module.css'

const Status = ({ setStatus, setPageNumber }: StatusProps) => {
  return (
    <div>
      <div className={styles.filter_title}>Status</div>
      <div className="">
        {status.map((item, index) => (
          <Filterbtn
            key={index}
            index={index}
            name="status"
            task={setStatus}
            setPageNumber={setPageNumber}
            input={item}
          />
        ))}
      </div>
    </div>
  )
}

export default Status
