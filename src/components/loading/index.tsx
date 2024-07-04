import Image from 'next/image'
import styles from './loading.module.css'
import React from 'react'

const Loading = () => {
  return (
    <div className={styles.loading}>
      <Image src="/assets/loader.gif" alt="Loading.." 
       width={300}
       height={300}/>
    </div>
  )
}

export default Loading
