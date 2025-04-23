import Image from "next/image";
import React from "react";

const ServiceCard = ({ image, text, backText }) => {
  return (
    <div className="h-[180px] w-[150px] md:w-[300px] relative  rounded-2xl group cursor-pointer ">
      <div className="w-full h-full bg-white flex  flex-col md:flex-row-reverse items-center justify-center rounded-2xl gap-2">
        <div>
          <Image src={image} width={70} height={100} />
        </div>
        <p className="text-black">{text}</p>
      </div>
      <div className="w-full h-full transform translate-y-[-17px] -rotate-6 rounded-2xl absolute top-0 left-0 -z-10 bg-fontPrimary"></div>
      <div className="w-full h-full flex items-center justify-center group-hover:scale-105   rounded-2xl absolute top-0 left-0 -z-10 group-hover:z-1 bg-bgTertiary shadow-sm border-black transition-all duration-500  ease-in-out ">
        <p className=" leading-6">{backText}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
