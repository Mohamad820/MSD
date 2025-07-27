import React from "react";

const Pricing = () => {
  return (
    <div
      className="relative px-[50px] py-[60px] container mx-auto"
      id="Pricing"
    >
      <div className="flex flex-col justify-center items-center gap-3">
        <h1 className="text-[32px] text-mainColor font-bold uppercase text-center">
          {" "}
          Pricing
        </h1>
        <p className="text-center text-[18px] landing-[28px] text-gray-600">
          Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
          aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
          quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia
          fugiat sit in iste officiis commodi quidem hic quas.
        </p>
      </div>
      <div className="flex flex-row justify-between items-center flex-wrap gap-5 mt-[30px]">
        <div className="flex flex-col justify-center items-center gap-2 min-w-[300px] max-w-[500px] min-h-[400px] py-[20px] rounded-[20px]">
          <h3 className="text-[28px]">Free</h3>
          <h1 className="relative text-[45px] text-mainColor w-[120px]">
            <span className="absolute top-[10px] left-[-10px] text-[20px] text-mainColor">
              $
            </span>
            00
            <span className="absolute bottom-[10px] left-[55px] text-[18px] text-gray-600">
              /month
            </span>
          </h1>
          <ul className="list-none text-center py-[10px] ">
            <li className="my-[10px] text-[16px]">Aida dere</li>
            <li className="my-[10px] text-[16px]">Nec feugiat nisl</li>
            <li className="my-[10px] text-[16px]">Nulla at volutpat dola</li>
            <li className="my-[10px] text-[16px] line-through text-gray-600">
              Pharetra massa
            </li>
            <li className="my-[10px] text-[16px] line-through text-gray-600 ">
              Massa ultricies mi
            </li>
          </ul>
          <button className="bg-white text-mainColor text-[18px] font-bold text-center w-[150px] h-[50px] m-[10px] rounded-[4px] border-2 duration-300 cursor-pointer border-mainColor hover:bg-mainColor hover:text-white hover:border-white ">
            Buy Now
          </button>
        </div>
        <div className="flex flex-col justify-center items-center gap-2 min-w-[300px] max-w-[500px] min-h-[400px] bg-mainColor py-[20px] rounded-[20px]">
          <h3 className="text-[28px] text-white">Business</h3>
          <h1 className="relative text-[45px] text-white w-[120px]">
            <span className="absolute top-[10px] left-[-10px] text-[20px] text-white">
              $
            </span>
            19
            <span className="absolute bottom-[10px] left-[55px] text-[18px] text-white">
              /month
            </span>
          </h1>
          <ul className="list-none text-center py-[10px] ">
            <li className="my-[10px] text-[16px]  text-white">Aida dere</li>
            <li className="my-[10px] text-[16px] text-white">
              Nec feugiat nisl
            </li>
            <li className="my-[10px] text-[16px] text-white">
              Nulla at volutpat dola
            </li>
            <li className="my-[10px] text-[16px] text-white ">
              Pharetra massa
            </li>
            <li className="my-[10px] text-[16px] text-white line-through">
              Massa ultricies mi
            </li>
          </ul>
          <button className="bg-mainColor text-white text-[18px] font-bold text-center w-[150px] h-[50px] m-[10px] rounded-[4px] border-2 duration-300 cursor-pointer border-white hover:bg-white hover:text-mainColor hover:border-mainColor ">
            Buy Now
          </button>
        </div>
        <div className="flex flex-col justify-center items-center gap-2 min-w-[300px] max-w-[500px] min-h-[400px] py-[20px] rounded-[20px]">
          <h3 className="text-[28px]">Developer</h3>
          <h1 className="relative text-[45px] text-mainColor w-[120px]">
            <span className="absolute top-[10px] left-[-10px] text-[20px] text-mainColor">
              $
            </span>
            29
            <span className="absolute bottom-[10px] left-[55px] text-[18px] text-gray-600">
              /month
            </span>
          </h1>
          <ul className="list-none text-center py-[10px] ">
            <li className="my-[10px] text-[16px]">Aida dere</li>
            <li className="my-[10px] text-[16px]">Nec feugiat nisl</li>
            <li className="my-[10px] text-[16px]">Nulla at volutpat dola</li>
            <li className="my-[10px] text-[16px] ">Pharetra massa</li>
            <li className="my-[10px] text-[16px]  ">Massa ultricies mi</li>
          </ul>
          <button className="bg-white text-mainColor text-[18px] font-bold text-center w-[150px] h-[50px] m-[10px] rounded-[4px] border-2 duration-300 cursor-pointer border-mainColor hover:bg-mainColor hover:text-white hover:border-white ">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
