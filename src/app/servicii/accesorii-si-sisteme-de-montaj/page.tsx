import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, Phone, ArrowRight, Droplets, Snowflake, Wind, Wrench, FlameKindling, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Accesorii si Sisteme de Montaj - Reparatii Pro",
  description: "Montaj jgheaburi, burlane, parazapezi, coame, dolii, aeratoare si tinichigerie profesionala. Materiale Lindab, Bilka. Garantie completa.",
};

const categorii = [
  {
    icon: Droplets,
    name: "Sisteme Pluviale",
    sub: "Jgheaburi & Burlane",
    desc: "Colectarea si evacuarea corecta a apei de ploaie protejeaza fundatia, fatada si structura cladirii. Montam sisteme pluviale complete din tabla vopsita, cupru sau PVC — etanse, rezistente la UV si inghet.",
    items: ["Jgheaburi semicirculare si patrate", "Burlane rotunde si patrate", "Coliere de prindere inox", "Piese de colt, racorduri, capace", "Colectoare si guri de scurgere"],
    img: "/images/projects/jgheaburi.webp",
  },
  {
    icon: Snowflake,
    name: "Parazapezi",
    sub: "Siguranta la caderea zapezii",
    desc: "Zapada acumulata pe acoperis poate aluneca brusc, punand in pericol persoanele, masinile sau anexele de la baza cladirii. Parazapezile opresc alunecarea si permit topirea controlata.",
    items: ["Parazapezi tubulare din otel galvanizat", "Parazapezi gratar pentru tigla ceramica", "Suporti de fixare specifici fiecarui tip de invelitoare", "Calcul sarcina zapada conform normative", "Instalare in linii corecte pentru eficienta maxima"],
    img: "/images/projects/accesorii-1.jpeg",
  },
  {
    icon: Wind,
    name: "Aeratoare & Ventilatie",
    sub: "Combaterea condensului",
    desc: "Un pod neventilatv corespunzator acumuleaza condens, care degradeaza sarpanta, izolatia si invelitoarea in timp. Aeratoarele de coama si de camp asigura circulatia aerului si prelungesc viata acoperisului.",
    items: ["Aeratoare de coama continua", "Aeratoare de camp (aeratoare punctuale)", "Sisteme de ventilatie subaferenta", "Paravant de vant pentru membrana", "Deflectoare pentru cosuri de ventilatie"],
    img: "/images/projects/accesorii-2.jpeg",
  },
  {
    icon: Wrench,
    name: "Tinichigerie",
    sub: "Sorturi, coame, dolii",
    desc: "Detaliile de tinichigerie sunt punctele critice ale oricarui acoperis. Un sort prost montat sau o dolie fara etansare corecta inseamna infiltratii garantate. Executam toate elementele de tabla la comanda, adaptate specific fiecarui acoperis.",
    items: ["Sorturi la baza cosului de fum", "Dolii la intersectia versantilor", "Coame si pazii la margini", "Racorduri ferestre de mansarda", "Sorturi de perete si streasina"],
    img: "/images/projects/accesorii-3.jpeg",
  },
  {
    icon: FlameKindling,
    name: "Cosuri de Fum",
    sub: "Racorduri si etansari",
    desc: "Zona dintre cosul de fum si invelitoare este una dintre cele mai vulnerabile la infiltratii. Montam sorturi si sisteme de etansare profesionale care rezista la dilatatii termice si intemperii.",
    items: ["Sort inferior si superior cos fum", "Sisteme de etansare elastica", "Deflectoare anti-ploaie", "Capace cos fum inox", "Verificare si reglare tiraj"],
    img: "/images/projects/jgheaburi-2.webp",
  },
  {
    icon: ShieldCheck,
    name: "Accesorii Invelitoare",
    sub: "Fixare, etansare, finisare",
    desc: "Fiecare tip de invelitoare are accesoriile sale specifice — suruburi, clips, benzi de etansare, membrane anticondens. Folosim exclusiv accesorii originale recomandate de producatorul invelitorii.",
    items: ["Suruburi si clips fixare tigla metalica", "Membrane anticondens si bariere vapori", "Benzi de etansare coama si streasina", "Opritoare de tigla ceramica", "Sisteme de acoperire coama"],
    img: "/images/projects/tigla-metalica-3.webp",
  },
];

const otherServices = [
  { slug: "constructie-acoperisuri-noi", label: "Constructie Acoperisuri Noi" },
  { slug: "invelitori-pentru-acoperisuri", label: "Invelitori Acoperisuri" },
  { slug: "reparatii-acoperisuri", label: "Reparatii Acoperisuri" },
  { slug: "renovari-si-modernizari", label: "Renovari si Modernizari" },
  { slug: "mansardari-si-extinderi", label: "Mansardari si Extinderi" },
  { slug: "interventii-de-urgenta", label: "Interventii de Urgenta" },
];

export default function AccesoriiMontaj() {
  return (
    <>
      {/* ── Hero cu val ── */}
      <section className="relative bg-[#051D3E] text-white pt-16 pb-0 overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/projects/jgheaburi.webp" alt="Accesorii si sisteme montaj acoperis" fill className="object-cover" priority sizes="100vw" />
          <div className="absolute inset-0 bg-[#051D3E]/80" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 pb-24 pt-8">
          <nav className="flex items-center gap-2 text-sm text-white/60 mb-6">
            <Link href="/">Acasa</Link>
            <span className="text-white/40">›</span>
            <Link href="/servicii" className="hover:text-white transition-colors">Servicii</Link>
            <span className="text-white/40">›</span>
            <span className="text-white">Accesorii si Sisteme de Montaj</span>
          </nav>
          <div className="max-w-2xl">
            <span className="inline-block bg-white/15 border border-white/20 text-white/90 text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-5">
              Detalii care fac diferenta
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-5">
              Accesorii si<br />Sisteme de Montaj
            </h1>
            <div className="w-12 h-1 bg-[#E53935] rounded mb-6" />
            <p className="text-white/75 text-lg leading-relaxed mb-8">
              Jgheaburi, parazapezi, aeratoare, tinichigerie, cosuri de fum — toate elementele care transforma un acoperis dintr-o invelitoare intr-un sistem complet si durabil.
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

      {/* ── Intro banner ── */}
      <section className="py-14 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="bg-gray-50 border border-gray-200 rounded-3xl p-8 md:p-10 grid md:grid-cols-3 gap-8 text-center">
            {[
              { val: "100%", label: "Materiale originale de producator" },
              { val: "Garantie", label: "Scrisa pe montaj si materiale" },
              { val: "24/7", label: "Disponibili pentru urgente" },
            ].map((s) => (
              <div key={s.label}>
                <div className="text-3xl font-extrabold text-[#0d1547] mb-1">{s.val}</div>
                <div className="text-gray-500 text-sm">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Categorii (alternating) ── */}
      <section className="pb-10 bg-white">
        <div className="max-w-7xl mx-auto px-4 space-y-6">
          {categorii.map((cat, i) => (
            <div key={cat.name} className={`rounded-3xl border border-gray-200 overflow-hidden grid lg:grid-cols-2 ${i % 2 === 1 ? "lg:grid-flow-dense" : ""}`}>
              {/* Imagine */}
              <div className={`relative h-64 lg:h-auto min-h-[280px] ${i % 2 === 1 ? "lg:col-start-2" : ""}`}>
                <Image src={cat.img} alt={cat.name} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
                <div className="absolute inset-0 bg-[#051D3E]/30" />
                <div className="absolute bottom-5 left-5">
                  <span className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm border border-white/30 text-white text-xs font-semibold px-3 py-1.5 rounded-full">
                    <cat.icon size={13} /> {cat.sub}
                  </span>
                </div>
              </div>

              {/* Text */}
              <div className="p-8 lg:p-10 flex flex-col justify-center bg-white">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 rounded-xl bg-[#0d1547]/10 text-[#0d1547] flex items-center justify-center shrink-0">
                    <cat.icon size={17} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{cat.name}</h3>
                </div>
                <p className="text-gray-500 text-sm leading-relaxed mb-5">{cat.desc}</p>
                <ul className="space-y-2">
                  {cat.items.map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <CheckCircle2 size={14} className="text-[#0d1547] shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA + alte servicii ── */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 bg-[#051D3E] rounded-3xl p-10 text-white">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Ai nevoie de jgheaburi sau parazapezi?</h2>
              <p className="text-white/70 leading-relaxed mb-6">
                Evaluam gratuit ce accesorii lipsesc sau sunt deteriorate si iti facem o oferta completa. Montajul se face rapid, cu materiale originale si garantie scrisa.
              </p>
              <ul className="space-y-2 mb-8">
                {[
                  "Evaluare gratuita la fata locului",
                  "Materiale Lindab, Bilka — originale",
                  "Montaj conform specificatiilor producatorului",
                  "Garantie scrisa pe lucrare",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-white/80">
                    <CheckCircle2 size={15} className="text-white shrink-0" /> {item}
                  </li>
                ))}
              </ul>
              <div className="flex flex-col sm:flex-row gap-3">
                <a href="tel:0754456844" className="inline-flex items-center justify-center gap-2 bg-white text-[#051D3E] px-7 py-3.5 rounded-full font-bold text-sm hover:bg-gray-100 transition-colors">
                  <Phone size={15} /> 0754 456 844
                </a>
                <Link href="/contact" className="inline-flex items-center justify-center gap-2 border border-white/30 text-white px-7 py-3.5 rounded-full font-semibold text-sm hover:bg-white/10 transition-all">
                  Formular Contact <ArrowRight size={14} />
                </Link>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl p-6 h-fit">
              <h3 className="font-bold text-gray-900 text-sm uppercase tracking-wide mb-4">Alte Servicii</h3>
              <ul className="space-y-1 mb-6">
                {otherServices.map((s) => (
                  <li key={s.slug}>
                    <Link href={`/servicii/${s.slug}`} className="flex items-center gap-2 text-sm text-gray-600 hover:text-[#0d1547] transition-colors py-2 border-b border-gray-100 last:border-0">
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

      {/* ── CTA final ── */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/cta.webp" alt="Accesorii montaj acoperis" fill className="object-cover" sizes="100vw" />
          <div className="absolute inset-0 bg-[#0d1547]/85" />
        </div>
        <div className="relative max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Un acoperis complet incepe cu detaliile corecte
          </h2>
          <p className="text-white/70 text-lg mb-10">
            Suna-ne pentru o evaluare gratuita. Montam tot ce lipseste sau inlocuim ce e deteriorat.
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
