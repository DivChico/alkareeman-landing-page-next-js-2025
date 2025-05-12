import ApplyJobForm from "@/components/ApplyJobForm";
import Button from "@/components/Button";
import Image from "next/image";
import React from "react";

const page = () => {
  const action = async (prevState, formData) => {
    "use server";

    const { email, name } = formData;
    console.log(formData);
  };

  return (
    <section className="relative flex items-center justify-center flex-col lg:flex-row-reverse my-4 sm:my-8 md:my-12 gap-6 md:gap-12 lg:gap-16 tracking-wide px-4 sm:px-6 md:px-8 py-6 sm:py-8 md:py-12 max-w-7xl mx-auto">
      {/* apply form */}
      <div className="w-full lg:w-1/2 space-y-4 sm:space-y-6 py-4 bg-white/5 backdrop-blur-sm rounded-lg p-4 sm:p-6 md:p-8 shadow-sm">
        <h1 className="font-bold text-fontPrimary text-2xl sm:text-3xl md:text-4xl text-center lg:text-right">
           كون جزء من فريقنا {" "}
        </h1>
        <ApplyJobForm action={action} />
      </div>

      <div className="relative hidden md:flex w-[300px] md:w-[400px] lg:w-[500px] lg:w-1/2 justify-center">
        <div className="relative">
          <Image
            src="/applyimage.jpg"
            className="rounded-tr-[80px] sm:rounded-tr-[100px] md:rounded-tr-[150px] rounded-b-[80px] sm:rounded-b-[100px] md:rounded-b-[150px] shadow-md object-cover"
            width={500}
            height={500}
            alt="Apply Job Image"
          />

          <div className="absolute top-0 left-0 w-full h-full rounded-tr-[80px] sm:rounded-tr-[100px] md:rounded-tr-[150px] rounded-b-[80px] sm:rounded-b-[100px] md:rounded-b-[150px] border-4 sm:border-6 md:border-8 border-fontPrimary transform translate-y-[13px] -translate-x-[13px] -z-10"></div>
          <div className="absolute w-[60px] h-[80px] sm:w-[80px] sm:h-[100px] md:w-[92px] md:h-[116px] -top-5 left-10 bg-fontPrimary rounded-tr-[10px] sm:rounded-tr-[12px] md:rounded-tr-[15px] rounded-b-[10px] sm:rounded-b-[12px] md:rounded-b-[15px] opacity-80"></div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="hidden xl:block -z-0 absolute top-0 left-0 opacity-70 animate-pulse">
        <Image
          alt="Graphic element"
          src="/grapihcapply.png"
          width={100}
          height={100}
        />
      </div>
      <div className="hidden xl:block -z-0 absolute bottom-15 right-0 opacity-70 animate-pulse">
        <Image
          alt="Graphic element"
          src="/graphic2.png"
          width={100}
          height={100}
        />
      </div>
    </section>
  );
};

export default page;
