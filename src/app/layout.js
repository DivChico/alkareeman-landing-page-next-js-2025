import Header from "@/components/Header";
import "./globals.css";

import { Cairo } from "next/font/google";
const cairo = Cairo({ subsets: ["latin"] });

import localFont from "next/font/local";
import Image from "next/image";
const sstArabic = localFont({
  src: "../../public/fonts/alfont_com_AlFont_com_SST-Arabic-Medium.ttf",
});

export const metadata = {
  title: "  شركة الـتمـيـز الرقمي",
  description: "  شركة الـتمـيـز الرقمي",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <div className="absolute top-0 left-0 w-full h-full -z-10">
        <Image
          src="/background.png"
          alt="background"
          layout="fill"
          objectFit="cover"
          className=" opacity-5"
        />
      </div>
      <div
        className={`${cairo.className} container mx-auto  text-center px-5  lg:px-32 `}
      >
        <Header />
        <body className={` antialiased`}>{children}</body>
      </div>
    </html>
  );
}
