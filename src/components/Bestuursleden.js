import React from "react";

function Bestuursleden({ title, image, functie, functie2 }) {
  const topPosition = functie2 ? "top-80" : "top-72";
  return (
    <div>
      <div>
        <div className="group relative overflow-hidden rounded-xl">
          <div className="group-hover:bg-black/60 w-full h-full absolute z-10 transition-all duration-300 rounded-xl"></div>
          <div className="group-hover:scale-105 transition-all duration-200">
            <img className="grayscale" src={image} alt="Johan Hemelsoet" />
          </div>
          <div className="absolute -bottom-full group-hover:bottom-1/2 transition-all duration-300 z-20 text-2xl text-center font-bold text-sky-500 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <span className="text-gradient">{title}</span>
          </div>
          <div
            className={`absolute -top-full group-hover:${topPosition} transition-all duration-300 z-20 left-1/2 -translate-x-1/2 -translate-y-[150%] text-center`}
          >
            <span className="text-xl text-orange-500 font-bold">{functie}</span>{" "}
            <br />
            <span className="text-xl text-orange-500 font-bold">
              {functie2}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Bestuursleden;
