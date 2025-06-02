"use client";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useRef, useEffect } from "react";

const Header = ({ locale }) => {
  const oppositeLocale = locale === "ar" ? "en" : "ar";
  const t = useTranslations("header");

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(true);

  const menuRef = useRef(null);
  const [prevScrollY, setPrevScrollY] = useState(0);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrolledUp = currentScrollY < prevScrollY;

      if (scrolledUp) {
        setIsOpen(true);
      } else if (currentScrollY > 100) {
        setIsOpen(false);
      }

      setPrevScrollY(currentScrollY);
    };

    setPrevScrollY(window.scrollY);

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollY]);

  const NavLink = ({ children, link }) => {
    return (
      <li role="none" className="flex items-center justify-center">
        <a
          href={link}
          onClick={() => setIsMenuOpen(false)}
          className="focus:outline-none focus-visible:ring-2 focus-visible:ring-bgTertiary px-2 py-1 rounded transition-colors duration-200 hover:bg-bgTertiary/10  text-base md:text-white text-black md:text-lg"
          aria-current="page"
          role="menuitem"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              setIsMenuOpen(false);
            }
          }}
          aria-label={typeof children === "string" ? children : undefined}
          style={{ minWidth: 0 }}
        >
          <span
            className="flex items-center justify-center border-bgSecondary hover:scale-110 hover:border-b-2 h-full transition-all duration-100 ease-in-out group-hover:text-bgTertiary group-hover:bg-bgTertiary/10"
            role="menuitem"
            style={{ minWidth: 0 }}
          >
            <span className="whitespace-nowrap">{children}</span>
          </span>
        </a>
      </li>
    );
  };

  return (
    <header
      className={`container rounded-b-3xl rounder-l-3xl  mx-auto sticky z-50 top-0 xl:px-16 px-2 text-center flex justify-between gap-16 py-2 ${
        locale === "ar" ? "flex-row-reverse" : ""
      } items-center bg-fontPrimary backdrop-blur-lg transform transition-transform duration-500 ease-in-out ${
        isOpen ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div>
        <a href="/" className="flex justify-center items-center gap-2">
          <p className="font-semibold text-white tracking-wide text-lg ">
            {locale === "ar" ? "التميز الرقمي" : "Digital Excellence"}
          </p>
          <Image src="/logo.png" width={50} height={30} alt="Logo" />
        </a>
      </div>

      <nav className="hidden md:block" aria-label="Main Navigation">
        <ul
          className={`flex ${
            locale === "ar" ? "flex-row-reverse" : ""
          } gap-2 md:gap-6 text-sm px-1 md:px-2 py-2 md:py-4 h-14 md:h-16 items-center`}
          role="menubar"
        >
          <NavLink link="/">{t("home")}</NavLink>
          <NavLink link="#about-us">{t("aboutUs")} </NavLink>
          <NavLink link="/contact-us">{t("requestService")} </NavLink>
          <NavLink link="/apply-job">{t("applyJob")} </NavLink>
          <NavLink link="/contact-us">{t("contactUs")} </NavLink>
          <NavLink link="/privacy-policy">{t("privacyPolicy")} </NavLink>
        </ul>
      </nav>

      <div className="hidden md:flex h-14 md:h-16 flex-row-reverse items-center gap-2">
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
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M1 12.6444H22"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M15.5388 12.6444C15.3405 16.9027 13.9262 20.9806 11.5004 24.2888C9.07458 20.9806 7.66028 16.9027 7.46191 12.6444C7.66028 8.38616 9.07458 4.30818 11.5004 1C13.9262 4.30818 15.3405 8.38616 15.5388 12.6444Z"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <Link href={`/${oppositeLocale}`}>
          {locale === "ar" ? "English" : "اللغة العربية"}
        </Link>
      </div>

      <button
        onClick={(e) => {
          toggleMenu();
          e.stopPropagation();
        }}
        className="block rounded-sm bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-bgTertiary"
      >
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

      {isMenuOpen && (
        <nav
          ref={menuRef}
          aria-label="Mobile Navigation"
          className={`md:hidden  border-red-600 fixed top-0 left-0 w-full h-full  z-50 flex flex-col items-center pt-20 transition-all duration-500 ease-in-out ${
            isMenuOpen ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
        >
          <button
            onClick={() => setIsMenuOpen(false)}
            className="absolute top-24 left-12 text-gray-600 hover:bg-gray-100 rounded-full p-2 hover:text-red-500 hover:scale-105 active:scale-95 z-10 focus:outline-none focus-visible:ring-2 focus-visible:ring-bgTertiary"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <ul
            className="flex flex-col gap-2 md:gap-4 text-center text-base md:text-lg w-full max-w-xs mx-auto bg-white rounded-lg shadow-lg p-4"
            role="menubar"
          >
            <NavLink link="/">{t("home")}</NavLink>
            <NavLink link="#about-us">{t("aboutUs")} </NavLink>
            <NavLink link="/contact-us">{t("requestService")} </NavLink>
            <NavLink link="/apply-job">{t("applyJob")} </NavLink>
            <NavLink link="/contact-us">{t("contactUs")} </NavLink>
            <NavLink link="/privacy-policy">{t("privacyPolicy")} </NavLink>

            {/* Language switcher for mobile */}
            <li className="mt-4 pt-4 border-t border-gray-200">
              <Link
                href={`/${oppositeLocale}`}
                className="flex items-center justify-center gap-2 text-bgTertiary hover:text-fontPrimary text-base md:text-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 23 26"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="inline-block"
                >
                  <path
                    d="M11.5 24.2888C17.2991 24.2888 22 19.0755 22 12.6444C22 6.21339 17.2991 1 11.5 1C5.70101 1 1 6.21339 1 12.6444C1 19.0755 5.70101 24.2888 11.5 24.2888Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M1 12.6444H22"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M15.5388 12.6444C15.3405 16.9027 13.9262 20.9806 11.5004 24.2888C9.07458 20.9806 7.66028 16.9027 7.46191 12.6444C7.66028 8.38616 9.07458 4.30818 11.5004 1C13.9262 4.30818 15.3405 8.38616 15.5388 12.6444Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                {locale === "ar" ? "English" : "اللغة العربية"}
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
