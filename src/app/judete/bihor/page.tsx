import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, Phone, ArrowRight, MapPin, Home, Calendar, Users, Award } from "lucide-react";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "Acoperisuri Oradea si Judetul Bihor — Montaj, Reparatii, Renovari | Acoperisuri Pro",
  description: "Acoperisuri Oradea si judetul Bihor. Montaj acoperis Oradea, reparatii acoperis Beius, Salonta, Marghita. Firma specializata, garantie scrisa, evaluare gratuita. Suna 0735 097 539.",
  alternates: { canonical: "https://montajacoperispro.ro/judete/bihor" },
};

const stats = [
  { icon: Home, value: "200+", label: "Acoperisuri in Bihor" },
  { icon: Calendar, value: "15+", label: "Ani Experienta" },
  { icon: Users, value: "150+", label: "Clienti Multumiti" },
  { icon: Award, value: "100%", label: "Garantie Lucrari" },
];

const orase = [
  "Oradea", "Beius", "Salonta", "Marghita", "Stei",
  "Alesd", "Valea lui Mihai", "Sacueni", "Nucet", "Vascau",
];

const servicii = [
  { slug: "constructie-acoperisuri-noi", label: "Constructie Acoperisuri Noi" },
  { slug: "invelitori-pentru-acoperisuri", label: "Invelitori Acoperisuri" },
  { slug: "accesorii-si-sisteme-de-montaj", label: "Accesorii si Montaj" },
  { slug: "reparatii-acoperisuri", label: "Reparatii Acoperisuri" },
  { slug: "renovari-si-modernizari", label: "Renovari si Modernizari" },
  { slug: "mansardari-si-extinderi", label: "Mansardari si Extinderi" },
  { slug: "interventii-de-urgenta", label: "Interventii de Urgenta" },
  { slug: "curatare-si-intretinere", label: "Curatare si Intretinere" },
];

const alteJudete = [
  { slug: "hunedoara", label: "Hunedoara" },
  { slug: "alba", label: "Alba" },
  { slug: "sibiu", label: "Sibiu" },
  { slug: "valcea", label: "Valcea" },
  { slug: "gorj", label: "Gorj" },
  { slug: "mehedinti", label: "Mehedinti" },
  { slug: "timis", label: "Timis" },
  { slug: "arad", label: "Arad" },
  { slug: "cluj", label: "Cluj" },
  { slug: "bucuresti", label: "Bucuresti" },
  { slug: "ilfov", label: "Ilfov" },
];

const portofoliu = [
  { src: "/images/dragos/renovari-4.jpeg", label: "Oradea" },
  { src: "/images/projects/tigla-ceramica-vila.jpeg", label: "Beius" },
  { src: "/images/projects/accesorii-1.jpeg", label: "Salonta" },
  { src: "/images/dragos/poza-4.jpeg", label: "Marghita" },
];

const faq = [
  {
    q: "Cat costa un acoperis nou in Oradea?",
    a: "Pretul unui acoperis nou in Oradea variaza intre 80-250 lei/mp in functie de materialul ales (tigla metalica, tigla ceramica, tabla faltuita) si complexitatea sarpantei. Oferim evaluare gratuita la fata locului si deviz detaliat fara obligatii.",
  },
  {
    q: "Faceti montaj acoperis in Oradea?",
    a: "Da, echipele noastre sunt active in Oradea si in tot judetul Bihor. Ne deplasam gratuit pentru evaluare in Oradea, Beius, Salonta, Marghita si toate localitatile din jur.",
  },
  {
    q: "Cat dureaza reparatia unui acoperis in Bihor?",
    a: "O reparatie simpla se executa in 1-2 zile. Un acoperis nou complet dureaza 5-15 zile lucratoare in functie de suprafata si tipul invelitorii. Va comunicam termenul exact dupa evaluare.",
  },
  {
    q: "Oferiti garantie pentru lucrarile de acoperis in Oradea?",
    a: "Da, oferim garantie scrisa intre 10 si 20 de ani pentru toate lucrarile executate in Oradea si judetul Bihor. Garantia acopera atat manopera cat si materialele utilizate.",
  },
  {
    q: "Faceti reparatii urgente de acoperis in Oradea?",
    a: "Da, avem echipe disponibile 24/7 pentru interventii de urgenta in Oradea si Bihor. Infiltratii active, tabla smulsa de vant, avarii post-furtuna — ajungem in maxim 3-4 ore.",
  },
  {
    q: "Ce materiale folositi pentru acoperisuri in Bihor?",
    a: "Lucram cu materiale certificate de top: tigla metalica Bilka si Lindab, tigla ceramica Bramac si Tondach, tabla faltuita, sindrila bituminoasa. Toate materialele sunt achizitionate direct de la producatori.",
  },
];

export default function BihorPage() {
  return (
    <>
      <BreadcrumbSchema items={[{"name":"Acasa","url":"https://montajacoperispro.ro/"},{"name":"Judete","url":"https://montajacoperispro.ro/judete"},{"name":"Bihor","url":"https://montajacoperispro.ro/judete/bihor"}]} />

      {/* Schema LocalBusiness */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HomeAndConstructionBusiness",
            name: "Acoperisuri Pro — Bihor",
            url: "https://montajacoperispro.ro/judete/bihor",
            telephone: "+40735097539",
            email: "montajacoperispro@gmail.com",
            areaServed: ["Oradea", "Bihor", "Beius", "Salonta", "Marghita", "Alesd"],
            description: "Firma specializata in acoperisuri in Oradea si judetul Bihor. Montaj, reparatii, renovari acoperisuri.",
          }),
        }}
      />

      {/* Hero */}
      <section className="relative bg-[#051D3E] text-white pt-16 pb-0 overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/dragos/renovari-4.jpeg" alt="Acoperisuri Oradea Bihor" fill className="object-cover" priority sizes="100vw" />
          <div className="absolute inset-0 bg-[#051D3E]/75" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 pb-24 pt-8">
          <nav className="flex items-center gap-2 text-sm text-white/60 mb-6">
            <Link href="/" className="hover:text-white transition-colors">Acasa</Link>
            <span className="text-white/40">›</span>
            <span className="text-white/60">Judete</span>
            <span className="text-white/40">›</span>
            <span className="text-white">Bihor</span>
          </nav>
          <div className="flex items-center gap-2 mb-5">
            <span className="inline-flex items-center gap-1.5 bg-white/15 border border-white/20 text-white/90 text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full">
              <MapPin size={11} /> Oradea · Judetul Bihor
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-5 max-w-2xl">
            Acoperisuri Oradea<br />si Judetul Bihor
          </h1>
          <div className="w-12 h-1 bg-[#E53935] rounded mb-6" />
          <p className="text-white/75 text-lg leading-relaxed mb-8 max-w-xl">
            Firma specializata in acoperisuri in Oradea si tot judetul Bihor. Montaj acoperis nou, reparatii acoperis, renovari si interventii urgenta. Evaluare gratuita, garantie scrisa.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a href="tel:0735097539" className="inline-flex items-center justify-center gap-2 bg-white text-[#051D3E] px-7 py-3.5 rounded-full font-bold text-sm hover:bg-gray-100 transition-colors">
              <Phone size={16} /> 0735 097 539
            </a>
            <Link href="/contact" className="inline-flex items-center justify-center gap-2 bg-white/15 border border-white/30 text-white px-7 py-3.5 rounded-full font-semibold text-sm hover:bg-white/25 transition-all">
              Cere Oferta Gratuita <ArrowRight size={15} />
            </Link>
          </div>
        </div>
        <div className="relative h-16">
          <svg viewBox="0 0 1440 64" preserveAspectRatio="none" className="absolute bottom-0 w-full h-16">
            <path d="M0,32 C360,80 1080,0 1440,32 L1440,64 L0,64 Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-white pb-14 pt-14">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((s) => (
              <div key={s.label} className="flex flex-col items-center text-center">
                <div className="w-14 h-14 rounded-full bg-red-50 text-[#E53935] flex items-center justify-center mb-3 shadow-sm">
                  <s.icon size={24} />
                </div>
                <div className="text-3xl font-extrabold text-gray-900 mb-0.5">{s.value}</div>
                <div className="text-xs text-gray-500 font-medium leading-tight">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Continut principal */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <span className="text-[#0d1547] font-semibold text-sm uppercase tracking-wider block mb-3">Firma acoperisuri Oradea</span>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 leading-tight">
                Acoperisuri in Oradea si Bihor — Servicii Complete
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed text-sm">
                <p>
                  Suntem o firma specializata in acoperisuri in Oradea si judetul Bihor, cu peste 15 ani de experienta in montaj, reparatii si renovari. Echipele noastre se deplaseaza in toata zona — <strong>Oradea, Beius, Salonta, Marghita, Alesd, Stei</strong> si in toate localitatile din jud. Bihor.
                </p>
                <p>
                  Oferim servicii complete de acoperisuri in Oradea: de la constructia unui acoperis nou pana la reparatii punctuale, curatare, izolare termica si interventii de urgenta. Fiecare lucrare de acoperis in Oradea sau Bihor este executata cu materiale originale certificate — Bilka, Lindab, Bramac, Tondach.
                </p>
                <p>
                  Daca ai nevoie de reparatii acoperis in Oradea sau de un acoperis nou in judetul Bihor, suna acum la <strong>0735 097 539</strong>. Venim la fata locului gratuit, evaluam situatia si iti dam un deviz clar, fara costuri ascunse.
                </p>
              </div>
              <ul className="mt-6 space-y-2">
                {[
                  "Montaj acoperis nou in Oradea si Bihor",
                  "Reparatii acoperis Oradea — interventii rapide",
                  "Invelitori tigla metalica, ceramica, tabla faltuita",
                  "Deplasare gratuita pentru evaluare in tot Bihorul",
                  "Garantie scrisa 10-20 ani pe lucrari",
                  "Interventii de urgenta 24/7 in Oradea",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <CheckCircle2 size={15} className="text-[#0d1547] shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-5">
              <div className="bg-white rounded-2xl border border-gray-200 p-6">
                <h3 className="font-bold text-gray-900 text-sm uppercase tracking-wide mb-4 flex items-center gap-2">
                  <MapPin size={14} className="text-[#0d1547]" /> Localitati deservite in Bihor
                </h3>
                <div className="flex flex-wrap gap-2">
                  {orase.map((oras) => (
                    <span key={oras} className="bg-[#0d1547]/8 text-[#0d1547] text-xs font-semibold px-3 py-1.5 rounded-full">
                      {oras}
                    </span>
                  ))}
                  <span className="bg-gray-100 text-gray-500 text-xs font-medium px-3 py-1.5 rounded-full">+ toate localitatile</span>
                </div>
              </div>
              <div className="bg-[#051D3E] rounded-2xl p-6 text-white">
                <h3 className="font-bold text-lg mb-2">Evaluare Gratuita in Oradea si Bihor</h3>
                <p className="text-white/60 text-sm mb-5">Venim la fata locului oriunde in judet. Fara costuri de deplasare, fara obligatii.</p>
                <a href="tel:0735097539" className="flex items-center justify-center gap-2 bg-white text-[#051D3E] py-3 rounded-xl font-bold text-sm hover:bg-gray-100 transition-colors mb-3">
                  <Phone size={15} /> 0735 097 539
                </a>
                <a href="https://wa.me/40735097539" target="_blank" rel="noopener noreferrer" className="block text-center bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl font-semibold text-sm transition-colors">
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Servicii Oradea */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-10">
            <span className="text-[#0d1547] font-semibold text-sm uppercase tracking-wider block mb-3">Ce oferim in Oradea si Bihor</span>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Servicii de acoperisuri in Oradea</h2>
            <p className="text-gray-600 text-sm leading-relaxed max-w-2xl">
              Executam toate tipurile de lucrari de acoperis in Oradea si judetul Bihor. Fie ca ai nevoie de un acoperis nou, de reparatii dupa furtuna sau de renovarea unui acoperis vechi, avem solutia potrivita.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {servicii.map((s) => (
              <Link key={s.slug} href={`/servicii/${s.slug}`} className="bg-gray-50 border border-gray-200 rounded-2xl p-5 hover:border-[#0d1547]/30 hover:shadow-sm transition-all group flex items-center gap-3">
                <ArrowRight size={16} className="text-gray-400 group-hover:text-[#0d1547] transition-colors shrink-0" />
                <span className="text-gray-800 text-sm font-medium">{s.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Portofoliu */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <span className="text-[#0d1547] font-semibold text-sm uppercase tracking-wider block mb-3">Lucrari executate</span>
            <h2 className="text-3xl font-bold text-gray-900">Portofoliu Acoperisuri Oradea si Bihor</h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {portofoliu.map((item, i) => (
              <div key={i} className={`relative rounded-2xl overflow-hidden group ${i === 0 ? "col-span-2 h-72" : "h-52"}`}>
                <Image src={item.src} alt={`Acoperis ${item.label} Bihor`} fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="(max-width: 640px) 50vw, 25vw" />
                <div className="absolute inset-0 bg-[#051D3E]/30 group-hover:bg-[#051D3E]/10 transition-colors" />
                <span className="absolute bottom-3 left-3 bg-white/20 backdrop-blur-sm border border-white/30 text-white text-xs font-semibold px-3 py-1 rounded-full flex items-center gap-1">
                  <MapPin size={10} /> {item.label}
                </span>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/portofoliu" className="inline-flex items-center gap-2 text-[#0d1547] font-semibold text-sm hover:gap-3 transition-all">
              Vezi toate lucrarile <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-[#0d1547] font-semibold text-sm uppercase tracking-wider block mb-3">Intrebari frecvente</span>
            <h2 className="text-3xl font-bold text-gray-900">Intrebari despre acoperisuri in Oradea si Bihor</h2>
          </div>
          <div className="space-y-4">
            {faq.map((item, i) => (
              <div key={i} className="bg-gray-50 border border-gray-200 rounded-2xl p-6">
                <h3 className="font-bold text-gray-900 mb-2 text-sm md:text-base">{item.q}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Alte judete */}
      <section className="py-14 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-8">
            <span className="text-[#0d1547] font-semibold text-sm uppercase tracking-wider block mb-2">Activitate nationala</span>
            <h2 className="text-2xl font-bold text-gray-900">Activi si in alte judete</h2>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {alteJudete.map((j) => (
              <Link key={j.slug} href={`/judete/${j.slug}`} className="inline-flex items-center gap-1.5 bg-white border border-gray-200 hover:border-[#0d1547]/30 hover:shadow-sm text-gray-700 hover:text-[#0d1547] text-sm font-medium px-4 py-2 rounded-full transition-all">
                <MapPin size={12} /> {j.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="py-20 bg-[#0d1547]">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ai nevoie de acoperisuri in Oradea sau Bihor?
          </h2>
          <p className="text-white/70 text-lg mb-10">
            Suna acum pentru o evaluare gratuita. Venim rapid, lucram serios, garantam rezultatul.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:0735097539" className="inline-flex items-center justify-center gap-2 bg-white text-[#0d1547] px-8 py-4 rounded-full text-lg font-bold hover:bg-gray-100 transition-colors">
              <Phone size={18} /> 0735 097 539
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
