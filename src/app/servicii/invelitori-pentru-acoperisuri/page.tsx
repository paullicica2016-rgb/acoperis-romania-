import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, Phone, ArrowRight, Shield, Layers, Palette, Zap } from "lucide-react";

export const metadata: Metadata = {
  title: "Invelitori pentru Acoperisuri - Reparatii Pro",
  description: "Montaj profesional tigla ceramica, tigla metalica, tabla faltuita, sindrila bituminoasa. Branduri Bilka, Lindab, Bramac, Tondach. Garantie completa, evaluare gratuita.",
};

const invelitori = [
  {
    name: "Tigla Metalica",
    brands: "Bilka · Lindab · Wetterbest",
    desc: "Solutia cea mai populara pentru case rezidentiale. Usoara, rezistenta la coroziune, disponibila in zeci de culori si profile. Excelenta pentru acoperisuri cu pante medii si mari.",
    pros: ["Greutate redusa — nu solicita sarpanta", "Durabilitate 40-50 ani", "Pret accesibil", "Montaj rapid"],
    img: "/images/projects/tigla-metalica-1.webp",
  },
  {
    name: "Tigla Ceramica",
    brands: "Bramac · Tondach",
    desc: "Aspect clasic, durabilitate de exceptie. Tigla ceramica ramane standardul de calitate pentru locuintele care vor sa arate bine zeci de ani. Rezista la inghet, caldura si UV.",
    pros: ["Durabilitate 80-100 ani", "Aspect premium, autentic", "Izolatie fonica naturala", "Rezistenta la inghet"],
    img: "/images/projects/tigla-ceramica-1.webp",
  },
  {
    name: "Tabla Faltuita",
    brands: "Lindab · Bilka · Ruukki",
    desc: "Ideala pentru acoperisuri cu pante mici, forme complexe sau arhitectura moderna. Etanseitate perfecta prin sistemul de falt dublu. Aspect sobru, contemporan.",
    pros: ["Etanseitate maxima", "Pante de la 3 grade", "Forme arhitecturale complexe", "Aspect modern, minimalist"],
    img: "/images/projects/tabla-faltuita-1.webp",
  },
  {
    name: "Sindrila Bituminoasa",
    brands: "IKO · Tegola",
    desc: "Flexibila, usoara si perfecta pentru acoperisuri cu geometrie complexa — turle, bovindouri, acoperisuri rotunde. Se adapteaza oricarei forme fara taieturi costisitoare.",
    pros: ["Adaptabil oricarei forme", "Montaj simplu pe suprafete complexe", "Izolatie fonica buna", "Cost redus per mp"],
    img: "/images/projects/sindrila-1.webp",
  },
  {
    name: "Tabla Cutata",
    brands: "Bilka · Lindab",
    desc: "Solutia optima pentru hale industriale, garaje, soproane si anexe gospodaresti. Rezistenta mecanica ridicata, montaj rapid, cost minim.",
    pros: ["Rezistenta structurala mare", "Montaj foarte rapid", "Cost minim", "Ideal hale si anexe"],
    img: "/images/projects/tabla-cutata-1.webp",
  },
  {
    name: "Tigla Ceramica Solzi",
    brands: "Tondach · Bramac",
    desc: "Profilul tip solzi aduce un aspect distinctiv, traditional-central-european. Foarte populara in zonele cu arhitectura istorica sau pentru proprietati cu caracter unic.",
    pros: ["Aspect traditional autentic", "Durabilitate 80+ ani", "Rezistenta la conditii extreme", "Valoare estetica ridicata"],
    img: "/images/projects/tigla-ceramica-2.webp",
  },
];

const criterii = [
  { icon: Layers, title: "Panta acoperisului", desc: "Fiecare invelitoare are un unghi minim de panta. Tabla faltuita merge de la 3°, tigla ceramica necesita minim 22°." },
  { icon: Shield, title: "Structura sarpantei", desc: "Tigla ceramica e mai grea — verifica capacitatea sarpantei inainte de alegere. Tabla metalica e mult mai usoara." },
  { icon: Palette, title: "Stilul arhitectural", desc: "Casa clasica merge cu tigla ceramica. Arhitectura moderna — tabla faltuita sau tigla metalica in nuante inchise." },
  { icon: Zap, title: "Bugetul disponibil", desc: "Tabla metalica si cutata sunt cele mai accesibile. Tigla ceramica si tabla faltuita sunt investitii pe termen lung." },
];

const otherServices = [
  { slug: "constructie-acoperisuri-noi", label: "Constructie Acoperisuri Noi" },
  { slug: "accesorii-si-sisteme-de-montaj", label: "Accesorii si Montaj" },
  { slug: "reparatii-acoperisuri", label: "Reparatii Acoperisuri" },
  { slug: "renovari-si-modernizari", label: "Renovari si Modernizari" },
  { slug: "mansardari-si-extinderi", label: "Mansardari si Extinderi" },
  { slug: "interventii-de-urgenta", label: "Interventii de Urgenta" },
];

export default function InvelitoriAcoperisuri() {
  return (
    <>
      {/* ── Hero cu val ── */}
      <section className="relative bg-[#051D3E] text-white pt-16 pb-0 overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/projects/tigla-metalica-2.webp" alt="Invelitori acoperisuri" fill className="object-cover" priority sizes="100vw" />
          <div className="absolute inset-0 bg-[#051D3E]/75" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 pb-24 pt-8">
          <nav className="flex items-center gap-2 text-sm text-white/60 mb-6">
            <Link href="/">Acasa</Link>
            <span className="text-white/40">›</span>
            <Link href="/servicii" className="hover:text-white transition-colors">Servicii</Link>
            <span className="text-white/40">›</span>
            <span className="text-white">Invelitori pentru Acoperisuri</span>
          </nav>
          <div className="max-w-2xl">
            <span className="inline-block bg-white/15 border border-white/20 text-white/90 text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-5">
              Toate tipurile de invelitori
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-5">
              Invelitori pentru<br />Acoperisuri
            </h1>
            <div className="w-12 h-1 bg-[#E53935] rounded mb-6" />
            <p className="text-white/75 text-lg leading-relaxed mb-8">
              Montam tigla ceramica, tigla metalica, tabla faltuita si sindrila bituminoasa. Te ajutam sa alegi varianta potrivita pentru casa ta — cu oferta gratuita si garantie pe lucrare.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a href="tel:0754456844" className="inline-flex items-center justify-center gap-2 bg-white text-[#051D3E] px-7 py-3.5 rounded-full font-bold text-sm hover:bg-gray-100 transition-colors">
                <Phone size={16} /> 0754 456 844
              </a>
              <Link href="/contact" className="inline-flex items-center justify-center gap-2 bg-white/15 border border-white/30 text-white px-7 py-3.5 rounded-full font-semibold text-sm hover:bg-white/25 transition-all">
                Cere Oferta Gratuita <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </div>
        <div className="relative h-16">
          <svg viewBox="0 0 1440 64" preserveAspectRatio="none" className="absolute bottom-0 w-full h-16" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,32 C360,80 1080,0 1440,32 L1440,64 L0,64 Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* ── Intro ── */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <span className="text-[#0d1547] font-semibold text-sm uppercase tracking-wider block mb-3">Cum alegem</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Invelitoarea potrivita face diferenta
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed max-w-3xl mx-auto mb-14">
            Nu exista o invelitoare „universala". Alegerea corecta depinde de panta acoperisului, structura sarpantei, stilul casei si buget. Echipa noastra te consiliaza gratuit si iti recomanda solutia optima.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 text-left">
            {criterii.map((c) => (
              <div key={c.title} className="bg-gray-50 border border-gray-200 rounded-2xl p-6">
                <div className="w-10 h-10 rounded-xl bg-[#0d1547]/10 text-[#0d1547] flex items-center justify-center mb-4">
                  <c.icon size={20} />
                </div>
                <h3 className="font-bold text-gray-900 text-sm mb-2">{c.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Tipuri invelitori (alternating) ── */}
      <section className="py-10 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <span className="text-[#0d1547] font-semibold text-sm uppercase tracking-wider block mb-3">Materiale disponibile</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Tipuri de Invelitori</h2>
          </div>
          <div className="space-y-6">
            {invelitori.map((inv, i) => (
              <div key={inv.name} className={`bg-white rounded-3xl border border-gray-200 overflow-hidden grid lg:grid-cols-2 ${i % 2 === 1 ? "lg:grid-flow-dense" : ""}`}>
                <div className={`relative h-64 lg:h-auto min-h-[260px] ${i % 2 === 1 ? "lg:col-start-2" : ""}`}>
                  <Image src={inv.img} alt={inv.name} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
                </div>
                <div className="p-8 lg:p-10 flex flex-col justify-center">
                  <p className="text-xs font-semibold text-[#0d1547] uppercase tracking-widest mb-2">{inv.brands}</p>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{inv.name}</h3>
                  <p className="text-gray-500 leading-relaxed mb-6 text-sm">{inv.desc}</p>
                  <ul className="grid grid-cols-2 gap-2">
                    {inv.pros.map((p) => (
                      <li key={p} className="flex items-start gap-2">
                        <CheckCircle2 size={15} className="text-[#0d1547] shrink-0 mt-0.5" />
                        <span className="text-gray-700 text-xs">{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA + sidebar ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-10">
            {/* Main CTA */}
            <div className="lg:col-span-2 bg-[#051D3E] rounded-3xl p-10 text-white flex flex-col justify-between">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Nu stii ce invelitoare sa alegi?</h2>
                <p className="text-white/70 leading-relaxed mb-6">
                  Venim la fata locului, analizam panta, sarpanta si stilul casei si iti recomandam varianta optima. Consultatie gratuita, oferta clara, fara obligatii.
                </p>
                <ul className="space-y-2 mb-8">
                  {["Evaluare gratuita la fata locului", "Recomandare personalizata pe casa ta", "Oferta detaliata materiale + manopera", "Garantie scrisa pe toata lucrarea"].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-sm text-white/80">
                      <CheckCircle2 size={16} className="text-white shrink-0" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <a href="tel:0754456844" className="inline-flex items-center justify-center gap-2 bg-white text-[#051D3E] px-7 py-3.5 rounded-full font-bold text-sm hover:bg-gray-100 transition-colors">
                  <Phone size={15} /> 0754 456 844
                </a>
                <Link href="/contact" className="inline-flex items-center justify-center gap-2 border border-white/30 text-white px-7 py-3.5 rounded-full font-semibold text-sm hover:bg-white/10 transition-all">
                  Formular Contact <ArrowRight size={14} />
                </Link>
              </div>
            </div>

            {/* Sidebar alte servicii */}
            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 h-fit">
              <h3 className="font-bold text-gray-900 text-sm uppercase tracking-wide mb-4">Alte Servicii</h3>
              <ul className="space-y-2 mb-6">
                {otherServices.map((s) => (
                  <li key={s.slug}>
                    <Link href={`/servicii/${s.slug}`} className="flex items-center gap-2 text-sm text-gray-600 hover:text-[#0d1547] transition-colors py-1.5 border-b border-gray-100 last:border-0">
                      <ArrowRight size={13} className="shrink-0 text-[#0d1547]" /> {s.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <a href="https://wa.me/40754456844" target="_blank" rel="noopener noreferrer" className="block text-center bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl font-semibold text-sm transition-colors">
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Galerie ── */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-[#0d1547] font-semibold text-sm uppercase tracking-wider block mb-3">Portofoliu</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Lucrari Executate</h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { src: "/images/projects/tigla-metalica-3.webp", span: "col-span-2 row-span-2 h-80 lg:h-auto" },
              { src: "/images/projects/tigla-ceramica-2.webp", span: "h-40" },
              { src: "/images/projects/tabla-faltuita-2.webp", span: "h-40" },
              { src: "/images/projects/tigla-metalica-4.webp", span: "h-40" },
              { src: "/images/projects/sindrila-1.webp", span: "h-40" },
            ].map((item, i) => (
              <div key={i} className={`relative rounded-2xl overflow-hidden group ${item.span}`}>
                <Image src={item.src} alt={`Invelitoare lucrare ${i + 1}`} fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="(max-width: 640px) 50vw, 25vw" />
                <div className="absolute inset-0 bg-[#051D3E]/20 group-hover:bg-[#051D3E]/5 transition-colors" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA final ── */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/cta.webp" alt="Invelitori acoperisuri" fill className="object-cover" sizes="100vw" />
          <div className="absolute inset-0 bg-[#0d1547]/85" />
        </div>
        <div className="relative max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Alege invelitoarea potrivita
          </h2>
          <p className="text-white/70 text-lg mb-10">
            Consultatie gratuita, oferta personalizata si montaj cu garantie scrisa. Suna-ne azi.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:0754456844" className="inline-flex items-center justify-center gap-2 bg-white text-[#0d1547] px-8 py-4 rounded-full text-lg font-bold hover:bg-gray-100 transition-colors">
              <Phone size={18} /> 0754 456 844
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
