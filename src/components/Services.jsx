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
    <section className="py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-8 space-y-8 sm:space-y-12 md:space-y-16">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="font-bold text-2xl sm:text-3xl md:text-4xl text-fontPrimary mb-4">
          {t("title")}
        </h2>
        <div className="w-20 h-1 bg-fontPrimary mx-auto rounded-full"></div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 sm:gap-8 md:gap-8 lg:gap-10 justify-items-center max-w-7xl mx-auto">
        {SERVICES.map((service, index) => (
          <ServiceCard
            text={service.text}
            key={index}
            image={service.image}
            backText={service.backText}
          />
        ))}
      </div>

      <div className="text-center mt-8">
        <Button className="mx-auto px-8 py-3 text-base sm:text-lg">
          {t("buttonText")}
        </Button>
      </div>
    </section>
  );
};

export default Services;
