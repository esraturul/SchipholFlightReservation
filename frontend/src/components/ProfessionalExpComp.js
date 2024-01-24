import React from "react";
import { ButtonYellowComp } from "./ButtonYellowComp";
import PeopleImg from "../assets/people.jpg";

export const ProfessionalExpComp = () => {
  return (
    <div className="h-[80%] px-20 py-[140px]">
      <div class="grid grid-cols-2 gap-5 h-[90%]">
        <div className="flex justify-center">
          <div
            className="bg-contain w-[400px]"
            style={{
              backgroundImage: `url("${PeopleImg}")`,
            }}
          ></div>
        </div>
        <div>
          <div>
            <div>
              <p className="text-sm">BEST CHOICE</p>
              <p className="text-3xl mt-1">
                We Are Very Reliable<br></br>
                <span className="text-[#3781c5]">
                  {" "}
                  Professional, Experienced
                </span>
              </p>
            </div>
          </div>
          <p className="mt-5">
          With its belief that air travel is everyone's right and with the "low cost" model it implements, it follows an affordable and accessible price policy.
          </p>
          <div className="flex">
            <ButtonYellowComp label={"Read More"} extraStyle={"mt-10"} />
          </div>
        </div>
      </div>
    </div>
  );
};
