import Image from "next/image";
import React from "react";

const ContactUs = () => {
  return (
    <section className="my-8 md:my-16 space-y-16 flex flex-col md:flex-row-reverse items-center justify-center gap-4 md:gap-16">
      <div className="max-w-md  ">
        <div className=" space-y-8 text-right">
          {" "}
          <h2 className=" font-bold text-fontPrimary  text-4xl">تواصل معنا</h2>
          <div className="space-y-2">
            <p className="   leading-10 text-white ">
              هل لديك فكرة ترغب في تطويرها؟ هل تحتاج إلى مساعدة في تسويق مشروعك؟
              نحن هنا لمساعدتك!
            </p>{" "}
            <p className="   leading-10 text-white ">
              اتصل بنا اليوم لتحصل على استشارة مجانية وابدأ رحلتك نحو النجاح
              الرقمي.{" "}
            </p>
          </div>
          <a
            className=" self-center group rounded-tl-3xl  rounded-br-3xl relative inline-flex items-center overflow-hidden  font-bold bg-fontPrimary px-8 py-3 text-white focus:ring-3 focus:outline-hidden"
            href="/contact-us"
          >
            <span className="absolute -end-full transition-all group-hover:end-4">
              <svg
                className="size-5  rtl:rotate-180"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </span>

            <span className="text-lg font-medium transition-all group-hover:me-4 spapce-x-2">
              {" "}
              <span className="text-whites"> تواصل معنا الأن </span>
              <span className="text-2xl">📩</span>
            </span>
          </a>
        </div>
      </div>
      <div className="flex items-center justify-center ">
        <Image src={"/contactimage.png"} width={700} height={700} />
      </div>
    </section>
  );
};

export default ContactUs;
