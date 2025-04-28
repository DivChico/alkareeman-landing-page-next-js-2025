import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";

const Us = () => {
  const t = useTranslations("about");

  return (
    <section
      id="about-us"
      className={`py-16 flex flex-col ${
        t("title") === "Who We Are" ? "md:flex-row" : "md:flex-row-reverse"
      } items-center justify-center gap-4 md:gap-24  `}
    >
      <div
        className={`max-w-md space-y-4 text-center mb-4 ${
          t("title") === "Who We Are" ? "md:text-left" : "md:text-right"
        } `}
      >
        {" "}
        <h2 className=" font-bold text-fontPrimary text-4xl"> {t("title")}</h2>
        <p className="   leading-10 text-whites text-2xl ">
          {t("description")}
        </p>
      </div>

      <div className="relative w-[300px] md:w-[500px]">
        <Image
          src="/usImage.jpg"
          className="rounded-2xl"
          width={600}
          height={600}
          alt="Us Image"
        />
        <div className="absolute top-0 left-0 w-full h-full rounded-2xl border-8 border-fontPrimary transform skew-x-[-8deg] skew-y-[8deg] -z-10"></div>
      </div>
    </section>
  );
};

export default Us;
