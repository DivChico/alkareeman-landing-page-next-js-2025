import React from "react";
import EmblaCarousel from "./embla/EmblaCarousel";
import { useTranslations } from "next-intl";

// EmblaCarousel options
const OPTIONS = { loop: true };
const SLIDES = [
  {
    name: " عز للمفروشات",
    image: "/t1.jpg",
    testimonial: "  يسلم اديكم تصاميمكم حلوة",
  },
  {
    name: "  HISECENTS",
    image: "/t2.jpg",
    testimonial: "للامانه ومن تجربتي مع كثير مصميمن من قبل , شغلكم كثير روعة",
  },
  {
    name: "سالم عامر ",
    image: "/t3.jpg",
    testimonial: "ما شاء الله الشغل معاكم ممتاز",
  },
];

const Testimonials = () => {
  const t = useTranslations("testimonials");
  return (
    <section className="  md:my-16 space-y-16 md:px-4 ">
      <h2 className="font-bold text-4xl text-center text-fontPrimary">
        {t("title")}{" "}
      </h2>
      <EmblaCarousel slides={SLIDES} options={OPTIONS} />
    </section>
  );
};

export default Testimonials;
