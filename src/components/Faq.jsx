import React from "react";

const FaqData = [
  {
    question: "ما هي الخدمات التي تقدمونها؟",
    answer:
      "نقدم العديد من الخدمات الالكترونية البرمجية والتي تتمثل في : إدارة الصفحات ، تصميم الجرافيك ، تصوير البودكاست ، تصميم UI/UX ، كتابة المحتوى ، بناء الخطط التسويقية ، إدارة الحملات الاعلانية ، بناء المواقع والمتاجر الإلكترونية",
  },
  {
    question: "ما المدة التي تستغرقها عملية التطوير؟",
    answer:
      "تعتمد مدة تطوير المشروع على حجمه وتعقيده. عادةً، تتراوح المشاريع بين 2 إلى 8 أسابيع، لكننا نقدم جداول زمنية مخصصة لكل عميل حسب احتياجاته.",
  },
  {
    question: "هل يمكنني طلب تعديل بعد تسليم المشروع؟",
    answer:
      "نعم، نقدم فترة دعم فني بعد التسليم تشمل التعديلات البسيطة. يمكن أيضًا طلب تعديلات إضافية مقابل رسوم إضافية حسب طبيعة التغيير المطلوب.",
  },
  {
    question: "هل تعملون مع الشركات الصغيرة والأفراد؟",
    answer:
      "نعم! نقدم حلولًا تناسب جميع أنواع الأعمال، بدءًا من الأفراد والشركات الناشئة وحتى المؤسسات الكبيرة.",
  },
];
const Faq = () => {
  return (
    <section className=" relative py-8 md:py-24 bg-white w-full  my-8 rounded-tl-[50px] md:rounded-tl-[200px] rounded-br-[50px]  md:rounded-br-[200px] space-y-8">
      <h2 className=" font-bold text-fontPrimary text-3xl md:text-4xl gap-2">
        <span>(FAQ) </span>

        <span>الأسئلة الشائعة </span>
      </h2>
      <div className="text-black px-4 md:px-20 w-full  flex flex-col items-end  space-y-8">
        {FaqData.map((item, index) => (
          <div key={index} className="text-right space-y-4 max-w-5xl">
            <h3 className="  text-lg md:text-2xl ">{item.question}</h3>
            <p className="  text-md md:text-lg text-black/50 hover:text-black/75  transition-all duration-100 ease-in-out ">
              {item.answer}
            </p>
          </div>
        ))}
      </div>
      <div className=" hidden md:block w-1/12 h-5/6 rounded-tl-[180px] rounded-br-[200px] bg-bgTertiary absolute top-1/2 left-10 lg:left-20 -translate-x-1/2 -translate-y-1/2 "></div>
    </section>
  );
};

export default Faq;
