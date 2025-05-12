"use client";
import Image from "next/image";
import React, { useRef } from "react";
import Button from "./Button";
import { motion, useScroll, useTransform } from "framer-motion";
import { useTranslations } from "next-intl";

const Hero = ({ locale }) => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start end", "end start"],
  });
  const transulateY = useTransform(scrollYProgress, [0, 1], [300, -300]);
  const t = useTranslations("hero");

  return (
    <section
      ref={heroRef}
      className={`relative flex flex-col md:flex-row-reverse items-center justify-center gap-4 sm:gap-6 md:gap-8 py-4 sm:py-8 md:py-16 px-4 sm:px-6 md:px-8 lg:px-12 w-full overflow-hidden`}
    >
      <div className="max-w-[90%] sm:max-w-sm md:max-w-md lg:max-w-lg space-y-4 sm:space-y-6 md:space-y-8 z-10">
        <p className="font-semibold text-xl sm:text-2xl md:text-3xl text-fontPrimary">{t("title")}</p>
        <h1 className="font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white">{t("name")}</h1>
        <p className="text-sm sm:text-base md:text-lg text-white">{t("description")}</p>
        <div className="pt-2">
          <Button>{t("button")}</Button>
        </div>
      </div>
      
      <div className="w-full max-w-[90%] sm:max-w-[80%] md:max-w-[50%] lg:max-w-[700px] mt-6 md:mt-0">
        <Image 
          src="/heroimage.png" 
          width={700} 
          height={700} 
          alt={t("imageAlt") || "Al Kareeman hero image"}
          priority
          className="w-full h-auto object-contain"
          sizes="(max-width: 640px) 90vw, (max-width: 768px) 80vw, (max-width: 1024px) 50vw, 700px"
        />
      </div>
      
      <motion.div
        style={{
          translateY: transulateY,
        }}
        className="hidden md:block absolute top-30 left-0 z-0 opacity-70"
      >
        <Image src="/Polygonleaft.png" width={100} height={100} alt="Decorative element" />
      </motion.div>
      
      <motion.div
        style={{
          translateY: transulateY,
        }}
        className="hidden md:block absolute top-60 right-0 z-0 opacity-70"
      >
        <Image src="/Polygonright.png" width={100} height={100} alt="Decorative element" />
      </motion.div>
    </section>
  );
};

export default Hero;
