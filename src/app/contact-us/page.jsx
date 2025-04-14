import Button from "@/components/Button";
import ContactUsForm from "@/components/ContactUsForm";
import Image from "next/image";
import React from "react";

const page = () => {
  const action = async (prevState, formData) => {
    "use server";

    const { email, name, massage } = formData;
    console.log(formData);
  };
  return (
    <section className=" relative  space-y-4 py-8 tracking-wide ">
      <div className="  space-y-8">
        <h1 className=" font-semibold text-fontPrimary text-2xl">
          كيف يمكنك الوصول إلينا؟{" "}
        </h1>
        <div className=" flex gap-8 justify-center items-center flex-col md:flex-row-reverse">
          <div className="  px-4 py-4 space-x-2 bg-white text-black  flex  items-center justify-center rounded-tl-[200px] rounded-br-[200px] ">
            <span>قلقيلية - عزون - شارع كفر ثلث - مقابل البريد</span>
            <span className=" text-fontPrimary ">:المكتب الرئيسي</span>
          </div>
          <div className=" px-4 py-4 space-x-2 bg-white text-black  flex  items-center justify-center rounded-tl-[200px] rounded-br-[200px] ">
            <span> 0594919928</span>
            <span className=" text-fontPrimary">:الهاتف </span>
          </div>
        </div>
      </div>
      <div className=" space-y-8 flex items-center justify-center flex-col">
        <h2 className="flex  items-center justify-center">
          <span className=" text-fontPrimary font-bold text-sm ">
            املأ النموذج أدناه وسنتواصل معك خلال 24 ساعة!
          </span>
          <span>💡 هل لديك مشروع ؟</span>
        </h2>
        <div className=" relative bg-white pt-4  w-3xl flex flex-col-reverse md:flex-row justify-center items-center gap-8 rounded-2xl">
          <div>
            <Image src={"/askservice.jpg"} width={300} height={300} />
          </div>
          <div className=" space-y-4">
            <h2 className=" font-bold text-fontPrimary text-2xl text-center md:text-right">
              تواصل معنا{" "}
            </h2>
            {/* <div className=" flex items-center gap-2 flex-col ">
              <input
                type="text"
                placeholder="الاسم رباعي"
                id="full-name"
                className="mt-0.5  min-w-xs  md:min-w-xs rounded-4xl  bg-bgSecondary/10 border border-bgSecondary text-black/80 text-right py-2 px-4 active:text-black    shadow-sm sm:text-sm"
              />
              <input
                type="email"
                placeholder="البريد الالكتروني "
                id="full-name"
                className="mt-0.5  min-w-xs  md:min-w-xs rounded-4xl  bg-bgSecondary/10 border border-bgSecondary text-black/80 text-right py-2 px-4 active:text-black    shadow-sm sm:text-sm"
              />
              <input
                type="text"
                placeholder=" الرسالة المراد إرسالها لنا "
                id="full-name"
                className="mt-0.5  min-w-xs  md:min-w-xs rounded-4xl  bg-bgSecondary/10 border border-bgSecondary text-black/80 text-right py-2 px-4 active:text-black    shadow-sm sm:text-sm"
              />
              <Button>إرسال الرسالة</Button>
            </div> */}
            <ContactUsForm action={action} />
          </div>
          <div className="absolute top-0 left-0 w-full h-full rounded-2xl border-8 border-fontPrimary transform  -rotate-2 -z-10"></div>
        </div>
      </div>
      <div className=" hidden md:flex absolute top-80  left-0 ">
        <Image src={"/Polygonleaft.png"} width={100} height={100}></Image>
      </div>
      <div className="hidden md:flex absolute top-20  right-0 ">
        <Image src={"/Polygonright.png"} width={100} height={100}></Image>
      </div>
    </section>
  );
};

export default page;
