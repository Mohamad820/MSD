import React from "react";
import { FaBriefcase } from "react-icons/fa";
import { BsCardChecklist } from "react-icons/bs";
import { IoStatsChartSharp } from "react-icons/io5";
import { BsBinoculars } from "react-icons/bs";
import { BsBrightnessHigh } from "react-icons/bs";
import { IoCalendarOutline } from "react-icons/io5";

const Services = () => {
  return (
    <div className="mx-auto container" id="Services">
      <div className="relative">
        <h1 className="font-bold text-[32px] uppercase mp-[20px] pb-0 text-mainColor text-center pt-[50px]">
          Services
        </h1>
        <p className="text-md text-gray-600 text-center px-[25px] pt-[15px]">
          Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
          aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
          quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia
          fugiat sit in iste officiis commodi quidem hic quas.
        </p>
        <div className="flex flex-row flex-wrap justify-between items-center px-[40px] py-[20px]">
          <div className="ser min-w-[300px] max-w-[500px] h-[300px] flex flex-col justify-center items-center flex-1 group">
            <div className="rounded-[50%] bg-gray-200 w-[80px] h-[80px] flex justify-center items-center pt-0 mb-[15px] group">
              <FaBriefcase className="text-mainColor text-[50px] duration-300 group-hover:scale-110" />
            </div>
            <div className="relative">
              <h1 className="font-bold text-center text-[18px] duration-300 cursor-pointer group-hover:text-mainColor">
                Lorem, ipsum.
              </h1>
              <span className="w-[50px] h-[3px] bg-mainColor bottom-[-2px] absolute left-[50%] translate-x-[-50%] mb-[-10px] duration-300 group-hover:bg-black " />
            </div>
            <p className="text-center px-2 mt-[15px] p-[15px]">
              Voluptatum deleniti atque corrupti quos dolores et quas molestias
              excepturi sint occaecati cupiditate non provident
            </p>
          </div>
          <div className="ser min-w-[300px] max-w-[500px] h-[300px] flex flex-col justify-center items-center flex-1 group">
            <div className="rounded-[50%] bg-gray-200 w-[80px] h-[80px] flex justify-center items-center pt-0 mb-[15px] group">
              <BsCardChecklist className="text-mainColor text-[50px] duration-300 group-hover:scale-110" />
            </div>
            <div className="relative">
              <h1 className="font-bold text-center text-[18px] duration-300 cursor-pointer group-hover:text-mainColor">
                Dolor Sitema
              </h1>
              <span className="w-[50px] h-[3px] bg-mainColor bottom-[-2px] absolute left-[50%] translate-x-[-50%] mb-[-10px] duration-300 group-hover:bg-black " />
            </div>
            <p className="text-center px-2 mt-[15px] p-[15px]">
              Minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat tarad limino ata
            </p>
          </div>
          <div className="ser min-w-[300px] max-w-[500px] h-[300px] flex flex-col justify-center items-center flex-1 group">
            <div className="rounded-[50%] bg-gray-200 w-[80px] h-[80px] flex justify-center items-center pt-0 mb-[15px] group">
              <IoStatsChartSharp className="text-mainColor text-[50px] duration-300 group-hover:scale-110" />
            </div>
            <div className="relative">
              <h1 className="font-bold text-center text-[18px] duration-300 cursor-pointer group-hover:text-mainColor">
                Sed ut perspiciatis
              </h1>
              <span className="w-[50px] h-[3px] bg-mainColor bottom-[-2px] absolute left-[50%] translate-x-[-50%] mb-[-10px] duration-300 group-hover:bg-black  " />
            </div>
            <p className="text-center px-2 mt-[15px] p-[15px]">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur
            </p>
          </div>
          <div className="ser min-w-[300px] max-w-[500px] h-[300px] flex flex-col justify-center items-center flex-1 group">
            <div className="rounded-[50%] bg-gray-200 w-[80px] h-[80px] flex justify-center items-center pt-0 mb-[15px] group">
              <BsBinoculars className="text-mainColor text-[50px] duration-300 group-hover:scale-110" />
            </div>
            <div className="relative">
              <h1 className="font-bold text-center text-[18px] duration-300 cursor-pointer group-hover:text-mainColor">
                Magni Dolores
              </h1>
              <span className="w-[50px] h-[3px] bg-mainColor bottom-[-2px] absolute left-[50%] translate-x-[-50%] mb-[-10px] duration-300 group-hover:bg-black " />
            </div>
            <p className="text-center px-2 mt-[15px] p-[15px]">
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum
            </p>
          </div>
          <div className="ser min-w-[300px] max-w-[500px] h-[300px] flex flex-col justify-center items-center flex-1 group">
            <div className="rounded-[50%] bg-gray-200 w-[80px] h-[80px] flex justify-center items-center pt-0 mb-[15px] group">
              <BsBrightnessHigh className="text-mainColor text-[50px] duration-300 group-hover:scale-110" />
            </div>
            <div className="relative">
              <h1 className="font-bold text-center text-[18px] duration-300 cursor-pointer group-hover:text-mainColor">
                Nemo Enim
              </h1>
              <span className="w-[50px] h-[3px] bg-mainColor bottom-[-2px] absolute left-[50%] translate-x-[-50%] mb-[-10px] duration-300 group-hover:bg-black  " />
            </div>
            <p className="text-center px-2 mt-[15px] p-[15px]">
              At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis praesentium voluptatum deleniti atque
            </p>
          </div>
          <div className="ser min-w-[300px] max-w-[500px] h-[300px] flex flex-col justify-center items-center flex-1 group">
            <div className="rounded-[50%] bg-gray-200 w-[80px] h-[80px] flex justify-center items-center pt-0 mb-[15px] group">
              <IoCalendarOutline className="text-mainColor text-[50px] duration-300 group-hover:scale-110" />
            </div>
            <div className="relative">
              <h1 className="font-bold text-center text-[18px] duration-300 cursor-pointer group-hover:text-mainColor">
                Eiusmod Tempor
              </h1>
              <span className="w-[50px] h-[3px] bg-mainColor bottom-[-2px] absolute left-[50%]  translate-x-[-50%] mb-[-10px] duration-300 group-hover:bg-black " />
            </div>
            <p className="text-center px-2 mt-[15px] p-[15px]">
              Et harum quidem rerum facilis est et expedita distinctio. Nam
              libero tempore, cum soluta nobis est eligendi
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
