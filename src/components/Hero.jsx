import Image from "next/image";
import React from "react";
import Button from "./Button";

const Hero = () => {
  return (
    <section className=" flex flex-col md:flex-row-reverse items-center justify-center gap-8 py-16  relative">
      <div className="max-w-md space-y-4">
        <p className=" font-semibold text-2xl text-fontPrimary">
          {" "}
          هل تبحث عن شريك رقمي يرفع مشروعك إلى المستوى التالي ؟
        </p>
        <h1 className="font-bold text-2xl"> شركة الـتمـيـز الرقمي</h1>
        <p> هي وجهتك المثالية لتحقيق النجاح الرقمي لأعمالك!</p>
        <Button>إحجز إستشارتك الأن </Button>
      </div>
      <div>
        <Image src={"/heroimage.png"} width={700} height={700}></Image>
      </div>
      <div className="absolute top-30 md:top-20 left-0 ">
        <Image src={"/Polygonleaft.png"} width={100} height={100}></Image>
      </div>
      <div className="absolute top-60 md:top-50 right-0 ">
        <Image src={"/Polygonright.png"} width={100} height={100}></Image>
      </div>
    </section>
  );
};

export default Hero;
