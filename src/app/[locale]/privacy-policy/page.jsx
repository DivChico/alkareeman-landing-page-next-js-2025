import Image from "next/image";
import React from "react";

const policies = [
  {
    title: "الدفع مقدماً وكامل المبلغ",
    desc: "من أجل بدء أي خدمة، يُطلب من العميل دفع المبلغ كاملًا مقدمًا لضمان التزام الطرفين. يُعتبر الدفع المسبق شرطًا أساسيًا لبدء تنفيذ الخدمة.",
  },
  {
    title: "عند إنهاء الخدمة من قبل الطرف الأول (العميل)",
    desc: "في حال قرر العميل إنهاء الخدمة بعد البدء بها، فإن المبلغ المدفوع لا يُرد تحت أي ظرف. يتحمل العميل المسؤولية الكاملة ولا يحق له طلب استرداد المبلغ.",
  },
  {
    title: "عند إنهاء الخدمة من قبل الطرف الثاني (الشركة)",
    desc: "في حال قررت الشركة إنهاء الخدمة، يتم إعادة المبلغ للعميل بعد خصم ما تم إنجازه. وإذا لم يتم إنجاز أي عمل، يتم إرجاع المبلغ كاملًا.",
  },
  {
    title: "ساعات العمل المعتمدة",
    desc: "ساعات العمل الرسمية من 9:30 صباحًا إلى 5:30 مساءً من الأحد إلى الخميس. يتم إنجاز وتسليم الأعمال فقط خلال هذه الساعات، وقد يتأخر الرد أو التسليم خارجها.",
  },
  {
    title: "تعديل الشروط",
    desc: "تحتفظ التميز الرقمي بالحق في تعديل الشروط والسياسات في أي وقت حسب الحاجة، مع إشعار العملاء عبر البريد الإلكتروني أو قنوات التواصل الرسمية.",
  },
  {
    title: "سياسة الخصوصية وحماية البيانات",
    desc: "نلتزم بحماية خصوصية بيانات عملائنا. جميع المعلومات تعتبر سرية ولن تُشارك مع أطراف ثالثة دون موافقة العميل، إلا إذا تطلب القانون ذلك.",
  },
  {
    title: "حقوق الملكية الفكرية",
    desc: "يحتفظ العميل بحقوق المحتوى المُقدّم. تحتفظ التميز الرقمي بحق استخدام التصاميم في التسويق. تنتقل ملكية الأعمال المنجزة للعميل بعد تسديد المبلغ بالكامل.",
  },
  {
    title: "القبولات والتعليقات على العمل",
    desc: "بعد التسليم، يُمنح العميل فترة من ساعة إلى ساعتين لتقديم الملاحظات. بعدها يُعتبر العمل مكتملًا. التعديلات الجوهرية بعد هذه الفترة قد تتطلب رسومًا إضافية.",
  },
  {
    title: "التعديلات على هذه السياسات",
    desc: "نحتفظ بالحق في تعديل الشروط والسياسات في أي وقت حسب الحاجة، مع إعلام العملاء بأي تعديلات من خلال البريد الإلكتروني أو وسائل الاتصال المتاحة.",
  },
];
export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "ar" }];
}

const page = () => {
  return (
    <section className="space-y-8 sm:space-y-12 md:space-y-16 py-6 sm:py-8 md:py-12 px-4 sm:px-6 md:px-8 flex flex-col justify-center items-center max-w-7xl mx-auto">
      {/* Header section */}
      <div className="max-w-4xl w-full">
        <h1 className="font-bold text-fontPrimary text-xl sm:text-2xl md:text-3xl text-center xl:text-right mb-4 sm:mb-6">
          سياساتنا وشروطنا
        </h1>
        <p className="leading-6 sm:leading-7 md:leading-8 text-sm sm:text-base md:text-lg text-white/90">
          نحن في التميز الرقمي نحرص على تقديم أفضل الخدمات لعملائنا الكرام.
          لضمان سير العمل بكل شفافية ووضوح، نود أن نوضح بعض السياسات والشروط
          التي تحكم التعاملات بيننا وبين عملائنا. يُرجى قراءة هذه الشروط بعناية
          قبل البدء في أي تعامل.
        </p>
      </div>

      {/* Policies section */}
      <div className="relative bg-white rounded-3xl sm:rounded-4xl w-full max-w-5xl py-8 px-4 sm:px-6 md:px-8 shadow-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 relative z-10">
          {policies.map((policy, index) => (
            <div
              key={index}
              className="text-right space-y-2 bg-white/80 backdrop-blur-sm p-4 rounded-lg hover:shadow-md transition-all duration-300"
            >
              <h2 className="text-bgTertiary font-bold text-base sm:text-lg">
                {policy.title}
              </h2>
              <p className="text-sm sm:text-base text-black/75 hover:text-black transition-colors duration-300">
                {policy.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Background decorative elements */}
        <div className="absolute bg-fontPrimary rounded-[30px] sm:rounded-[50px] rounded-tr-[50px] sm:rounded-tr-[100px] lg:rounded-tr-[200px] -z-10 -top-6 sm:-top-8 left-0 w-8/12 h-[103%] sm:h-[105%] lg:h-[110%]"></div>

        <div className="hidden md:block absolute top-80 -left-10 opacity-70 animate-pulse">
          <Image
            src="/Polygonleaft.png"
            width={100}
            height={100}
            alt="Decorative element"
          />
        </div>

        <div className="hidden md:block absolute top-20 -right-10 opacity-70 animate-pulse">
          <Image
            src="/Polygonright.png"
            width={100}
            height={100}
            alt="Decorative element"
          />
        </div>
      </div>

      {/* Footer section */}
      <div className="max-w-4xl text-center">
        <h1 className="font-bold text-fontPrimary text-xl sm:text-2xl md:text-3xl mb-4">
          شكرًا لاختيارك التمـيـز الرقمي!
        </h1>
        <p className="leading-6 sm:leading-7 md:leading-8 text-sm sm:text-base md:text-lg text-white/90 max-w-3xl mx-auto">
          نحن هنا لضمان تقديم أفضل الخدمات لك. إذا كانت لديك أي استفسارات حول
          سياساتنا أو شروطنا، لا تتردد في الاتصال بنا
        </p>
      </div>
    </section>
  );
};

export default page;
