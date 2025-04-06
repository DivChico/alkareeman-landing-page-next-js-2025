import React from "react";
import EmblaCarousel from "./embla/EmblaCarousel";

// EmblaCarousel options
const OPTIONS = { loop: true };
const SLIDE_COUNT = 5;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());
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
