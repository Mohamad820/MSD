import React from "react";

const WhyUs = () => {
  return (
    <div className="relative  container mx-auto " id="WhyUs">
      <div className="py-[30px]">
        <h1 className="text-center text-[32px] uppercase text-mainColor font-bold">
          Why Us
        </h1>
        <p className="text-center px-[40px] leading-[28px] text-[18px] text-gray-600">
          Why Us Magnam dolores commodi suscipit. Necessitatibus eius
          consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit.
          Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias
          ea. Quia fugiat sit in iste officiis commodi quidem hic quas.
        </p>
      </div>
      <div className="flex flex-row flex-wrap justify-center items-center gap-6  px-[50px] pb-[30px]">
        <div className="flex flex-col justify-center items-center min-w-[300px] max-w-[500px] h-[300px] flex-1 duration-300 rounded-[15px] mt-[20px] hover:bg-mainColor  hover:scale-110 group">
          <span className="text-center py-[20px] text-mainColor font-bold text-[30px] duration-300 group-hover:text-white">
            01
          </span>
          <h1 className="text-center text-[28px] pb-[15px] duration-300 group-hover:text-white">
            Lorem Ipsum
          </h1>
          <p className="text-center text-gray-500 duration-300 group-hover:text-white">
            Ulamco laboris nisi ut aliquip ex ea commodo consequat. Et
            consectetur ducimus vero placeat
          </p>
        </div>
        <div className="flex flex-col justify-center items-center min-w-[300px] max-w-[500px] h-[300px] flex-1 duration-300 rounded-[15px] mt-[20px] hover:bg-mainColor hover:scale-110 group">
          <span className="text-center py-[20px] text-mainColor font-bold text-[30px] duration-300 group-hover:text-white">
            02
          </span>
          <h1 className="text-center text-[28px] pb-[15px] duration-300 group-hover:text-white">
            Repellat Nihil
          </h1>
          <p className="text-center text-gray-500 duration-300 group-hover:text-white">
            Dolorem est fugiat occaecati voluptate velit esse. Dicta veritatis
            dolor quod et vel dire leno para dest
          </p>
        </div>
        <div className="flex flex-col justify-center items-center min-w-[300px] max-w-[500px] h-[300px] flex-1 duration-300 rounded-[15px] mt-[20px] hover:bg-mainColor hover:scale-110 group">
          <span className="text-center py-[20px] text-mainColor font-bold text-[30px] duration-300 group-hover:text-white">
            03
          </span>
          <h1 className="text-center text-[28px] pb-[15px] duration-300 group-hover:text-white">
            Ad ad velit qui
          </h1>
          <p className="text-center text-gray-500 duration-300 group-hover:text-white">
            Molestiae officiis omnis illo asperiores. Aut doloribus vitae sunt
            debitis quo vel nam quis
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
