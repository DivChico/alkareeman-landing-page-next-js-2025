import { useTranslations } from "next-intl";
import React from "react";

const Faq = () => {
  const t = useTranslations("faq");
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

  return (
    <section className="  relative   py-8 bg-white w-full  my-8 rounded-tl-[50px] md:rounded-tl-[200px] rounded-br-[50px]  md:rounded-br-[200px] space-y-8">
      <h2 className=" font-bold text-fontPrimary text-3xl md:text-4xl gap-2">
        <span>(FAQ) </span>

        <span> {t("title")} </span>
      </h2>
      <div className="text-black px-4 md:px-20  w-full  flex flex-col items-end  space-y-4 ">
        {FaqData.map((item, index) => (
          <div
            key={index}
            className={`   ${
              t("title") === "Frequently Asked Questions"
                ? "text-right"
                : "text-right"
            } space-y-4 max-w-5xl`}
          >
            <h3 className="  text-md md:text-xl ">{item.question}</h3>
            <p className="  text-xs md:text-md text-black/75 tracking-wide hover:text-black/75  transition-all duration-100 ease-in-out ">
              {item.answer}
            </p>
          </div>
        ))}
      </div>
      <div className=" hidden md:block w-1/12 h-5/6 rounded-tl-[50px] md:rounded-tl-[200px] rounded-br-[50px]  md:rounded-br-[200px] bg-bgTertiary absolute top-1/2 left-20 -translate-x-1/2 -translate-y-1/2 "></div>
    </section>
  );
};

export default Faq;
