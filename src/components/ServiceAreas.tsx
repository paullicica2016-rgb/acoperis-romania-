"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, Mail } from "lucide-react";

const leftCounties = [
  { name: "Hunedoara", slug: "hunedoara" },
  { name: "Alba", slug: "alba" },
  { name: "Sibiu", slug: "sibiu" },
  { name: "Valcea", slug: "valcea" },
  { name: "Gorj", slug: "gorj" },
  { name: "Mehedinti", slug: "mehedinti" },
];

const rightCounties = [
  { name: "Timis", slug: "timis" },
  { name: "Arad", slug: "arad" },
  { name: "Cluj", slug: "cluj" },
  { name: "Bihor", slug: "bihor" },
  { name: "Bucuresti", slug: "bucuresti" },
  { name: "Ilfov", slug: "ilfov" },
];

/* Pin positions from pixel analysis: Romania fills 0.3%-99.9% of image
   Calculated from GPS coords mapped to actual pixel bounds */
const pins = [
  { name: "Hunedoara", left: 27, top: 60, main: true },
  { name: "Alba", left: 36, top: 53, main: false },
  { name: "Sibiu", left: 46, top: 60, main: false },
  { name: "Valcea", left: 47, top: 67, main: false },
  { name: "Gorj", left: 36, top: 72, main: false },
  { name: "Mehedinti", left: 27, top: 80, main: false },
  { name: "Timis", left: 17, top: 60, main: false },
  { name: "Arad", left: 17, top: 48, main: false },
  { name: "Cluj", left: 33, top: 38, main: false },
  { name: "Bihor", left: 17, top: 36, main: false },
  { name: "Bucuresti", left: 62, top: 82, main: false },
  { name: "Ilfov", left: 64, top: 80, main: false },
];

export default function ServiceAreas() {
  const [hoveredPin, setHoveredPin] = useState<string | null>(null);

  return (
    <section className="py-20 bg-[#f4f4f4]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-[#B91C1C] font-semibold text-sm uppercase tracking-wider mb-2 block">
            Reparatii Pro | Servicii Montaj Acoperis | Romania
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#051D3E] mb-4">
            Judetele in Care Suntem Activi si Desfasuram Lucrari
          </h2>
          <p className="text-[#444444] max-w-3xl mx-auto">
            Oferim <strong>servicii montaj acoperis</strong> in multiple regiuni din tara, prin echipe specializate
            si bine pregatite. Ne deplasam direct la locatia clientului, evaluam lucrarea si
            propunem solutii tehnice personalizate. Indiferent de complexitatea proiectului sau tipul cladirii,
            intervenim prompt si lucram cu atentie la fiecare detaliu.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 items-start mb-12">
          {/* County lists */}
          <div>
            <div className="grid grid-cols-2 gap-x-8 gap-y-2 mb-8">
              <ul className="space-y-2.5">
                {leftCounties.map((c) => (
                  <li key={c.slug}>
                    <Link href={`/judete/${c.slug}`} className="flex items-center gap-2 text-[#212121] hover:text-[#B91C1C] transition-colors font-medium group">
                      <span className="w-1.5 h-1.5 bg-accent rounded-full shrink-0 group-hover:scale-125 transition-transform" />
                      {c.name}
                    </Link>
                  </li>
                ))}
              </ul>
              <ul className="space-y-2.5">
                {rightCounties.map((c) => (
                  <li key={c.slug}>
                    <Link href={`/judete/${c.slug}`} className="flex items-center gap-2 text-[#212121] hover:text-[#B91C1C] transition-colors font-medium group">
                      <span className="w-1.5 h-1.5 bg-accent rounded-full shrink-0 group-hover:scale-125 transition-transform" />
                      {c.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/despre-noi" className="btn-navy inline-flex items-center justify-center px-7 py-3 rounded-lg font-semibold text-sm">
                Despre Noi
              </Link>
              <a href="tel:0734704026" className="btn-accent inline-flex items-center justify-center px-7 py-3 rounded-lg font-semibold text-sm">
                Apeleaza Acum
              </a>
            </div>
          </div>

          {/* Romania map with glowing pins */}
          <div className="relative w-full max-w-lg mx-auto">
            <Image
              src="/images/harta-romania.webp"
              alt="Harta Romania - Judete Active"
              width={800}
              height={566}
              className="w-full h-auto"
            />
            {/* Overlay pins */}
            {pins.map((pin) => (
              <div
                key={pin.name}
                className="absolute group cursor-pointer"
                style={{ left: `${pin.left}%`, top: `${pin.top}%`, transform: "translate(-50%, -50%)" }}
                onMouseEnter={() => setHoveredPin(pin.name)}
                onMouseLeave={() => setHoveredPin(null)}
              >
                {/* Glow pulse ring */}
                <span
                  className={`absolute rounded-full animate-ping ${
                    pin.main ? "w-6 h-6 -left-1.5 -top-1.5 bg-accent/40" : "w-4 h-4 -left-0.5 -top-0.5 bg-sky-400/30"
                  }`}
                  style={{ animationDuration: "2s" }}
                />
                {/* Static glow */}
                <span
                  className={`absolute rounded-full ${
                    pin.main ? "w-5 h-5 -left-1 -top-1 bg-accent/25" : "w-3.5 h-3.5 -left-0.25 -top-0.25 bg-sky-400/20"
                  }`}
                />
                {/* Dot */}
                <span
                  className={`relative block rounded-full border-2 ${
                    pin.main
                      ? "w-3 h-3 bg-accent border-accent-light shadow-[0_0_8px_rgba(248,56,57,0.6)]"
                      : "w-2.5 h-2.5 bg-white border-sky-400 shadow-[0_0_6px_rgba(96,165,250,0.5)]"
                  }`}
                />
                {/* Label - always visible on main, hover on others */}
                <span
                  className={`absolute left-1/2 -translate-x-1/2 whitespace-nowrap text-[10px] sm:text-[11px] font-semibold pointer-events-none transition-opacity duration-200 ${
                    pin.main
                      ? "top-4 text-[#B91C1C] opacity-100"
                      : `top-3.5 text-sky-300 ${hoveredPin === pin.name ? "opacity-100" : "opacity-0 sm:opacity-100"}`
                  }`}
                >
                  {pin.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Red urgency bar */}
        <div className="bg-accent rounded-xl p-6 text-white">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <p className="font-bold text-lg">Servicii de Urgenta!</p>
              <p className="text-white/95 text-sm">Raspundem rapid in orice judet</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="tel:0734704026" className="flex items-center gap-3 bg-white/20 hover:bg-white/30 px-5 py-3 rounded-lg transition-colors">
                <Phone size={20} />
                <div>
                  <span className="block text-xs text-white/90">Apeleaza Acum</span>
                  <span className="font-bold">0734 704 026</span>
                </div>
              </a>
              <a href="mailto:office@reparatiipro.ro" className="flex items-center gap-3 bg-white/20 hover:bg-white/30 px-5 py-3 rounded-lg transition-colors">
                <Mail size={20} />
                <div>
                  <span className="block text-xs text-white/90">Trimite Mail</span>
                  <span className="font-bold text-sm">office@reparatiipro.ro</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
