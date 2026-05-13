import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, Phone, ArrowRight } from "lucide-react";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "Invelitori pentru Acoperisuri - Acoperisuri Pro",
  description: "Montaj tigla ceramica, metalica, tabla faltuita, sindrila bituminoasa. Branduri Bilka, Lindab, Bramac, Tondach. Garantie completa, evaluare gratuita.",
  alternates: { canonical: "https://montajacoperispro.ro/servicii/invelitori-pentru-acoperisuri" },
};

const lucrari = [
  "Montaj tigla metalica — Bilka, Lindab, Wetterbest",
  "Montaj tigla ceramica — Bramac, Tondach",
  "Tabla faltuita pentru acoperisuri cu pante mici",
  "Tabla cutata pentru hale si cladiri industriale",
  "Sindrila bituminoasa — IKO, Tegola",
  "Panouri sandwich termoizolante",
  "Membrane hidroizolante si anticondens",
  "Izolatie termica vata minerala sau poliuretan",
  "Sisteme de fixare si prindere specifice fiecarui tip",
  "Montaj jgheaburi si burlane coordonat cu invelitoarea",
  "Coame, pazii si elemente de finisaj",
  "Consultanta gratuita pentru alegerea invelitorii",
];

const otherServices = [
  { slug: "constructie-acoperisuri-noi", label: "Constructie Acoperisuri Noi" },
  { slug: "accesorii-si-sisteme-de-montaj", label: "Accesorii si Montaj" },
  { slug: "reparatii-acoperisuri", label: "Reparatii Acoperisuri" },
  { slug: "renovari-si-modernizari", label: "Renovari si Modernizari" },
  { slug: "mansardari-si-extinderi", label: "Mansardari si Extinderi" },
];

export default function InvelitoriAcoperisuri() {
  return (
    <>
      <BreadcrumbSchema items={[{"name":"Acasa","url":"https://montajacoperispro.ro/"},{"name":"Servicii","url":"https://montajacoperispro.ro/servicii"},{"name":"Invelitori Acoperisuri","url":"https://montajacoperispro.ro/servicii/invelitori-pentru-acoperisuri"}]} />
      {/* Hero */}
      <section className="relative bg-[#051D3E] text-white pt-16 pb-0 overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/projects/tigla-metalica-2-new.jpeg" alt="Invelitori acoperisuri" fill className="object-cover" priority sizes="100vw" />
          <div className="absolute inset-0 bg-[#051D3E]/78" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 pb-24 pt-8">
          <nav className="flex items-center gap-2 text-sm text-white/60 mb-6">
            <Link href="/" className="hover:text-white transition-colors">Acasa</Link>
            <span className="text-white/40">›</span>
            <Link href="/servicii" className="hover:text-white transition-colors">Servicii</Link>
            <span className="text-white/40">›</span>
            <span className="text-white">Invelitori pentru Acoperisuri</span>
          </nav>
          <div className="max-w-2xl">
            <span className="inline-block bg-white/15 border border-white/20 text-white/90 text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-5">Toate tipurile de invelitori</span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-5">Invelitori<br />pentru Acoperisuri</h1>
            <div className="w-12 h-1 bg-[#E53935] rounded mb-6" />
            <p className="text-white/75 text-lg leading-relaxed mb-8">
              Tigla ceramica, tigla metalica, tabla faltuita, sindrila — montam orice tip de invelitoare cu materiale originale de la producatori de top si garantie scrisa.
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
        </div>
        <div className="relative h-16">
          <svg viewBox="0 0 1440 64" preserveAspectRatio="none" className="absolute bottom-0 w-full h-16">
            <path d="M0,32 C360,80 1080,0 1440,32 L1440,64 L0,64 Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-10">
              <div>
                <span className="text-[#0d1547] font-semibold text-sm uppercase tracking-wider block mb-3">Ce montam</span>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-5">Invelitoarea potrivita pentru orice tip de acoperis</h2>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Alegerea invelitorii este una dintre cele mai importante decizii pentru un acoperis. Fiecare material are caracteristici diferite — greutate, durabilitate, estetica, pret. Te ajutam sa alegi varianta potrivita pentru structura ta si bugetul disponibil, apoi o montam corect, cu materiale originale si garantie scrisa.
                </p>
              </div>

              <div className="bg-gray-50 rounded-2xl p-8">
                <h3 className="font-bold text-gray-900 text-lg mb-6">Lucrari executate</h3>
                <ul className="grid sm:grid-cols-2 gap-3">
                  {lucrari.map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <CheckCircle2 size={15} className="text-[#0d1547] shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-5">
              <div className="bg-[#051D3E] rounded-2xl p-6 text-white">
                <h3 className="font-bold text-lg mb-2">Evaluare Gratuita</h3>
                <p className="text-white/60 text-sm mb-5">Venim la fata locului, evaluam structura si iti recomandam invelitoarea potrivita.</p>
                <a href="tel:0754456844" className="flex items-center justify-center gap-2 bg-white text-[#051D3E] py-3 rounded-xl font-bold text-sm hover:bg-gray-100 transition-colors mb-3">
                  <Phone size={15} /> 0754 456 844
                </a>
                <a href="https://wa.me/40754456844" target="_blank" rel="noopener noreferrer" className="block text-center bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl font-semibold text-sm transition-colors">WhatsApp</a>
              </div>
              <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6">
                <h3 className="font-bold text-gray-900 text-sm uppercase tracking-wide mb-4">Alte Servicii</h3>
                <ul className="space-y-1">
                  {otherServices.map((s) => (
                    <li key={s.slug}>
                      <Link href={`/servicii/${s.slug}`} className="flex items-center gap-2 text-sm text-gray-600 hover:text-[#0d1547] transition-colors py-2 border-b border-gray-100 last:border-0">
                        <ArrowRight size={13} className="text-[#0d1547] shrink-0" /> {s.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Galerie portofoliu */}
      <section className="pb-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-3 gap-4">
            {[
              "/images/projects/tigla-metalica-2-new.jpeg",
              "/images/projects/tigla-ceramica-vila.jpeg",
              "/images/dragos/poza-1.jpeg",
            ].map((src, i) => (
              <div key={i} className="relative h-52 rounded-2xl overflow-hidden group">
                <Image src={src} alt={`Invelitoare acoperis ${i + 1}`} fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="33vw" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="py-20 bg-[#0d1547]">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Vrei o invelitoare noua?</h2>
          <p className="text-white/70 text-lg mb-10">Oferta gratuita la fata locului. Lucram cu materiale originale si garantie scrisa.</p>
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
