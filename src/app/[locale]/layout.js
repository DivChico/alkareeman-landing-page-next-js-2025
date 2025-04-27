import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import { routing } from "@/i18n/routing";

import { Cairo } from "next/font/google";
const cairo = Cairo({ subsets: ["latin"] });

import localFont from "next/font/local";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
const sstArabic = localFont({
  src: "../../../public/fonts/alfont_com_AlFont_com_SST-Arabic-Medium.ttf",
});

export const metadata = {
  title: "شركة الـتمـيـز الرقمي",
  description: "شركة الـتمـيـز الرقمي",
};

export default async function RootLayout({ children, params }) {
  const { locale } = params;
  console.log(locale, "from layout");

  const messages = await getMessages(locale);
  return (
    <NextIntlClientProvider messages={messages} locale={locale}>
      <html lang={locale}>
        <body className="antialiased ">
          <main
            className={`${cairo.className}    min-h-screen flex justify-between  flex-col `}
          >
            <Header locale={locale} />
            <div className="  text-center container  mx-auto xl:px-16 ">
              {children}
            </div>
            <Footer />
          </main>
        </body>
      </html>
    </NextIntlClientProvider>
  );
}
