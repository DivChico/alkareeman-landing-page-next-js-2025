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
    <section className=" relative flex items-center justify-center flex-col lg:flex-row-reverse my-4 gap-4 md:gap-16 tracking-wide">
      {/* apply form */}
      <div className=" space-y-4 py-4">
        <h1 className=" font-bold text-fontPrimary text-2xl">
          قدم على وظيفة أحلامك الأن!
        </h1>
        <ApplyJobForm action={action} />
      </div>

      <div className="relative hidden md:flex w-[300px] md:w-[600px]">
        <Image
          src={"/applyimage.jpg"}
          className="rounded-tr-[150px] rounded-b-[150px] "
          width={600}
          height={600}
          alt="Us Image"
        />

        <div className="absolute top-0 left-0 w-full h-full rounded-tr-[150px] rounded-b-[150px] border-8 border-fontPrimary transform translate-y-[13px] -translate-x-[13px] -z-10"></div>
        <div className="absolute w-[92px] h-[116px] -top-5 left-10 bg-fontPrimary rounded-tr-[15px] rounded-b-[15px]"></div>
      </div>
      <div className="hidden xl:flex  absolute top-0 left-0">
        <Image
          alt="grapihcapply"
          src={"/grapihcapply.png"}
          width={100}
          height={100}
        />
      </div>
      <div className="hidden xl:flex   absolute bottom-15 right-0  ">
        <Image
          alt="grapihcapply"
          src={"/graphic2.png"}
          width={100}
          height={100}
        />
      </div>
    </section>
  );
};

export default page;
