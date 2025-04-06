import Image from "next/image";
import React from "react";

const Us = () => {
  return (
    <section className="py-16 flex flex-row-reverse items-center justify-center gap-8 ">
      <div className="max-w-md space-y-4 text-right">
        {" "}
        <h2 className=" font-bold text-fontPrimary text-4xl">نحن</h2>
        <p className="   leading-10 ">
          ني التميز الرقمي، نحن فريق من المحترفين في مجالات التسويق الرقمي،
          التصميم، وتطوير المشاريع. نعمل مع عملائنا بشكل شراكة لتحقيق أهدافهم
          التجارية وتحويل رؤاهم إلى واقع. نحن نسعى لتقديم حلول مبتكرة ومتكاملة
          تساعدك على النجاح في عالم الأعمال الرقمي المتسارع،
        </p>
      </div>
      <div className=" relative">
        <Image
          src={"/usImage.jpg"}
          className=" rounded-2xl"
          width={600}
          height={600}
        ></Image>
        <div className=" h-[600px] w-[600px] rounded-2xl absolute top-3 left-0 -z-1 border-fontPrimary border-8 transform skew-x-[-8deg] skew-y-[8deg] "></div>
      </div>
    </section>
  );
};

export default Us;
