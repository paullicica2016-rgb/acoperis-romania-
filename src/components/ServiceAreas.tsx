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

const allCounties = [...leftCounties, ...rightCounties];

export default function ServiceAreas() {
  const [hoveredPin, setHoveredPin] = useState<string | null>(null);

  return (
    <section className="py-20 bg-[#0f1623]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: text + counties + buttons */}
          <div>
            <span className="inline-block bg-[#0d1547] text-white text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded mb-5">
              12 Judete · Romania
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              Suntem activi în toată România de Vest și Sud
            </h2>
            <p className="text-white/60 mb-8 text-sm leading-relaxed">
              Echipe specializate deplasate la locația clientului, cu evaluare și soluții tehnice personalizate.
            </p>

            {/* County pills */}
            <div className="flex flex-wrap gap-2 mb-10">
              {allCounties.map((c) => (
                <Link
                  key={c.slug}
                  href={`/judete/${c.slug}`}
                  className="flex items-center gap-1.5 border border-white/20 hover:border-[#0d1547] hover:bg-[#0d1547]/10 text-white/80 hover:text-white text-sm font-medium px-3.5 py-1.5 rounded-full transition-all"
                >
                  <span className="w-1.5 h-1.5 bg-[#0d1547] rounded-full shrink-0" />
                  {c.name}
                </Link>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              <Link href="/despre-noi" className="inline-flex items-center justify-center px-7 py-3 rounded-lg font-semibold text-sm bg-white text-[#0f1623] hover:bg-gray-100 transition-colors">
                Despre noi
              </Link>
              <a href="tel:0750771028" className="btn-accent inline-flex items-center justify-center px-7 py-3 rounded-lg font-semibold text-sm">
                Apelează acum
              </a>
            </div>
          </div>

          {/* Right: map card */}
          <div className="bg-[#1a2235] rounded-2xl overflow-hidden border border-white/10 p-4">
            <div className="relative w-full">
              <Image
                src="/images/harta-romania.webp"
                alt="Harta Romania - Judete Active"
                width={800}
                height={566}
                className="w-full h-auto rounded-xl invert"
              />
              {pins.map((pin) => (
                <div
                  key={pin.name}
                  className="absolute group cursor-pointer"
                  style={{ left: `${pin.left}%`, top: `${pin.top}%`, transform: "translate(-50%, -50%)" }}
                  onMouseEnter={() => setHoveredPin(pin.name)}
                  onMouseLeave={() => setHoveredPin(null)}
                >
                  <span
                    className={`absolute rounded-full animate-ping ${
                      pin.main ? "w-6 h-6 -left-1.5 -top-1.5 bg-accent/40" : "w-4 h-4 -left-0.5 -top-0.5 bg-sky-400/30"
                    }`}
                    style={{ animationDuration: "2s" }}
                  />
                  <span
                    className={`relative block rounded-full border-2 ${
                      pin.main
                        ? "w-3 h-3 bg-accent border-red-300 shadow-[0_0_8px_rgba(248,56,57,0.6)]"
                        : "w-2.5 h-2.5 bg-white border-sky-400 shadow-[0_0_6px_rgba(96,165,250,0.5)]"
                    }`}
                  />
                  <span
                    className={`absolute left-1/2 -translate-x-1/2 whitespace-nowrap text-[10px] sm:text-[11px] font-semibold pointer-events-none transition-opacity duration-200 ${
                      pin.main
                        ? "top-4 text-[#f87171] opacity-100"
                        : `top-3.5 text-sky-300 ${hoveredPin === pin.name ? "opacity-100" : "opacity-0 sm:opacity-100"}`
                    }`}
                  >
                    {pin.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
