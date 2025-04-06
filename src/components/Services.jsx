import React from "react";
import ServiceCard from "./ServiceCard";
import Button from "./Button";

const SERVICES = [
  {
    text: "ادارة الصفحات",
    image: "/s1.png",
    backText:
      "نساعدك على بناء حضور قوي وفعال على منصات التواصل الاجتماعي، من خلال إدارة الصفحات والتفاعل مع جمهورك بطريقة احترافية",
  },
  {
    text: "بناء خطط تسويقية شاملة",
    image: "/s2.png",
    backText:
      "نساعدك على وضع خطط تسويقية فعالة تساهم في الوصول إلى جمهورك المستهدف وتحقيق أهدافك التجارية.",
  },
  {
    text: "إدارة الحملات الإعلانية",
    image: "/s3.png",
    backText:
      "نقدم لك خدمات إدارة حملات إعلانية على منصات متعددة لزيادة التفاعل وتحقيق أفضل النتائج.",
  },
  {
    text: "تصميم UI/UX",
    image: "/s4.png",
    backText: "نصمم لك واجهات استخدام مريحة وجذابة تضمن أفضل تجربة للمستخدم.",
  },
  {
    text: "بناء المتاجر والمواقع الإلكترونية",
    image: "/s5.png",
    backText:
      "نساعدك في بناء متجر أو موقع إلكتروني يتناسب مع احتياجاتك التجارية ويوفر تجربة سلسة للمستخدم.",
  },
  {
    text: "تصميم الجرافيك",
    image: "/s6.png",
    backText: "نقدم لك تصاميم جرافيك مبتكرة لتمثيل علامتك التجارية بشكل مميز.",
  },
  {
    text: "كتابة المحتوى",
    image: "/s7.png",
    backText: "نكتب محتوى احترافي يعكس رؤيتك ويساهم في جذب جمهورك المستهدف.",
  },
  {
    text: "دورات تدريبية في تطوير المشاريع وريادة الأعمال",
    image: "/s8.png",
    backText:
      "نقدم دورات تدريبية متخصصة في تطوير المشاريع الريادية وتنمية مهارات ريادة الأعمال.",
  },
  {
    text: "تصوير البودكاست",
    image: "/s9.png",
    backText:
      "نقدم خدمة تصوير وتنفيذ البودكاست بشكل احترافي مع جودة صوت وصورة عالية.",
  },
  {
    text: "إدارة المبيعات",
    image: "/s10.png",
    backText:
      "نساعدك في تحسين إدارة المبيعات وتقديم استراتيجيات فعالة لزيادة الإيرادات.",
  },
];

const Services = () => {
  return (
    <section className="py-16   space-y-16">
      <h2 className="font-bold text-4xl text-center text-fontPrimary">
        الخدمات التي نقدمها
      </h2>
      <div className="flex items-center justify-center flex-wrap gap-16  ju">
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
      <Button>اطلب خدمتك الأن</Button>
    </section>
  );
};

export default Services;
