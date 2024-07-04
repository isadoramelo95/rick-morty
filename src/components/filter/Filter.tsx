import React from "react";
import { FilterProps } from "@/types/type";
import Gender from "./category/Gender";
import Species from "./category/Species";
import Status from "./category/Status";
import styles from "./filter.module.css";

const Filter = ({
  setPageNumber,
  setStatus,
  setGender,
  setSpecies,
}: FilterProps) => {
  let clear = () => {
    setStatus("");
    setGender("");
    setSpecies("");
    setPageNumber(1);
    window.location.reload();
  };
  return (
    <div className={styles.container}>
      <div className={styles.filter_title}>Filters</div>
      <Status setPageNumber={setPageNumber} setStatus={setStatus} />
      <Species setPageNumber={setPageNumber} setSpecies={setSpecies} />
      <Gender setPageNumber={setPageNumber} setGender={setGender} />
      <div className={styles.filter_title} onClick={clear}>Clear Filters</div>
    </div>
  );
};

export default Filter;
