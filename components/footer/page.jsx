import React from "react";
import { AiFillFacebook, AiOutlineMail } from "react-icons/ai";
import {
  BiLogoTwitter,
  BiLogoWhatsapp,
  BiLogoLinkedinSquare,
  BiSolidPhoneCall
} from "react-icons/bi";

const Footer = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="border-gray-100">
      <div className="grid grid-rows-1 gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 p-5">
        somthe here
        </div>
        <div className="border-t-2 border-opacity-50 grid grid-rows-1 gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 p-5">
          <div>
            <h1 className="text-lg font-bold">Stay connected</h1>
            <div className="flex gap-2 mt-1">
              <AiFillFacebook className="cursor-pointer" />
              <BiLogoTwitter />
              <BiLogoWhatsapp />
              <BiLogoLinkedinSquare />
            </div>
            <div className="mt-2">
                <p className="text-xs flex"><AiOutlineMail className="mt-0.5"/> &nbsp; techgarage@info.com</p>
                <p className="text-xs flex mt-1"><BiSolidPhoneCall className="mt-0.5"/> &nbsp; +234 (80) 55120900</p>
            </div>
          </div>
          <div>1</div>
          <div>1</div>
          <div>
            <h1 className="text-lg font-bold">Collaborate with us</h1>
            <p className="text-xs mt-1">
              Join a community of like-minded learners and experts, and
              together, let's shape a brighter future through shared knowledge
              and collective growth.
            </p>
          </div>
        </div>
      </div>
      <div className="border-t-2 border-opacity-50 border-gray-100 text-center p-3">
        <p className="text-xs">&copy; TechGarage 2023</p>
      </div>
    </div>
  );
};

export default Footer;
