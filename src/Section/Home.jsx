import React, { useEffect, useRef } from "react";
import { FaAngleLeft } from "react-icons/fa6";
import { FaChevronRight } from "react-icons/fa6";
const Home = ({ show }) => {
  const slider1 = useRef();
  const slider2 = useRef();
  const slider3 = useRef();

  const content1 = useRef();
  const content2 = useRef();
  const content3 = useRef();

  // Make Array For Each Element In Container
  const images = [slider1, slider2, slider3];

  const contents = [content1, content2, content3];

  // Make Index 0 For Start From Begin
  let currentIndex = 0;
  const showImage = (index) => {
    // slider.current.src = images[index];
    images.map((img) => {
      img.current.classList.remove("showImage");
      // img.current.classList.add("hideImage");
    });
    images[index].current.classList.add("showImage");
    // images[index].current.classList.remove("hideImage");
  };

  const showContent = (index) => {
    contents.map((content) => {
      content.current.classList.remove("showContent");
    });
    contents[index].current.classList.add("showContent");
  };

  function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
    showContent(currentIndex);
  }

  function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
    showContent(currentIndex);
  }

  useEffect(() => {
    showImage(currentIndex);
    showContent(currentIndex);
  }, []);

  return (
    <div className="w-full min-h-[100vh] duration-300 relative flex" id="Home">
      {/* <div className="flex relative min-w-full min-h-full bg-red-500"> */}
      <button
        className="bg-black/60 absolute top-[50%] translate-y-[-50%] text-white w-15 h-15 flex justify-center items-center z-[100] text-[32px] rounded-[50%] cursor-pointer hover:bg-black/85"
        onClick={() => [prevImage()]}
      >
        <FaAngleLeft />
      </button>
      <button
        className="bg-black/60 absolute top-[50%] translate-y-[-50%] right-0 text-white w-15 h-15 flex justify-center items-center z-[100] text-[32px] rounded-[50%] cursor-pointer hover:bg-black/85"
        onClick={() => [nextImage()]}
      >
        <FaChevronRight />
      </button>

      <div
        className="bg-black/50 absolute flex justify-center items-center flex-col gap-4 inset-0 min-h-[100vh] z-[10] font-bold opacity-0"
        ref={content1}
      >
        <h1 className=" text-white  text-center translate-y-[-100px] duration-700 opacity-0 text-[28px]">
          Sequi ea ut et est quaerat
        </h1>
        <p className="text-white text-[12px] lg:text-[18px]  translate-y-[100px] duration-700 opacity-0 max-w-[80%] text-center ">
          Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et est
          quaerat sequi nihil ut aliquam. Occaecati alias dolorem mollitia ut.
          Similique ea voluptatem. Esse doloremque accusamus repellendus
          deleniti vel. Minus et tempore modi architecto.
        </p>
        <button className="bg-mainColor cursor-pointer text-white text-[14px] font-bold  pt-[10px] px-[32px] pb-[12px] z-[100] m-[10px] rounded-[4px] translate-y-[150px] duration-1000 opacity-0">
          READ MORE
        </button>
      </div>
      <div
        className="bg-black/50 absolute flex justify-center items-center flex-col gap-4 inset-0  min-h-[100vh] z-[10] font-bold opacity-0 "
        ref={content2}
      >
        <h1 className="text-white text-[28px] text-center translate-y-[-100px] duration-700 opacity-0  ">
          Lorem ipsum dolor sit.
        </h1>
        <p className="text-white text-[12px] lg:text-[18px]  max-w-[80%] text-center  translate-y-[100px] duration-700 opacity-0">
          Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et est
          quaerat sequi nihil ut aliquam. Occaecati alias dolorem mollitia ut.
          Similique ea voluptatem. Esse doloremque accusamus repellendus
          deleniti vel. Minus et tempore modi architecto.
        </p>
        <button className="bg-mainColor text-white text-[14px] font-bold  pt-[10px] px-[32px] pb-[12px] m-[10px] rounded-[4px] translate-y-[150px] duration-1000 opacity-0">
          READ MORE
        </button>
      </div>
      <div
        className="bg-black/50 absolute  flex justify-center items-center flex-col gap-4 inset-0 min-h-[100vh] z-[10] font-bold opacity-0"
        ref={content3}
      >
        <h1 className=" text-white text-[28px] text-center translate-y-[-100px] duration-700 opacity-0 ">
          Lorem ipsum dolor sit amet.
        </h1>
        <p className=" text-white text-[12px] lg:text-[18px] max-w-[80%] text-center translate-y-[100px] duration-700 opacity-0 ">
          Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et est
          quaerat sequi nihil ut aliquam. Occaecati alias dolorem mollitia ut.
          Similique ea voluptatem. Esse doloremque accusamus repellendus
          deleniti vel. Minus et tempore modi architecto.
        </p>
        <button className="bg-mainColor text-white text-[14px] font-bold  pt-[10px] px-[32px] pb-[12px] m-[10px] rounded-[4px] translate-y-[150px] duration-1000 opacity-0 ">
          READ MORE
        </button>
      </div>
      <img
        ref={slider1}
        className="w-full h-[100vh] absolute inset-0 object-cover block mx-[auto] my-[0] duration-500 opacity-0 "
        id="slider"
        alt="Image Slider"
        src="./../../assets/slide/slide-1.jpg"
      />
      <img
        ref={slider2}
        className="w-full h-[100vh] absolute inset-0 object-cover block mx-[auto] my-[0] duration-500 opacity-0 "
        id="slider"
        alt="Image Slider"
        src="./../../assets/slide/slide-2.jpg"
      />
      <img
        ref={slider3}
        className="w-full h-[100vh] absolute inset-0 object-cover block mx-[auto] my-[0] duration-500 opacity-0 "
        id="slider"
        alt="Image Slider"
        src="./../../assets/slide/slide-3.jpg"
      />

      {/* </div> */}
    </div>
  );
};

export default Home;
