import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, Phone, ArrowRight, Search, FileText, Wrench, BadgeCheck } from "lucide-react";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import FaqSchema from "@/components/FaqSchema";

export const metadata: Metadata = {
  title: "Reparatii Acoperisuri - Acoperisuri Pro",
  description: "Reparatii profesionale acoperisuri deteriorate — tigla sparta,, sarpanta degradata, infiltratii. Evaluare gratuita, interventie rapida, garantie scrisa.",
  alternates: { canonical: "https://reparatiipro.ro/servicii/reparatii-acoperisuri" },
};

const etape = [
  { icon: Search, nr: "01", title: "Inspectie Completa", desc: "Verificam vizual si tehnic intregul acoperis — invelitoare, sarpanta, izolatie, jgheaburi. Nu reparatii la ochi, ci diagnostic complet." },
  { icon: FileText, nr: "02", title: "Oferta Detaliata", desc: "Intocmim un deviz clar cu toate lucrarile necesare, materiale si manopera. Fara surprize la final." },
  { icon: Wrench, nr: "03", title: "Executie Reparatie", desc: "Echipa specializata intervine cu materiale originale. Reparatii partiale sau totale, dupa caz." },
  { icon: BadgeCheck, nr: "04", title: "Predare cu Garantie", desc: "Verificare finala si predare cu certificat de garantie pe lucrarea executata." },
];

const tipuri = [
  "Inlocuire tigla sparta sau dislocata de vant",
  "Reparare sau refacere sarpanta degradata",
  "Remediere infiltratii si zone cu scurgeri",
  "Refacere hidroizolatie si membrane",
  "Reparare si inlocuire jgheaburi si burlane",
  "Refacere sorturi, dolii si elemente tinichigerie",
  "Consolidare structuri de rezistenta slabite",
  "Inlocuire portiuni de invelitoare deteriorata",
];

const otherServices = [
  { slug: "constructie-acoperisuri-noi", label: "Constructie Acoperisuri Noi" },
  { slug: "invelitori-pentru-acoperisuri", label: "Invelitori Acoperisuri" },
  { slug: "renovari-si-modernizari", label: "Renovari si Modernizari" },
  { slug: "interventii-de-urgenta", label: "Interventii de Urgenta" },
  { slug: "curatare-si-intretinere", label: "Curatare si Intretinere" },
];

export default function ReparatiiAcoperisuri() {
  return (
    <>
      <BreadcrumbSchema items={[{"name":"Acasa","url":"https://reparatiipro.ro/"},{"name":"Servicii","url":"https://reparatiipro.ro/servicii"},{"name":"Reparatii Acoperisuri","url":"https://reparatiipro.ro/servicii/reparatii-acoperisuri"}]} />
      {/* Hero */}
      <section className="relative bg-[#051D3E] text-white pt-16 pb-0 overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/hero-reparatii.webp" alt="Reparatii acoperisuri" fill className="object-cover" priority sizes="100vw" />
          <div className="absolute inset-0 bg-[#051D3E]/78" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 pb-24 pt-8">
          <nav className="flex items-center gap-2 text-sm text-white/60 mb-6">
            <Link href="/">Acasa</Link><span className="text-white/40">›</span>
            <Link href="/servicii" className="hover:text-white transition-colors">Servicii</Link><span className="text-white/40">›</span>
            <span className="text-white">Reparatii Acoperisuri</span>
          </nav>
          <div className="max-w-2xl">
            <span className="inline-block bg-white/15 border border-white/20 text-white/90 text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-5">Interventie rapida</span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-5">Reparatii<br />Acoperisuri</h1>
            <div className="w-12 h-1 bg-[#E53935] rounded mb-6" />
            <p className="text-white/75 text-lg leading-relaxed mb-8">
              Tigla sparta, infiltratii, sarpanta degradata — intervenim rapid cu diagnostic complet si reparatii de durata. Evaluare gratuita la fata locului.
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
          <svg viewBox="0 0 1440 64" preserveAspectRatio="none" className="absolute bottom-0 w-full h-16">
            <path d="M0,32 C360,80 1080,0 1440,32 L1440,64 L0,64 Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* Continut principal + sidebar */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-12">

              {/* Text intro */}
              <div>
                <span className="text-[#0d1547] font-semibold text-sm uppercase tracking-wider block mb-3">De ce conteaza</span>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-5">O reparatie la timp salveaza un acoperis intreg</h2>
                <div className="space-y-4 text-gray-600 leading-relaxed text-sm">
                  <p>O tigla sparta ignorata devine infiltratie. O infiltratie netratata degradeaza sarpanta. O sarpanta degradata poate compromite intreaga structura. Reparatiile mici facute la timp sunt intotdeauna mai ieftine decat lucrarile mari lasate sa se agraveze.</p>
                  <p>Echipa Acoperisuri Pro face mai intai un diagnostic corect al intregului acoperis — nu doar al zonei vizibil deteriorate — si iti prezinta toate problemele identificate inainte de a incepe orice lucrare.</p>
                </div>
              </div>

              {/* Tipuri reparatii */}
              <div className="bg-gray-50 rounded-2xl p-8">
                <h3 className="text-lg font-bold text-gray-900 mb-6">Ce reparatii executam</h3>
                <ul className="grid sm:grid-cols-2 gap-3">
                  {tipuri.map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <CheckCircle2 size={16} className="text-[#0d1547] shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Etape */}
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-6">Cum lucram</h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  {etape.map((e) => (
                    <div key={e.nr} className="border border-gray-200 rounded-2xl p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-2xl font-extrabold text-gray-100 leading-none">{e.nr}</span>
                        <div className="w-8 h-8 rounded-lg bg-[#0d1547]/10 text-[#0d1547] flex items-center justify-center">
                          <e.icon size={16} />
                        </div>
                      </div>
                      <h4 className="font-bold text-gray-900 text-sm mb-1">{e.title}</h4>
                      <p className="text-gray-500 text-sm leading-relaxed">{e.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-5">
              <div className="bg-[#051D3E] rounded-2xl p-6 text-white">
                <h3 className="font-bold text-lg mb-2">Evaluare Gratuita</h3>
                <p className="text-white/60 text-sm mb-5">Venim la fata locului si diagnosticam complet acoperisul — fara costuri, fara obligatii.</p>
                <a href="tel:0754456844" className="flex items-center justify-center gap-2 bg-white text-[#051D3E] py-3 rounded-xl font-bold text-sm hover:bg-gray-100 transition-colors mb-3">
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

      {/* Galerie mica */}
      <section className="pb-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-3 gap-4">
            {["/images/projects/reparatii.webp", "/images/projects/reparatii-2.webp", "/images/projects/reparatii-3.webp"].map((src, i) => (
              <div key={i} className="relative h-52 rounded-2xl overflow-hidden group">
                <Image src={src} alt={`Reparatie acoperis ${i + 1}`} fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="33vw" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA final */}
      
      <FaqSchema items={[{"q":"Cat costa o reparatie de acoperis?","a":"Pretul depinde de suprafata afectata si tipul lucrarii. Oferim evaluare gratuita si deviz detaliat fara costuri ascunse."},{"q":"Cat dureaza o reparatie de acoperis?","a":"Reparatiile simple dureaza 1-2 zile. Lucrarile mai complexe pot dura 3-5 zile, in functie de amploare."},{"q":"Oferiti garantie pentru reparatii?","a":"Da, toate lucrarile de reparatie vin cu garantie scrisa. Durata garantiei variaza in functie de tipul lucrarii."}]} />

      <section className="py-20 bg-[#0d1547]">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Acoperisul tau are nevoie de reparatii?</h2>
          <p className="text-white/70 text-lg mb-10">Suna-ne acum pentru evaluare gratuita. Intervenim rapid, lucram corect.</p>
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
