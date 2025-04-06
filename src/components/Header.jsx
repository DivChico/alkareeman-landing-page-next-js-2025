import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <header className="  flex justify-between gap-16 py-2  flex-row-reverse items-center">
      {/* logo */}
      <div>
        <Image src="/logo.png" width={100} height={100} alt="Logo" />
      </div>
      <nav className="">
        <ul className="flex flex-row-reverse gap-6 text-sm px-2 py-4 h-16">
          <NavLink>الصفحة الرئيسية</NavLink>
          <NavLink>نبذة عنا</NavLink>
          <NavLink>اطلب خدمة</NavLink>
          <NavLink>قدم على وظيفة</NavLink>
          <NavLink>تواصل معنا</NavLink>
          <NavLink>السياسات والخصوصية</NavLink>
        </ul>
      </nav>
      {/* lang */}
      <div className="flex  h-16 flex-row-reverse items-center gap-2">
        <svg
          width="23"
          height="26"
          viewBox="0 0 23 26"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11.5 24.2888C17.2991 24.2888 22 19.0755 22 12.6444C22 6.21339 17.2991 1 11.5 1C5.70101 1 1 6.21339 1 12.6444C1 19.0755 5.70101 24.2888 11.5 24.2888Z"
            stroke="white"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M1 12.6444H22"
            stroke="white"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M15.5388 12.6444C15.3405 16.9027 13.9262 20.9806 11.5004 24.2888C9.07458 20.9806 7.66028 16.9027 7.46191 12.6444C7.66028 8.38616 9.07458 4.30818 11.5004 1C13.9262 4.30818 15.3405 8.38616 15.5388 12.6444Z"
            stroke="white"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>

        <p>اللغة العربية</p>
      </div>
    </header>
  );
};

export default Header;

const NavLink = ({ children }) => {
  return (
    <li className=" flex items-center justify-center border-bgSecondary hover:text-fontPrimary hover:scale-125 hover:border-b-2  h-full transition-all duration-100 ease-in-out ">
      {children}
    </li>
  );
};
