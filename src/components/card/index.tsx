import { CardProps } from "@/types/type";
import styles from "./card.module.css";
import React from "react";
import Image from "next/image";

const Card = ({ results }: CardProps) => {
  let display: string | JSX.Element[];

  if (results) {
    display = results.map((x) => {
      const { id, name, status, species, gender, origin, location, image } = x;

      return (
        <div className={styles.main_container}>
          <div className={styles.character_container}>
            <div className={styles.character_list}>
              <div key={id}>
                <div>
                  <img
                    className={styles.image_card}
                    src={image}
                    alt=""
                  />
                </div>
                <div className="">
                  <div>
                    <div className={styles.character_name}>{name}</div>
                    <div className="">
                      <div>{gender}</div>
                      <div> - </div>
                      <div>{species}</div>
                    </div>
                  </div>
                  <div className={styles.character_location}>
                    <div className="">Last know location:</div>
                    <div className="">{location?.name}</div>
                  </div>
                  <div className="">
                    <div className="">Origin:</div>
                    <div className="">{origin?.name}</div>
                  </div>
                </div>
              </div>
              {/* {(() => {
                if (status === "Dead") {
                  return (
                    <div className={styles.icon_dead}>
                      <div>
                        <div className={styles.status}>{status}</div>
                      </div>
                    </div>
                  );
                } else if (status === "Alive") {
                  return (
                    <div className={styles.status_species}>
                      <div className={styles.icon_alive}>
                        <div className={styles.status}>{status}</div>
                      </div>
                    </div>
                  );
                } else {
                  return (
                    <div className={styles.status_species}>
                      <div className={styles.icon_unknown}>
                      <div className={styles.status}>{status}</div>
                    </div>
                    </div>
                    
                  );
                }
              })()} */}
            </div>
          </div>
        </div>
      );
    });
  } else {
    display = "No Characters Found :/";
  }

  return <>{display}</>;
};

export default Card;
