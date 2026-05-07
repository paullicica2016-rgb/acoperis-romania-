import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, Phone, ArrowRight, MapPin, Home, Calendar, Users, Award } from "lucide-react";

export const metadata: Metadata = {
  title: "Montaj si Reparatii Acoperisuri Cluj - Acoperisuri Pro",
  description: "Servicii profesionale acoperisuri in judetul Cluj. Constructie, reparatii, renovari. Evaluare gratuita, garantie scrisa.",
};

const stats = [
  { icon: Home, value: "200+", label: "Acoperisuri in Cluj" },
  { icon: Calendar, value: "15+", label: "Ani Experienta" },
  { icon: Users, value: "150+", label: "Clienti Multumiti" },
  { icon: Award, value: "100%", label: "Garantie Lucrari" },
];

const orase = [
  "Cluj-Napoca", "Turda", "Dej", "Campia Turzii", "Gherla",
  "Huedin", "Floresti", "Baciu", "Apahida", "Jucu",
];

const servicii = [
  { slug: "constructie-acoperisuri-noi", label: "Constructie Acoperisuri Noi" },
  { slug: "invelitori-pentru-acoperisuri", label: "Invelitori Acoperisuri" },
  { slug: "accesorii-si-sisteme-de-montaj", label: "Accesorii si Montaj" },
  { slug: "reparatii-acoperisuri", label: "Reparatii Acoperisuri" },
  { slug: "renovari-si-modernizari", label: "Renovari si Modernizari" },
  { slug: "mansardari-si-extinderi", label: "Mansardari si Extinderi" },
  { slug: "interventii-de-urgenta", label: "Interventii de Urgenta" },
  { slug: "curatare-si-intretinere", label: "Curatare si Intretinere" },
];

const alteJudete = [
  { slug: "hunedoara", label: "Hunedoara" },
  { slug: "alba", label: "Alba" },
  { slug: "sibiu", label: "Sibiu" },
  { slug: "valcea", label: "Valcea" },
  { slug: "gorj", label: "Gorj" },
  { slug: "mehedinti", label: "Mehedinti" },
  { slug: "timis", label: "Timis" },
  { slug: "arad", label: "Arad" },
  { slug: "bihor", label: "Bihor" },
  { slug: "bucuresti", label: "Bucuresti" },
  { slug: "ilfov", label: "Ilfov" },
];

const portofoliu = [
  { src: "/images/dragos/renovari-3.jpeg", label: "Cluj-Napoca" },
  { src: "/images/projects/tigla-metalica-4.webp", label: "Turda" },
  { src: "/images/projects/mansardari-4.jpeg", label: "Dej" },
  { src: "/images/dragos/poza-3.jpeg", label: "Huedin" },
];

export default function ClujPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-[#051D3E] text-white pt-16 pb-0 overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/dragos/renovari-2.jpeg" alt="Acoperisuri Cluj" fill className="object-cover" priority sizes="100vw" />
          <div className="absolute inset-0 bg-[#051D3E]/75" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 pb-24 pt-8">
          <nav className="flex items-center gap-2 text-sm text-white/60 mb-6">
            <Link href="/" className="hover:text-white transition-colors">Acasa</Link>
            <span className="text-white/40">›</span>
            <span className="text-white/60">Judete</span>
            <span className="text-white/40">›</span>
            <span className="text-white">Cluj</span>
          </nav>
          <div className="flex items-center gap-2 mb-5">
            <span className="inline-flex items-center gap-1.5 bg-white/15 border border-white/20 text-white/90 text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full">
              <MapPin size={11} /> Judetul Cluj
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-5 max-w-2xl">
            Acoperisuri in<br />Judetul Cluj
          </h1>
          <div className="w-12 h-1 bg-[#E53935] rounded mb-6" />
          <p className="text-white/75 text-lg leading-relaxed mb-8 max-w-xl">
            Servicii profesionale de constructie, reparatii si renovare acoperisuri in judetul Cluj. Evaluare gratuita, garantie scrisa, echipe specializate.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a href="tel:0754456844" className="inline-flex items-center justify-center gap-2 bg-white text-[#051D3E] px-7 py-3.5 rounded-full font-bold text-sm hover:bg-gray-100 transition-colors">
              <Phone size={16} /> 0754 456 844
            </a>
            <Link href="/contact" className="inline-flex items-center justify-center gap-2 bg-white/15 border border-white/30 text-white px-7 py-3.5 rounded-full font-semibold text-sm hover:bg-white/25 transition-all">
              Cere Oferta Gratuita <ArrowRight size={15} />
            </Link>
          </div>
        </div>
        <div className="relative h-16">
          <svg viewBox="0 0 1440 64" preserveAspectRatio="none" className="absolute bottom-0 w-full h-16">
            <path d="M0,32 C360,80 1080,0 1440,32 L1440,64 L0,64 Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-white pb-14 pt-14">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((s) => (
              <div key={s.label} className="flex flex-col items-center text-center">
                <div className="w-14 h-14 rounded-full bg-red-50 text-[#E53935] flex items-center justify-center mb-3 shadow-sm">
                  <s.icon size={24} />
                </div>
                <div className="text-3xl font-extrabold text-gray-900 mb-0.5">{s.value}</div>
                <div className="text-xs text-gray-500 font-medium leading-tight">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Despre + orase */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <span className="text-[#0d1547] font-semibold text-sm uppercase tracking-wider block mb-3">Zona noastra de activitate</span>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 leading-tight">
                Servicii complete de acoperisuri in Cluj
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed text-sm">
                <p>Acoperim intregul judet Cluj cu servicii complete de constructie, reparatii si renovare acoperisuri. Echipele noastre sunt mobile si se deplaseaza in orice localitate din judet.</p>
                <p>Lucram cu materiale originale de la producatori de top — Bilka, Lindab, Bramac, Tondach — si oferim garantie scrisa pe toate lucrarile executate.</p>
              </div>
              <ul className="mt-6 space-y-2">
                {[
                  "Deplasare gratuita pentru evaluare",
                  "Materiale originale certificate",
                  "Echipe specializate si experimentate",
                  "Garantie scrisa pe toate lucrarile",
                  "Oferta detaliata fara obligatii",
                  "Interventii de urgenta 24/7",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <CheckCircle2 size={15} className="text-[#0d1547] shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-5">
              <div className="bg-white rounded-2xl border border-gray-200 p-6">
                <h3 className="font-bold text-gray-900 text-sm uppercase tracking-wide mb-4 flex items-center gap-2">
                  <MapPin size={14} className="text-[#0d1547]" /> Localitati deservite
                </h3>
                <div className="flex flex-wrap gap-2">
                  {orase.map((oras) => (
                    <span key={oras} className="bg-[#0d1547]/8 text-[#0d1547] text-xs font-semibold px-3 py-1.5 rounded-full">
                      {oras}
                    </span>
                  ))}
                  <span className="bg-gray-100 text-gray-500 text-xs font-medium px-3 py-1.5 rounded-full">+ toate localitatile</span>
                </div>
              </div>
              <div className="bg-[#051D3E] rounded-2xl p-6 text-white">
                <h3 className="font-bold text-lg mb-2">Evaluare Gratuita in Cluj</h3>
                <p className="text-white/60 text-sm mb-5">Venim la fata locului oriunde in judet. Fara costuri de deplasare, fara obligatii.</p>
                <a href="tel:0754456844" className="flex items-center justify-center gap-2 bg-white text-[#051D3E] py-3 rounded-xl font-bold text-sm hover:bg-gray-100 transition-colors mb-3">
                  <Phone size={15} /> 0754 456 844
                </a>
                <a href="https://wa.me/40754456844" target="_blank" rel="noopener noreferrer" className="block text-center bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl font-semibold text-sm transition-colors">
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portofoliu */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <span className="text-[#0d1547] font-semibold text-sm uppercase tracking-wider block mb-3">Lucrari executate</span>
            <h2 className="text-3xl font-bold text-gray-900">Portofoliu Cluj</h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {portofoliu.map((item, i) => (
              <div key={i} className={`relative rounded-2xl overflow-hidden group ${i === 0 ? "col-span-2 h-72" : "h-52"}`}>
                <Image src={item.src} alt={`Acoperis ${item.label}`} fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="(max-width: 640px) 50vw, 25vw" />
                <div className="absolute inset-0 bg-[#051D3E]/30 group-hover:bg-[#051D3E]/10 transition-colors" />
                <span className="absolute bottom-3 left-3 bg-white/20 backdrop-blur-sm border border-white/30 text-white text-xs font-semibold px-3 py-1 rounded-full flex items-center gap-1">
                  <MapPin size={10} /> {item.label}
                </span>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/portofoliu" className="inline-flex items-center gap-2 text-[#0d1547] font-semibold text-sm hover:gap-3 transition-all">
              Vezi toate lucrarile <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* Servicii */}
      <section className="py-20 bg-[#0d1547]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-white/60 font-semibold text-sm uppercase tracking-wider block mb-3">Ce oferim</span>
            <h2 className="text-3xl font-bold text-white">Servicii in Judetul Cluj</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {servicii.map((s) => (
              <Link key={s.slug} href={`/servicii/${s.slug}`} className="bg-white/10 border border-white/15 rounded-2xl p-5 hover:bg-white/20 transition-colors group flex items-center gap-3">
                <ArrowRight size={16} className="text-white/50 group-hover:text-white transition-colors shrink-0" />
                <span className="text-white text-sm font-medium">{s.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Alte judete */}
      <section className="py-14 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-8">
            <span className="text-[#0d1547] font-semibold text-sm uppercase tracking-wider block mb-2">Activitate nationala</span>
            <h2 className="text-2xl font-bold text-gray-900">Activi si in alte judete</h2>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {alteJudete.map((j) => (
              <Link key={j.slug} href={`/judete/${j.slug}`} className="inline-flex items-center gap-1.5 bg-white border border-gray-200 hover:border-[#0d1547]/30 hover:shadow-sm text-gray-700 hover:text-[#0d1547] text-sm font-medium px-4 py-2 rounded-full transition-all">
                <MapPin size={12} /> {j.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/cta.webp" alt="Acoperisuri Cluj" fill className="object-cover" sizes="100vw" />
          <div className="absolute inset-0 bg-[#0d1547]/85" />
        </div>
        <div className="relative max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ai nevoie de un acoperis in Cluj?
          </h2>
          <p className="text-white/70 text-lg mb-10">
            Venim rapid, lucram serios, garantam rezultatul.
          </p>
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
