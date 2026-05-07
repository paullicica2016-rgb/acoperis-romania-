import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import { CheckCircle2, ShieldCheck, Clock, Users, Award, Home, Calendar, Hammer, Phone, FileText, Package, Wrench, BadgeCheck } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Despre Noi - Firma Montaj Acoperisuri cu 15+ Ani Experienta",
  description: "Reparatii Pro - firma acreditata cu 15+ ani experienta in montaj acoperisuri, reparatii, renovari. Echipa specializata, materiale premium Bilka, Lindab, Wetterbest. Garantie lucrari.",
};

const stats = [
  { icon: Home, value: "300+", label: "Acoperisuri Finalizate" },
  { icon: Users, value: "250+", label: "Clienti Multumiti" },
  { icon: Calendar, value: "15+", label: "Ani Experienta" },
  { icon: Award, value: "100%", label: "Garantie Lucrari" },
];

const values = [
  {
    icon: ShieldCheck,
    title: "Materiale Premium",
    desc: "Colaboram exclusiv cu producatori de renume — Bilka, Lindab, Wetterbest, Bramac, Tondach — pentru a garanta durabilitatea fiecarei lucrari.",
  },
  {
    icon: Clock,
    title: "Raspuns Rapid",
    desc: "Echipele noastre mobile sunt pregatite sa intervina in cel mai scurt timp posibil, inclusiv in situatii de urgenta 24/7.",
  },
  {
    icon: Users,
    title: "Echipa Specializata",
    desc: "Mesteri cu experienta vasta in dulgherie, tinichigerie, hidroizolatie si montaj de invelitori diverse.",
  },
  {
    icon: Hammer,
    title: "Servicii Complete",
    desc: "De la evaluarea initiala si proiectare, pana la achizitia materialelor si executia completa — totul intr-un singur loc.",
  },
  {
    icon: CheckCircle2,
    title: "Garantie pe Lucrari",
    desc: "Fiecare proiect beneficiaza de garantie atat pe materiale, cat si pe manopera. Ne asumam responsabilitatea fiecarui detaliu.",
  },
  {
    icon: Award,
    title: "Preturi Competitive",
    desc: "Parteneriate directe cu producatorii ne permit sa oferim preturi avantajoase fara compromisuri la calitate.",
  },
];

const steps = [
  { icon: Phone, nr: "01", title: "Evaluare Gratuita", desc: "Te contactam, stabilim o vizita si evaluam acoperisul la fata locului, fara costuri." },
  { icon: FileText, nr: "02", title: "Oferta Personalizata", desc: "Intocmim o oferta clara si detaliata, transparenta pe materiale si manopera." },
  { icon: Package, nr: "03", title: "Achizitie Materiale", desc: "Procuram materialele de la partenerii nostri la preturi avantajoase si le transportam la santier." },
  { icon: Wrench, nr: "04", title: "Executie Lucrare", desc: "Echipa specializata executa lucrarea in termenul agreat, cu atentie la fiecare detaliu tehnic." },
  { icon: BadgeCheck, nr: "05", title: "Garantie & Suport", desc: "La final primesti certificat de garantie si suport post-executie pentru orice intrebare." },
];

const partners = [
  "Bilka Steel", "Lindab", "Wetterbest", "Bramac",
  "Tondach", "Velux", "Gerard", "Ruukki",
];

export default function DespreNoi() {
  return (
    <>
      {/* ── Hero custom cu val ── */}
      <section className="relative bg-[#051D3E] text-white pt-16 pb-0 overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/hero-reparatii.webp" alt="Despre Reparatii Pro" fill className="object-cover" priority sizes="100vw" />
          <div className="absolute inset-0 bg-[#051D3E]/70" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 pb-20">
          <nav className="flex items-center gap-2 text-sm text-white/60 mb-6">
            <Link href="/">Acasa</Link>
            <span className="text-white/40">›</span>
            <span className="text-white">Despre Noi</span>
          </nav>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-4 max-w-xl">
            Despre<br />Reparatii Pro
          </h1>
          <div className="w-12 h-1 bg-[#E53935] rounded mb-5" />
          <p className="text-white/75 text-lg max-w-xl leading-relaxed">
            Cu peste 15 ani de experienta in domeniul constructiilor, oferim solutii profesionale pentru orice tip de acoperis.
          </p>
        </div>
        {/* Val alb */}
        <div className="relative h-16">
          <svg viewBox="0 0 1440 64" preserveAspectRatio="none" className="absolute bottom-0 w-full h-16" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,32 C360,80 1080,0 1440,32 L1440,64 L0,64 Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* ── Stats ── */}
      <section className="bg-white pb-12">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-red-50 text-[#E53935] flex items-center justify-center mb-4 shadow-sm">
                  <stat.icon size={28} />
                </div>
                <div className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-1">{stat.value}</div>
                <div className="text-sm text-gray-500 font-medium leading-tight">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Povestea Noastra ── */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4">

          {/* 2 poze mici deasupra */}
          <div className="grid grid-cols-2 gap-4 mb-10">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-md">
              <Image src="/images/dragos/despre-1.jpeg" alt="Lucrare acoperis 1" fill className="object-cover" sizes="50vw" />
            </div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-md">
              <Image src="/images/dragos/despre-2.jpeg" alt="Lucrare acoperis 2" fill className="object-cover" sizes="50vw" />
            </div>
          </div>

          {/* Card chenar */}
          <div className="bg-white rounded-3xl border border-gray-200 shadow-sm overflow-hidden">
            {/* Header card */}
            <div className="bg-[#0d1547] px-8 py-6">
              <span className="text-white/60 font-semibold text-xs uppercase tracking-widest block mb-1">Povestea noastra</span>
              <h2 className="text-2xl md:text-3xl font-bold text-white">15+ Ani de Experienta in Acoperisuri</h2>
            </div>

            {/* Body */}
            <div className="grid lg:grid-cols-2 gap-0 divide-y lg:divide-y-0 lg:divide-x divide-gray-100">
              {/* Text stanga */}
              <div className="p-8 space-y-5">
                <p className="text-gray-600 leading-relaxed">
                  Reparatii Pro a fost fondata din dorinta de a oferi servicii de acoperisuri la cele mai inalte standarde de calitate. De-a lungul celor peste 15 ani de activitate, am acumulat o experienta vasta in toate tipurile de lucrari — de la constructia acoperisurilor noi, pana la reparatii complexe si interventii de urgenta.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Echipa noastra este formata din mesteri cu ani de practica in dulgherie, tinichigerie, montaj de invelitori si sisteme pluviale. Fiecare lucraree este executata cu atentie la detalii si respect fata de client.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Lucram cu materiale de la producatori de top: Bilka Steel, Lindab, Wetterbest, Bramac, Tondach, Velux, Gerard si Ruukki. Parteneriatele directe ne permit preturi competitive si garantie extinsa.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Activam in Hunedoara si 12 judete din Romania, cu servicii complete: evaluare gratuita, proiectare, materiale, transport, montaj si garantie post-executie.
                </p>
              </div>

              {/* Lista dreapta */}
              <div className="p-8">
                <h3 className="text-lg font-bold text-gray-900 mb-5">De ce sa ne alegeti?</h3>
                <ul className="space-y-3">
                  {[
                    "Experienta de peste 15 ani in domeniu",
                    "Echipa de mesteri profesionisti si dedicati",
                    "Materiale premium de la branduri de top",
                    "Servicii complete — de la materiale la manopera",
                    "Garantie pe toate lucrarile executate",
                    "Preturi competitive cu reduceri la sisteme complete",
                    "Interventii de urgenta 24/7",
                    "Consultanta gratuita si oferta personalizata",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle2 size={18} className="text-[#0d1547] shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Procesul Nostru ── */}
      <section className="py-20 bg-[#0d1547]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <span className="inline-block text-white/60 font-semibold text-sm uppercase tracking-wider mb-3">
              Cum lucram
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Procesul Nostru de Lucru
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {steps.map((step) => {
              const Icon = step.icon;
              return (
                <div key={step.nr} className="bg-white/10 border border-white/20 rounded-2xl p-6 flex flex-col gap-4 hover:bg-white/15 transition-colors">
                  <div className="flex items-center justify-between">
                    <span className="text-3xl font-extrabold text-white/20">{step.nr}</span>
                    <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center">
                      <Icon size={18} className="text-white" />
                    </div>
                  </div>
                  <h3 className="font-bold text-white text-base">{step.title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed">{step.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Valorile Firmei ── */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block text-[#0d1547] font-semibold text-sm uppercase tracking-wider mb-3">
              Valorile noastre
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Ce Ne Defineste
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v) => (
              <div key={v.title} className="bg-white rounded-2xl p-8 border border-gray-200 hover:border-[#0d1547]/30 hover:shadow-md transition-all">
                <div className="w-14 h-14 rounded-xl bg-[#0d1547]/10 text-[#0d1547] flex items-center justify-center mb-5">
                  <v.icon size={28} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{v.title}</h3>
                <p className="text-gray-500 leading-relaxed text-sm">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Parteneri ── */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <span className="inline-block text-[#0d1547] font-semibold text-sm uppercase tracking-wider mb-3">
              Parteneri de incredere
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              Materiale de la Branduri de Top
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {partners.map((p) => (
              <div key={p} className="flex items-center justify-center border border-gray-200 rounded-2xl py-6 px-4 hover:border-[#0d1547]/30 hover:shadow-sm transition-all">
                <span className="font-bold text-[#0d1547] text-lg tracking-tight">{p}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Final ── */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/cta.webp" alt="Echipa Reparatii Pro" fill className="object-cover" sizes="100vw" />
          <div className="absolute inset-0 bg-[#0d1547]/85" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Pregatiti pentru un Acoperis Nou?
          </h2>
          <p className="text-white/70 text-lg mb-10 max-w-2xl mx-auto">
            Contactati-ne astazi pentru o consultatie gratuita si o oferta personalizata. Echipa noastra va sta la dispozitie.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:0734704026"
              className="inline-flex items-center justify-center gap-2 bg-white text-[#0d1547] px-8 py-4 rounded-full text-lg font-bold hover:bg-gray-100 transition-colors"
            >
              Apeleaza: 0734 704 026
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-white/15 border border-white/30 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/25 transition-all"
            >
              Formular Contact
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
