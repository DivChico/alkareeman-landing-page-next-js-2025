import Image from "next/image";
import React from "react";
import { NavLink } from "./Header";

const Footer = () => {
  return (
    <footer className=" bg-fontPrimary flex flex-col items-center py-8  px-5  lg:px-56">
      {/* links */}
      <div className=" w-full  gap-16 flex flex-row-reverse justify-start px-16 items-center">
        {/* lgoo and name */}

        <div className="flex justify-center items-center gap-4 ">
          <div className=" text-4xl text-bgTertiary">
            <p>التميز</p> <p>الرقمي</p>
          </div>
          <div>
            <Image src={"/logo.png"} width={100} height={100} />
          </div>
        </div>
        {/* link */}
        <div className=" flex items-center justify-center gap-16 ">
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
      <div></div>
    </footer>
  );
};

export default Footer;

const FooterLink = ({ children }) => {
  return (
    <li className=" flex items-center justify-center  hover:text-fontPri hover:scale-125 hover:text-bgTertiary h-full transition-all duration-100 ease-in-out ">
      {children}
    </li>
  );
};
