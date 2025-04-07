import React from "react";
import EmblaCarousel from "./embla/EmblaCarousel";

// EmblaCarousel options
const OPTIONS = { loop: true };
const SLIDES = [
  {
    name: "أكرم عليان",
    image: "/t1.jpg",
    testimonial:
      "  استخدمنا خدمات برمجة مواقع الويب من موقعكم، وكانت النتائج مذهلة! أصبح لدينا موقع عظيم جدا و نحن سعداء بتعاملنا معكم و بشدة.",
  },
  {
    name: " محمد أحمد",
    image: "/t2.jpg",
    testimonial:
      "الخدمة كانت احترافية بكل المقاييس! قام الفريق بتطوير موقع إلكتروني متكامل لشركتي، وكانت تجربة سلسة، الدعم الفني ممتاز والاستجابة سريعة",
  },
  {
    name: "سالم عامر ",
    image: "/t3.jpg",
    testimonial:
      "حصلت على استشارة برمجية متميزة ساعدتني في تحديد أفضل الحلول الرقمية لمشروعي. الفريق لديه خبرة كبيرة ويوجهك دائمًا للطريق الصحيح.",
  },
];

const Testimonials = () => {
  return (
    <section className="py-8 md:py-16 space-y-16 ">
      <h2 className="font-bold text-4xl text-center text-fontPrimary">
        أراء العملاء{" "}
      </h2>
      <EmblaCarousel slides={SLIDES} options={OPTIONS} />
    </section>
  );
};

export default Testimonials;
