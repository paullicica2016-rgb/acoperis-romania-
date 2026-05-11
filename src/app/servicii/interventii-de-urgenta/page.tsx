import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, Phone, ArrowRight, Clock, Zap, ShieldAlert, PhoneCall } from "lucide-react";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import FaqSchema from "@/components/FaqSchema";

export const metadata: Metadata = {
  title: "Interventii de Urgenta Acoperisuri - Acoperisuri Pro",
  description: "Interventii urgenta 24/7 pentru acoperisuri avariate — furtuna, vant, grindina. Echipe mobile, raspuns rapid, securizare imediata. Suna acum 0754 456 844.",
  alternates: { canonical: "https://reparatiipro.ro/servicii/interventii-de-urgenta" },
};

const situatii = [
  "Tigla dislocata sau cazuta dupa furtuna",
  "Gauri sau spargeri in invelitoare",
  "Sarpanta afectata de vant puternic",
  "Infiltratii active prin plafon",
  "Jgheaburi rupte sau desprinse",
  "Copac cazut pe acoperis",
  "Avarii dupa grindina sau zapada abundenta",
  "Cosuri de fum partial daramate",
];

const pasi = [
  { icon: PhoneCall, nr: "01", title: "Suni — Raspundem", desc: "Disponibili 24/7. La primul apel stabilim gravitatea situatiei si trimitem echipa." },
  { icon: Zap, nr: "02", title: "Deplasare Rapida", desc: "Echipa mobila ajunge la tine in cel mai scurt timp posibil, indiferent de ora." },
  { icon: ShieldAlert, nr: "03", title: "Securizare Imediata", desc: "Protejam zona afectata impotriva apei si vantului — prelate, fixari provizorii." },
  { icon: Clock, nr: "04", title: "Plan Reparatii Definitive", desc: "Dupa urgenta, evaluam complet si prezentam oferta pentru remedierea definitiva." },
];

const otherServices = [
  { slug: "reparatii-acoperisuri", label: "Reparatii Acoperisuri" },
  { slug: "constructie-acoperisuri-noi", label: "Constructie Acoperisuri Noi" },
  { slug: "renovari-si-modernizari", label: "Renovari si Modernizari" },
  { slug: "curatare-si-intretinere", label: "Curatare si Intretinere" },
];

export default function InterventiiUrgenta() {
  return (
    <>
      <BreadcrumbSchema items={[{"name":"Acasa","url":"https://reparatiipro.ro/"},{"name":"Servicii","url":"https://reparatiipro.ro/servicii"},{"name":"Interventii de Urgenta","url":"https://reparatiipro.ro/servicii/interventii-de-urgenta"}]} />
      <section className="relative bg-[#051D3E] text-white pt-16 pb-0 overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/hero-reparatii.webp" alt="Interventii urgenta acoperisuri" fill className="object-cover" priority sizes="100vw" />
          <div className="absolute inset-0 bg-[#051D3E]/80" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 pb-24 pt-8">
          <nav className="flex items-center gap-2 text-sm text-white/60 mb-6">
            <Link href="/">Acasa</Link><span className="text-white/40">›</span>
            <Link href="/servicii" className="hover:text-white transition-colors">Servicii</Link><span className="text-white/40">›</span>
            <span className="text-white">Interventii de Urgenta</span>
          </nav>
          <div className="max-w-2xl">
            <span className="inline-block bg-[#E53935]/80 border border-[#E53935]/50 text-white text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-5">Disponibili 24/7</span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-5">Interventii<br />de Urgenta</h1>
            <div className="w-12 h-1 bg-[#E53935] rounded mb-6" />
            <p className="text-white/75 text-lg leading-relaxed mb-8">
              Furtuna, grindina sau vant puternic a avariat acoperisul? Suna acum — echipele noastre mobile intervin rapid, zi si noapte, pentru a securiza si repara.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a href="tel:0754456844" className="inline-flex items-center justify-center gap-2 bg-[#E53935] text-white px-7 py-3.5 rounded-full font-bold text-sm hover:bg-red-700 transition-colors">
                <Phone size={16} /> Suna Acum — 0754 456 844
              </a>
            </div>
          </div>
        </div>
        <div className="relative h-16">
          <svg viewBox="0 0 1440 64" preserveAspectRatio="none" className="absolute bottom-0 w-full h-16">
            <path d="M0,32 C360,80 1080,0 1440,32 L1440,64 L0,64 Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* Banner urgenta */}
      <section className="py-8 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="bg-red-50 border border-red-200 rounded-2xl p-6 flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
            <div className="w-12 h-12 rounded-full bg-[#E53935] flex items-center justify-center shrink-0">
              <Phone size={22} className="text-white" />
            </div>
            <div className="flex-1">
              <p className="font-bold text-gray-900">Urgenta acum? Suna direct.</p>
              <p className="text-gray-500 text-sm">Echipa de urgenta disponibila 24 ore din 24, 7 zile din 7, inclusiv sarbatori legale.</p>
            </div>
            <a href="tel:0754456844" className="inline-flex items-center gap-2 bg-[#E53935] text-white px-6 py-3 rounded-full font-bold text-sm hover:bg-red-700 transition-colors shrink-0">
              0754 456 844
            </a>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-12">

              <div>
                <span className="text-[#0d1547] font-semibold text-sm uppercase tracking-wider block mb-3">Cand intervenim</span>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-5">Fiecare ora conteaza dupa o avarie</h2>
                <div className="space-y-4 text-gray-600 leading-relaxed text-sm">
                  <p>O zona expusa dupa o furtuna poate fi inundata complet in cateva ore de ploaie. Apa patrunsa in structura degradeaza sarpanta, tavanul si peretii mult mai rapid decat pare. Securizarea imediata este prioritatea numarul unu.</p>
                  <p>Echipele noastre mobile sunt echipate pentru interventie rapida — prelate profesionale, fixari de urgenta, materiale de etansare temporara. Dupa securizare, evaluam complet si prezentam solutia definitiva.</p>
                </div>
              </div>

              <div className="bg-gray-50 rounded-2xl p-8">
                <h3 className="text-lg font-bold text-gray-900 mb-5">Situatii in care intervenim</h3>
                <ul className="grid sm:grid-cols-2 gap-3">
                  {situatii.map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <CheckCircle2 size={16} className="text-[#0d1547] shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-6">Cum decurge interventia</h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  {pasi.map((p) => (
                    <div key={p.nr} className="border border-gray-200 rounded-2xl p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-2xl font-extrabold text-gray-100 leading-none">{p.nr}</span>
                        <div className="w-8 h-8 rounded-lg bg-[#0d1547]/10 text-[#0d1547] flex items-center justify-center">
                          <p.icon size={16} />
                        </div>
                      </div>
                      <h4 className="font-bold text-gray-900 text-sm mb-1">{p.title}</h4>
                      <p className="text-gray-500 text-sm leading-relaxed">{p.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-5">
              <div className="bg-[#E53935] rounded-2xl p-6 text-white">
                <h3 className="font-bold text-xl mb-2">Urgenta? Suna acum.</h3>
                <p className="text-white/80 text-sm mb-5">Disponibili non-stop. Raspundem la primul apel.</p>
                <a href="tel:0754456844" className="flex items-center justify-center gap-2 bg-white text-[#E53935] py-3.5 rounded-xl font-bold text-sm hover:bg-gray-100 transition-colors mb-3">
                  <Phone size={15} /> 0754 456 844
                </a>
                <a href="https://wa.me/40754456844" target="_blank" rel="noopener noreferrer" className="block text-center bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl font-semibold text-sm transition-colors">WhatsApp</a>
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

      
      <FaqSchema items={[{"q":"Cat de repede ajungeti la interventii de urgenta?","a":"Suntem disponibili 24/7 si ajungem de regula in 1-3 ore de la apel, in functie de locatie."},{"q":"Ce tipuri de urgente acoperiti?","a":"Acoperim orice urgenta: acoperis avariat de furtuna, infiltratii active, tabla smulsa de vant, tigla sparta sau dislocata."},{"q":"Lucrati si in weekend sau noapte?","a":"Da, suntem disponibili 24/7 inclusiv sambata, duminica si noptile pentru interventii de urgenta."}]} />

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-[#051D3E] mb-10 text-center">Intrebari Frecvente despre Interventiile de Urgenta</h2>
          <div className="space-y-4">
            {[
              {
                q: "Cat de repede ajungeti la o urgenta?",
                a: "In zona Hunedoara si judete invecinate ajungem in maxim 1-3 ore. Suntem disponibili 24/7, inclusiv sambata, duminica si sarbatori legale. Sunati 0754 456 844 si va confirmam ora sosirii.",
              },
              {
                q: "Lucrati si iarna sau pe timp de furtuna?",
                a: "Da, intervenim in orice conditii meteo pentru securizarea acoperisurilor avariate. Daca montajul definitiv nu este posibil imediat din cauza conditiilor, aplicam o solutie provizorie sigura si revin pentru lucrarea definitiva.",
              },
              {
                q: "Oferiti garantie pentru interventiile de urgenta?",
                a: "Da, toate interventiile vin cu garantie scrisa, inclusiv cele de urgenta. Garantia acopera atat manopera cat si materialele folosite.",
              },
              {
                q: "Cat costa o interventie de urgenta?",
                a: "Pretul depinde de tipul si amploarea lucrarii. Deplasarea si evaluarea la fata locului sunt gratuite. Va oferim un deviz transparent inainte de inceperea lucrarii, fara costuri ascunse.",
              },
              {
                q: "Ce tipuri de urgente rezolvati?",
                a: "Acoperis avariat de furtuna sau grindina, tabla smulsa de vant, tigla sparta sau dislocata, infiltratii active, cosuri de fum desprinse, jgheaburi cazute. Orice situatie care pericliteaza siguranta locuintei sau permite patrunderea apei.",
              },
            ].map((item, i) => (
              <details key={i} className="group bg-white rounded-xl border border-gray-200 overflow-hidden">
                <summary className="flex items-center justify-between gap-4 px-6 py-4 cursor-pointer font-semibold text-[#051D3E] hover:bg-gray-50 transition-colors list-none">
                  {item.q}
                  <span className="shrink-0 text-[#0d1547] text-xl transition-transform group-open:rotate-45">+</span>
                </summary>
                <div className="px-6 pb-5 text-gray-600 leading-relaxed border-t border-gray-100 pt-4">
                  {item.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>



      <section className="py-20 bg-[#0d1547]">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Nu lasa apa sa patrunda mai adanc</h2>
          <p className="text-white/70 text-lg mb-10">Fiecare ora de intarziere inseamna daune mai mari. Suna-ne acum.</p>
          <a href="tel:0754456844" className="inline-flex items-center justify-center gap-2 bg-[#E53935] text-white px-10 py-4 rounded-full text-lg font-bold hover:bg-red-700 transition-colors">
            <Phone size={20} /> 0754 456 844 — Urgenta
          </a>
        </div>
      </section>
    </>
  );
}
