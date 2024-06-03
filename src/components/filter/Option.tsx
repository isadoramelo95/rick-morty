import { OptionProps } from '@/types/type'
import React from 'react'

const Option: React.FC<OptionProps> = ({ name, changeID, total }) => {
    return (
      <select
        onChange={e => changeID(parseInt(e.target.value))}
        className=""
        id={name}
      >
        <option value="" disabled selected>
          Choose...
        </option>
        {Array.from({ length: total }, (_, index) => {
          return (
            <option value={index + 1} key={index}>
              {name} - {index + 1}
            </option>
          );
        })}
      </select>
    );
  };
  
  export default Option;