import React from "react";

import AskedCard from "../Components/Card/AskedCard.jsx";

const Asked = () => {
  const texts = [
    {
      question: "Non consectetur a erat nam at lectus urna duis?",
      answer:
        "Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non.",
    },
    {
      question: "Feugiat scelerisque varius morbi enim nunc?",
      answer:
        "Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui.",
    },
    {
      question: "Dolor sit amet consectetur adipiscing elit?",
      answer:
        "Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Faucibus pulvinar elementum integer enim. Sem nulla pharetra diam sit amet nisl suscipit.",
    },
    {
      question:
        "Tempus quam pellentesque nec nam aliquam sem et tortor consequat?",
      answer:
        "Molestie a iaculis at erat pellentesque adipiscing commodo. Dignissim suspendisse in est ante in. Nunc vel risus commodo viverra maecenas accumsan. Sit amet nisl suscipit adipiscing bibendum est. Purus gravida quis blandit turpis cursus in.",
    },
    {
      question: "Tortor vitae purus faucibus ornare. Varius vel.",
      answer:
        "Laoreet sit amet cursus sit amet dictum sit amet justo. Mauris vitae ultricies leo integer malesuada nunc vel. Tincidunt eget nullam non nisi est sit amet. Turpis nunc eget lorem dolor sed. Ut venenatis tellus in metus vulputate eu scelerisque.",
    },
  ];
  return (
    <div className="relative mx-auto container" id="Asked">
      <div className="flex flex-col justify-center items-center gap-3">
        <h1 className="text-mainColor text-[32px] font-bold text-center">
          Frequently Asked Questions
        </h1>
        <p className="text-[18px] text-center landing-[28px] text-gray-600">
          Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
          aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
          quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia
          fugiat sit in iste officiis commodi quidem hic quas.
        </p>
      </div>
      <div className="container my-[30px] ">
        <ul className="flex flex-col justify-between items-center gap-3 mx-auto w-[75%] relative">
          {texts.map((text, index) => (
            <AskedCard text={text} key={index} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Asked;
