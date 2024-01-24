import React from "react";
import { InputTextComp } from "./InputTextComp";
import { IoIosAirplane } from "react-icons/io";
import { ButtonYellowComp } from "./ButtonYellowComp";

export const FlightBookingFormComp = () => {
  return (
    <div className="bg-white pb-5 w-[22%] rounded-3xl absolute bottom-2 right-6 shadow shadow-gray-300">
      <div className="p-5">
        <p className="font-semibold">
          Book Cheap <span className="text-black">Flights</span>
        </p>
      </div>
      <div className="flex bg-black text-blue-500 justify-center py-3">
        <div className="flex">
          <input
            className="text-white"
            type="radio"
            id="age1"
            name="age"
            value="30"
          />
          <p className="text-sm ml-3">One Way</p>
        </div>
        <div className="flex ml-3">
          <input
            className="text-white"
            type="radio"
            id="age1"
            name="age"
            value="30"
          />
          <p className="text-sm ml-3 text-yellow-400">Round Trip</p>
        </div>
      </div>
      <div className="p-5">
        <InputTextComp
          image={<IoIosAirplane />}
          placeholder={"Enter City"}
          label="Departure"
        />
        <InputTextComp
          image={<IoIosAirplane />}
          placeholder={"Enter City"}
          label="Arrival"
          extraStyle={"mt-2"}
        />
        <InputTextComp
          image={<IoIosAirplane />}
          placeholder={"Enter Date"}
          label="Departure Date"
          extraStyle={"mt-2"}
        />
        <InputTextComp
          image={<IoIosAirplane />}
          placeholder={"Enter Date"}
          label="Return Date"
          extraStyle={"mt-2"}
        />
        <InputTextComp
          image={<IoIosAirplane />}
          placeholder={"Enter Number of Passengers"}
          label="Passengers"
          extraStyle={"mt-2"}
        />
        <InputTextComp
          image={<IoIosAirplane />}
          placeholder={"Enter Class"}
          label="Class"
          extraStyle={"mt-2"}
        />
      </div>
      <div className="px-5">
        <ButtonYellowComp label={"FIND FLIGHTS"} extraStyle={"mt-5"} />
      </div>
    </div>
  );
};
