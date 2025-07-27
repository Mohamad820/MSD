import React, { useEffect, useRef, useState } from "react";
import { IoNewspaperOutline } from "react-icons/io5";
import { GiCube } from "react-icons/gi";
import { LuImages } from "react-icons/lu";
import { FaShieldHalved } from "react-icons/fa6";
import { FaArrowUp, FaRegSmile } from "react-icons/fa";
import { BsJournalRichtext } from "react-icons/bs";
import { GiVrHeadset } from "react-icons/gi";
import { BsFillPeopleFill } from "react-icons/bs";

const About = ({ show }) => {
  const section1 = useRef();
  const section2 = useRef();
  const section3 = useRef();
  const section4 = useRef();
  const [showGoUp, setShowGoUp] = useState(false);
  const [isRunning, setIsRunning] = useState(false);
  const skill = useRef();

  const countTo = (to, time, ref) => {
    let currentStart = 0;
    let currentValue = currentStart;
    let currentInterval = setInterval(() => {
      if (to < 100) currentValue++;
      else if (to < 1000 && to > 100) currentValue += 10;
      else if (to < 10000 && to > 1000) currentValue += 50;
      if (currentValue > to) {
        clearInterval(currentInterval);
      } else {
        ref.current.textContent = currentValue;
      }
    }, time);
  };

  window.onscroll = function () {
    if (window.scrollY >= 300) {
      setShowGoUp(true);
    } else {
      setShowGoUp(false);
    }

    let skillOffsetTop = skill.current.offsetTop;
    if (skillOffsetTop < window.scrollY + window.screen.height - 200) {
      if (isRunning) return;
      else {
        setIsRunning(true);
        countTo(232, 100, section1);
        countTo(521, 50, section2);
        countTo(1463, 100, section3);
        countTo(15, 100, section4);
      }
    } else {
      setIsRunning(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <button
        onClick={() => {
          scrollToTop();
        }}
        className={`fixed bottom-[15px] duration-300 cursor-pointer w-[50px] h-[50px] bg-mainColor rounded-[8px] z-100 ${
          showGoUp ? " right-[15px] opacity-100" : " right-[0px] opacity-0"
        }`}
      >
        <FaArrowUp className="text-[18px] w-[full] mx-auto cursor-pointer text-white" />
      </button>
      <div className=" mx-auto w-[100%] container" id="About">
        <div className=" relative flex-col lg:flex-row mb-[20px] p-0 mt-[50px] lg:px-[50px] flex-1 flex  justify-between items-center gap-[20px]">
          <img
            src="../../assets/about.jpg"
            className=" object-cover max-h-[400px]  flex-1 md:w-full lg:w-[400px] "
          />
          <div className="flex flex-col flex-[2]">
            <h1 className="text-center lg:text-left pl-[5px] text-zinc-700 text-[34px] font-bold lg:pl-[30px] pt-[20px]">
              Voluptatem dignissimos provident quasi
            </h1>
            <p className="pl-[5px] text-gray-500 lg:pl-[30px] text-center lg:text-left mb-[35px] md:mb-[0]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis
              aute irure dolor in reprehenderit{" "}
            </p>
            <div className=" flex flex-row lg:flex-row my-4 lg:h-[50vh]">
              <div className="left-side flex flex-1 flex-col gap-1 p-1 ">
                <div className="flex-col lg:flex-row items-center gap-[5px] card flex flex-1 p-1 rounded-[8px]  ">
                  <IoNewspaperOutline className="text-mainColor text-[50px] " />
                  <div className="max-w-[80%] py-2">
                    <h1 className="text-gray-700 text-center lg:text-left font-bold">
                      Corporis voluptates
                    </h1>
                    <p className="text-gray-600 text-sm text-center lg:text-left ">
                      Consequuntur sunt aut quasi enim aliquam quae harum
                      pariatur laboris nisi ut aliquip
                    </p>
                  </div>
                </div>
                <div className="flex-col lg:flex-row  items-center gap-[5px] card flex flex-1 p-1 rounded-[8px]  ">
                  <GiCube className="text-mainColor text-[50px] " />
                  <div className="max-w-[80%] py-2">
                    <h1 className="text-gray-700 font-bold text-center lg:text-left">
                      Ullamco laboris nisi
                    </h1>
                    <p className="text-gray-600 text-sm text-center lg:text-left">
                      Excepteur sint occaecat cupidatat non proident, sunt in
                      culpa qui officia deserunt
                    </p>
                  </div>
                </div>
              </div>
              <div className="right-side flex flex-1 flex-col gap-1 p-1">
                <div className=" flex-col lg:flex-row  items-center gap-[5px] card flex-1 p-1 rounded-[8px] flex ">
                  <LuImages className="text-[50px] text-mainColor " />
                  <div className="max-w-[80%] py-2">
                    <h1 className="text-gray-700 font-bold text-center lg:text-left">
                      Labore consequatur
                    </h1>
                    <p className="text-gray-600 text-sm text-center lg:text-left">
                      Aut suscipit aut cum nemo deleniti aut omnis. Doloribus ut
                      maiores omnis facere
                    </p>
                  </div>
                </div>
                <div className="flex-col lg:flex-row  items-center gap-[5px] card flex-1 p-1 rounded-[8px] flex ">
                  <FaShieldHalved className="text-[50px] text-mainColor " />
                  <div className="max-w-[80%] py-2">
                    <h1 className="text-gray-700 font-bold text-center lg:text-left">
                      Beatae veritatis
                    </h1>
                    <p className="text-gray-600 text-sm text-center lg:text-left">
                      Expedita veritatis consequuntur nihil tempore laudantium
                      vitae denat pacta
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="flex-col md:flex-row flex mb-[20px] gap-[20px] px-[20px] lg:flex my-4  skill lg:mx-[50px] "
          ref={skill}
        >
          <div className="flex-col card flex flex-1  rounded-[8px] lg:flex-row  items-center gap-[5px] mb-[20px] lg:mb-[0] ">
            <FaRegSmile className="text-mainColor text-[60px] p-[5px] " />
            <div>
              <h1
                className="text-[48px] justify-start text-center lg:text-left"
                ref={section1}
              >
                232
              </h1>
              <p className="text-gray-600 text-sm text-center">
                <span className="font-bold text-gray-800">Happy Clients</span>{" "}
                consequuntur quae
              </p>
            </div>
          </div>
          <div className="card flex flex-1  rounded-[8px] flex-col lg:flex-row items-center gap-[5px] mb-[20px] lg:mb-[0] ">
            <BsJournalRichtext className="text-mainColor text-[60px] p-[5px]" />
            <div>
              <h1
                className="text-[48px] justify-start text-center lg:text-left"
                ref={section2}
              >
                521
              </h1>
              <p className="text-gray-600 text-sm text-center">
                <span className="font-bold text-gray-800">Projects </span>
                adipisci atque cum quia aut
              </p>
            </div>
          </div>
          <div className="card flex flex-1  rounded-[8px] flex-col lg:flex-row items-center gap-[5px] mb-[20px] lg:mb-[0] ">
            <GiVrHeadset className="text-mainColor text-[60px] p-[5px]" />
            <div>
              <h1
                className="text-[48px] justify-start text-center lg:text-left"
                ref={section3}
              >
                1463
              </h1>
              <p className="text-gray-600 text-sm text-center">
                <span className="font-bold text-gray-800">
                  Hours Of Support{" "}
                </span>
                aut commodi quaerat
              </p>
            </div>
          </div>
          <div className="card flex flex-1 rounded-[8px] flex-col lg:flex-row items-center gap-[5px] mb-[20px] lg:mb-[0] ">
            <BsFillPeopleFill className="text-mainColor text-[60px] p-[5px]" />
            <div>
              <h1
                className="text-[48px] justify-start text-center lg:text-left"
                ref={section4}
              >
                15
              </h1>
              <p className="text-gray-600 text-sm text-center">
                <span className="font-bold text-gray-800">Hard Workers </span>
                rerum asperiores dolor
              </p>
            </div>
          </div>
        </div>
        <div className="flex-col container flex-wrap  flex px-[30px] md:flex-row justify-between items-center gap-8 py-[20px] bg-gray-200  ">
          <img
            src="../../assets/clients/client-1.png"
            className="w-[80px] grayscale duration-400  hover:grayscale-0 hover:scale-110"
          />
          <img
            src="../../assets/clients/client-2.png"
            className="w-[80px] grayscale duration-400 hover:grayscale-0 hover:scale-110"
          />
          <img
            src="../../assets/clients/client-3.png"
            className="w-[80px] grayscale duration-400 hover:grayscale-0 hover:scale-110"
          />
          <img
            src="../../assets/clients/client-4.png"
            className="w-[80px] grayscale duration-400 hover:grayscale-0 hover:scale-110"
          />
          <img
            src="../../assets/clients/client-5.png"
            className="w-[80px] grayscale duration-400 hover:grayscale-0 hover:scale-110"
          />
          <img
            src="../../assets/clients/client-6.png"
            className="w-[80px] grayscale duration-400 hover:grayscale-0 hover:scale-110"
          />
        </div>
      </div>
    </>
  );
};

export default About;
