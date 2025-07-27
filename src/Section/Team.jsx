import React from "react";
import { Images } from "../../assets/constants.js";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

const Team = () => {
  return (
    <div className="relative container mx-auto " id="Team">
      <div className="flex flex-col justify-center items-center gap-2 mt-[50px] px-[40px]">
        <h1 className="text-[32px] text-mainColor uppercase font-bold text-center">
          Team
        </h1>
        <p className="text-center landing-[28px] text-[18px] text-gray-600">
          Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
          aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
          quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia
          fugiat sit in iste officiis commodi quidem hic quas.
        </p>
      </div>
      <div className="flex flex-row flex-wrap justify-center items-center gap-6 px-[40px] ">
        {Images.map((image, index) => (
          <div className="relative min-w-[300px] max-w-[400px] h-[400px] flex-1 overflow-hidden mt-[40px] group">
            <img
              key={index}
              src={image.url}
              className="absolute w-full object-cover flex-1 h-full duration-300 "
            />
            <span className="flex flex-col justify-center items-center gap-3 w-full opacity-0 absolute top-0 left-0 h-[100%] duration-300 group-hover:opacity-100 bg-black/40 backdrop-blur-[1px] z-[10] duration-300">
              <div className="flex flex-col gap-1  duration-300 group-hover:translate-y-[-20px]">
                <h1 className="text-white text-[23px] text-center">
                  {image.name}
                </h1>
                <p className="text-gray-300 text-[16px] text-center italic">
                  {" "}
                  {image.job}
                </p>
                <div className="flex flex-row flex-1 gap-1 justify-center items-center pt-[20px] ">
                  <a
                    className="duration-300 text-white  cursor-pointer hover:text-mainColor"
                    href="#"
                  >
                    <FaTwitter className="text-[20px] duration-300" />
                  </a>
                  <a
                    className="duration-300 text-white  cursor-pointer hover:text-mainColor"
                    href="#"
                  >
                    <FaFacebook className="text-[20px]" />{" "}
                  </a>
                  <a
                    className="duration-300 text-white  cursor-pointer hover:text-mainColor"
                    href="#"
                  >
                    <AiFillInstagram className="text-[20px]" />
                  </a>
                  <a
                    className="duration-300 text-white  cursor-pointer hover:text-mainColor"
                    href="#"
                  >
                    <FaLinkedinIn className="text-[20px]" />
                  </a>
                </div>
              </div>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
