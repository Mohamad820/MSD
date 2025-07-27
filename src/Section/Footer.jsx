import React from "react";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaSkype } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { FaCopyright } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="relative bg-black/90" id="Footer">
      <div className="flex-col p-0 items-center flex lg:flex-row justify-between lg:items-start gap-[50px] flex-wrap py-[20px] lg:px-[130px]">
        <div className="flex flex-col justify-center items-start gap-3 flex-2">
          <h1 className="text-[24px] font-bold text-white mb-[20px] mt-[50px]">
            Groovin
          </h1>
          <p className="text-[16px] text-white">A108 Adam Street</p>
          <p className="text-[16px] text-white mb-[20px]">NY 535022, USA</p>
          <p className="text-[16px] text-white">
            {" "}
            <span className="font-bold">Phone</span>: +1 5589 55488 55
          </p>
          <p className="text-[16px] text-white mb-[15px]">
            {" "}
            <span className="font-bold">Email</span>: info@example.com
          </p>
          <div className="flex flex-row justify-between items-center gap-1">
            <div className="flex justify-center items-center rounded-[50%] w-[40px] cursor-pointer duration-300 h-[40px] bg-black/80 hover:bg-mainColor">
              <FaTwitter className="w-[25px] h-[25px] text-white" />
            </div>
            <div className="flex justify-center items-center rounded-[50%] w-[40px] cursor-pointer duration-300 h-[40px] bg-black/80 hover:bg-mainColor">
              <FaFacebook className="w-[25px] h-[25px] text-white" />
            </div>
            <div className="flex justify-center items-center rounded-[50%] w-[40px] cursor-pointer duration-300 h-[40px] bg-black/80 hover:bg-mainColor">
              <RiInstagramFill className="w-[25px] h-[25px] text-white" />
            </div>
            <div className="flex justify-center items-center rounded-[50%] w-[40px] cursor-pointer duration-300 h-[40px] bg-black/80 hover:bg-mainColor">
              <FaSkype className="w-[25px] h-[25px] text-white" />
            </div>
            <div className="flex justify-center items-center rounded-[50%] w-[40px] cursor-pointer duration-300 h-[40px] bg-black/80 hover:bg-mainColor">
              <FaLinkedin className="w-[25px] h-[25px] text-white" />
            </div>
          </div>
        </div>
        <div className="flex flex-col  justify-between items-start gap-3 mt-[50px] p-[10px] flex-2">
          <h1 className="text-[18px] mb-[10px] text-white font-bold">
            Useful Links
          </h1>
          <ul>
            <li className="flex flex-row justify-start items-center text-[18px] text-white gap-1 mb-[10px] hover:text-mainColor duration-300 cursor-pointer">
              <MdOutlineArrowForwardIos className="text-mainColor text-[18px]" />
              Home
            </li>
            <li className="flex flex-row justify-start items-center text-[18px] text-white gap-1 mb-[10px] hover:text-mainColor duration-300 cursor-pointer">
              <MdOutlineArrowForwardIos className="text-mainColor text-[18px]" />
              About Us
            </li>
            <li className="flex flex-row justify-start items-center text-[18px] text-white gap-1 mb-[10px] hover:text-mainColor duration-300 cursor-pointer">
              <MdOutlineArrowForwardIos className="text-mainColor text-[18px]" />
              Services
            </li>
            <li className="flex flex-row justify-start items-center text-[18px] text-white gap-1 mb-[10px] hover:text-mainColor duration-300 cursor-pointer">
              <MdOutlineArrowForwardIos className="text-mainColor text-[18px]" />
              Terms Of Services
            </li>
            <li className="flex flex-row justify-start items-center text-[18px] text-white gap-1 mb-[10px] hover:text-mainColor duration-300 cursor-pointer">
              <MdOutlineArrowForwardIos className="text-mainColor text-[18px]" />
              Privacy Policy
            </li>
          </ul>
        </div>
        <div className="flex flex-col  justify-between items-start gap-3 mt-[50px] p-[10px] flex-2">
          <h1 className="text-[18px] mb-[10px] text-white font-bold">
            Our Services
          </h1>
          <ul>
            <li className="flex flex-row justify-start items-center text-[18px] text-white gap-1 mb-[10px] hover:text-mainColor duration-300 cursor-pointer">
              <MdOutlineArrowForwardIos className="text-mainColor text-[18px]" />
              Web Design
            </li>
            <li className="flex flex-row justify-start items-center text-[18px] text-white gap-1 mb-[10px] hover:text-mainColor duration-300 cursor-pointer">
              <MdOutlineArrowForwardIos className="text-mainColor text-[18px]" />
              Web Development
            </li>
            <li className="flex flex-row justify-start items-center text-[18px] text-white gap-1 mb-[10px] hover:text-mainColor duration-300 cursor-pointer">
              <MdOutlineArrowForwardIos className="text-mainColor text-[18px]" />
              Product Management
            </li>
            <li className="flex flex-row justify-start items-center text-[18px] text-white gap-1 mb-[10px] hover:text-mainColor duration-300 cursor-pointer">
              <MdOutlineArrowForwardIos className="text-mainColor text-[18px]" />
              Marketing
            </li>
            <li className="flex flex-row justify-start items-center text-[18px] text-white gap-1 mb-[10px] hover:text-mainColor duration-300 cursor-pointer">
              <MdOutlineArrowForwardIos className="text-mainColor text-[18px]" />
              Graphic Design
            </li>
          </ul>
        </div>
        <div className="flex flex-col justify-between items-start mt-[50px] flex-1/4">
          <h1 className="text-center w-full lg:text-left text-[18px] mb-[20px]  text-white font-bold">
            Our Newsletter
          </h1>
          <p className="text-[18px] text-white text-center lg:text-left">
            Tamen quem nulla quae legam multos aute sint culpa legam noster
            magna
          </p>
          <div className="flex flex-row justify-center items-center gap-0 mt-[15px] mx-auto lg:mx-0">
            <form>
              <input
                type="text"
                name="name"
                autoComplete="on"
                className="min-w-[300px] max-w-[300px] flex-1 rounded-tl-[8px] rounded-bl-[8px] h-[50px] bg-white mt-[15px] border-[3px] border-gray-400 p-[10px] duration-300  focus:border-mainColor focus:outline-0"
              />
            </form>
            <button className="w-[100px] h-[50px] bg-mainColor rounded-tr-[8px] rounded-br-[8px] mt-[15px] flex-1 p-[10px] text-[18px] cursor-pointer">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <div className="w-[100%] bg-black/95 h-[150px]">
        <div className="flex flex-col justify-between items-center gap-4">
          <div className="flex flex-row justify-between items-center text-white gap-1 mt-[30px] p-[10px]">
            <FaCopyright />
            <p className="text-center">
              Copyright <span className=" font-bold">Groovin .</span> All Rights
              Reserved
            </p>
          </div>
          <p className="text-center text-white">
            Designed by <span className="text-mainColor">BootstrapMade</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
