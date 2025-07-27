import React from "react";
import { useState } from "react";
import { links } from "../../assets/constants.js";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative ">
      <div className="fixed bg-black/75 backdrop-blur-md z-[1000] w-full h-20 flex items-center justify-between px-[50px]">
        <h1 className="text-white text-[20px] h-20px">GROOVIN</h1>
        <div className=" relative w-[70px] h-[70px] lg:hidden flex items-center">
          <button
            className="w-[60px] h-[60px] cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          >
            <GiHamburgerMenu className="text-white w-full h-full p-[10px] " />
          </button>
        </div>
        <ul className="hidden lg:flex text-gray-300 relative  justify-end flex-1 gap-4 ">
          {links.map((link, index) => (
            <li
              key={index}
              className="relative cursor-pointer hover:text-white group"
            >
              <a href={`#${link}`}>{link}</a>
              <span className="absolute bottom-[-4px] left-0 h-[2px] group-hover:opacity-100 group-hover:w-[100%] group-hover:bg-mainColor opacity-0 w-[0px] duration-300 " />
            </li>
          ))}
        </ul>
        {isOpen && (
          <ul className="lg:hidden absolute right-[10px] w-[200px] top-[90px] backdrop-blur-md text-white bg-black/75 text-center p-[10px] flex gap-[7px] flex-col ">
            {links.map((link, index) => (
              <li
                key={index}
                className="relative cursor-pointer hover:text-white group"
              >
                <a href={`#${link}`}>{link}</a>
                <span className="absolute bottom-[-4px] left-0 h-[2px] group-hover:opacity-100 group-hover:w-[100%] group-hover:bg-mainColor opacity-0 w-[0px] duration-300 " />
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Navbar;
// width: 200px;
// background: gray;
// text-align: center;
// padding: 10px;
// display: flex
// ;
// flex-direction: column;
// gap: 7px;

// links   absolute top-[100px] right-0 text-gray-300   justify-end flex-1 gap-4
