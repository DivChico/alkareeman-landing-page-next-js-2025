"use client";

import React from "react";
import FeatureCard from "./FeatureCard";
import useEmblaCarousel from "embla-carousel-react";
import { useDotButton } from "./embla/EmblaCarouselDotButton";
import {
  NextButton,
  PrevButton,
  usePrevNextButtons,
} from "./embla/EmblaCarouselArrowButtons";
import { useTranslations } from "next-intl";
const options = { loop: true };

const Features = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  const t = useTranslations("features");

  return (
    <section className="  ">
      <div className=" hidden gap-8 md:flex space-x-6 ">
        <FeatureCard image={"/support.png"} text={t("support")} />
        <FeatureCard image={"/tech.png"} text={t("technology")} />{" "}
        <FeatureCard image={"/clock.png"} text={t("delivery")} />
      </div>
      <div className="embla relative block md:hidden">
        <div className="embla__viewport " ref={emblaRef}>
          <div className="embla__container space-x-6 ">
            <FeatureCard
              image={"/support.png"}
              text={
                "دعم فني مستمر – نوفر دعمًا فنيًا مستمرًا لضمان عمل مشاريعك بسلاسة وتقديم تحديثات وتحسينات عند الحاجة."
              }
            />
            <FeatureCard
              image={"/tech.png"}
              text={
                "أحدث التقنيات – نعتمد على أحدث الأدوات والتقنيات لضمان سرعة الأداء، الأمان، والتكامل السلس مع أنظمتك."
              }
            />{" "}
            <FeatureCard
              image={"/clock.png"}
              text={
                "التسليم في الوقت المحدد – نلتزم بموعد التسليم ونحرص على تقديم مشاريع عالية الجودة وفق الزمن المتفق عليه."
              }
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
