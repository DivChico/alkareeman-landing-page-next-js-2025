import Image from "next/image";
import React from "react";

const FeatureCard = ({ image, text }) => {
  return (
    <div className="relative w-[450px] h-[174px]">
      <div className=" h-full w-full gap-2  bg-white rounded-2xl border-black flex flex-row-reverse items-center p-4">
        <div className="flex justify-center items-center align-middle  h-full">
          <Image src={image} height={70} width={70}></Image>
        </div>
        <p className=" flex-1 text-black text-sm  h-full flex items-center justify-center">
          {text}
        </p>
      </div>
      <div className=" h-full w-full  bg-black/25 rounded-2xl absolute top-3 left-0 -z-1 "></div>
    </div>
  );
};

export default FeatureCard;
