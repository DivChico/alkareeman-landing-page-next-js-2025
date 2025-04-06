import React from "react";
import FeatureCard from "./FeatureCard";

const Features = () => {
  return (
    <section className="py-16 flex flex-col md:flex-row-reverse gap-8 items-center justify-center ">
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
    </section>
  );
};

export default Features;
