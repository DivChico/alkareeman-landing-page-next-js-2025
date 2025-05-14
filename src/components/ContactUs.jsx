import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";

const ContactUs = () => {
  const t = useTranslations("contactUs");
  const isEnglish = t("title") === "Contact Us";

  return (
    <section
      className={`-my-8 md:my-16  px-4 sm:px-6 md:px-8 space-y-8 md:space-y-0 flex flex-col ${
        isEnglish ? "md:flex-row" : "md:flex-row-reverse"
      } items-center justify-center gap-6 md:gap-12 lg:gap-16`}
    >
      <div className="w-full max-w-[90%] sm:max-w-md">
        <div
          className={`space-y-4 sm:space-y-6 md:space-y-8 ${
            isEnglish ? "text-left" : "text-right"
          }`}
        >
          <h2 className="font-bold text-fontPrimary text-2xl sm:text-3xl md:text-4xl">
            {t("title")}
          </h2>
          <div className="space-y-2 sm:space-y-3">
            <p className="leading-6 sm:leading-7 md:leading-8 text-white text-sm sm:text-base md:text-lg">
              {t("description1")}
            </p>
            <p className="leading-6 sm:leading-7 md:leading-8 text-white text-sm sm:text-base md:text-lg">
              {t("description2")}
            </p>
          </div>
          <a
            className="inline-block self-center group rounded-tl-3xl rounded-br-3xl relative overflow-hidden font-bold bg-fontPrimary px-6 sm:px-8 py-2 sm:py-3 text-white hover:shadow-lg transition-all duration-300 focus:ring-3 focus:outline-hidden"
            href="/contact-us"
          >
            <span className="absolute -end-full transition-all group-hover:end-4">
              <svg
                className="size-4 sm:size-5 rtl:rotate-180"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </span>

            <span className="text-base sm:text-lg font-medium transition-all group-hover:me-4 flex items-center gap-2">
              <span className="text-white"> {t("buttonText")} </span>
              <span className="text-xl sm:text-2xl">📩</span>
            </span>
          </a>
        </div>
      </div>
      <div className="w-full max-w-[90%] sm:max-w-[80%] md:max-w-[50%] lg:max-w-[600px]">
        <Image
          src="/contactimage.png"
          width={700}
          height={700}
          alt="Contact us illustration"
          className="w-full h-auto object-contain"
          sizes="(max-width: 640px) 90vw, (max-width: 768px) 80vw, (max-width: 1024px) 50vw, 600px"
        />
      </div>
    </section>
  );
};

export default ContactUs;
