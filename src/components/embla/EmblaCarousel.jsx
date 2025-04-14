"use client";

import React from "react";
import "./embla.css";
import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
} from "./EmblaCarouselArrowButtons";
import useEmblaCarousel from "embla-carousel-react";
import { DotButton, useDotButton } from "./EmblaCarouselDotButton";
import TestimonialCard from "../TestimonialCard";

const EmblaCarousel = (props) => {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  return (
    <section className="embla relative  ">
      <div className="embla__viewport " ref={emblaRef}>
        <div className="embla__container ">
          {slides.map((testimonial, index) => (
            <div className="embla__slide " key={index}>
              <TestimonialCard
                name={testimonial.name}
                image={testimonial.image}
                testimonial={testimonial.testimonial}
              />
            </div>
          ))}
        </div>
      </div>

      <div className=" absolute top-1/5 right-2   md:hidden">
        <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
      </div>
      <div className=" absolute top-1/5  left-2   md:hidden">
        <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
      </div>
      <div className="hidden  md:block absolute top-1/5 -left-20">
        <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
      </div>
      <div className="hidden md:block  absolute top-1/5 -right-20">
        <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
      </div>
    </section>
  );
};

export default EmblaCarousel;
