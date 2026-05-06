import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, Phone, ArrowRight, Home, Sun, Thermometer, Ruler } from "lucide-react";

export const metadata: Metadata = {
  title: "Mansardari si Extinderi - Reparatii Pro",
  description: "Transformam podul in spatiu locuibil — mansardari complete cu izolatie, ferestre Velux, finisaje. Extinderi acoperis pentru spatiu suplimentar. Garantie scrisa.",
};

const avantaje = [
  { icon: Home, title: "Spatiu Nou", desc: "Castigi suprafata locuibila fara a extinde amprenta la sol a casei." },
  { icon: Sun, title: "Lumina Naturala", desc: "Ferestre de mansarda Velux pentru iluminare si ventilatie controlata." },
  { icon: Thermometer, title: "Confort Termic", desc: "Izolatie termica si fonica de inalta performanta pe toti peretii si planseu." },
  { icon: Ruler, title: "Proiect Personalizat", desc: "Adaptam configuratia la structura existenta si la nevoile tale." },
];

const lucrari = [
  "Evaluare structurala a sarpantei existente",
  "Modificari si consolidari structura de rezistenta",
  "Izolatie termica vata minerala sau spuma poliuretanica",
  "Bariera contra vaporilor si membrana anticondens",
  "Montaj ferestre de mansarda Velux sau Fakro",
  "Invelitoare noua sau reconformata",
  "Sisteme pluviale adaptate noii configuratii",
  "Finisaje interioare mansarda — pereti, plafon, podea",
];

const otherServices = [
  { slug: "constructie-acoperisuri-noi", label: "Constructie Acoperisuri Noi" },
  { slug: "renovari-si-modernizari", label: "Renovari si Modernizari" },
  { slug: "invelitori-pentru-acoperisuri", label: "Invelitori Acoperisuri" },
  { slug: "reparatii-acoperisuri", label: "Reparatii Acoperisuri" },
];

export default function MansardariExtinderi() {
  return (
    <>
      <section className="relative bg-[#051D3E] text-white pt-16 pb-0 overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/projects/mansardari-1.jpeg" alt="Mansardari si extinderi" fill className="object-cover" priority sizes="100vw" />
          <div className="absolute inset-0 bg-[#051D3E]/78" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 pb-24 pt-8">
          <nav className="flex items-center gap-2 text-sm text-white/60 mb-6">
            <Link href="/">Acasa</Link><span className="text-white/40">›</span>
            <Link href="/servicii" className="hover:text-white transition-colors">Servicii</Link><span className="text-white/40">›</span>
            <span className="text-white">Mansardari si Extinderi</span>
          </nav>
          <div className="max-w-2xl">
            <span className="inline-block bg-white/15 border border-white/20 text-white/90 text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-5">Spatiu suplimentar</span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-5">Mansardari si<br />Extinderi</h1>
            <div className="w-12 h-1 bg-[#E53935] rounded mb-6" />
            <p className="text-white/75 text-lg leading-relaxed mb-8">
              Transformam podul casei in camere confortabile sau extindem acoperisul pentru spatiu suplimentar. Proiect complet de la structura la finisaje.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a href="tel:0734704026" className="inline-flex items-center justify-center gap-2 bg-white text-[#051D3E] px-7 py-3.5 rounded-full font-bold text-sm hover:bg-gray-100 transition-colors">
                <Phone size={16} /> 0734 704 026
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
                <span className="text-[#0d1547] font-semibold text-sm uppercase tracking-wider block mb-3">De ce mansardezi</span>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-5">Podul tau poate fi cea mai frumoasa camera din casa</h2>
                <div className="space-y-4 text-gray-600 leading-relaxed text-sm">
                  <p>Mansardarea este una dintre cele mai rentabile investitii in locuinta ta. In loc sa construiesti o extensie sau sa te muti intr-o casa mai mare, valorifici spatiul deja existent sub acoperis. Costul per mp de spatiu castigat este semnificativ mai mic decat orice alta varianta.</p>
                  <p>Lucram cu ferestre Velux si Fakro care aduc lumina naturala, ventilatie controlata si izolatie termica superioara. Izolam toti peretii si plafonul pentru un confort termic si fonic de nivel inalt, indiferent de sezon.</p>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                {avantaje.map((a) => (
                  <div key={a.title} className="border border-gray-200 rounded-2xl p-6 flex gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[#0d1547]/10 text-[#0d1547] flex items-center justify-center shrink-0">
                      <a.icon size={19} />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-sm mb-1">{a.title}</h4>
                      <p className="text-gray-500 text-sm leading-relaxed">{a.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-gray-50 rounded-2xl p-8">
                <h3 className="text-lg font-bold text-gray-900 mb-6">Ce include proiectul</h3>
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
                <Image src="/images/projects/mansardari-2.jpeg" alt="Mansardare acoperis" fill className="object-cover" sizes="400px" />
              </div>
              <div className="bg-[#051D3E] rounded-2xl p-6 text-white">
                <h3 className="font-bold text-lg mb-2">Consultatie Gratuita</h3>
                <p className="text-white/60 text-sm mb-5">Venim sa vedem podul, evaluam structura si iti spunem ce e posibil.</p>
                <a href="tel:0734704026" className="flex items-center justify-center gap-2 bg-white text-[#051D3E] py-3 rounded-xl font-bold text-sm hover:bg-gray-100 transition-colors mb-3">
                  <Phone size={15} /> 0734 704 026
                </a>
                <a href="https://wa.me/40734704026" target="_blank" rel="noopener noreferrer" className="block text-center bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl font-semibold text-sm transition-colors">WhatsApp</a>
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

      <section className="pb-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-3 gap-4">
            {["/images/projects/mansardari-3.jpeg", "/images/projects/mansardari-4.jpeg", "/images/dulgherie-despre.webp"].map((src, i) => (
              <div key={i} className="relative h-52 rounded-2xl overflow-hidden group">
                <Image src={src} alt={`Mansardare ${i + 1}`} fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="33vw" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/cta.webp" alt="Mansardari" fill className="object-cover" sizes="100vw" />
          <div className="absolute inset-0 bg-[#0d1547]/85" />
        </div>
        <div className="relative max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ai pod neutilizat? Transformam noi.</h2>
          <p className="text-white/70 text-lg mb-10">Consultatie gratuita, proiect personalizat, executie la cheie cu garantie.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:0734704026" className="inline-flex items-center justify-center gap-2 bg-white text-[#0d1547] px-8 py-4 rounded-full text-lg font-bold hover:bg-gray-100 transition-colors">
              <Phone size={18} /> 0734 704 026
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
