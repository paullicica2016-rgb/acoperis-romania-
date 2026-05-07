import Link from "next/link";
import Image from "next/image";
import { Phone, ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[87vh] flex items-center overflow-hidden">
      {/* Background image */}
      <Image
        src="/images/hero-proacoperis-2.png"
        alt="Reparatii Pro - Montaj acoperisuri"
        fill
        className="object-cover object-right"
        priority
      />
      {/* Gradient overlay - exactly like bt-acoperis: dark navy from left fading to transparent */}
      <div className="absolute inset-0 hero-overlay" />

      <div className="relative max-w-7xl mx-auto px-4 w-full">
        <div className="max-w-2xl py-20">
          {/* Small label with icon */}
          <div className="flex items-center gap-2 mb-5">
            <svg className="w-5 h-5 text-[#0d1547]" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3z"/>
            </svg>
            <span className="text-white/80 text-sm font-medium">Montaj si Reparatii Acoperisuri</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-[3.5rem] lg:text-[4rem] font-bold text-white leading-[1.1] mb-6">
            Acoperisuri durabile, montate profesional.
          </h1>

          <p className="text-base md:text-lg text-white/75 max-w-xl mb-8 leading-relaxed">
            Servicii complete de acoperisuri: dulgherie, invelitori, jgheaburi,
            izolatii si reparatii. Peste 15 ani, sute de proiecte, materiale
            Bilka, Lindab, Wetterbest, Bramac.
          </p>

          {/* Discount banner */}
          <div className="inline-flex items-center gap-2 bg-[#0F4C81]/95 backdrop-blur-sm rounded-lg px-4 py-2.5 mb-6 ring-1 ring-white/10">
            <span className="text-white font-semibold text-sm">
              Oferta: <strong>20% reducere</strong> la sistemul complet de acoperis
            </span>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 mb-12">
            <a
              href="tel:0754456844"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg text-base font-semibold bg-[#051D3E] hover:bg-[#0a2d5c] text-white transition-colors shadow-lg shadow-black/30"
            >
              <Phone size={18} />
              0754 456 844
            </a>
            <Link
              href="/servicii"
              className="btn-outline inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg text-base font-semibold"
            >
              Vezi Servicii
              <ArrowRight size={18} />
            </Link>
          </div>

          {/* Stats row at bottom of hero */}
          <div className="flex items-center gap-8 md:gap-12">
            <div className="text-center">
              <div className="text-white/75 text-xs mb-1">Acoperisuri finalizate</div>
              <div className="text-white text-2xl md:text-3xl font-bold">300+</div>
            </div>
            <div className="text-center">
              <div className="text-white/75 text-xs mb-1">Clienti satisfacuti</div>
              <div className="text-white text-2xl md:text-3xl font-bold">250+</div>
            </div>
            <div className="text-center">
              <div className="text-white/75 text-xs mb-1">Ani experienta</div>
              <div className="text-white text-2xl md:text-3xl font-bold">15+</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
