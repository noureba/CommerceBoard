import React from "react";
import up from "../../assets/up.png"
import down from "../../assets/down.png"

function Card(Props) {
  return (
    <>
      <div className="rounded bg-white p-5 flex flex-row justify-between gap-5 grow">
        <div>
          <h3 className="text-gray-500">{Props.name}</h3>
          <p className="text-3xl text-gray-900 font-bold">{Props.total}</p>
        </div>
        <div>
          <h3
            className={` font-bold ${
              Props.percent > 0 ? "text-green-500" : "text-red-500"
            }`}
          >
            {Props.percent}%
          </h3>
          {Props.percent >0? <img src={up} alt="up"/>: <img src={down} alt="down"/>}
        </div>
      </div>
    </>
  );
}

export default Card;
