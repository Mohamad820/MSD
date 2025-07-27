import React, { useState } from "react";
import { IoIosHelpCircle } from "react-icons/io";
import { IoChevronDownSharp } from "react-icons/io5";

const AskedCard = ({ text }) => {
  const [show, setShow] = useState(false);
  return (
    <li
      className={`w-full  bg-gray-200 rounded-md overflow-hidden cursor-pointer flex flex-col justify-start items-start p-[10px] group duration-300 ${
        show ? "h-[140px]" : "h-[70px]"
      }`}
      onClick={() => {
        setShow(!show);
      }}
    >
      <div className="w-full flex justify-start items-center mt-2">
        <IoIosHelpCircle className="mx-2 text-[25px] text-mainColor" />
        <h3 className="text-[18px] duration-300 group-hover:text-mainColor w-full ">
          {text.question}
        </h3>
        <IoChevronDownSharp className="absolute right-5 duration-300 group-hover:text-mainColor cursor-pointer" />
      </div>
      <p
        className={`px-8 mt-4 duration-300 ${
          show ? "opacity-100" : "opacity-0"
        }`}
      >
        {text.answer}
      </p>
    </li>
  );
};

export default AskedCard;
