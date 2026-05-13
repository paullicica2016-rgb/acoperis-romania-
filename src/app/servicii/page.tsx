import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Hammer, Shield, Wrench, Paintbrush, Home, AlertTriangle, Trash2, Sparkles, Building2, Layers, ArrowRight, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Servicii Acoperisuri - Montaj, Reparatii, Renovari",
  description: "Constructie, reparatii si renovari acoperisuri. Tigla metalica, ceramica, tabla faltuita. Hunedoara si judete invecinate. Oferta gratuita, garantie scrisa.",
  alternates: { canonical: "https://montajacoperispro.ro/servicii" },
};

const services = [
  {
    icon: Hammer,
    title: "Constructie Acoperisuri Noi",
    slug: "constructie-acoperisuri-noi",
    desc: "Executie completa pentru case, cladiri comerciale si industriale — de la sarpanta la invelitoare finala.",
    image: "/images/dragos/poza-1.jpeg",
  },
  {
    icon: Layers,
    title: "Invelitori pentru Acoperisuri",
    slug: "invelitori-pentru-acoperisuri",
    desc: "Tigla ceramica, tigla metalica, tabla faltuita, tabla cutata, sindrila bituminoasa — montaj profesional.",
    image: "/images/projects/tigla-metalica-2-new.jpeg",
  },
  {
    icon: Wrench,
    title: "Accesorii si Sisteme de Montaj",
    slug: "accesorii-si-sisteme-de-montaj",
    desc: "Jgheaburi, burlane, parazapezi, aeratoare, cosuri de fum si tinichigerie completa.",
    image: "/images/projects/accesorii-1.jpeg",
  },
  {
    icon: Shield,
    title: "Reparatii Acoperisuri",
    slug: "reparatii-acoperisuri",
    desc: "Tigla sparta, infiltratii, sarpanta degradata — diagnostic complet si reparatii de durata.",
    image: "/images/hero-reparatii.webp",
  },
  {
    icon: Paintbrush,
    title: "Renovari si Modernizari",
    slug: "renovari-si-modernizari",
    desc: "Transformam acoperisuri vechi in sisteme moderne, eficiente energetic si estetice.",
    image: "/images/dragos/renovari-1.jpeg",
  },
  {
    icon: Home,
    title: "Mansardari si Extinderi",
    slug: "mansardari-si-extinderi",
    desc: "Transformam podul casei in spatiu locuibil modern. Proiect complet de la structura la finisaje.",
    image: "/images/projects/mansardari-1.jpeg",
  },
  {
    icon: Trash2,
    title: "Demolari si Reconstruiri",
    slug: "demolari-si-reconstruiri",
    desc: "Demontare sigura si reconstructie completa cu materiale si tehnologii moderne.",
    image: "/images/hero-dulgherie.webp",
  },
  {
    icon: AlertTriangle,
    title: "Interventii de Urgenta",
    slug: "interventii-de-urgenta",
    desc: "Raspuns rapid la daune provocate de furtuni, vant, zapada. Disponibili 24/7.",
    image: "/images/hero-reparatii.webp",
  },
  {
    icon: Sparkles,
    title: "Curatare si Intretinere",
    slug: "curatare-si-intretinere",
    desc: "Curatare profesionala si intretinere regulata pentru prelungirea duratei de viata a acoperisului.",
    image: "/images/importanta-reparatie.webp",
  },
  {
    icon: Building2,
    title: "Finisaje Fatade Exterioare",
    slug: "finisaje-fatade-exterioare",
    desc: "Finisaje fatade si placari exterioare cu materiale premium si executie profesionala.",
    image: "/images/projects/tigla-ceramica-vila.jpeg",
  },
];

export default function ServiciiPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-[#051D3E] text-white pt-16 pb-0 overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/hero.webp" alt="Servicii acoperisuri" fill className="object-cover" priority sizes="100vw" />
          <div className="absolute inset-0 bg-[#051D3E]/78" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 pb-24 pt-8">
          <nav className="flex items-center gap-2 text-sm text-white/60 mb-6">
            <Link href="/" className="hover:text-white transition-colors">Acasa</Link>
            <span className="text-white/40">›</span>
            <span className="text-white">Servicii</span>
          </nav>
          <div className="max-w-2xl">
            <span className="inline-block bg-white/15 border border-white/20 text-white/90 text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-5">Tot ce ai nevoie</span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-5">Serviciile Noastre</h1>
            <div className="w-12 h-1 bg-[#E53935] rounded mb-6" />
            <p className="text-white/75 text-lg leading-relaxed">
              De la constructie si montaj pana la reparatii, renovari si interventii de urgenta — acoperim tot ce tine de acoperisul tau.
            </p>
          </div>
        </div>
        <div className="relative h-16">
          <svg viewBox="0 0 1440 64" preserveAspectRatio="none" className="absolute bottom-0 w-full h-16">
            <path d="M0,32 C360,80 1080,0 1440,32 L1440,64 L0,64 Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* Services grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <Link
                key={service.slug}
                href={`/servicii/${service.slug}`}
                className="group rounded-2xl overflow-hidden border border-gray-100 hover:border-[#0d1547]/20 hover:shadow-xl transition-all duration-300 bg-white"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-[#051D3E]/40 group-hover:bg-[#051D3E]/30 transition-colors" />
                  {/* Icon badge */}
                  <div className="absolute top-4 left-4 w-10 h-10 rounded-xl bg-white/95 text-[#0d1547] flex items-center justify-center shadow-sm">
                    <service.icon size={19} />
                  </div>
                  {/* Number */}
                  <span className="absolute bottom-4 right-4 text-white/30 font-extrabold text-4xl leading-none">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-bold text-gray-900 text-lg mb-2 group-hover:text-[#0d1547] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4">{service.desc}</p>
                  <span className="inline-flex items-center gap-1.5 text-[#0d1547] font-semibold text-sm group-hover:gap-3 transition-all">
                    Vezi detalii <ArrowRight size={15} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#0d1547]">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ai nevoie de un serviciu?</h2>
          <p className="text-white/70 text-lg mb-10">Suna acum pentru oferta gratuita. Venim la fata locului fara costuri.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:0754456844" className="inline-flex items-center justify-center gap-2 bg-white text-[#0d1547] px-8 py-4 rounded-full text-lg font-bold hover:bg-gray-100 transition-colors">
              <Phone size={18} /> 0754 456 844
            </a>
            <Link href="/contact" className="inline-flex items-center justify-center gap-2 bg-white/15 border border-white/30 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/25 transition-all">
              Formular Contact
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
