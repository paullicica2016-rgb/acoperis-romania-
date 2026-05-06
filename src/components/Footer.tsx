import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react";
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
    <footer className="bg-[#051D3E] text-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-5" aria-label="Reparatii Pro - Acoperisuri de Incredere">
              <Logo className="h-14 w-auto" />
            </div>
            <p className="text-white/70 text-sm leading-relaxed mb-5">
              Firma cu peste 15 ani experienta in montaj, reparatii si
              intretinere acoperisuri. Solutii complete, de la materiale la
              manopera.
            </p>
            <div className="space-y-3">
              <a
                href="tel:0734704026"
                className="flex items-center gap-2 text-white/70 hover:text-white transition-colors text-sm"
              >
                <Phone size={14} /> 0734 704 026
              </a>
              <a
                href="mailto:office@reparatiipro.ro"
                className="flex items-center gap-2 text-white/70 hover:text-white transition-colors text-sm"
              >
                <Mail size={14} /> office@reparatiipro.ro
              </a>
              <span className="flex items-center gap-2 text-white/70 text-sm">
                <MapPin size={14} /> Hunedoara si zona invecinata
              </span>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-white mb-5">Servicii</h3>
            <ul className="space-y-2.5">
              {serviceLinks.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/servicii/${s.slug}`}
                    className="text-white/70 hover:text-white transition-colors text-sm"
                  >
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Counties */}
          <div>
            <h3 className="font-bold text-white mb-5">Judete</h3>
            <ul className="space-y-2.5">
              {countyLinks.map((c) => (
                <li key={c.slug}>
                  <Link
                    href={`/judete/${c.slug}`}
                    className="text-white/70 hover:text-white transition-colors text-sm"
                  >
                    {c.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-bold text-white mb-5">Navigare</h3>
            <ul className="space-y-2.5">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-white/70 hover:text-white transition-colors text-sm"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>

            <h3 className="font-bold text-white mt-8 mb-4">Legal</h3>
            <ul className="space-y-2.5">
              <li>
                <Link href="/termeni-si-conditii" className="text-white/70 hover:text-white transition-colors text-sm">
                  Termeni si Conditii
                </Link>
              </li>
              <li>
                <Link href="/politica-de-confidentialitate" className="text-white/70 hover:text-white transition-colors text-sm">
                  Politica de Confidentialitate
                </Link>
              </li>
              <li>
                <Link href="/politica-de-cookies" className="text-white/70 hover:text-white transition-colors text-sm">
                  Politica Cookie
                </Link>
              </li>
            </ul>
          </div>

          {/* CTA */}
          <div>
            <h3 className="font-bold text-white mb-5">Program de Lucru</h3>
            <div className="space-y-2 text-sm text-white/70 mb-6">
              <div className="flex justify-between">
                <span>Luni - Vineri</span>
                <span className="text-white font-medium">07:00 - 20:00</span>
              </div>
              <div className="flex justify-between">
                <span>Sambata</span>
                <span className="text-white font-medium">08:00 - 16:00</span>
              </div>
              <div className="flex justify-between">
                <span>Duminica</span>
                <span className="text-white/70">Urgente</span>
              </div>
            </div>

            <a
              href="tel:0734704026"
              className="btn-accent block text-center py-3 rounded-lg font-semibold text-sm"
            >
              Apeleaza Acum
            </a>

            <a
              href="https://wa.me/40734704026"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold text-sm mt-3 transition-colors"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Payment & ANPC bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-8">
          {/* Payment methods */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-6">
            <div className="w-16 h-10 bg-black rounded-lg flex items-center justify-center p-1.5">
              <Image src="/images/payment/mastercard.png" alt="Mastercard" width={48} height={30} className="object-contain" />
            </div>
            <div className="w-16 h-10 bg-[#1a1f71] rounded-lg flex items-center justify-center p-1.5">
              <Image src="/images/payment/visa.png" alt="Visa" width={48} height={30} className="object-contain brightness-0 invert" />
            </div>
            <div className="h-10 bg-white rounded-lg flex items-center justify-center px-3">
              <span className="text-[#1a3c6e] font-bold text-sm">tbi <span className="font-normal">bank</span></span>
            </div>
            <div className="h-10 bg-white rounded-lg flex items-center justify-center px-3">
              <span className="text-[#ff6200] font-bold text-sm">ING</span>
            </div>
          </div>

          {/* ANPC links */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://ec.europa.eu/consumers/odr"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-white rounded-lg px-4 py-2.5 hover:bg-gray-100 transition-colors"
            >
              <span className="text-[#1a3c6e] text-xs font-bold text-center leading-tight uppercase">
                Solutionarea Online<br />a Litigiilor
              </span>
              <span className="bg-[#1a3c6e] text-white text-[10px] font-bold px-2 py-0.5 rounded uppercase">Detalii</span>
            </a>
            <a
              href="https://anpc.ro/ce-este-sal/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-white rounded-lg px-4 py-2.5 hover:bg-gray-100 transition-colors"
            >
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 flex items-center justify-center">
                  <span className="text-[#1a3c6e] font-bold text-xs">ANPC</span>
                </div>
                <span className="text-[#1a3c6e] text-xs font-bold text-center leading-tight uppercase">
                  Solutionarea Alternativa<br />a Litigiilor
                </span>
              </div>
              <span className="bg-[#1a3c6e] text-white text-[10px] font-bold px-2 py-0.5 rounded uppercase">Detalii</span>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="text-white/70 text-sm">
            &copy; {new Date().getFullYear()} Reparatii Pro. Toate drepturile
            rezervate.
          </span>
          <span className="text-white/70 text-xs">
            Construim acoperisuri pentru o viata!
          </span>
        </div>
      </div>
    </footer>
  );
}
