import Image from "next/image";
import React from "react";

const ServiceCard = ({ image, text, backText }) => {
  return (
    <div className="h-[180px] sm:h-[200px] md:h-[220px] w-[150px] sm:w-[200px] md:w-[280px] lg:w-[300px] relative rounded-2xl group cursor-pointer transition-all duration-300 hover:scale-[1.02]">
      {/* Front card */}
      <div className="w-full h-full bg-white flex flex-col items-center justify-center rounded-2xl gap-2 sm:gap-3 md:gap-4 shadow-sm z-10 relative">
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
      <div className="w-full h-full transform translate-y-[-17px] -rotate-6 rounded-2xl absolute top-0 left-0 -z-10 bg-fontPrimary opacity-90 transition-all duration-300 group-hover:translate-y-[-12px] group-hover:rotate-[-8deg]"></div>
      
      {/* Back card (hover state) */}
      <div className="w-full h-full flex items-center justify-center rounded-2xl absolute top-0 left-0 -z-10 group-hover:z-20 bg-bgTertiary shadow-md border-black transition-all duration-500 ease-in-out opacity-0 group-hover:opacity-100 p-4">
        <p className="leading-5 sm:leading-6 md:leading-7 text-xs sm:text-sm md:text-base text-center">
          {backText}
        </p>
      </div>
    </div>
  );
};

export default ServiceCard;
