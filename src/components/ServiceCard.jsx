"use client";
import Image from "next/image";
import React, { useState } from "react";

const ServiceCard = ({ image, text, backText }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div
      className={`h-[180px] sm:h-[200px] md:h-[220px] w-[150px] sm:w-[200px] md:w-[280px] lg:w-[300px] relative rounded-2xl ${
        isActive ? "group-active" : "group"
      } cursor-pointer transition-all duration-300 hover:scale-[1.02]`}
      onClick={() => setIsActive(!isActive)}
      onTouchStart={() => setIsActive(true)}
      onTouchEnd={() => {}}
    >
      {/* Front card */}
      <div
        className={`w-full h-full bg-white flex flex-col items-center justify-center rounded-2xl gap-2 sm:gap-3 md:gap-4 shadow-sm z-10 relative ${
          isActive ? "opacity-0" : "opacity-100"
        } transition-opacity duration-300`}
      >
        <div className="w-[50px] h-[50px] sm:w-[60px] sm:h-[60px] md:w-[70px] md:h-[70px] relative">
          <Image
            src={image}
            alt={text}
            fill
            className="object-contain"
            sizes="(max-width: 640px) 50px, (max-width: 768px) 60px, 70px"
          />
        </div>
        <p className="text-black text-sm sm:text-base md:text-lg font-medium px-2 text-center">
          {text}
        </p>
      </div>

      {/* Decorative tilted background */}
      <div
        className={`w-full h-full transform translate-y-[-17px] -rotate-6 rounded-2xl absolute top-0 left-0 -z-10 bg-fontPrimary opacity-90 transition-all duration-300 ${
          isActive ? "translate-y-[-12px] rotate-[-8deg]" : ""
        } group-hover:translate-y-[-12px] group-hover:rotate-[-8deg]`}
      ></div>

      {/* Back card (hover state) */}
      <div
        className={`w-full h-full flex items-center justify-center rounded-2xl absolute top-0 left-0 ${
          isActive ? "z-20 opacity-100" : "-z-10 opacity-0"
        } bg-bgTertiary shadow-md border-black transition-all duration-500 ease-in-out group-hover:z-20 group-hover:opacity-100 p-4`}
      >
        <p className="leading-5 sm:leading-6 md:leading-7 text-[10px] sm:text-xs md:text-sm text-center">
          {backText.length > 90 ? backText.slice(0, 90) + "..." : backText}
        </p>
      </div>
    </div>
  );
};

export default ServiceCard;
