import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, Phone, ArrowRight, AlertTriangle, RefreshCcw, ShieldCheck, Hammer } from "lucide-react";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "Demolari si Reconstruiri Acoperisuri - Acoperisuri Pro",
  description: "Demolare sigura a acoperisului vechi si reconstructie completa de la zero. Sarpanta noua,, materiale moderne, garantie integrala. Acoperisuri Pro.",
  alternates: { canonical: "https://reparatiipro.ro/servicii/demolari-si-reconstruiri" },
};

const semne = [
  "Infiltratii repetate in ciuda reparatiilor",
  "Sarpanta cu degradare structurala avansata",
  "Invelitoare cu durata de viata depasita",
  "Deformatii vizibile ale structurii de acoperis",
  "Costuri de reparatii care depasesc valoarea acoperisului",
  "Modificare substantiala a arhitecturii cladirii",
];

const etape = [
  { icon: AlertTriangle, nr: "01", title: "Evaluare Tehnica", desc: "Diagnoza completa a starii actuale — stabilim ce trebuie demolat si ce poate fi pastrat." },
  { icon: Hammer, nr: "02", title: "Demolare Controlata", desc: "Demontare sigura cu protejarea structurii cladirii si gestionarea deseurilor conform normelor." },
  { icon: RefreshCcw, nr: "03", title: "Reconstructie", desc: "Sarpanta noua dimensionata la standarde actuale, invelitoare la alegere, izolatie moderna." },
  { icon: ShieldCheck, nr: "04", title: "Predare Completa", desc: "Verificare finala, curatare santier, certificat garantie pe intreaga lucrare." },
];

const otherServices = [
  { slug: "constructie-acoperisuri-noi", label: "Constructie Acoperisuri Noi" },
  { slug: "renovari-si-modernizari", label: "Renovari si Modernizari" },
  { slug: "reparatii-acoperisuri", label: "Reparatii Acoperisuri" },
  { slug: "invelitori-pentru-acoperisuri", label: "Invelitori Acoperisuri" },
];

export default function DemolariReconstruiri() {
  return (
    <>
      <BreadcrumbSchema items={[{"name":"Acasa","url":"https://reparatiipro.ro/"},{"name":"Servicii","url":"https://reparatiipro.ro/servicii"},{"name":"Demolari si Reconstruiri","url":"https://reparatiipro.ro/servicii/demolari-si-reconstruiri"}]} />
      <section className="relative bg-[#051D3E] text-white pt-16 pb-0 overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/tipuri-reparatii.webp" alt="Demolari si reconstruiri acoperisuri" fill className="object-cover" priority sizes="100vw" />
          <div className="absolute inset-0 bg-[#051D3E]/80" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 pb-24 pt-8">
          <nav className="flex items-center gap-2 text-sm text-white/60 mb-6">
            <Link href="/">Acasa</Link><span className="text-white/40">›</span>
            <Link href="/servicii" className="hover:text-white transition-colors">Servicii</Link><span className="text-white/40">›</span>
            <span className="text-white">Demolari si Reconstruiri</span>
          </nav>
          <div className="max-w-2xl">
            <span className="inline-block bg-white/15 border border-white/20 text-white/90 text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-5">Reconstructie completa</span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-5">Demolari si<br />Reconstruiri</h1>
            <div className="w-12 h-1 bg-[#E53935] rounded mb-6" />
            <p className="text-white/75 text-lg leading-relaxed mb-8">
              Cand un acoperis nu mai poate fi salvat, demolam corect si construim de la zero — cu materiale moderne, sarpanta noua si garantie integrala.
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

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-12">

              <div>
                <span className="text-[#0d1547] font-semibold text-sm uppercase tracking-wider block mb-3">Cand e necesar</span>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-5">Uneori, solutia corecta e sa o iei de la zero</h2>
                <div className="space-y-4 text-gray-600 leading-relaxed text-sm">
                  <p>Exista situatii in care reparatiile sau renovarile nu mai au sens economic sau structural. Un acoperis cu sarpanta profund degradata, cu invelitoare complet epuizata sau cu modificari arhitecturale majore necesita demolare si reconstructie.</p>
                  <p>Abordarea corecta inseamna un acoperis proiectat conform standardelor actuale de rezistenta si eficienta energetica — fara problemele acumulate de-a lungul anilor, cu garantie completa si materiale de ultima generatie.</p>
                </div>
              </div>

              {/* Semne */}
              <div className="bg-gray-50 rounded-2xl p-8">
                <h3 className="text-lg font-bold text-gray-900 mb-5">Semne ca e nevoie de reconstructie</h3>
                <ul className="grid sm:grid-cols-2 gap-3">
                  {semne.map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <CheckCircle2 size={16} className="text-[#0d1547] shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Etape */}
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-6">Cum lucram</h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  {etape.map((e) => (
                    <div key={e.nr} className="border border-gray-200 rounded-2xl p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-2xl font-extrabold text-gray-100 leading-none">{e.nr}</span>
                        <div className="w-8 h-8 rounded-lg bg-[#0d1547]/10 text-[#0d1547] flex items-center justify-center">
                          <e.icon size={16} />
                        </div>
                      </div>
                      <h4 className="font-bold text-gray-900 text-sm mb-1">{e.title}</h4>
                      <p className="text-gray-500 text-sm leading-relaxed">{e.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-5">
              <div className="relative h-52 rounded-2xl overflow-hidden">
                <Image src="/images/projects/dulgherie-1.webp" alt="Reconstructie acoperis" fill className="object-cover" sizes="400px" />
              </div>
              <div className="bg-[#051D3E] rounded-2xl p-6 text-white">
                <h3 className="font-bold text-lg mb-2">Evaluare Tehnica</h3>
                <p className="text-white/60 text-sm mb-5">Stabilim impreuna daca e nevoie de demolare sau renovare. Fara costuri.</p>
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

      <section className="py-20 bg-[#0d1547]">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Acoperisul tau are nevoie de un nou inceput?</h2>
          <p className="text-white/70 text-lg mb-10">Evaluam situatia gratuit si iti recomandam solutia corecta — reconstructie sau renovare.</p>
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
