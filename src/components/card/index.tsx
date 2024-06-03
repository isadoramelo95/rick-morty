import { CardProps } from "@/types/type";
import React from "react";

const Card = ({ results }: CardProps) => {
  let display: string | JSX.Element[];

  if (results) {
    display = results.map(x => {
      const { id, name, status, species, gender, origin, location, image } = x

      return (
        <div key={id} >
          <div className="">
            <div className="">
              #{id}
            </div>
            <div className="">
              <img
                className=""
                src={image}
                alt=""
              />
            </div>
            <div className="">
              <div>
                <div className="">
                  {name}
                </div>
                <div className="">
                  <div>{gender}</div>
                  <div> - </div>
                  <div>{species}</div>
                </div>
              </div>
              <div className="">
                <div className="">Last know location:</div>
                <div className="">
                  {location?.name}
                </div>
              </div>
              <div className="">
                <div className="">Origin:</div>
                <div className="">{origin?.name}</div>
              </div>
            </div>
          </div>

          {(() => {
            if (status === 'Dead') {
              return (
                <div className="">
                  <div className="">
                    <div className="" />
                    <div className="" />
                    <div className="">{status}</div>
                  </div>
                </div>
              )
            } else if (status === 'Alive') {
              return (
                <div className="">
                  <div className="">
                    <div className="" />
                    <div className="" />
                    <div className="">{status}</div>
                  </div>
                </div>
              )
            } else {
              return (
                <div className="">
                  <div className="">
                    <div className="" />
                    <div className="" />
                    <div className="">{status}</div>
                  </div>
                </div>
              )
            }
          })()}
        </div>
      )
    })
  } else {
    display = 'No Characters Found :/'
  }

  return <>{display}</>
}

export default Card
