import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";

const Us = () => {
  const t = useTranslations("about");
  const isEnglish = t("title") === "Who We Are";

  return (
    <section
      id="about-us"
      className={`py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-8 flex flex-col ${
        isEnglish ? "md:flex-row" : "md:flex-row-reverse"
      } items-center justify-center gap-4 md:gap-12 lg:gap-24`}
    >
      <div
        className={`max-w-[90%] sm:max-w-md space-y-3 sm:space-y-4 text-center mb-4 ${
          isEnglish ? "md:text-left" : "md:text-right"
        }`}
      >
        <h2 className="font-bold text-fontPrimary !text-fontPrimary text-2xl sm:text-3xl md:text-4xl">
          {t("title")}
        </h2>
        <p className="leading-7 sm:leading-8 md:leading-10 text-white !text-white text-base sm:text-xl md:text-2xl">
          {t("description")}
        </p>
      </div>

      <div className="relative w-[250px] sm:w-[300px] md:w-[400px] lg:w-[500px]">
        <Image
          src="/usImage.jpg"
          className="rounded-2xl w-full h-auto"
          width={600}
          height={600}
          alt="Us Image"
          sizes="(max-width: 640px) 250px, (max-width: 768px) 300px, (max-width: 1024px) 400px, 500px"
        />
        <div className="absolute top-0 left-0 w-full h-full rounded-2xl border-4 sm:border-6 md:border-8 border-fontPrimary transform skew-x-[-8deg] skew-y-[8deg] -z-10"></div>
      </div>
    </section>
  );
};

export default Us;
