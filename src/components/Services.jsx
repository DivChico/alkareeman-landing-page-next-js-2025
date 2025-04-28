import React from "react";
import ServiceCard from "./ServiceCard";
import Button from "./Button";
import { useTranslations } from "next-intl";

const Services = () => {
  const t = useTranslations("services");

  const SERVICES = [
    {
      text: t("managePagesText"),
      image: "/s1.png",
      backText: t("managePagesBackText"),
    },
    {
      text: t("marketingPlansText"),
      image: "/s2.png",
      backText: t("marketingPlansBackText"),
    },
    {
      text: t("campaignManagementText"),
      image: "/s3.png",
      backText: t("campaignManagementBackText"),
    },
    {
      text: t("uiuxDesignText"),
      image: "/s4.png",
      backText: t("uiuxDesignBackText"),
    },
    {
      text: t("websiteDevelopmentText"),
      image: "/s5.png",
      backText: t("websiteDevelopmentBackText"),
    },
    {
      text: t("graphicDesignText"),
      image: "/s6.png",
      backText: t("graphicDesignBackText"),
    },
    {
      text: t("contentWritingText"),
      image: "/s7.png",
      backText: t("contentWritingBackText"),
    },
    {
      text: t("trainingCoursesText"),
      image: "/s8.png",
      backText: t("trainingCoursesBackText"),
    },
    {
      text: t("podcastProductionText"),
      image: "/s9.png",
      backText: t("podcastProductionBackText"),
    },
    {
      text: t("salesManagementText"),
      image: "/s10.png",
      backText: t("salesManagementBackText"),
    },
  ];

  return (
    <section className="py-16   space-y-16">
      <h2 className="font-bold text-4xl text-center text-fontPrimary">
        {t("title")}
      </h2>
      <div className=" gap-8  grid  grid-cols-2 md:flex md:items-center md:justify-center md:flex-wrap  md:gap-16 justify-items-center  justify-center">
        {SERVICES.map((service, index) => (
          <ServiceCard
            text={service.text}
            key={index}
            image={service.image}
            backText={service.backText}
            className="h-[180px] w-[370px] relative  rounded-2xl group cursor-pointer"
          />
        ))}
      </div>
      <Button> {t("buttonText")}</Button>
    </section>
  );
};

export default Services;
