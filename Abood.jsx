import React, { useEffect, useRef } from "react";
import { links } from "../../assets/constants.js";
const Home = ({ show }) => {
  const slider = useRef();

  const images = [
    "./../../assets/slide/slide-1.jpg",
    "./../../assets/slide/slide-2.jpg",
    "./../../assets/slide/slide-3.jpg",
  ];

  let currentIndex = 0;
  const showImage = (index) => {
    slider.current.src = images[index];
  };

  function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
  }

  function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
  }

  useEffect(() => {
    console.log(images[currentIndex]);

    showImage(currentIndex);
  }, []);

  return (
    <div className="w-full">
      <div className="w-full bg-black/70 h-20 flex items-center justify-between px-[50px]">
        <h1 className="text-white text-[20px] h-20px">GROOVIN</h1>
        <ul className="links text-gray-400 flex justify-end flex-1 gap-4 ">
          {links.map((link, index) => (
            <li
              key={index}
              className="relative cursor-pointer hover:text-white group"
            >
              {link}
              <span className="absolute bottom-[-4px] left-0 h-[2px] group-hover:opacity-100 group-hover:w-[100%] group-hover:bg-green-600 opacity-0 w-[0px] duration-300 " />
            </li>
          ))}
        </ul>
      </div>
      <img
        ref={slider}
        className="w-[500px] h-[300px] object-cover block mx-[auto] my-[0] "
        id="slider"
        alt="Image Slider"
        // src="./../../assets/slide/slide-1.jpg"
      />
      <div className="controls">
        <button className="">Previous</button>
        <button className="">Next</button>
      </div>
    </div>
  );
};

export default Home;
