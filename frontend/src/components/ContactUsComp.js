import React from "react";
import { BiPhoneCall } from "react-icons/bi";
import { MdEmail } from "react-icons/md";
import { BsFacebook } from "react-icons/bs";
import {
  AiFillTwitterCircle,
  AiFillInstagram,
  AiFillLinkedin,
} from "react-icons/ai";

export const ContactUsComp = () => {
  const myStyle = {
    backgroundColor: '#fb923c', 
  };
  return (
    <div class="grid grid-cols-2 gap-2" style={myStyle}>
      <div className="flex justify-center h-14">
        <div className="flex items-center">
          <BiPhoneCall size={20} />
          <p className="text-sm ml-2">0(312) 456 78 90</p>
          <MdEmail size={20} className="ml-5" />
          <p className="text-sm ml-2">c-flight@gmail.com</p>
        </div>
      </div>
      <div className="flex justify-center h-14 items-center">
        <a href="#">
          <BsFacebook size={20} />
        </a>
        <a href="#">
          {" "}
          <AiFillTwitterCircle size={20} className="ml-2" />
        </a>
        <a href="#">
          {" "}
          <AiFillInstagram size={20} className="ml-2" />
        </a>
        <a href="#">
          {" "}
          <AiFillLinkedin size={20} className="ml-2" />
        </a>
      </div>
    </div>
  );
};
