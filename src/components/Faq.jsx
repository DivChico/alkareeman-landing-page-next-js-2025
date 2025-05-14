"use client";
import { useTranslations } from "next-intl";
import React, { useState } from "react";

const Faq = () => {
  const t = useTranslations("faq");
  const isEnglish = t("title") === "Frequently Asked Questions";
  const [activeIndex, setActiveIndex] = useState(null);

  const FaqData = [
    {
      question: t("questionOne"),
      answer: t("answerOne"),
    },
    {
      question: t("questionTwo"),
      answer: t("answerTwo"),
    },
    {
      question: t("questionThree"),
      answer: t("answerThree"),
    },
    {
      question: t("questionFour"),
      answer: t("answerFour"),
    },
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="relative py-8  sm:py-12 md:py-16 bg-white w-full my-8 rounded-tl-[30px] sm:rounded-tl-[50px] md:rounded-tl-[200px] rounded-br-[30px] sm:rounded-br-[50px] md:rounded-br-[200px] space-y-6 sm:space-y-8 md:space-y-10 overflow-hidden">
      <div className="text-center mb-8">
        <h2 className="font-bold text-fontPrimary text-xl sm:text-3xl md:text-4xl inline-flex items-center gap-2">
          <span>(FAQ)</span>
          <span>{t("title")}</span>
        </h2>
        <div className="w-20 h-1 bg-fontPrimary mx-auto mt-4 rounded-full"></div>
      </div>

      <div className="text-black px-4 sm:px-8 md:px-20 w-full flex flex-col items-end space-y-4">
        {FaqData.map((item, index) => (
          <div
            key={index}
            className={`w-full max-w-5xl border-b border-gray-200 pb-4 ${
              isEnglish ? "text-left" : "text-right"
            }`}
          >
            <button
              onClick={() => toggleAccordion(index)}
              className="w-full flex items-center justify-between py-3 focus:outline-none group"
            >
              <h3 className="text-base sm:text-lg md:text-xl font-medium text-black">
                {item.question}
              </h3>
              <span
                className={`transition-transform duration-300 ${
                  activeIndex === index ? "rotate-180" : ""
                }`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-fontPrimary"
                >
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </span>
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                activeIndex === index
                  ? "max-h-96 opacity-100"
                  : "max-h-0 opacity-0"
              }`}
            >
              <p className="py-3 text-sm sm:text-base text-black/75 tracking-wide">
                {item.answer}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="hidden md:block w-1/12 h-5/6 rounded-tl-[50px] md:rounded-tl-[200px] rounded-br-[50px] md:rounded-br-[200px] bg-bgTertiary absolute top-1/2 left-20 -translate-x-1/2 -translate-y-1/2 opacity-70"></div>
    </section>
  );
};

export default Faq;
