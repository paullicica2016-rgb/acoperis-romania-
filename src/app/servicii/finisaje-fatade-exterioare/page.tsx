import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, Phone, ArrowRight, Paintbrush, Shield, Star, Layers } from "lucide-react";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "Finisaje Fatade Exterioare - Acoperisuri Pro",
  description: "Finisaje fatade exterioare — tencuiala decorativa, placaje, vopsitorie. Materiale certificate, aspect premium, protectie la intemperii. Evaluare gratuita.",
  alternates: { canonical: "https://montajacoperispro.ro/servicii/finisaje-fatade-exterioare" },
};

const tipuri = [
  { icon: Paintbrush, title: "Tencuiala Decorativa", desc: "Tencuieli structurate, mozaicate sau netede in orice culoare. Rezistente la UV, umiditate si cicluri de inghet-dezghet." },
  { icon: Layers, title: "Placaje Exterioare", desc: "Piatra naturala, caramida aparenta, placi ceramice sau panouri compozite. Aspect premium, durabilitate ridicata." },
  { icon: Shield, title: "Vopsitorie Exterioara", desc: "Vopsele lavabile rezistente la intemperii pentru fatade existente. Reimprospatare rapida a aspectului casei." },
  { icon: Star, title: "Izolatie + Finisaj", desc: "Sistem termoizolant complet cu polistiren sau vata bazaltica plus finisaj decorativ la exterior." },
];

const lucrari = [
  "Pregatire suprafata — curatare, grunduire, nivelate",
  "Armare plasa fibra de sticla pentru fisuri",
  "Aplicare tencuiala decorativa structurata",
  "Montaj placaje din piatra sau ceramica",
  "Vopsitorie exterioara cu produse premium",
  "Sisteme termoizolante complete (ETICS)",
  "Finisaje glafuri, pervaze si brise-soleil",
  "Profile decorative si elemente arhitecturale",
];

const otherServices = [
  { slug: "constructie-acoperisuri-noi", label: "Constructie Acoperisuri Noi" },
  { slug: "renovari-si-modernizari", label: "Renovari si Modernizari" },
  { slug: "mansardari-si-extinderi", label: "Mansardari si Extinderi" },
  { slug: "reparatii-acoperisuri", label: "Reparatii Acoperisuri" },
];

export default function FinisajeFatade() {
  return (
    <>
      <BreadcrumbSchema items={[{"name":"Acasa","url":"https://montajacoperispro.ro/"},{"name":"Servicii","url":"https://montajacoperispro.ro/servicii"},{"name":"Finisaje Fatade Exterioare","url":"https://montajacoperispro.ro/servicii/finisaje-fatade-exterioare"}]} />
      <section className="relative bg-[#051D3E] text-white pt-16 pb-0 overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/cta-man.webp" alt="Finisaje fatade exterioare" fill className="object-cover" priority sizes="100vw" />
          <div className="absolute inset-0 bg-[#051D3E]/78" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 pb-24 pt-8">
          <nav className="flex items-center gap-2 text-sm text-white/60 mb-6">
            <Link href="/">Acasa</Link><span className="text-white/40">›</span>
            <Link href="/servicii" className="hover:text-white transition-colors">Servicii</Link><span className="text-white/40">›</span>
            <span className="text-white">Finisaje Fatade Exterioare</span>
          </nav>
          <div className="max-w-2xl">
            <span className="inline-block bg-white/15 border border-white/20 text-white/90 text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-5">Aspect premium</span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-5">Finisaje Fatade<br />Exterioare</h1>
            <div className="w-12 h-1 bg-[#E53935] rounded mb-6" />
            <p className="text-white/75 text-lg leading-relaxed mb-8">
              Fatada este prima impresie a casei tale. Executam finisaje exterioare de calitate — tencuiala decorativa, placaje, vopsitorie — cu materiale certificate si garantie pe lucrare.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a href="tel:0735097539" className="inline-flex items-center justify-center gap-2 bg-white text-[#051D3E] px-7 py-3.5 rounded-full font-bold text-sm hover:bg-gray-100 transition-colors">
                <Phone size={16} /> 0735 097 539
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
                <span className="text-[#0d1547] font-semibold text-sm uppercase tracking-wider block mb-3">De ce conteaza</span>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-5">Un acoperis bun merita o fatada pe masura</h2>
                <div className="space-y-4 text-gray-600 leading-relaxed text-sm">
                  <p>Un acoperis nou pus pe o fatada deteriorata nu pune in valoare investitia. Lucram adesea la proiecte complete — acoperis plus fatada — si stim ca armonia celor doua face diferenta intre o casa si o casa frumoasa.</p>
                  <p>Folosim materiale certificate, rezistente la UV si intemperii, disponibile intr-o gama larga de texturi si culori. Executia corecta a finisajului exterior protejeaza si structura de zidarie, prelungind durata de viata a intregii cladiri.</p>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                {tipuri.map((t) => (
                  <div key={t.title} className="border border-gray-200 rounded-2xl p-6 flex gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[#0d1547]/10 text-[#0d1547] flex items-center justify-center shrink-0">
                      <t.icon size={19} />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-sm mb-1">{t.title}</h4>
                      <p className="text-gray-500 text-sm leading-relaxed">{t.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-gray-50 rounded-2xl p-8">
                <h3 className="text-lg font-bold text-gray-900 mb-6">Ce executam</h3>
                <ul className="grid sm:grid-cols-2 gap-3">
                  {lucrari.map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <CheckCircle2 size={16} className="text-[#0d1547] shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="space-y-5">
              <div className="relative h-52 rounded-2xl overflow-hidden">
                <Image src="/images/projects/tabla-faltuita-2.webp" alt="Finisaje fatada" fill className="object-cover" sizes="400px" />
              </div>
              <div className="bg-[#051D3E] rounded-2xl p-6 text-white">
                <h3 className="font-bold text-lg mb-2">Evaluare Gratuita</h3>
                <p className="text-white/60 text-sm mb-5">Venim sa vedem fatada si iti recomandam solutia potrivita si bugetul necesar.</p>
                <a href="tel:0735097539" className="flex items-center justify-center gap-2 bg-white text-[#051D3E] py-3 rounded-xl font-bold text-sm hover:bg-gray-100 transition-colors mb-3">
                  <Phone size={15} /> 0735 097 539
                </a>
                <a href="https://wa.me/40735097539" target="_blank" rel="noopener noreferrer" className="block text-center bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl font-semibold text-sm transition-colors">WhatsApp</a>
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
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Transforma aspectul casei tale</h2>
          <p className="text-white/70 text-lg mb-10">Consultatie gratuita, materiale certificate, executie cu garantie. Suna-ne azi.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:0735097539" className="inline-flex items-center justify-center gap-2 bg-white text-[#0d1547] px-8 py-4 rounded-full text-lg font-bold hover:bg-gray-100 transition-colors">
              <Phone size={18} /> 0735 097 539
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
