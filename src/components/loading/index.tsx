import Image from 'next/image'
import React from 'react'

const Loading = () => {
  return (
    <div>
      <Image src="/assets/200.webp" alt="Loading.." 
       width={600}
       height={600}/>
    </div>
  )
}

export default Loading
