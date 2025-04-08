import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <header className=" container mx-auto text-center px-5 lg:px-32 flex justify-between gap-16 py-2  flex-row-reverse items-center">
      {/* logo */}
      <div>
        <a href="/" className=" flex justify-center items-center gap-2">
          <p className="font-semibold tracking-wide text-lg md:hidden">
            التميز الرقمي
          </p>{" "}
          <Image
            className=" "
            src="/logo.png"
            width={80}
            height={50}
            alt="Logo"
          />
        </a>
      </div>
      <nav className="hidden md:block">
        <ul className="flex flex-row-reverse gap-6 text-sm px-2 py-4 h-16">
          <NavLink link={"/"}>الصفحة الرئيسية</NavLink>
          <NavLink link={"#about-us"}>نبذة عنا</NavLink>
          <NavLink link={"/contact-us"}>اطلب خدمة</NavLink>
          <NavLink link={"/apply-job"}>قدم على وظيفة</NavLink>
          <NavLink link={"/contact-us"}>تواصل معنا</NavLink>
          <NavLink link={"/privacy-policy"}>السياسات والخصوصية</NavLink>
        </ul>
      </nav>
      {/* lang */}
      <div className=" hidden md:flex  h-16 flex-row-reverse items-center gap-2">
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
      <button className="block rounded-sm bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden">
        <span className="sr-only">Toggle menu</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="size-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
    </header>
  );
};

export default Header;

const NavLink = ({ children, link }) => {
  return (
    <a href={link}>
      <li className=" flex items-center justify-center border-bgSecondary hover:text-fontPrimary hover:scale-125 hover:border-b-2  h-full transition-all duration-100 ease-in-out ">
        {children}
      </li>
    </a>
  );
};
