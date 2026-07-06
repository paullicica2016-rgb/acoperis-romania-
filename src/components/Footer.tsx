import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import Logo from "./Logo";

const serviceLinks = [
  { slug: "constructie-acoperisuri-noi", label: "Constructie Acoperisuri" },
  { slug: "invelitori-pentru-acoperisuri", label: "Invelitori Acoperisuri" },
  { slug: "accesorii-si-sisteme-de-montaj", label: "Accesorii si Montaj" },
  { slug: "reparatii-acoperisuri", label: "Reparatii Acoperisuri" },
  { slug: "renovari-si-modernizari", label: "Renovari si Modernizari" },
  { slug: "mansardari-si-extinderi", label: "Mansardari si Extinderi" },
  { slug: "interventii-de-urgenta", label: "Interventii de Urgenta" },
  { slug: "curatare-si-intretinere", label: "Curatare si Intretinere" },
  { slug: "finisaje-fatade-exterioare", label: "Finisaje Fatade" },
];

const countyLinks = [
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

const navLinks = [
  { label: "Acasa", href: "/" },
  { label: "Despre Noi", href: "/despre-noi" },
  { label: "Servicii", href: "/servicii" },
  { label: "Portofoliu", href: "/portofoliu" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-gray-50 text-gray-800 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 py-14">
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">

          {/* Brand */}
          <div className="lg:col-span-1 bg-white border border-gray-200 rounded-2xl p-6 flex flex-col gap-4">
            <div aria-label="Acoperisuri Pro - Acoperisuri de Incredere">
              <Logo className="h-12 w-auto" />
            </div>
            <p className="text-gray-500 text-sm leading-relaxed">
              Firma cu peste 15 ani experienta in montaj, reparatii si intretinere acoperisuri.
            </p>
            <div className="space-y-2.5">
              <a href="tel:0735097539" className="flex items-center gap-2 text-gray-600 hover:text-[#0d1547] transition-colors text-sm">
                <Phone size={14} className="text-[#0d1547]" /> 0735 097 539
              </a>
              <a href="mailto:montajacoperispro@gmail.com" className="flex items-center gap-2 text-gray-600 hover:text-[#0d1547] transition-colors text-sm">
                <Mail size={14} className="text-[#0d1547]" /> montajacoperispro@gmail.com
              </a>
              <span className="flex items-center gap-2 text-gray-600 text-sm">
                Hunedoara si zona invecinata
              </span>
            </div>
          </div>

          {/* Services */}
          <div className="bg-white border border-gray-200 rounded-2xl p-6">
            <h3 className="font-bold text-gray-900 mb-4 text-sm uppercase tracking-wide">Servicii</h3>
            <ul className="space-y-2">
              {serviceLinks.map((s) => (
                <li key={s.slug}>
                  <Link href={`/servicii/${s.slug}`} className="text-gray-500 hover:text-[#0d1547] transition-colors text-sm">
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Counties */}
          <div className="bg-white border border-gray-200 rounded-2xl p-6">
            <h3 className="font-bold text-gray-900 mb-4 text-sm uppercase tracking-wide">Judete</h3>
            <ul className="space-y-2">
              {countyLinks.map((c) => (
                <li key={c.slug}>
                  <Link href={`/judete/${c.slug}`} className="text-gray-500 hover:text-[#0d1547] transition-colors text-sm">
                    {c.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigation + Legal */}
          <div className="bg-white border border-gray-200 rounded-2xl p-6">
            <h3 className="font-bold text-gray-900 mb-4 text-sm uppercase tracking-wide">Navigare</h3>
            <ul className="space-y-2 mb-6">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-gray-500 hover:text-[#0d1547] transition-colors text-sm">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
            <h3 className="font-bold text-gray-900 mb-4 text-sm uppercase tracking-wide">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/termeni-si-conditii" className="text-gray-500 hover:text-[#0d1547] transition-colors text-sm">
                  Termeni si Conditii
                </Link>
              </li>
              <li>
                <Link href="/politica-de-confidentialitate" className="text-gray-500 hover:text-[#0d1547] transition-colors text-sm">
                  Politica de Confidentialitate
                </Link>
              </li>
              <li>
                <Link href="/politica-de-cookies" className="text-gray-500 hover:text-[#0d1547] transition-colors text-sm">
                  Politica Cookie
                </Link>
              </li>
            </ul>
          </div>

          {/* Program + CTA */}
          <div className="bg-white border border-gray-200 rounded-2xl p-6 flex flex-col gap-4">
            <h3 className="font-bold text-gray-900 text-sm uppercase tracking-wide flex items-center gap-2">
              <Clock size={14} className="text-[#0d1547]" /> Program de Lucru
            </h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between border-b border-gray-100 pb-2">
                <span className="text-gray-500">Luni - Vineri</span>
                <span className="font-semibold text-gray-800">07:00 - 20:00</span>
              </div>
              <div className="flex justify-between border-b border-gray-100 pb-2">
                <span className="text-gray-500">Sambata</span>
                <span className="font-semibold text-gray-800">08:00 - 16:00</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Duminica</span>
                <span className="text-gray-500">Urgente</span>
              </div>
            </div>
            <a href="tel:0735097539" className="btn-accent block text-center py-3 rounded-xl font-semibold text-sm mt-auto">
              Apeleaza Acum
            </a>
            <a
              href="https://wa.me/40735097539"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl font-semibold text-sm transition-colors"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Parteneri bar */}
      <div className="border-t border-gray-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <p className="text-center text-xs font-semibold text-gray-400 uppercase tracking-widest mb-5">Parteneri de materiale</p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            {["Bilka Steel", "Lindab", "Wetterbest", "Bramac", "Tondach", "Velux", "Gerard", "Ruukki"].map((brand) => (
              <div key={brand} className="h-10 bg-gray-50 border border-gray-200 rounded-xl flex items-center justify-center px-5 hover:border-[#0d1547]/30 transition-colors">
                <span className="text-[#0d1547] font-bold text-sm tracking-tight">{brand}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-200 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Acoperisuri Pro. Toate drepturile rezervate.
          </span>
          <span className="text-gray-400 text-xs">
            Construim acoperisuri pentru o viata!
          </span>
        </div>
      </div>
    </footer>
  );
}
