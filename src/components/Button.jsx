import React from "react";

const Button = ({ children }) => {
  return (
    <a
      className="inline-block  shadow-lg rounded-2xl bg-fontPrimary px-8 py-3 text-sm font-bold text-white transition duration-100 ease-in-out hover:scale-110 hover:shadow-xl focus:ring-3 focus:outline-hidden"
      href="#"
    >
      {children}
    </a>
  );
};

export default Button;
