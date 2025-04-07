import Image from "next/image";
import React from "react";
import { NavLink } from "./Header";

const Footer = () => {
  return (
    <footer className=" relative bg-fontPrimary flex flex-col items-center pt-4 justify-between  px-5  lg:px-56">
      {/* links */}
      <div className=" w-full  md:gap-32   flex flex-row-reverse justify-between md:justify-start md:px-16 items-center">
        {/* lgoo and name */}

        <div className="flex justify-center items-center gap-4 ">
          <div className=" text-2xl text-bgTertiary font-bold text-center">
            <p>التميز</p> <p>الرقمي</p>
          </div>
          <div>
            <Image src={"/logo.png"} width={80} height={80} />
          </div>
        </div>
        {/* link */}
        <div className=" flex  flex-col md:flex-row items-center justify-center gap-2 md:gap-20  lg:gap-32">
          <ul className="space-y-2">
            <li>
              <FooterLink>الصفحة الرئيسية</FooterLink>
            </li>
            <li>
              <FooterLink>نبذة عنا</FooterLink>
            </li>
            <li>
              <FooterLink>اطلب الخدمة</FooterLink>
            </li>
          </ul>
          <ul className="space-y-2">
            <li>
              <FooterLink> قدم على وظيفة</FooterLink>
            </li>
            <li>
              <FooterLink>تواصل معنا </FooterLink>
            </li>
            <li>
              <FooterLink> سياساتنا وشروطنا</FooterLink>
            </li>
          </ul>
        </div>
      </div>
      {/* copywright */}
      <div>
        <p className="text-white/50 text-sm py-4">
          حقوق النشر محفوظة لشركة التميز الرقمي 2025{" "}
        </p>
      </div>
      {/* socila media */}
      <div className="flex justify-center w-full lg:w-2/5 py-2 rounded-tr-[20px] rounded-tl-[20px] lg:rounded-tl-[0px]  lg:rounded-tr-[200px] items-center gap-16 absolute bottom-0 left-0 bg-bgTertiary ">
        <div className=" gap-4 flex items-center justify-center">
          {/* whatsapp */}
          <a
            href=""
            className=" groub hover:scale-125 transition-all duration-100 ease-in-out hover:text-bgTertiary"
          >
            <svg
              className=" group-hover:text-bgTertiary"
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.9971 1C5.55217 1.0017 1.00309 5.55797 1.00311 11C1.00312 12.9619 1.58688 14.9 2.67644 16.5384L1 21L6.61374 19.9845C7.98506 20.6549 9.49089 20.9909 10.9971 20.9918C16.4467 20.9956 21 16.4454 21 11C21 5.56082 16.445 0.996784 10.9971 1Z"
                stroke="white"
                stroke-width="1.3"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M11.5475 15.4038C12.9 16.2723 14.31 15.6397 15.292 14.9071C15.9703 14.4011 15.9478 13.4251 15.3685 12.8081L14.2261 11.5916C13.7927 12.0251 12.9483 12.2396 12.3616 12.061C11.1004 11.6771 10.5711 11.0197 10.1422 10.3513C9.64952 9.58364 10.2058 8.43714 10.6392 8.00369L9.36586 6.84088C8.82904 6.35068 8.01366 6.26796 7.54528 6.82396C6.61856 7.92401 6.04221 9.59411 6.72478 10.6575C7.95009 12.5665 9.63897 14.1783 11.5475 15.4038Z"
                stroke="white"
                stroke-width="1.3"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </a>

          {/* facebook */}
          <a href="">
            {" "}
            <svg
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 19.4615V2.53846C1 2.13043 1.16209 1.73912 1.4506 1.4506C1.73912 1.16209 2.13043 1 2.53846 1H19.4615C19.8695 1 20.2609 1.16209 20.5494 1.4506C20.8378 1.73912 21 2.13043 21 2.53846V19.4615C21 19.8695 20.8378 20.2609 20.5494 20.5494C20.2609 20.8378 19.8695 21 19.4615 21H14.8462V13.7077H15.9385C16.1874 13.7077 16.426 13.6088 16.602 13.4328C16.778 13.2568 16.8769 13.0181 16.8769 12.7692V11.5846C16.8769 11.4614 16.8526 11.3393 16.8055 11.2255C16.7583 11.1116 16.6892 11.0082 16.602 10.921C16.5149 10.8339 16.4114 10.7648 16.2975 10.7176C16.1837 10.6704 16.0617 10.6462 15.9385 10.6462H14.9077V9.2C14.9077 7.90769 15.4923 7.90769 16.0769 7.90769H16.8308C16.9546 7.9128 17.078 7.89063 17.1923 7.84279C17.3066 7.79494 17.4091 7.72255 17.4923 7.63077C17.5817 7.54566 17.6525 7.44291 17.7002 7.32905C17.7478 7.21517 17.7714 7.09266 17.7692 6.96923V5.83077C17.7734 5.70549 17.7528 5.58063 17.7085 5.46334C17.6643 5.34603 17.5975 5.23858 17.5117 5.14714C17.426 5.05571 17.3231 4.98205 17.2089 4.9304C17.0948 4.87875 16.9714 4.85012 16.8462 4.84615H15.0769C14.5607 4.82674 14.0464 4.91963 13.5696 5.1184C13.0927 5.31715 12.6647 5.61706 12.3151 5.99738C11.9655 6.37772 11.7026 6.8294 11.5446 7.32125C11.3866 7.81309 11.3373 8.33337 11.4 8.84615V10.6462H10.4154C10.2909 10.6441 10.1672 10.6669 10.0515 10.7131C9.93588 10.7594 9.8306 10.8282 9.74183 10.9155C9.65305 11.0029 9.58254 11.107 9.53442 11.2219C9.48629 11.3368 9.46152 11.4601 9.46154 11.5846V12.7692C9.46152 12.8938 9.48629 13.0171 9.53442 13.132C9.58254 13.2468 9.65305 13.351 9.74183 13.4383C9.8306 13.5257 9.93588 13.5945 10.0515 13.6407C10.1672 13.687 10.2909 13.7097 10.4154 13.7077H11.4V21H2.53846C2.13043 21 1.73912 20.8378 1.4506 20.5494C1.16209 20.2609 1 19.8695 1 19.4615Z"
                stroke="white"
                stroke-width="1.3"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </a>
          {/* instegram */}
          <a href="">
            <svg
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.7816 5.6397C16.5516 5.6397 16.3652 5.45327 16.3652 5.22329C16.3652 4.99332 16.5516 4.80688 16.7816 4.80688"
                stroke="white"
                stroke-width="1.3"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M16.7822 5.6397C17.0123 5.6397 17.1986 5.45327 17.1986 5.22329C17.1986 4.99332 17.0123 4.80688 16.7822 4.80688"
                stroke="white"
                stroke-width="1.3"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M1 5.28571C1 2.91879 2.91877 1 5.28571 1H16.7143C19.0812 1 21 2.91879 21 5.28571V16.7143C21 19.0812 19.0812 21 16.7143 21H5.28571C2.91877 21 1 19.0812 1 16.7143V5.28571Z"
                stroke="white"
                stroke-width="1.3"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M11.0003 15.2472C13.3461 15.2472 15.2477 13.3456 15.2477 10.9998C15.2477 8.65406 13.3461 6.75244 11.0003 6.75244C8.65454 6.75244 6.75293 8.65406 6.75293 10.9998C6.75293 13.3456 8.65454 15.2472 11.0003 15.2472Z"
                stroke="white"
                stroke-width="1.3"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </a>
          {/* gmail */}
          <a href="">
            <svg
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.42855 21H6.71417V2.65106L5.40207 1.58137C3.50065 0.0312537 1 1.76258 1 4.62914V7.05065V19.1883C1 20.1889 1.63957 21 2.42855 21Z"
                stroke="white"
                stroke-width="1.3"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M1 4.62914V7.05065L6.71417 11.7091L10.9998 15.2029L15.2854 11.7091L20.9997 7.05065V4.62914C20.9997 1.76258 18.4989 0.0312537 16.5974 1.58137L15.2854 2.65106L10.9998 6.14487L6.71417 2.65106L5.40207 1.58137C3.50065 0.0312537 1 1.76258 1 4.62914Z"
                stroke="white"
                stroke-width="1.3"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M15.2861 21H19.5718C20.3607 21 21.0002 20.1889 21.0002 19.1883V7.05065V4.62914C21.0002 1.76258 18.4997 0.0312537 16.5982 1.58137L15.2861 2.65106V21Z"
                stroke="white"
                stroke-width="1.3"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </a>
          {/* phone */}
          <a href="">
            <svg
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.2603 20.3386C9.46156 20.8522 8.51087 21.0773 7.56626 20.9765C6.62166 20.8757 5.74003 20.4553 5.06797 19.7848L4.48249 19.2002C4.22281 18.938 4.07715 18.5843 4.07715 18.2155C4.07715 17.8469 4.22281 17.4931 4.48249 17.2309L6.94768 14.7848C7.20756 14.5264 7.55934 14.3814 7.92605 14.3814C8.29276 14.3814 8.64455 14.5264 8.90442 14.7848C9.16692 15.0441 9.52126 15.1895 9.8905 15.1895C10.2597 15.1895 10.6141 15.0441 10.8766 14.7848L14.8055 10.8617C15.0652 10.5996 15.2108 10.2457 15.2108 9.87704C15.2108 9.50835 15.0652 9.15453 14.8055 8.89242C14.5467 8.63293 14.4015 8.28166 14.4015 7.91549C14.4015 7.54932 14.5467 7.19806 14.8055 6.93856L17.1782 4.47701C17.4407 4.2177 17.7951 4.07227 18.1642 4.07227C18.5336 4.07227 18.8879 4.2177 19.1503 4.47701L19.7358 5.06163C20.4193 5.72323 20.8548 6.59887 20.9698 7.54241C21.0849 8.48596 20.8722 9.44035 20.3675 10.2463C17.6809 14.229 14.2489 17.656 10.2603 20.3386Z"
                stroke="white"
                stroke-width="1.3"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M11.0148 1C9.69967 1 8.39737 1.25866 7.18233 1.76121C5.96727 2.26376 4.86325 3.00037 3.93328 3.92896C3.00331 4.85755 2.26563 5.95994 1.76233 7.17321C1.25904 8.38646 1 9.68684 1 11.0001"
                stroke="white"
                stroke-width="1.3"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M11.0155 4.84619C9.38099 4.84619 7.81342 5.49455 6.65763 6.64862C5.50185 7.8027 4.85254 9.36796 4.85254 11.0001"
                stroke="white"
                stroke-width="1.3"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </a>
        </div>
        <p>مواقع التواصل</p>
      </div>
    </footer>
  );
};

export default Footer;

const FooterLink = ({ children }) => {
  return (
    <li className=" md:text-sm text-xs flex items-center justify-center hover:font-semibold  hover:text-fontPri hover:scale-125 hover:text-bgTertiary h-full transition-all duration-100 ease-in-out ">
      {children}
    </li>
  );
};
