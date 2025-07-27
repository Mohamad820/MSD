import React, { useRef, useState } from "react";
import { Links1 } from "../../assets/constants.js";
import { images } from "../../assets/constants.js";
import { FiPlus } from "react-icons/fi";
import { FaLink } from "react-icons/fa6";

const Portfolio = ({ show }) => {
  const [type, setType] = useState("All");

  return (
    <div className="relative container mx-auto " id="Portfolio">
      <h1 className="text-[32px] font-bold uppercase text-mainColor text-center">
        Portfolio
      </h1>
      <p className="text-center px-[40px] leading-[28px] text-[18px] text-gray-600">
        Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
        aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
        quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat
        sit in iste officiis commodi quidem hic quas.
      </p>
      <div className=" py-[20px]">
        <ul className="flex justify-center flex-1 gap-4">
          {Links1.map((link, index) => (
            <li
              key={index}
              className={`cursor-pointer relative px-[20px] py-[10px] rounded-[10px] duration-300 hover:bg-mainColor hover:text-white ${
                type == link && "bg-mainColor text-white"
              }`}
              onClick={() => {
                setType(link);
              }}
            >
              {link}
            </li>
          ))}
        </ul>
      </div>
      <div className="flex flex-row flex-wrap justify-center items-center gap-6 px-[50px] pb-[30px] ">
        {/* {type == "All" && (
          <>
            {images.map((image, index) => (
              <img
                key={index}
                src={image.url}
                className="min-w-[300px] max-w-[500px] h-[300px] object-cover flex-1 duration-300"
              />
            ))}
          </>
        )}
        {type !== "All" && (
          <>
            {images.map(
              (image, index) =>
                image.type == type && (
                  <img
                    key={index}
                    src={image.url}
                    className="min-w-[300px] max-w-[500px] h-[300px] object-cover flex-1"
                  />
                )
            )}
          </>
        )} */}{" "}
        {images.map((image, index) => (
          <div
            className={`relative min-w-[300px] max-w-[500px] flex-1 h-[250px] group overflow-hidden ${
              type == "All" || image.type == type
                ? "block opacity-100"
                : "hidden opacity-0"
            } `}
          >
            <img
              key={index}
              src={image.url}
              className="absolute w-full object-cover flex-1 duration-300 h-full  group-hover:scale-120"
            />
            <span className=" flex flex-col justify-center items-start pl-[20px] gap-3 w-full opacity-0 absolute min-h-[100%] top-0 left-0 group-hover:opacity-100 bg-black/40 backdrop-blur-[1px] z-10 duration-300">
              <h2 className="text-white  text-[23px]">{image.type} </h2>
              <p className="text-black/80 uppercase">{image.type}</p>
              <div className="flex flex-row justify-between items-center gap-2 text-[28px] text-white">
                {" "}
                <a href="#">
                  <FiPlus className="hover:text-mainColor cursor-pointer" />
                </a>
                <a href="#">
                  <FaLink className="hover:text-mainColor cursor-pointer" />
                </a>
              </div>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
