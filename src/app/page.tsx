import type { Metadata } from "next";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import QuickContact from "@/components/QuickContact";
import About from "@/components/About";
import Partners from "@/components/Partners";
import Services from "@/components/Services";
import Blog from "@/components/Blog";
import MaterialColors from "@/components/MaterialColors";
import ServiceAreas from "@/components/ServiceAreas";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";

export const metadata: Metadata = {
  title: "Montaj si Reparatii Acoperisuri Bucuresti | Reparatii Pro - Firma Acoperisuri",
  description:
    "Reparatii Pro - firma cu 15+ ani experienta in montaj acoperisuri, reparatii acoperisuri, tigla metalica, tigla ceramica, tabla faltuita. Servicii complete Bucuresti si 13 judete. Discount 15-20% sistem complet. Suna 0734 704 026.",
  alternates: {
    canonical: "https://reparatiipro.ro",
  },
};

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <QuickContact />
      <About />
      <Partners />
      <Services />
      <Blog />
      <MaterialColors />
      <ServiceAreas />
      <Testimonials />
      <Contact />
    </>
  );
}
