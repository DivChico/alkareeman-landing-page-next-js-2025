"use client";
import Image from "next/image";
import React, { useRef } from "react";
import Button from "./Button";
import { motion, useScroll, useTransform } from "framer-motion";
import { useTranslations } from "next-intl";

const Hero = () => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start end", "end start"],
  });
  const transulateY = useTransform(scrollYProgress, [0, 1], [300, -300]);

  return (
    <section
      ref={heroRef}
      className="relative  flex flex-col md:flex-row-reverse items-center justify-center gap-8 py-4 md:py-16  "
    >
      <div className="max-w-md space-y-8">
        <p className=" font-semibold text-2xl text-fontPrimary">
          {" "}
          هل تبحث عن شريك رقمي يرفع مشروعك إلى المستوى التالي ؟
        </p>
        <h1 className="font-bold text-2xl text-white">
          {" "}
          شركة الـتمـيـز الرقمي
        </h1>
        <p className="text-white">
          {" "}
          هي وجهتك المثالية لتحقيق النجاح الرقمي لأعمالك!
        </p>
        <Button>إحجز إستشارتك الأن </Button>
      </div>
      <div>
        <Image src={"/heroimage.png"} width={700} height={700}></Image>
      </div>
      <motion.dev
        style={{
          translateY: transulateY,
        }}
        className=" hidden md:block absolute top-30  left-0 "
      >
        <Image src={"/Polygonleaft.png"} width={100} height={100}></Image>
      </motion.dev>
      <motion.dev
        style={{
          translateY: transulateY,
        }}
        className="hidden md:block absolute top-60  right-0 "
      >
        <Image src={"/Polygonright.png"} width={100} height={100}></Image>
      </motion.dev>
    </section>
  );
};

export default Hero;
