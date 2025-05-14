import Image from "next/image";
import React from "react";

const TestimonialCard = ({ name, image, testimonial }) => {
  return (
    <div className="     max-w-xs min-h-[500px]  flex flex-col items-center space-y-4 ">
      <div className="relative w-40 h-40 rounded-full overflow-hidden">
        <Image
          src={image}
          alt="Testimonial person"
          fill
          className="object-cover"
        />
      </div>

      <div className=" space-y-2">
        <h3 className=" text-xl text-white"> {name}</h3>
        <Image src={"/starts.png"} width={150} height={150} />
      </div>
      <p className=" text-center leading-8 text-white">{testimonial}</p>
    </div>
  );
};

export default TestimonialCard;
