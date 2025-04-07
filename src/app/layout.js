import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";

import { Cairo } from "next/font/google";
const cairo = Cairo({ subsets: ["latin"] });

import localFont from "next/font/local";
const sstArabic = localFont({
  src: "../../public/fonts/alfont_com_AlFont_com_SST-Arabic-Medium.ttf",
});

export const metadata = {
  title: "شركة الـتمـيـز الرقمي",
  description: "شركة الـتمـيـز الرقمي",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">
        <main className={`${cairo.className} `}>
          <Header />
          <div className="container mx-auto text-center px-5 lg:px-32">
            {children}
          </div>
          <Footer />
        </main>
      </body>
    </html>
  );
}
