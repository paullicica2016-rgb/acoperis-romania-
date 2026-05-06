import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import { CheckCircle2, ShieldCheck, Clock, Users, Award, Home, Calendar, Hammer } from "lucide-react";
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
    desc: "Colaboram exclusiv cu producatori de renume -- Bilka, Lindab, Wetterbest, Bramac, Tondach -- pentru a garanta durabilitatea fiecarei lucrari. Fiecare material este atent selectat si testat inainte de montaj.",
  },
  {
    icon: Clock,
    title: "Raspuns Rapid",
    desc: "Echipele noastre mobile sunt pregatite sa intervina in cel mai scurt timp posibil, inclusiv in situatii de urgenta. Disponibilitate 24/7 pentru deteriorari cauzate de intemperii.",
  },
  {
    icon: Users,
    title: "Echipa Specializata",
    desc: "Meseriile noastre sunt performate de mestesugari cu experienta vasta, formati in dulgherie, tinichigerie, hidroizolatie si montaj de invelitori diverse -- de la tigla ceramica la panouri sandwich.",
  },
  {
    icon: Hammer,
    title: "Servicii Complete",
    desc: "De la evaluarea initiala si proiectare, pana la achizitia materialelor si executia completa -- oferim tot ce aveti nevoie intr-un singur loc, fara batai de cap.",
  },
  {
    icon: CheckCircle2,
    title: "Garantie pe Lucrari",
    desc: "Fiecare proiect beneficiaza de garantie atat pe materiale, cat si pe manopera. Suntem siguri de calitatea muncii noastre si ne asumam responsabilitatea fiecarui detaliu.",
  },
  {
    icon: Award,
    title: "Preturi Competitive",
    desc: "Datorita parteneriatelor directe cu producatorii, oferim preturi avantajoase fara a face compromisuri la calitate. Reduceri de 15-25% la sisteme complete de acoperis.",
  },
];

export default function DespreNoi() {
  return (
    <>
      <PageHero
        title="Despre Reparatii Pro"
        subtitle="Cu peste 15 ani de experienta in domeniul constructiilor, oferim solutii profesionale pentru orice tip de acoperis."
        image="/images/about.webp"
        breadcrumbs={[{ label: "Despre Noi" }]}
      />

      {/* Stats */}
      <section className="relative -mt-16 z-10 max-w-6xl mx-auto px-4">
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 md:p-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-accent/10 text-accent mb-4">
                  <stat.icon size={28} />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-500 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-3">
              Povestea noastra
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              15+ Ani de Experienta in Acoperisuri
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              <p className="text-gray-600 text-lg leading-relaxed">
                Reparatii Pro a fost fondata din dorinta de a oferi servicii de acoperisuri la cele mai inalte standarde de calitate. De-a lungul celor peste 15 ani de activitate, am acumulat o experienta vasta in toate tipurile de lucrari -- de la constructia acoperisurilor noi pentru case, blocuri si hale industriale, pana la reparatii complexe si interventii de urgenta.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Echipa noastra este formata din mesteri cu ani de practica in dulgherie, tinichigerie, montaj de invelitori si sisteme pluviale. Fiecare membru al echipei este instruit sa respecte normele de siguranta si sa livreze lucrari de inalta calitate, indiferent de complexitatea proiectului.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Lucram cu materiale de la cei mai apreciati producatori din industrie -- Bilka Steel, Lindab, Wetterbest, Bramac, Tondach, Velux, Gerard si Ruukki. Parteneriatele noastre directe cu acesti producatori ne permit sa oferim preturi competitive, reduceri substantiale si garantie extinsa pe materiale.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Activam in Bucuresti si in 13 judete din sudul si sud-estul Romaniei, oferind servicii complete care includ evaluare gratuita, proiectare, achizitie materiale, transport, montaj si garantie post-executie. Fie ca aveti nevoie de un acoperis nou, de o renovare completa sau de o reparatie urgenta, suntem pregatiti sa va ajutam.
              </p>
            </div>

            <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl p-8 border border-accent/10">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">De ce sa ne alegeti?</h3>
              <ul className="space-y-4">
                {[
                  "Experienta de peste 15 ani in domeniu",
                  "Echipa de mesteri profesionisti si dedicati",
                  "Materiale premium de la branduri de top",
                  "Servicii complete -- de la materiale la manopera",
                  "Garantie pe toate lucrarile executate",
                  "Preturi competitive cu reduceri la sisteme complete",
                  "Interventii de urgenta 24/7",
                  "Consultanta gratuita si oferta personalizata",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 size={20} className="text-accent shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-3">
              Valorile noastre
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Ce Ne Defineste
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v) => (
              <div
                key={v.title}
                className="bg-white rounded-2xl p-8 border border-gray-100 hover:border-accent/20 transition-colors"
              >
                <div className="w-14 h-14 rounded-xl bg-accent/10 text-accent flex items-center justify-center mb-5">
                  <v.icon size={28} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{v.title}</h3>
                <p className="text-gray-500 leading-relaxed text-sm">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/cta.webp"
            alt="Echipa Reparatii Pro la lucru"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-[#051D3E]/80" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                Pregatiti pentru un Acoperis Nou?
              </h2>
              <p className="text-gray-300 text-lg mb-10 max-w-2xl">
                Contactati-ne astazi pentru o consultatie gratuita si o oferta personalizata. Echipa noastra va sta la dispozitie.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:0734704026"
                  className="btn-accent inline-flex items-center justify-center gap-2 text-white px-8 py-4 rounded-full text-lg font-semibold"
                >
                  Apeleaza: 0734 704 026
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/20 transition-all"
                >
                  Formular Contact
                </Link>
              </div>
            </div>
            <div className="relative h-80 rounded-2xl overflow-hidden hidden lg:block">
              <Image
                src="/images/cta-man.webp"
                alt="Specialist Reparatii Pro"
                fill
                className="object-cover"
                sizes="50vw"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
