import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";

import { Cairo } from "next/font/google";
const cairo = Cairo({ subsets: ["latin"] });

import localFont from "next/font/local";
import { NextIntlClientProvider } from "next-intl";
const sstArabic = localFont({
  src: "../../public/fonts/alfont_com_AlFont_com_SST-Arabic-Medium.ttf",
});

export const metadata = {
  title: "شركة الـتمـيـز الرقمي",
  description: "شركة الـتمـيـز الرقمي",
};

export default async function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased ">
        <main
          className={`${cairo.className}    min-h-screen flex justify-between  flex-col `}
        >
          <Header />
          <div className="  text-center container  mx-auto xl:px-16 ">
            {children}
          </div>
          <Footer />
        </main>
      </body>
    </html>
  );
}
