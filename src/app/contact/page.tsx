import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Contact from "@/components/Contact";
import { Clock, MapPin, Phone, Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Firma Acoperisuri - Oferta Gratuita Montaj Acoperis",
  description: "Contacteaza Reparatii Pro pentru oferta gratuita montaj si reparatii acoperisuri. Tel: 0734 704 026. Deplasare gratuita Bucuresti si 13 judete.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Contact"
        subtitle="Suntem aici sa va ajutam. Contactati-ne pentru o consultatie gratuita si o oferta personalizata."
        image="/images/hero-contact.webp"
        breadcrumbs={[{ label: "Contact" }]}
      />

      {/* Quick contact cards */}
      <section className="relative -mt-12 z-10 max-w-6xl mx-auto px-4 mb-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <a href="tel:0734704026" className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 text-center hover:border-accent/30 transition-colors group">
            <div className="w-12 h-12 rounded-xl bg-accent/10 text-accent flex items-center justify-center mx-auto mb-3 group-hover:bg-accent group-hover:text-white transition-all">
              <Phone size={22} />
            </div>
            <h3 className="font-bold text-gray-900 mb-1">Telefon</h3>
            <p className="text-sm text-gray-500">0734 704 026</p>
          </a>

          <a href="mailto:office@reparatiipro.ro" className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 text-center hover:border-accent/30 transition-colors group">
            <div className="w-12 h-12 rounded-xl bg-accent/10 text-accent flex items-center justify-center mx-auto mb-3 group-hover:bg-accent group-hover:text-white transition-all">
              <Mail size={22} />
            </div>
            <h3 className="font-bold text-gray-900 mb-1">Email</h3>
            <p className="text-sm text-gray-500">office@reparatiipro.ro</p>
          </a>

          <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 text-center">
            <div className="w-12 h-12 rounded-xl bg-accent/10 text-accent flex items-center justify-center mx-auto mb-3">
              <MapPin size={22} />
            </div>
            <h3 className="font-bold text-gray-900 mb-1">Zona de Activitate</h3>
            <p className="text-sm text-gray-500">Bucuresti si 13 judete</p>
          </div>

          <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 text-center">
            <div className="w-12 h-12 rounded-xl bg-accent/10 text-accent flex items-center justify-center mx-auto mb-3">
              <Clock size={22} />
            </div>
            <h3 className="font-bold text-gray-900 mb-1">Program</h3>
            <p className="text-sm text-gray-500">L-V: 07-20 | S: 08-16</p>
          </div>
        </div>
      </section>

      {/* Contact form section */}
      <Contact />

      {/* Map placeholder */}
      <section className="bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Zona de Acoperire</h2>
            <p className="text-gray-500">Oferim servicii in Bucuresti si in 13 judete din Romania</p>
          </div>
          <div className="bg-gradient-to-br from-slate-200 to-slate-300 rounded-2xl h-64 md:h-96 flex items-center justify-center">
            <div className="text-center">
              <MapPin size={48} className="text-accent mx-auto mb-3" />
              <p className="text-gray-600 font-medium">Harta Zona de Activitate</p>
              <p className="text-gray-400 text-sm">Bucuresti, Ilfov, Constanta, Prahova, Brasov si alte 7 judete</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
