import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, Phone, ArrowRight, Hammer, Layers, TrendingUp, Shield } from "lucide-react";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "Renovari si Modernizari Acoperisuri - Acoperisuri Pro",
  description: "Renovare completa acoperisuri vechi — invelitoare noua, sarpanta consolidata, izolatie termica. Reducere pierderi caldura pana la 30%. Garantie scrisa.",
  alternates: { canonical: "https://montajacoperispro.ro/servicii/renovari-si-modernizari" },
};

const beneficii = [
  { icon: Layers, title: "Izolatie Termica", desc: "Reducere pierderi de caldura cu pana la 30%. Facturi mai mici, confort mai mare." },
  { icon: Shield, title: "Protectie Totala", desc: "Eliminare infiltratii, condens si umezeala acumulata in timp." },
  { icon: TrendingUp, title: "Valoare Crescuta", desc: "Un acoperis renovat creste semnificativ valoarea proprietatii." },
  { icon: Hammer, title: "Structura Solida", desc: "Consolidare sau inlocuire sarpanta degradata conform normativelor actuale." },
];

const lucrari = [
  "Demontare invelitoare veche si evacuare deseuri",
  "Inspectie si consolidare sarpanta existenta",
  "Inlocuire grinzi si capriori degradati",
  "Montaj membrana anticondens si bariera vapori",
  "Izolatie termica vata minerala sau poliuretan",
  "Montaj invelitoare noua la alegere",
  "Sisteme pluviale noi — jgheaburi si burlane",
  "Tinichigerie completa — sorturi, dolii, coame",
];

const otherServices = [
  { slug: "constructie-acoperisuri-noi", label: "Constructie Acoperisuri Noi" },
  { slug: "reparatii-acoperisuri", label: "Reparatii Acoperisuri" },
  { slug: "mansardari-si-extinderi", label: "Mansardari si Extinderi" },
  { slug: "invelitori-pentru-acoperisuri", label: "Invelitori Acoperisuri" },
  { slug: "interventii-de-urgenta", label: "Interventii de Urgenta" },
];

export default function RenovariModernizari() {
  return (
    <>
      <BreadcrumbSchema items={[{"name":"Acasa","url":"https://montajacoperispro.ro/"},{"name":"Servicii","url":"https://montajacoperispro.ro/servicii"},{"name":"Renovari si Modernizari","url":"https://montajacoperispro.ro/servicii/renovari-si-modernizari"}]} />
      <section className="relative bg-[#051D3E] text-white pt-16 pb-0 overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/dragos/renovari-1.jpeg" alt="Renovari acoperisuri" fill className="object-cover" priority sizes="100vw" />
          <div className="absolute inset-0 bg-[#051D3E]/78" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 pb-24 pt-8">
          <nav className="flex items-center gap-2 text-sm text-white/60 mb-6">
            <Link href="/">Acasa</Link><span className="text-white/40">›</span>
            <Link href="/servicii" className="hover:text-white transition-colors">Servicii</Link><span className="text-white/40">›</span>
            <span className="text-white">Renovari si Modernizari</span>
          </nav>
          <div className="max-w-2xl">
            <span className="inline-block bg-white/15 border border-white/20 text-white/90 text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-5">Acoperis ca nou</span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-5">Renovari si<br />Modernizari</h1>
            <div className="w-12 h-1 bg-[#E53935] rounded mb-6" />
            <p className="text-white/75 text-lg leading-relaxed mb-8">
              Transformam acoperisuri vechi si deteriorate in sisteme moderne, eficiente energetic si estetice. Fara reconstructie completa — cost optimizat, rezultat de durata.
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
                <span className="text-[#0d1547] font-semibold text-sm uppercase tracking-wider block mb-3">Cand e momentul</span>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-5">Renovarea — alternativa inteligenta la reconstructie</h2>
                <div className="space-y-4 text-gray-600 leading-relaxed text-sm">
                  <p>Cand un acoperis are probleme repetate — infiltratii, tigla cazuta, jgheaburi ruginite, izolatie degradata — reparatiile punctuale nu mai sunt suficiente. Renovarea completa rezolva toate problemele odata, la un cost mai mic decat demolarea si reconstructia.</p>
                  <p>Evaluam structura existenta, stabilim ce poate fi pastrat si ce trebuie inlocuit, si executam totul intr-o singura mobilizare. Rezultatul: un acoperis cu performante de nou, la pretul unei renovari.</p>
                </div>
              </div>

              {/* Beneficii */}
              <div className="grid sm:grid-cols-2 gap-4">
                {beneficii.map((b) => (
                  <div key={b.title} className="border border-gray-200 rounded-2xl p-6 flex gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[#0d1547]/10 text-[#0d1547] flex items-center justify-center shrink-0">
                      <b.icon size={19} />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-sm mb-1">{b.title}</h4>
                      <p className="text-gray-500 text-sm leading-relaxed">{b.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Lucrari incluse */}
              <div className="bg-gray-50 rounded-2xl p-8">
                <h3 className="text-lg font-bold text-gray-900 mb-6">Ce include renovarea</h3>
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
                <Image src="/images/dragos/renovari-2.jpeg" alt="Renovare acoperis" fill className="object-cover" sizes="400px" />
              </div>
              <div className="bg-[#051D3E] rounded-2xl p-6 text-white">
                <h3 className="font-bold text-lg mb-2">Evaluare Gratuita</h3>
                <p className="text-white/60 text-sm mb-5">Stabilim impreuna ce trebuie renovat si cat costa — fara obligatii.</p>
                <a href="tel:0735097539" className="flex items-center justify-center gap-2 bg-white text-[#051D3E] py-3 rounded-xl font-bold text-sm hover:bg-gray-100 transition-colors mb-3">
                  <Phone size={15} /> 0735 097 539
                </a>
                <a href="https://wa.me/40735097539" target="_blank" rel="noopener noreferrer" className="block text-center bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl font-semibold text-sm transition-colors">WhatsApp</a>
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

      {/* Galerie */}
      <section className="pb-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-3 gap-4">
            {["/images/dragos/renovari-3.jpeg", "/images/dragos/renovari-4.jpeg", "/images/projects/tigla-metalica-1.webp"].map((src, i) => (
              <div key={i} className="relative h-52 rounded-2xl overflow-hidden group">
                <Image src={src} alt={`Renovare acoperis ${i + 1}`} fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="33vw" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#0d1547]">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Renovam acoperisul tau de la capat</h2>
          <p className="text-white/70 text-lg mb-10">Oferta gratuita, executie la termen, garantie scrisa pe toata lucrarea.</p>
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
