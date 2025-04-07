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

const page = () => {
  return (
    <section className=" space-y-16 py-4 flex flex-col justify-center items-center">
      <div className=" ">
        <h1 className=" font-bold text-fontPrimary text-lg lg:text-2xl text-center xl:text-right ">
          سياساتنا وشروطنا {" "}
        </h1>
        <p className=" leading-8 text-sm lg:text-md text">
          نحن في التميز الرقمي نحرص على تقديم أفضل الخدمات لعملائنا الكرام.
          لضمان سير العمل بكل شفافية ووضوح، نود أن نوضح بعض السياسات والشروط
          التي تحكم التعاملات بيننا وبين عملائنا. يُرجى قراءة هذه الشروط بعناية
          قبل البدء في أي تعامل. 
        </p>
      </div>
      <div className=" relative bg-white  rounded-4xl py-8 px-4 space-y-4">
        {policies.map((policy, index) => (
          <div className="text-right space-y-2">
            <h2 className="  text-bgTertiary font-semibold">{policy.title}</h2>
            <p className=" text-sm text-black/50 hover:text-black">
              {policy.desc}
            </p>
          </div>
        ))}
        <div className=" absolute bg-fontPrimary rounded-[50px]  rounded-tr-[50px] lg:rounded-tr-[200px] -z-11 -top-8 left-0 w-8/12 h-[105%] lg:h-[110%]"></div>
        <div className=" hidden md:flex absolute top-80  -left-15 ">
          <Image src={"/Polygonleaft.png"} width={100} height={100}></Image>
        </div>
        <div className="hidden md:flex absolute top-20  -right-25 ">
          <Image src={"/Polygonright.png"} width={100} height={100}></Image>
        </div>
      </div>
      <div className=" ">
        <h1 className=" font-bold text-fontPrimary text-lg lg:text-2xl text-center">
          شكرًا لاختيارك التمـيـز الرقمي!{" "}
        </h1>
        <p className=" leading-8 text-sm lg:text-md ">
          نحن هنا لضمان تقديم أفضل الخدمات لك. إذا كانت لديك أي استفسارات حول
          سياساتنا أو شروطنا، لا تتردد في الاتصال بنا
        </p>
      </div>
    </section>
  );
};

export default page;
