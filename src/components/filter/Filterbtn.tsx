import { FilterBtnProps } from '@/types/type'
import React from 'react'

const Filterbtn = ({
  input,
  task,
  setPageNumber,
  index,
  name
}: FilterBtnProps) => {
  return (
    <div>
      <style jsx>
        {`
          .x:checked + label {
            background-color: #ecd06f;
            color: white;
          }
          input[type='radio'] {
            display: none;
          }
        `}
      </style>
      <div className="">
        <input
          className=""
          type="radio"
          name={name}
          id={`${name}-${index}`}
        />
        <label
          onClick={x => {
            task(input)
            setPageNumber(1)
          }}
          className=""
          htmlFor={`${name}-${index}`}
        >
          {input}
        </label>
      </div>
    </div>
  )
}

export default Filterbtn
