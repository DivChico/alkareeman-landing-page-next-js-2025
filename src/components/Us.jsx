import Image from "next/image";
import React from "react";

const Us = () => {
  return (
    <section
      id="about-us"
      className="py-16 flex flex-col md:flex-row-reverse items-center justify-center gap-4 md:gap-16 "
    >
      <div className="max-w-md space-y-4 text-right">
        {" "}
        <h2 className=" font-bold text-fontPrimary text-4xl">نحن</h2>
        <p className="   leading-10 ">
          التميز الرقمي، نحن فريق من المحترفين في مجالات التسويق الرقمي،
          التصميم، وتطوير المشاريع. نعمل مع عملائنا بشكل شراكة لتحقيق أهدافهم
          التجارية وتحويل رؤاهم إلى واقع. نحن نسعى لتقديم حلول مبتكرة ومتكاملة
          تساعدك على النجاح في عالم الأعمال الرقمي المتسارع،
        </p>
      </div>

      <div className="relative w-[300px] md:w-[600px]">
        <Image
          src="/usImage.jpg"
          className="rounded-2xl"
          width={600}
          height={600}
          alt="Us Image"
        />
        <div className="absolute top-0 left-0 w-full h-full rounded-2xl border-8 border-fontPrimary transform skew-x-[-8deg] skew-y-[8deg] -z-10"></div>
      </div>
    </section>
  );
};

export default Us;
