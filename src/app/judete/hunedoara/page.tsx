import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, Phone, ArrowRight, MapPin, Home, Calendar, Users, Award } from "lucide-react";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "Acoperisuri Deva si Judetul Hunedoara — Montaj, Reparatii, Renovari | Acoperisuri Pro",
  description: "Acoperisuri Deva si judetul Hunedoara. Montaj acoperis Deva, reparatii acoperis Petrosani, Orastie, Brad, Simeria. Firma locala 15+ ani, garantie scrisa. Suna 0750 771 028.",
  alternates: { canonical: "https://montajacoperispro.ro/judete/hunedoara" },
};

const stats = [
  { icon: Home, value: "300+", label: "Acoperisuri in Hunedoara" },
  { icon: Calendar, value: "15+", label: "Ani Experienta Locala" },
  { icon: Users, value: "250+", label: "Clienti Multumiti" },
  { icon: Award, value: "100%", label: "Garantie Lucrari" },
];

const orase = ["Deva", "Hunedoara", "Petrosani", "Orastie", "Brad", "Simeria", "Hateg", "Lupeni", "Vulcan", "Petrila", "Calan", "Geoagiu"];
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
  { slug: "alba", label: "Alba" }, { slug: "sibiu", label: "Sibiu" }, { slug: "timis", label: "Timis" },
  { slug: "cluj", label: "Cluj" }, { slug: "arad", label: "Arad" }, { slug: "gorj", label: "Gorj" },
  { slug: "valcea", label: "Valcea" }, { slug: "bihor", label: "Bihor" }, { slug: "bucuresti", label: "Bucuresti" },
];
const portofoliu = [
  { src: "/images/dragos/poza-1.jpeg", label: "Deva" },
  { src: "/images/dragos/poza-2.jpeg", label: "Hunedoara" },
  { src: "/images/dragos/poza-3.jpeg", label: "Simeria" },
  { src: "/images/dragos/acoperisuri-noi.jpeg", label: "Orastie" },
];
const faq = [
  { q: "Cat costa un acoperis nou in Deva?", a: "Pretul unui acoperis nou in Deva variaza intre 80-250 lei/mp in functie de material si complexitate. Oferim evaluare gratuita si deviz detaliat fara obligatii." },
  { q: "Faceti montaj acoperis in Deva si Hunedoara?", a: "Da, suntem o firma locala din Hunedoara cu peste 15 ani de activitate. Ne deplasam in Deva, Hunedoara, Petrosani, Orastie, Brad, Simeria si toate localitatile din jud. Hunedoara." },
  { q: "Cat dureaza reparatia unui acoperis in Hunedoara?", a: "O reparatie simpla se executa in 1-2 zile. Un acoperis nou dureaza 5-15 zile lucratoare. Va comunicam termenul exact dupa evaluare gratuita." },
  { q: "Oferiti garantie pentru acoperisuri in Deva?", a: "Da, oferim garantie scrisa intre 10 si 20 de ani pentru toate lucrarile in Deva si judetul Hunedoara. Garantia acopera atat manopera cat si materialele." },
  { q: "Faceti reparatii urgente acoperis in Deva?", a: "Da, avem echipe disponibile 24/7 pentru interventii de urgenta in Deva si Hunedoara. Infiltratii, tabla smulsa, avarii post-furtuna — ajungem in maxim 2-3 ore." },
  { q: "Ce materiale folositi pentru acoperisuri in Hunedoara?", a: "Lucram cu tigla metalica Bilka si Lindab, tigla ceramica Bramac si Tondach, tabla faltuita si sindrila bituminoasa — toate achizitionate direct de la producatori." },
];

export default function HunedoaraPage() {
  return (
    <>
      <BreadcrumbSchema items={[{"name":"Acasa","url":"https://montajacoperispro.ro/"},{"name":"Judete","url":"https://montajacoperispro.ro/judete"},{"name":"Hunedoara","url":"https://montajacoperispro.ro/judete/hunedoara"}]} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "HomeAndConstructionBusiness", name: "Acoperisuri Pro — Hunedoara", url: "https://montajacoperispro.ro/judete/hunedoara", telephone: "+40750771028", email: "montajacoperispro@gmail.com", areaServed: ["Deva", "Hunedoara", "Petrosani", "Orastie", "Brad", "Simeria"], description: "Firma locala cu 15+ ani experienta in acoperisuri in Deva si judetul Hunedoara." }) }} />
      <section className="relative bg-[#051D3E] text-white pt-16 pb-0 overflow-hidden">
        <div className="absolute inset-0"><Image src="/images/dragos/poza-1.jpeg" alt="Acoperisuri Deva Hunedoara" fill className="object-cover" priority sizes="100vw" /><div className="absolute inset-0 bg-[#051D3E]/75" /></div>
        <div className="relative max-w-7xl mx-auto px-4 pb-24 pt-8">
          <nav className="flex items-center gap-2 text-sm text-white/60 mb-6"><Link href="/" className="hover:text-white transition-colors">Acasa</Link><span className="text-white/40">›</span><span className="text-white/60">Judete</span><span className="text-white/40">›</span><span className="text-white">Hunedoara</span></nav>
          <div className="flex items-center gap-2 mb-5"><span className="inline-flex items-center gap-1.5 bg-white/15 border border-white/20 text-white/90 text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full"><MapPin size={11} /> Deva · Judetul Hunedoara</span></div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-5 max-w-2xl">Acoperisuri Deva<br />si Judetul Hunedoara</h1>
          <div className="w-12 h-1 bg-[#E53935] rounded mb-6" />
          <p className="text-white/75 text-lg leading-relaxed mb-8 max-w-xl">Firma locala cu peste 15 ani de activitate in acoperisuri in Deva si judetul Hunedoara. Montaj acoperis nou, reparatii acoperis, renovari si interventii urgenta. Evaluare gratuita, garantie scrisa.</p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a href="tel:0750771028" className="inline-flex items-center justify-center gap-2 bg-white text-[#051D3E] px-7 py-3.5 rounded-full font-bold text-sm hover:bg-gray-100 transition-colors"><Phone size={16} /> 0750 771 028</a>
            <Link href="/contact" className="inline-flex items-center justify-center gap-2 bg-white/15 border border-white/30 text-white px-7 py-3.5 rounded-full font-semibold text-sm hover:bg-white/25 transition-all">Cere Oferta Gratuita <ArrowRight size={15} /></Link>
          </div>
        </div>
        <div className="relative h-16"><svg viewBox="0 0 1440 64" preserveAspectRatio="none" className="absolute bottom-0 w-full h-16"><path d="M0,32 C360,80 1080,0 1440,32 L1440,64 L0,64 Z" fill="white" /></svg></div>
      </section>
      <section className="bg-white pb-14 pt-14"><div className="max-w-4xl mx-auto px-4"><div className="grid grid-cols-2 md:grid-cols-4 gap-6">{stats.map((s) => (<div key={s.label} className="flex flex-col items-center text-center"><div className="w-14 h-14 rounded-full bg-red-50 text-[#E53935] flex items-center justify-center mb-3 shadow-sm"><s.icon size={24} /></div><div className="text-3xl font-extrabold text-gray-900 mb-0.5">{s.value}</div><div className="text-xs text-gray-500 font-medium leading-tight">{s.label}</div></div>))}</div></div></section>
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <span className="text-[#0d1547] font-semibold text-sm uppercase tracking-wider block mb-3">Firma locala acoperisuri Deva</span>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 leading-tight">Acoperisuri in Deva si Hunedoara — Firma cu 15 Ani Experienta</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed text-sm">
                <p>Suntem firma de acoperisuri cu cea mai lunga experienta din judetul Hunedoara — peste 15 ani de activitate in <strong>Deva, Hunedoara, Petrosani, Orastie, Brad si Simeria</strong>. Acoperisuri Pro este prima alegere pentru montaj acoperis in Deva si pentru reparatii acoperis in tot judetul Hunedoara.</p>
                <p>Oferim servicii complete de acoperisuri in Deva: constructie acoperis nou, reparatii si renovari, invelitori din tigla metalica sau ceramica, tabla faltuita, mansardari, curatare si intretinere. Lucram cu materiale originale certificate — Bilka, Lindab, Bramac, Tondach — si garantam fiecare lucrare in scris.</p>
                <p>Pentru montaj acoperis in Deva sau reparatii urgente in judetul Hunedoara, suna acum la <strong>0750 771 028</strong>. Venim gratuit la fata locului, evaluam si iti dam un deviz clar fara costuri ascunse.</p>
              </div>
              <ul className="mt-6 space-y-2">{["Montaj acoperis nou in Deva si Hunedoara", "Reparatii acoperis Deva — interventii rapide", "Invelitori tigla metalica, ceramica, tabla faltuita", "Deplasare gratuita in tot judetul Hunedoara", "Garantie scrisa 10-20 ani pe lucrari", "Interventii urgenta 24/7 in Deva si imprejurimi"].map((item) => (<li key={item} className="flex items-start gap-2.5"><CheckCircle2 size={15} className="text-[#0d1547] shrink-0 mt-0.5" /><span className="text-gray-700 text-sm">{item}</span></li>))}</ul>
            </div>
            <div className="space-y-5">
              <div className="bg-white rounded-2xl border border-gray-200 p-6"><h3 className="font-bold text-gray-900 text-sm uppercase tracking-wide mb-4 flex items-center gap-2"><MapPin size={14} className="text-[#0d1547]" /> Localitati deservite in Hunedoara</h3><div className="flex flex-wrap gap-2">{orase.map((oras) => (<span key={oras} className="bg-[#0d1547]/8 text-[#0d1547] text-xs font-semibold px-3 py-1.5 rounded-full">{oras}</span>))}<span className="bg-gray-100 text-gray-500 text-xs font-medium px-3 py-1.5 rounded-full">+ toate localitatile</span></div></div>
              <div className="bg-[#051D3E] rounded-2xl p-6 text-white"><h3 className="font-bold text-lg mb-2">Evaluare Gratuita in Deva si Hunedoara</h3><p className="text-white/60 text-sm mb-5">Venim la fata locului oriunde in judet. Fara costuri de deplasare, fara obligatii.</p><a href="tel:0750771028" className="flex items-center justify-center gap-2 bg-white text-[#051D3E] py-3 rounded-xl font-bold text-sm hover:bg-gray-100 transition-colors mb-3"><Phone size={15} /> 0750 771 028</a><a href="https://wa.me/40750771028" target="_blank" rel="noopener noreferrer" className="block text-center bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl font-semibold text-sm transition-colors">WhatsApp</a></div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 bg-white"><div className="max-w-7xl mx-auto px-4"><div className="mb-10"><span className="text-[#0d1547] font-semibold text-sm uppercase tracking-wider block mb-3">Ce oferim in Deva si Hunedoara</span><h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Servicii de acoperisuri in Deva</h2><p className="text-gray-600 text-sm leading-relaxed max-w-2xl">Executam toate tipurile de lucrari de acoperis in Deva si judetul Hunedoara. Acoperis nou, reparatii, renovari, mansardari sau interventii urgente — avem solutia potrivita.</p></div><div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">{servicii.map((s) => (<Link key={s.slug} href={`/servicii/${s.slug}`} className="bg-gray-50 border border-gray-200 rounded-2xl p-5 hover:border-[#0d1547]/30 hover:shadow-sm transition-all group flex items-center gap-3"><ArrowRight size={16} className="text-gray-400 group-hover:text-[#0d1547] transition-colors shrink-0" /><span className="text-gray-800 text-sm font-medium">{s.label}</span></Link>))}</div></div></section>
      <section className="py-20 bg-gray-50"><div className="max-w-7xl mx-auto px-4"><div className="text-center mb-10"><span className="text-[#0d1547] font-semibold text-sm uppercase tracking-wider block mb-3">Lucrari executate</span><h2 className="text-3xl font-bold text-gray-900">Portofoliu Acoperisuri Deva si Hunedoara</h2></div><div className="grid grid-cols-2 lg:grid-cols-4 gap-4">{portofoliu.map((item, i) => (<div key={i} className={`relative rounded-2xl overflow-hidden group ${i === 0 ? "col-span-2 h-72" : "h-52"}`}><Image src={item.src} alt={`Acoperis ${item.label} Hunedoara`} fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="(max-width: 640px) 50vw, 25vw" /><div className="absolute inset-0 bg-[#051D3E]/30 group-hover:bg-[#051D3E]/10 transition-colors" /><span className="absolute bottom-3 left-3 bg-white/20 backdrop-blur-sm border border-white/30 text-white text-xs font-semibold px-3 py-1 rounded-full flex items-center gap-1"><MapPin size={10} /> {item.label}</span></div>))}</div><div className="text-center mt-8"><Link href="/portofoliu" className="inline-flex items-center gap-2 text-[#0d1547] font-semibold text-sm hover:gap-3 transition-all">Vezi toate lucrarile <ArrowRight size={15} /></Link></div></div></section>
      <section className="py-20 bg-white"><div className="max-w-3xl mx-auto px-4"><div className="text-center mb-12"><span className="text-[#0d1547] font-semibold text-sm uppercase tracking-wider block mb-3">Intrebari frecvente</span><h2 className="text-3xl font-bold text-gray-900">Intrebari despre acoperisuri in Deva si Hunedoara</h2></div><div className="space-y-4">{faq.map((item, i) => (<div key={i} className="bg-gray-50 border border-gray-200 rounded-2xl p-6"><h3 className="font-bold text-gray-900 mb-2 text-sm md:text-base">{item.q}</h3><p className="text-gray-600 text-sm leading-relaxed">{item.a}</p></div>))}</div></div></section>
      <section className="py-14 bg-gray-50"><div className="max-w-7xl mx-auto px-4"><div className="text-center mb-8"><span className="text-[#0d1547] font-semibold text-sm uppercase tracking-wider block mb-2">Activitate nationala</span><h2 className="text-2xl font-bold text-gray-900">Activi si in alte judete</h2></div><div className="flex flex-wrap justify-center gap-3">{alteJudete.map((j) => (<Link key={j.slug} href={`/judete/${j.slug}`} className="inline-flex items-center gap-1.5 bg-white border border-gray-200 hover:border-[#0d1547]/30 hover:shadow-sm text-gray-700 hover:text-[#0d1547] text-sm font-medium px-4 py-2 rounded-full transition-all"><MapPin size={12} /> {j.label}</Link>))}</div></div></section>
      <section className="py-20 bg-[#0d1547]"><div className="max-w-3xl mx-auto px-4 text-center"><h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ai nevoie de acoperisuri in Deva sau Hunedoara?</h2><p className="text-white/70 text-lg mb-10">Suna acum pentru o evaluare gratuita. Venim rapid, lucram serios, garantam rezultatul.</p><div className="flex flex-col sm:flex-row gap-4 justify-center"><a href="tel:0750771028" className="inline-flex items-center justify-center gap-2 bg-white text-[#0d1547] px-8 py-4 rounded-full text-lg font-bold hover:bg-gray-100 transition-colors"><Phone size={18} /> 0750 771 028</a><Link href="/contact" className="inline-flex items-center justify-center gap-2 bg-white/15 border border-white/30 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/25 transition-all">Formular Contact</Link></div></div></section>
    </>
  );
}
