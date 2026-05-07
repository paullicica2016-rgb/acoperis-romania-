"use client";

import { useState } from "react";
import Link from "next/link";
import { Phone, Mail, Menu, X, ChevronDown } from "lucide-react";
import Logo from "./Logo";

const services = [
  { slug: "constructie-acoperisuri-noi", label: "Constructie Acoperisuri Noi" },
  { slug: "invelitori-pentru-acoperisuri", label: "Invelitori pentru Acoperisuri" },
  { slug: "accesorii-si-sisteme-de-montaj", label: "Accesorii si Sisteme de Montaj" },
  { slug: "reparatii-acoperisuri", label: "Reparatii Acoperisuri" },
  { slug: "renovari-si-modernizari", label: "Renovari si Modernizari" },
  { slug: "mansardari-si-extinderi", label: "Mansardari si Extinderi" },
  { slug: "demolari-si-reconstruiri", label: "Demolari si Reconstruiri" },
  { slug: "interventii-de-urgenta", label: "Interventii de Urgenta" },
  { slug: "curatare-si-intretinere", label: "Curatare si Intretinere" },
  { slug: "finisaje-fatade-exterioare", label: "Finisaje Fatade Exterioare" },
];

const counties = [
  { slug: "hunedoara", label: "Hunedoara" },
  { slug: "alba", label: "Alba" },
  { slug: "sibiu", label: "Sibiu" },
  { slug: "valcea", label: "Valcea" },
  { slug: "gorj", label: "Gorj" },
  { slug: "mehedinti", label: "Mehedinti" },
  { slug: "timis", label: "Timis" },
  { slug: "arad", label: "Arad" },
  { slug: "cluj", label: "Cluj" },
  { slug: "bihor", label: "Bihor" },
  { slug: "bucuresti", label: "Bucuresti" },
  { slug: "ilfov", label: "Ilfov" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [countiesOpen, setCountiesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileCountiesOpen, setMobileCountiesOpen] = useState(false);

  return (
    <>
      {/* Top bar - dark navy #051D3E */}
      <div className="bg-[#051D3E] text-white text-xs py-2 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center gap-5">
            <a href="tel:0734704026" className="flex items-center gap-1.5 hover:text-[#0d1547] transition-colors">
              <Phone size={12} />
              <span>0734 704 026</span>
            </a>
            <a href="mailto:office@reparatiipro.ro" className="flex items-center gap-1.5 hover:text-[#0d1547] transition-colors">
              <Mail size={12} />
              <span>office@reparatiipro.ro</span>
            </a>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-white/60">Luni - Sambata: 07:00 - 20:00</span>
          </div>
        </div>
      </div>

      {/* Main nav - WHITE background like bt-acoperis */}
      <header className="sticky top-0 z-50 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16 md:h-20">
          <Link href="/" className="flex items-center" aria-label="Reparatii Pro - Acoperisuri de Incredere">
            <Logo dark className="h-12 md:h-16 w-auto" />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            <Link href="/" className="text-[#0d1547] hover:text-[#0d1547] font-semibold transition-colors text-sm px-3 py-2">
              Acasa
            </Link>
            <Link href="/despre-noi" className="text-[#212121] hover:text-[#0d1547] font-medium transition-colors text-sm px-3 py-2">
              Despre noi
            </Link>

            {/* Services dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <Link
                href="/servicii"
                className="text-[#212121] hover:text-[#0d1547] font-medium transition-colors text-sm flex items-center gap-1 px-3 py-2"
              >
                Servicii <ChevronDown size={14} />
              </Link>
              {servicesOpen && (
                <div className="absolute top-full left-0 mt-0 pt-2 w-72 z-50">
                  <div className="bg-white rounded-lg shadow-xl border border-gray-100 py-2">
                    {services.map((s) => (
                      <Link
                        key={s.slug}
                        href={`/servicii/${s.slug}`}
                        className="block px-4 py-2.5 text-sm text-gray-600 hover:bg-gray-50 hover:text-[#0d1547] transition-colors"
                        onClick={() => setServicesOpen(false)}
                      >
                        {s.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Counties dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setCountiesOpen(true)}
              onMouseLeave={() => setCountiesOpen(false)}
            >
              <button className="text-[#212121] hover:text-[#0d1547] font-medium transition-colors text-sm flex items-center gap-1 px-3 py-2">
                Judete <ChevronDown size={14} />
              </button>
              {countiesOpen && (
                <div className="absolute top-full left-0 mt-0 pt-2 w-56 z-50">
                  <div className="bg-white rounded-lg shadow-xl border border-gray-100 py-2">
                    {counties.map((c) => (
                      <Link
                        key={c.slug}
                        href={`/judete/${c.slug}`}
                        className="block px-4 py-2.5 text-sm text-gray-600 hover:bg-gray-50 hover:text-[#0d1547] transition-colors"
                        onClick={() => setCountiesOpen(false)}
                      >
                        {c.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link href="/portofoliu" className="text-[#212121] hover:text-[#0d1547] font-medium transition-colors text-sm px-3 py-2">
              Portofoliu
            </Link>
            <Link href="/blog" className="text-[#212121] hover:text-[#0d1547] font-medium transition-colors text-sm px-3 py-2">
              Blog
            </Link>
            <Link href="/contact" className="text-[#212121] hover:text-[#0d1547] font-medium transition-colors text-sm px-3 py-2">
              Contact
            </Link>

            {/* Red phone CTA button */}
            <a
              href="tel:0734704026"
              className="btn-accent px-5 py-2.5 rounded-lg text-sm font-semibold ml-4 flex items-center gap-2"
            >
              <Phone size={14} />
              0734 704 026
            </a>
          </nav>

          {/* Mobile toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden p-2 text-[#212121]"
            aria-label="Menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-100 shadow-lg max-h-[80vh] overflow-y-auto">
            <nav className="flex flex-col px-4 py-4 gap-1">
              <Link href="/" onClick={() => setMenuOpen(false)} className="px-4 py-3 rounded-lg text-[#0d1547] font-semibold">
                Acasa
              </Link>
              <Link href="/despre-noi" onClick={() => setMenuOpen(false)} className="px-4 py-3 rounded-lg text-[#212121] hover:text-[#0d1547] font-medium">
                Despre noi
              </Link>

              <button
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                className="px-4 py-3 rounded-lg text-[#212121] hover:text-[#0d1547] font-medium flex items-center justify-between"
              >
                Servicii <ChevronDown size={16} className={`transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`} />
              </button>
              {mobileServicesOpen && (
                <div className="pl-6 space-y-1">
                  <Link href="/servicii" onClick={() => setMenuOpen(false)} className="block px-4 py-2 text-sm text-[#0d1547] font-semibold">
                    Toate Serviciile
                  </Link>
                  {services.map((s) => (
                    <Link key={s.slug} href={`/servicii/${s.slug}`} onClick={() => setMenuOpen(false)} className="block px-4 py-2 text-sm text-gray-600 hover:text-[#0d1547]">
                      {s.label}
                    </Link>
                  ))}
                </div>
              )}

              <button
                onClick={() => setMobileCountiesOpen(!mobileCountiesOpen)}
                className="px-4 py-3 rounded-lg text-[#212121] hover:text-[#0d1547] font-medium flex items-center justify-between"
              >
                Judete <ChevronDown size={16} className={`transition-transform ${mobileCountiesOpen ? "rotate-180" : ""}`} />
              </button>
              {mobileCountiesOpen && (
                <div className="pl-6 space-y-1">
                  {counties.map((c) => (
                    <Link key={c.slug} href={`/judete/${c.slug}`} onClick={() => setMenuOpen(false)} className="block px-4 py-2 text-sm text-gray-600 hover:text-[#0d1547]">
                      {c.label}
                    </Link>
                  ))}
                </div>
              )}

              <Link href="/portofoliu" onClick={() => setMenuOpen(false)} className="px-4 py-3 rounded-lg text-[#212121] hover:text-[#0d1547] font-medium">
                Portofoliu
              </Link>
              <Link href="/blog" onClick={() => setMenuOpen(false)} className="px-4 py-3 rounded-lg text-[#212121] hover:text-[#0d1547] font-medium">
                Blog
              </Link>
              <Link href="/contact" onClick={() => setMenuOpen(false)} className="px-4 py-3 rounded-lg text-[#212121] hover:text-[#0d1547] font-medium">
                Contact
              </Link>

              <a href="tel:0734704026" className="btn-accent text-center px-6 py-3 rounded-lg font-semibold mt-2 flex items-center justify-center gap-2">
                <Phone size={14} />
                0734 704 026
              </a>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}
