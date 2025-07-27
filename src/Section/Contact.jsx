import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { FaEnvelope } from "react-icons/fa6";

const Contact = () => {
  return (
    <div className="relative mx-auto container my-[75px]" id="Contact">
      <div className="flex flex-col justify-center items-center gap-3">
        <h1 className="text-[32px] text-mainColor uppercase text-center font-bold">
          Contact
        </h1>
        <p className="text-center text-[18px] leading-[28px] text-gray-600">
          Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
          aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
          quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia
          fugiat sit in iste officiis commodi quidem hic quas.
        </p>
      </div>
      <div className="flex flex-row min-w-[300px] max-[300px]  flex-wrap justify-center items-center gap-6 mt-[40px]">
        <div className="flex flex-col justify-center items-center gap-5 flex-1 p-[20px] ">
          <FaLocationDot className="text-[50px] text-mainColor font-bold" />
          <h1 className="text-[24px] font-bold text-gray-400 uppercase text-center">
            Address
          </h1>
          <p className="text-[18px] text-center">
            A108 Adam Street, NY 535022,
          </p>
        </div>
        <span className="border-r-[2px] border-gray-400 h-[80%]" />
        <div className="flex flex-col justify-center items-center gap-5 flex-1 p-[20px]  ">
          <IoPhonePortraitOutline className="text-[50px] text-mainColor font-bold" />
          <h1 className="text-[24px] font-bold text-gray-400 uppercase text-center">
            Phone Number
          </h1>
          <p className="text-[18px] text-center cursor-pointer duration-300 hover:text-mainColor ">
            +1 5589 55488 55
          </p>
        </div>
        <span className="border-r-[2px] border-gray-400 h-[80%]" />
        <div className="flex flex-col justify-center items-center gap-5 flex-1 p-[20px] ">
          <FaEnvelope className="text-[50px] text-mainColor font-bold" />
          <h1 className="text-[24px] font-bold text-gray-400 uppercase text-center">
            Email
          </h1>
          <p className="text-[20px] text-center cursor-pointer duration-300 hover:text-mainColor">
            info@example.com
          </p>
        </div>
      </div>
      <from>
        <div className="flex flex-col flex-wrap justify-center items-center gap-5">
          <div className="flex-col flex lg:flex-row flex-wrap justify-between items-center gap-4  mt-[40px] w-full px-[20px]">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              minLength={5}
              required
              autoFocus
              autoComplete="on"
              className="w-full lg:min-w-[300px] lg:max-w-[50%] flex-1 rounded-[8px] h-[50px] p-[10px] border-[2px] duration-300 border-gray-500 focus:border-mainColor focus:outline-0"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              autoComplete="on"
              className="w-full lg:min-w-[300px] lg:max-w-[50%] flex-1 rounded-[8px] h-[50px] p-[10px] border-[2px] duration-300 border-gray-500 focus:border-mainColor focus:outline-0"
            />
          </div>
          <div className="flex flex-row w-full px-[20px] mb-[20px]">
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              minLength={10}
              autoComplete="on"
              className="w-full rounded-[8px] h-[50px] p-[10px] border-[2px] duration-300 border-gray-500 focus:border-mainColor focus:outline-0"
            />
          </div>
          <div className="flex flex-row w-full px-[20px] mb-[20px] ">
            <textarea
              rows={10}
              cols={50}
              placeholder="Message"
              maxLength={250}
              className="w-full rounded-[8px] h-[150px] p-[10px] border-[2px] duration-300 border-gray-500 focus:border-mainColor focus:outline-0"
            ></textarea>
          </div>
          <div className="flex justify-center items-center mt-[20px]">
            <button className="w-[200px] h-[60px] bg-mainColor p-[10px] text-white text-[20px] cursor-pointer rounded-[8px]">
              Send Message
            </button>
          </div>
        </div>
      </from>
    </div>
  );
};

export default Contact;
