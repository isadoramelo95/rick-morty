import { genders } from "@/constants/constants";
import { GenderProps } from "@/types/type";
import React from "react";
import Filterbtn from "../Filterbtn";
import styles from "@/components/filter/filter.module.css";

const Gender = ({ setGender, setPageNumber }: GenderProps) => {
  return (
    <div>
        <div className={styles.filter_title}>Gender</div>
        <div className="">
          {genders.map((items, index) => {
            return (
              <Filterbtn
                name="gender"
                index={index}
                key={index}
                setPageNumber={setPageNumber}
                task={setGender}
                input={items}
              />
            );
          })}
        </div>
      </div>
  );
};

export default Gender;
