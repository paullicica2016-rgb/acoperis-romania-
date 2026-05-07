import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import {
  Hammer,
  Shield,
  Wrench,
  Paintbrush,
  Home,
  AlertTriangle,
  Trash2,
  Sparkles,
  Building2,
  Layers,
  ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Servicii Montaj si Reparatii Acoperisuri - 10 Tipuri de Servicii",
  description: "Servicii complete acoperisuri: constructie acoperis nou, montaj tigla metalica, tigla ceramica, tabla faltuita, reparatii, renovari, mansardari, interventii urgenta 24/7. Preturi competitive.",
};

const services = [
  {
    icon: Hammer,
    title: "Constructie Acoperisuri Noi",
    slug: "constructie-acoperisuri-noi",
    desc: "Executie completa de sisteme de acoperis pentru cladiri rezidentiale, comerciale si industriale. Structuri din lemn si metal, diverse tipuri de invelitori, izolatie termica, hidroizolatie, jgheaburi si elemente de siguranta.",
  },
  {
    icon: Layers,
    title: "Invelitori pentru Acoperisuri",
    slug: "invelitori-pentru-acoperisuri",
    desc: "Montaj profesional de tigla ceramica, tigla metalica, tabla faltuita, tabla cutata, sindrila bituminoasa si panouri sandwich cu precizie si atentie la detalii.",
  },
  {
    icon: Wrench,
    title: "Accesorii si Sisteme de Montaj",
    slug: "accesorii-si-sisteme-de-montaj",
    desc: "Instalare jgheaburi, burlane, opritori de zapada, cosuri de fum, aeratoare, tinichigerie si sisteme de montaj specifice fiecarui tip de acoperis.",
  },
  {
    icon: Shield,
    title: "Reparatii Acoperisuri",
    slug: "reparatii-acoperisuri",
    desc: "Reparatii profesionale pentru invelitori deteriorate: inlocuire sarpanta, reparatii materiale, imbunatatiri izolatie si modernizare sisteme de drenaj pluvial.",
  },
  {
    icon: Paintbrush,
    title: "Renovari si Modernizari",
    slug: "renovari-si-modernizari",
    desc: "Modernizare completa a acoperisurilor deteriorate cu inlocuire totala sau partiala a structurii, imbunatatiri izolatie, hidroizolatie si sistem pluvial.",
  },
  {
    icon: Home,
    title: "Mansardari si Extinderi",
    slug: "mansardari-si-extinderi",
    desc: "Transformarea podurilor neutilizate in spatii locative moderne. Modificari structurale, izolatie termica, montaj ferestre de mansarda Velux si Fakro.",
  },
  {
    icon: Trash2,
    title: "Demolari si Reconstruiri",
    slug: "demolari-si-reconstruiri",
    desc: "Inlocuire structurala completa a acoperisurilor compromise. Demontare sigura si reconstructie cu materiale si tehnologii moderne.",
  },
  {
    icon: AlertTriangle,
    title: "Interventii de Urgenta",
    slug: "interventii-de-urgenta",
    desc: "Raspuns rapid la daune provocate de furtuni, vanturi puternice, zapada si gheata. Disponibilitate 24/7 cu echipe mobile specializate.",
  },
  {
    icon: Sparkles,
    title: "Curatare si Intretinere",
    slug: "curatare-si-intretinere",
    desc: "Servicii profesionale de curatare acoperisuri si intretinere regulata pentru prelungirea duratei de viata a acoperisului dumneavoastra.",
  },
  {
    icon: Building2,
    title: "Finisaje Fatade Exterioare",
    slug: "finisaje-fatade-exterioare",
    desc: "Servicii complete de finisaje fatade exterioare si placari. Materiale premium si executie profesionala pentru un aspect modern si durabil.",
  },
];

export default function ServiciiPage() {
  return (
    <>
      <PageHero
        title="Serviciile Noastre"
        subtitle="Oferim o gama completa de servicii pentru acoperisuri -- de la constructie si montaj, pana la reparatii, renovari si interventii de urgenta."
        image="/images/hero.webp"
        breadcrumbs={[{ label: "Servicii" }]}
      />

      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`/servicii/${service.slug}`}
                className="service-card bg-white rounded-2xl p-8 border border-gray-100 group block"
              >
                <div className="w-14 h-14 rounded-xl bg-accent/10 text-accent flex items-center justify-center mb-5 group-hover:bg-accent group-hover:text-white transition-all">
                  <service.icon size={28} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-500 leading-relaxed text-sm mb-4">
                  {service.desc}
                </p>
                <span className="inline-flex items-center gap-1 text-accent font-semibold text-sm group-hover:gap-2 transition-all">
                  Vezi Detalii <ArrowRight size={16} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Ai nevoie de un serviciu specific?
          </h2>
          <p className="text-gray-500 mb-8">
            Contacteaza-ne pentru o oferta personalizata. Echipa noastra iti sta la dispozitie.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:0754456844" className="btn-accent inline-flex items-center justify-center gap-2 text-white px-8 py-3.5 rounded-full font-semibold">
              Apeleaza: 0754 456 844
            </a>
            <Link href="/contact" className="inline-flex items-center justify-center gap-2 border-2 border-gray-200 text-gray-700 px-8 py-3.5 rounded-full font-semibold hover:border-accent hover:text-accent transition-all">
              Formular Contact
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
