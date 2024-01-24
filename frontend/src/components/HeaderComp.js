import React from "react";
import PlaneImg from "../assets/plane.jpeg";
import { ButtonYellowComp } from "./ButtonYellowComp";
//import { FlightBookingFormComp } from "./FlightBookingFormComp";
import { HeaderNavComp } from "./HeaderNavComp";

export const HeaderComp = () => {
  return (
    <div
      className="w-full h-[90%] bg-red-300 bg-contain"
      style={{
        backgroundImage: `url("${PlaneImg}")`,
        backgroundPosition: 'right', 
        backgroundSize: 'cover', 
      }}
    >
      <HeaderNavComp />
      <div className="grid grid-cols-2 h-[100%]">
        <div className="flex p-5 items-center">
          <div> 
            <br/>
            <p className="text-sky-700 text-5xl">We Are Very Reliable</p>
            <p className="text-white text-5xl">
              Professional, Experienced
            </p>
            <br/>
            <p className="text-white text-sm">
             Would you like to experience this flight satisfaction?{" "}
              
            </p>
            <ButtonYellowComp label={"FIND FLIGHT"} extraStyle={"flex mt-5"} />
          </div>
        </div>
        <div className="flex">
         
        </div>
      </div>
    </div>
  );
};
