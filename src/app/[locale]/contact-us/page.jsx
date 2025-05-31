import Button from "@/components/Button";
import ContactUsForm from "@/components/ContactUsForm";
import Image from "next/image";
import React from "react";
export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "ar" }];
}
const page = () => {
  const action = async (prevState, formData) => {
    "use server";

    const { email, name, massage } = formData;
    console.log(formData);
  };

  return (
    <section className="relative space-y-8 sm:space-y-12 py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-8 tracking-wide overflow-x-hidden">
      {/* Contact Information */}
      <div className="space-y-6 sm:space-y-8 max-w-5xl mx-auto">
        <h1 className="font-semibold text-fontPrimary text-2xl sm:text-3xl md:text-4xl text-center sm:text-right">
          كيف يمكنك الوصول إلينا؟
        </h1>

        <div className="lg:flex hidden gap-4 sm:gap-6 md:gap-8 justify-center items-center flex-col md:flex-row-reverse">
          <div className="w-full md:w-auto px-4 py-3 sm:py-4 space-x-2 bg-white text-black flex items-center justify-center rounded-tl-[50px] sm:rounded-tl-[100px] md:rounded-tl-[200px] rounded-br-[50px] sm:rounded-br-[100px] md:rounded-br-[200px] shadow-sm hover:shadow-md transition-shadow duration-300">
            <span className="text-sm sm:text-base">
              قلقيلية - عزون - شارع كفر ثلث - مقابل البريد
            </span>
            <span className="text-fontPrimary font-medium">
              :المكتب الرئيسي
            </span>
          </div>

          <div className="w-full md:w-auto px-4 py-3 sm:py-4 space-x-2 bg-white text-black flex items-center justify-center rounded-tl-[50px] sm:rounded-tl-[100px] md:rounded-tl-[200px] rounded-br-[50px] sm:rounded-br-[100px] md:rounded-br-[200px] shadow-sm hover:shadow-md transition-shadow duration-300">
            <span className="text-sm sm:text-base">0594919928</span>
            <span className="text-fontPrimary font-medium">:الهاتف </span>
          </div>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="space-y-6 sm:space-y-8 flex items-center justify-center flex-col max-w-5xl mx-auto">
        <h2 className="flex flex-col sm:flex-row items-center justify-center gap-2 text-center">
          <span className="order-2 sm:order-1 text-fontPrimary font-bold text-sm sm:text-base">
            املأ النموذج أدناه وسنتواصل معك خلال 24 ساعة!
          </span>
          <span className="order-1 sm:order-2 text-base sm:text-lg">
            💡 هل لديك مشروع ؟
          </span>
        </h2>

        <div className="overflow-hidden md:overflow-visible w-full relative bg-white pt-4 md:w-3xl flex flex-col-reverse md:flex-row justify-center items-center gap-6 md:gap-8 rounded-2xl shadow-md">
          <div className="w-full md:w-2/5 p-4 flex justify-center">
            <Image
              src="/askservice.jpg"
              width={300}
              height={300}
              alt="Contact us illustration"
              className="w-full max-w-[250px] sm:max-w-[300px] h-auto object-contain rounded-lg"
            />
          </div>

          <div className="w-full md:w-3/5 space-y-4 p-4 sm:p-6">
            <h2 className="font-bold text-fontPrimary text-xl sm:text-2xl text-center md:text-right">
              تواصل معنا
            </h2>
            <ContactUsForm action={action} />
          </div>

          <div className="absolute top-0 left-0 w-full h-full rounded-2xl border-4 sm:border-6 md:border-8 border-fontPrimary transform -rotate-2 -z-10"></div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="hidden md:block absolute top-80 left-0 opacity-70 animate-pulse">
        <Image
          src="/Polygonleaft.png"
          width={100}
          height={100}
          alt="Decorative element"
        />
      </div>

      <div className="hidden md:block absolute top-20 right-0 opacity-70 animate-pulse">
        <Image
          src="/Polygonright.png"
          width={100}
          height={100}
          alt="Decorative element"
        />
      </div>
    </section>
  );
};

export default page;
