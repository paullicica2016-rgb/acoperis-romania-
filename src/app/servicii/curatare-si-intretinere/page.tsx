import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, Phone, ArrowRight, Droplets, Leaf, Eye, CalendarCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Curatare si Intretinere Acoperisuri - Reparatii Pro",
  description: "Curatare profesionala acoperisuri — muschi, licheni, jgheaburi infundate. Inspectie periodica si intretinere preventiva. Prelungim viata acoperisului tau.",
};

const servicii = [
  { icon: Leaf, title: "Curatare Muschi si Licheni", desc: "Indepartam depunerile organice care retin umezeala si degradeaza invelitoarea in timp. Aplicam tratament preventiv anti-muschi." },
  { icon: Droplets, title: "Curatare Jgheaburi", desc: "Deblocam jgheaburile si burlanele infundate cu frunze si resturi. Verificam etanseitatea si functionarea corecta a scurgerii." },
  { icon: Eye, title: "Inspectie Periodica", desc: "Verificam starea completa a acoperisului — invelitoare, sarpanta, izolatie, accesorii. Raport scris cu constatarile." },
  { icon: CalendarCheck, title: "Intretinere Preventiva", desc: "Remediem micile probleme inainte sa devina defectiuni majore. Doua inspectii pe an sunt suficiente pentru a preveni 90% din reparatii." },
];

const inclus = [
  "Curatare mecanica si chimica a invelitorii",
  "Indepartare muschi, licheni si alge",
  "Tratament preventiv anti-vegetatie",
  "Curatare completa jgheaburi si burlane",
  "Verificare etanseitate sorturi si dolii",
  "Inspectie sarpanta si elemente de fixare",
  "Verificare membrane si izolatie",
  "Raport scris cu fotografii dupa inspectie",
];

const otherServices = [
  { slug: "reparatii-acoperisuri", label: "Reparatii Acoperisuri" },
  { slug: "accesorii-si-sisteme-de-montaj", label: "Accesorii si Montaj" },
  { slug: "renovari-si-modernizari", label: "Renovari si Modernizari" },
  { slug: "interventii-de-urgenta", label: "Interventii de Urgenta" },
];

export default function CuratareIntretinere() {
  return (
    <>
      <section className="relative bg-[#051D3E] text-white pt-16 pb-0 overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/importanta-reparatie.webp" alt="Curatare si intretinere acoperisuri" fill className="object-cover" priority sizes="100vw" />
          <div className="absolute inset-0 bg-[#051D3E]/78" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 pb-24 pt-8">
          <nav className="flex items-center gap-2 text-sm text-white/60 mb-6">
            <Link href="/">Acasa</Link><span className="text-white/40">›</span>
            <Link href="/servicii" className="hover:text-white transition-colors">Servicii</Link><span className="text-white/40">›</span>
            <span className="text-white">Curatare si Intretinere</span>
          </nav>
          <div className="max-w-2xl">
            <span className="inline-block bg-white/15 border border-white/20 text-white/90 text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-5">Intretinere preventiva</span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-5">Curatare si<br />Intretinere</h1>
            <div className="w-12 h-1 bg-[#E53935] rounded mb-6" />
            <p className="text-white/75 text-lg leading-relaxed mb-8">
              Un acoperis curatat si inspectat regulat dureaza cu zeci de ani mai mult. Intervenim de doua ori pe an — primavara si toamna — pentru a preveni problemele inainte sa apara.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a href="tel:0754456844" className="inline-flex items-center justify-center gap-2 bg-white text-[#051D3E] px-7 py-3.5 rounded-full font-bold text-sm hover:bg-gray-100 transition-colors">
                <Phone size={16} /> 0754 456 844
              </a>
              <Link href="/contact" className="inline-flex items-center justify-center gap-2 bg-white/15 border border-white/30 text-white px-7 py-3.5 rounded-full font-semibold text-sm hover:bg-white/25 transition-all">
                Cere Oferta <ArrowRight size={15} />
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
                <span className="text-[#0d1547] font-semibold text-sm uppercase tracking-wider block mb-3">De ce conteaza</span>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-5">Preventia costa de 10 ori mai putin decat reparatia</h2>
                <div className="space-y-4 text-gray-600 leading-relaxed text-sm">
                  <p>Muschii si lichenii retin umezeala constant si ataca materialele de constructie lent dar sigur. Jgheaburile infundate revars apa direct pe fatada si fundatie. O tigla deplasata lasata asa devine infiltratie in prima ploaie mai serioasa.</p>
                  <p>Doua vizite de intretinere pe an — primavara dupa inghet si toamna inainte de iarna — sunt suficiente pentru a identifica si rezolva toate problemele mici inainte sa devina costisitoare.</p>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                {servicii.map((s) => (
                  <div key={s.title} className="border border-gray-200 rounded-2xl p-6 flex gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[#0d1547]/10 text-[#0d1547] flex items-center justify-center shrink-0">
                      <s.icon size={19} />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-sm mb-1">{s.title}</h4>
                      <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-gray-50 rounded-2xl p-8">
                <h3 className="text-lg font-bold text-gray-900 mb-6">Ce include vizita de intretinere</h3>
                <ul className="grid sm:grid-cols-2 gap-3">
                  {inclus.map((item) => (
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
                <Image src="/images/projects/jgheaburi.webp" alt="Curatare jgheaburi" fill className="object-cover" sizes="400px" />
              </div>
              <div className="bg-[#051D3E] rounded-2xl p-6 text-white">
                <h3 className="font-bold text-lg mb-2">Programeaza o Inspectie</h3>
                <p className="text-white/60 text-sm mb-5">Venim sa evaluam starea acoperisului si iti spunem ce are nevoie.</p>
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

      <section className="py-20 bg-[#0d1547]">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Cand ai facut ultima oara inspectia acoperisului?</h2>
          <p className="text-white/70 text-lg mb-10">Programeaza acum o vizita de verificare. Preventia e intotdeauna mai ieftina.</p>
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
