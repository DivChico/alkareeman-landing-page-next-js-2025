import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Cairo } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";

const cairo = Cairo({ subsets: ["latin"] });

export const metadata = {
  title: "شركة الـتمـيـز الرقمي",
  description: "شركة الـتمـيـز الرقمي",
};

export default async function RootLayout({ children, params }) {
  const { locale } = params;
  const messages = await getMessages(locale);

  return (
    <NextIntlClientProvider messages={messages} locale={locale}>
      <html lang={locale}>
        <body className="antialiased">
          <main
            className={`${cairo.className} min-h-screen flex flex-col justify-between`}
          >
            <Header locale={locale} />
            <div className="text-center container mx-auto xl:px-16">
              {children}
            </div>
            <Footer />
          </main>
        </body>
      </html>
    </NextIntlClientProvider>
  );
}
