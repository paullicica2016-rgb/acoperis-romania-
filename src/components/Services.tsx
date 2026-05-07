"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const features = [
  {
    title: "Servicii complete pentru acoperisuri",
    desc: "Pachet complet de montaj si reparatii, care include toate etapele necesare.",
  },
  {
    title: "Sisteme premium pentru acoperisuri",
    desc: "Materiale certificate de la producatori de top pentru calitate superioara.",
  },
  {
    title: "Specializati in toate invelitorile",
    desc: "Tigla ceramica, metalica, tabla faltuita, sindrila bituminoasa.",
  },
  {
    title: "Interventii rapide urgenta 24/7",
    desc: "Asiguram interventii de urgenta pentru acoperisuri avariate. Disponibili 24/7.",
  },
];

const tabs = [
  {
    label: "Constructie Acoperisuri Noi",
    slug: "constructie-acoperisuri-noi",
    badge: "Montaj Acoperisuri Noi",
    title: "Constructie acoperisuri noi",
    desc: "Executam constructia completa a acoperisurilor pentru case, cladiri comerciale si spatii industriale, respectand cele mai inalte standarde tehnice. De la structura de rezistenta (sarpanta din lemn sau metal), pana la alegerea si montajul sistemului de invelitoare, ne ocupam de fiecare etapa cu atentie la detalii.",
    images: [
      "/images/dragos/poza-1.jpeg",
      "/images/dragos/poza-2.jpeg",
      "/images/dragos/poza-5.jpeg",
      "/images/dragos/acoperisuri-noi.jpeg",
    ],
  },
  {
    label: "Invelitori pentru Acoperisuri",
    slug: "invelitori-pentru-acoperisuri",
    badge: "Invelitori pentru Acoperisuri",
    title: "Invelitori pentru acoperisuri",
    desc: "Montam toate tipurile de invelitori, asigurand protectie, durabilitate si estetica superioara pentru orice tip de constructie. Lucram cu materiale diverse – tigla ceramica, tigla metalica, tabla faltuita, tabla cutata si sindrila bituminoasa.",
    images: [
      "/images/projects/tigla-ceramica-2.webp",
      "/images/projects/tigla-metalica-3.webp",
      "/images/projects/tabla-faltuita-1.webp",
      "/images/projects/sindrila-1.webp",
    ],
  },
  {
    label: "Accesorii si Sisteme de Montaj",
    slug: "accesorii-si-sisteme-de-montaj",
    badge: "Accesorii si Sisteme de Montaj",
    title: "Accesorii si Sisteme de Montaj",
    desc: "Montam accesorii esentiale pentru functionarea optima a acoperisului: jgheaburi si burlane, parazapezi, dolii, coame, aerisiri, elemente de tinichigerie si sisteme de prindere specifice fiecarui tip de invelitoare.",
    images: [
      "/images/projects/accesorii-1.jpeg",
      "/images/projects/accesorii-2.jpeg",
      "/images/projects/accesorii-3.jpeg",
    ],
  },
  {
    label: "Renovari Acoperisuri",
    slug: "renovari-si-modernizari",
    badge: "Renovari si Modernizare",
    title: "Renovari acoperisuri",
    desc: "Executam lucrari complete de renovare a acoperisurilor deteriorate, indiferent de starea actuala a structurii sau tipul invelitorii existente. Renovarea este o solutie eficienta cand nu e necesara reconstructia completa.",
    images: [
      "/images/dragos/renovari-1.jpeg",
      "/images/dragos/renovari-2.jpeg",
      "/images/dragos/renovari-3.jpeg",
      "/images/dragos/renovari-4.jpeg",
    ],
  },
  {
    label: "Mansardari si Extinderi",
    slug: "mansardari-si-extinderi",
    badge: "Mansardari si Extinderi",
    title: "Mansardari si Extinderi",
    desc: "Transformam podurile neutilizate in spatii locuibile moderne sau extindem acoperisurile existente pentru a crea suprafete suplimentare functionale. Experienta solida, atentie la detalii tehnice si respectarea normativelor.",
    images: [
      "/images/projects/mansardari-1.jpeg",
      "/images/projects/mansardari-2.jpeg",
      "/images/projects/mansardari-3.jpeg",
      "/images/projects/mansardari-4.jpeg",
    ],
  },
];

export default function Services() {
  const [active, setActive] = useState(0);
  const tab = tabs[active];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">

        {/* Dark feature panel - numbered cards with red top accent */}
        <div className="bg-gray-100 rounded-2xl px-5 py-8 md:px-8 md:py-10 lg:p-12 mb-20">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
            {features.map((f, i) => (
              <div
                key={i}
                className="relative bg-white rounded-xl p-6 border border-gray-200 border-t-[3px] border-t-[#0d1547] hover:shadow-md transition-shadow"
              >
                <div className="text-[#0d1547] font-extrabold text-sm tracking-[0.2em] mb-3">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="font-bold text-[#0d1547] mb-3 text-base leading-tight">
                  {f.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Tabbed services section */}
        <div className="text-center mb-10">
          <span className="text-[#0d1547] font-semibold text-sm uppercase tracking-wider mb-2 block">
            Constructie Acoperisuri
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#051D3E] mb-3">
            Servicii pentru montaj si reparatii acoperisuri
          </h2>
          <Link href="/servicii" className="inline-flex items-center gap-2 text-[#0d1547] font-semibold text-sm hover:gap-3 transition-all mt-2">
            Toate serviciile <ArrowRight size={16} />
          </Link>
        </div>

        {/* Tab buttons */}
        <div className="flex flex-wrap gap-2 justify-center mb-10">
          {tabs.map((t, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`px-5 py-2.5 rounded-lg text-sm font-medium transition-all ${
                active === i
                  ? "bg-accent text-white shadow-md"
                  : "bg-[#f4f4f4] text-[#212121] hover:bg-gray-200"
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* Tab content - images left, text right */}
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div className="grid grid-cols-2 gap-3">
            {tab.images.map((src, i) => (
              <div key={i} className="relative aspect-square rounded-xl overflow-hidden">
                <Image
                  src={src}
                  alt={tab.title}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-4">
            <span className="text-[#0d1547] font-semibold text-sm uppercase tracking-wider">
              {tab.badge}
            </span>
            <h3 className="text-2xl md:text-3xl font-bold text-[#051D3E] leading-tight">
              {tab.title}
            </h3>
            <p className="text-[#212121]/80 leading-relaxed">{tab.desc}</p>
            <div className="flex gap-3 flex-wrap mt-2">
              <Link
                href={`/servicii/${tab.slug}`}
                className="btn-navy inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-sm"
              >
                Vezi serviciu <ArrowRight size={16} />
              </Link>
              <a
                href="tel:0754456844"
                className="btn-accent inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-sm"
              >
                Apeleaza Acum
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
