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
  title: "Montaj Acoperisuri Hunedoara | Acoperisuri Pro",
  description:
    "Firma cu 15+ ani in montaj si reparatii acoperisuri. Tigla metalica, ceramica, tabla faltuita. Hunedoara si judete invecinate. Evaluare gratuita. 0735 097 539.",
  alternates: {
    canonical: "https://montajacoperispro.ro",
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
