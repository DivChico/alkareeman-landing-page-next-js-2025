import ContactUs from "@/components/ContactUs";
import EmblaCarousel from "@/components/embla/EmblaCarousel";
import Faq from "@/components/Faq";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import Us from "@/components/Us";

export default function Home() {
  return (
    <main>
      <Hero />
      <Features />
      <Us />
      <Services />
      <Testimonials />
      <ContactUs />
      <Faq />
    </main>
  );
}
