import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, Phone, ArrowRight, Shield, Clock, Hammer, Home, Award, Wrench } from "lucide-react";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import FaqSchema from "@/components/FaqSchema";

export const metadata: Metadata = {
  title: "Constructie Acoperisuri Noi - Acoperisuri Pro",
  description: "Constructie acoperisuri noi pentru case, vile si hale. Sarpanta lemn sau metal, toate tipurile de invelitori. Evaluare gratuita si garantie completa.",
  alternates: { canonical: "https://montajacoperispro.ro/servicii/constructie-acoperisuri-noi" },
};

const etape = [
  { nr: "01", title: "Evaluare & Masuratori", desc: "Venim la fata locului, analizam structura cladirii si luam toate masuratorile necesare. Gratuit, fara obligatii." },
  { nr: "02", title: "Proiect & Oferta", desc: "Intocmim un plan tehnic detaliat si o oferta clara: materiale, manopera, termene. Fara costuri ascunse." },
  { nr: "03", title: "Aprovizionare Materiale", desc: "Procuram materialele direct de la producatori parteneri — Bilka, Lindab, Wetterbest, Bramac — la preturi avantajoase." },
  { nr: "04", title: "Executie Sarpanta", desc: "Echipa de dulgheri realizeaza structura de rezistenta din lemn tratat sau metal, conform proiectului agreat." },
  { nr: "05", title: "Montaj Invelitoare", desc: "Montam invelitoarea aleasa — tigla ceramica, metalica, tabla faltuita sau sindrila — respectand specificatiile producatorului." },
  { nr: "06", title: "Finalizare & Garantie", desc: "Instalare jgheaburi, burlane, parazapezi, aeratoare. Predare cu certificat de garantie pe materiale si manopera." },
];

const avantaje = [
  { icon: Shield, title: "Garantie Scrisa", desc: "Garantie pe materiale si manopera pentru fiecare lucrare executata." },
  { icon: Clock, title: "Termen Respectat", desc: "Stabilim un termen realist si il respectam. Fara intarzieri nejustificate." },
  { icon: Hammer, title: "Echipe Proprii", desc: "Nu subcontractam. Mesteri proprii cu ani de experienta in dulgherie si tinichigerie." },
  { icon: Home, title: "Orice Tip de Cladire", desc: "Case, vile, blocuri, hale industriale — avem experienta cu toate tipurile de constructii." },
  { icon: Award, title: "Materiale Premium", desc: "Bilka, Lindab, Wetterbest, Bramac, Tondach, Velux — parteneri directi, preturi avantajoase." },
  { icon: Wrench, title: "Serviciu Complet", desc: "De la sarpanta la ultimul jgheab — un singur contractor, o singura responsabilitate." },
];

const invelitori = [
  { name: "Tigla Metalica", brands: "Bilka, Lindab, Wetterbest", desc: "Raport excelent calitate-pret. Usoara, durabila, disponibila in zeci de culori." },
  { name: "Tigla Ceramica", brands: "Bramac, Tondach", desc: "Aspect clasic, durabilitate de decenii. Ideala pentru case rezidentiale." },
  { name: "Tabla Faltuita", brands: "Lindab, Bilka", desc: "Etanseitate perfecta. Recomandata pentru pante mici si forme complexe." },
  { name: "Sindrila Bituminoasa", brands: "IKO, Tegola", desc: "Flexibila, usoara, perfecta pentru acoperisuri cu geometrie speciala." },
];

const otherServices = [
  { slug: "invelitori-pentru-acoperisuri", label: "Invelitori Acoperisuri" },
  { slug: "accesorii-si-sisteme-de-montaj", label: "Accesorii si Montaj" },
  { slug: "reparatii-acoperisuri", label: "Reparatii Acoperisuri" },
  { slug: "renovari-si-modernizari", label: "Renovari si Modernizari" },
  { slug: "mansardari-si-extinderi", label: "Mansardari si Extinderi" },
  { slug: "interventii-de-urgenta", label: "Interventii de Urgenta" },
];

export default function ConstructieAcoperisuri() {
  return (
    <>
      <BreadcrumbSchema items={[{"name":"Acasa","url":"https://montajacoperispro.ro/"},{"name":"Servicii","url":"https://montajacoperispro.ro/servicii"},{"name":"Constructie Acoperisuri Noi","url":"https://montajacoperispro.ro/servicii/constructie-acoperisuri-noi"}]} />
      {/* ── Hero cu val ── */}
      <section className="relative bg-[#051D3E] text-white pt-16 pb-0 overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/dragos/poza-1.jpeg" alt="Constructie acoperis nou" fill className="object-cover" priority sizes="100vw" />
          <div className="absolute inset-0 bg-[#051D3E]/75" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 pb-24 pt-8">
          <nav className="flex items-center gap-2 text-sm text-white/60 mb-6">
            <Link href="/">Acasa</Link>
            <span className="text-white/40">›</span>
            <Link href="/servicii" className="hover:text-white transition-colors">Servicii</Link>
            <span className="text-white/40">›</span>
            <span className="text-white">Constructie Acoperisuri Noi</span>
          </nav>
          <div className="max-w-2xl">
            <span className="inline-block bg-white/15 border border-white/20 text-white/90 text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-5">
              Serviciu complet
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-5">
              Constructie<br />Acoperisuri Noi
            </h1>
            <div className="w-12 h-1 bg-[#E53935] rounded mb-6" />
            <p className="text-white/75 text-lg leading-relaxed mb-8">
              De la sarpanta la ultimul jgheab — executam acoperisuri complete pentru case, vile si cladiri industriale. Materiale premium, garantie scrisa, echipe proprii.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a href="tel:0750771028" className="inline-flex items-center justify-center gap-2 bg-white text-[#051D3E] px-7 py-3.5 rounded-full font-bold text-sm hover:bg-gray-100 transition-colors">
                <Phone size={16} /> 0750 771 028
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

      {/* ── Intro + poze ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            {/* Text */}
            <div>
              <span className="text-[#0d1547] font-semibold text-sm uppercase tracking-wider block mb-3">De ce conteaza</span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                Un acoperis bun nu se vede —<br className="hidden md:block" /> se simte in timp
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Un acoperis construit corect de la inceput inseamna zeci de ani fara griji. Un acoperis facut in graba sau cu materiale slabe inseamna infiltratii, costuri repetate si stres. Diferenta o face echipa si modul in care lucreaza.
                </p>
                <p>
                  La Acoperisuri Pro, fiecare acoperis nou incepe cu o evaluare tehnica serioasa si se incheie cu o predare verificata punct cu punct. Folosim exclusiv materiale de la producatori de top cu care avem parteneriate directe — Bilka, Lindab, Wetterbest, Bramac, Tondach.
                </p>
                <p>
                  Sarpanta — din lemn masiv tratat ignifug si fungicid sau din structura metalica — este dimensionata conform normativelor in vigoare si adaptata specific tipului si dimensiunilor cladirii tale.
                </p>
              </div>
              <div className="mt-8 grid grid-cols-2 gap-4">
                {["300+ acoperisuri finalizate", "15+ ani experienta", "Garantie scrisa pe lucrari", "Activi in 12 judete"].map((item) => (
                  <div key={item} className="flex items-start gap-2.5">
                    <CheckCircle2 size={17} className="text-[#0d1547] shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Poze grid */}
            <div className="grid grid-cols-2 gap-3">
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-md">
                <Image src="/images/dragos/poza-2.jpeg" alt="Acoperis nou casa" fill className="object-cover" sizes="25vw" />
              </div>
              <div className="flex flex-col gap-3">
                <div className="relative aspect-square rounded-2xl overflow-hidden shadow-md">
                  <Image src="/images/dragos/poza-4.jpeg" alt="Montaj tigla metalica" fill className="object-cover" sizes="25vw" />
                </div>
                <div className="relative aspect-square rounded-2xl overflow-hidden shadow-md">
                  <Image src="/images/dragos/acoperisuri-noi.jpeg" alt="Acoperis finalizat" fill className="object-cover" sizes="25vw" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Tipuri invelitori ── */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-[#0d1547] font-semibold text-sm uppercase tracking-wider block mb-3">Materiale disponibile</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Tipuri de Invelitori</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {invelitori.map((inv, i) => (
              <div key={inv.name} className="bg-white rounded-2xl p-7 border border-gray-200 hover:border-[#0d1547]/30 hover:shadow-md transition-all">
                <span className="text-5xl font-extrabold text-gray-100 block mb-4 leading-none">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="text-lg font-bold text-gray-900 mb-1">{inv.name}</h3>
                <p className="text-xs text-[#0d1547] font-semibold mb-3">{inv.brands}</p>
                <p className="text-gray-500 text-sm leading-relaxed">{inv.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Etapele lucrarii ── */}

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-[#051D3E] mb-10 text-center">Intrebari Frecvente despre Constructia Acoperisurilor</h2>
          <div className="space-y-4">
            {[
              {
                q: "Cat dureaza montajul unui acoperis nou?",
                a: "Pentru o casa unifamiliala standard (100-150 mp), montajul complet — sarpanta, membrana, invelitoare, accesorii — dureaza 10-20 zile lucratoare, in functie de complexitate, forma acoperisului si conditii meteo.",
              },
              {
                q: "Lucrati si iarna?",
                a: "Lucrarile de sarpanta pot fi executate pe tot parcursul anului. Montajul invelitorii necesita temperaturi de peste 5°C. Planificam lucrarile in avans si va comunicam transparent daca conditiile meteo pot influenta termenele.",
              },
              {
                q: "Oferiti garantie pentru acoperisul nou?",
                a: "Da. Oferim garantie de 10 ani pe manopera si respectam garantiile producatorilor pentru materiale: 10-15 ani pentru tigla metalica, 30-50 ani pentru tigla ceramica. Totul este documentat intr-un certificat de garantie scris.",
              },
              {
                q: "Faceti si reparatii urgente?",
                a: "Da, pe langa constructii noi gestionam si urgente — securizare acoperis avariat, interventii rapide post-furtuna, acoperire provizorie. Sunati 0750 771 028 pentru interventie rapida.",
              },
              {
                q: "Ce tipuri de invelitoare montati?",
                a: "Montam toate tipurile: tigla metalica (Bilka, Lindab, Wetterbest), tigla ceramica (Bramac, Tondach), tabla faltuita, sindrila bituminoasa si table speciale. Va recomandam solutia optima pentru panta, zona climatica si bugetul dumneavoastra.",
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
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <span className="text-white/60 font-semibold text-sm uppercase tracking-wider block mb-3">Cum lucram</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Etapele Constructiei</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {etape.map((e) => (
              <div key={e.nr} className="bg-white/10 border border-white/15 rounded-2xl p-6 hover:bg-white/15 transition-colors">
                <span className="text-4xl font-extrabold text-white/15 block mb-4 leading-none">{e.nr}</span>
                <h3 className="text-white font-bold text-base mb-2">{e.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{e.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Avantaje + sidebar ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Avantaje 2-col grid */}
            <div className="lg:col-span-2">
              <span className="text-[#0d1547] font-semibold text-sm uppercase tracking-wider block mb-3">De ce noi</span>
              <h2 className="text-3xl font-bold text-gray-900 mb-10">Ce Primesti cu Acoperisuri Pro</h2>
              <div className="grid sm:grid-cols-2 gap-6">
                {avantaje.map((a) => (
                  <div key={a.title} className="flex gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[#0d1547]/8 text-[#0d1547] flex items-center justify-center shrink-0">
                      <a.icon size={20} />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1 text-sm">{a.title}</h3>
                      <p className="text-gray-500 text-sm leading-relaxed">{a.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-28 space-y-5">
                {/* CTA box */}
                <div className="bg-[#051D3E] rounded-2xl p-6 text-white">
                  <h3 className="font-bold text-lg mb-2">Evaluare Gratuita</h3>
                  <p className="text-white/60 text-sm mb-5">Venim la fata locului, masuram si oferim oferta fara costuri.</p>
                  <a href="tel:0750771028" className="flex items-center justify-center gap-2 bg-white text-[#051D3E] py-3 rounded-xl font-bold text-sm hover:bg-gray-100 transition-colors mb-3">
                    <Phone size={15} /> 0750 771 028
                  </a>
                  <a href="https://wa.me/40750771028" target="_blank" rel="noopener noreferrer" className="block text-center bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl font-semibold text-sm transition-colors">
                    WhatsApp
                  </a>
                </div>

                {/* Alte servicii */}
                <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6">
                  <h3 className="font-bold text-gray-900 text-sm uppercase tracking-wide mb-4">Alte Servicii</h3>
                  <ul className="space-y-2">
                    {otherServices.map((s) => (
                      <li key={s.slug}>
                        <Link href={`/servicii/${s.slug}`} className="flex items-center gap-2 text-sm text-gray-600 hover:text-[#0d1547] transition-colors py-1">
                          <ArrowRight size={13} className="shrink-0" /> {s.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
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
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              "/images/dragos/poza-1.jpeg",
              "/images/dragos/poza-3.jpeg",
              "/images/dragos/poza-5.jpeg",
              "/images/dragos/poza-2.jpeg",
              "/images/dragos/acoperisuri-noi.jpeg",
              "/images/dragos/poza-4.jpeg",
            ].map((src, i) => (
              <div key={i} className={`relative rounded-2xl overflow-hidden group ${i === 0 ? "sm:col-span-2 lg:col-span-1 h-72" : "h-56"}`}>
                <Image src={src} alt={`Acoperis nou lucrare ${i + 1}`} fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="(max-width: 640px) 100vw, 50vw" />
                <div className="absolute inset-0 bg-[#051D3E]/20 group-hover:bg-[#051D3E]/5 transition-colors" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA final ── */}
      
      <FaqSchema items={[{"q":"Cat dureaza montajul unui acoperis nou?","a":"Pentru o casa unifamiliala standard (100-150 mp), montajul complet — sarpanta, membrana, invelitoare, accesorii — dureaza 10-20 zile lucratoare, in functie de complexitate, forma acoperisului si conditii meteo."},{"q":"Lucrati si iarna?","a":"Lucrarile de sarpanta pot fi executate pe tot parcursul anului. Montajul invelitorii necesita temperaturi de peste 5°C. Planificam lucrarile in avans si va comunicam transparent daca conditiile meteo pot influenta termenele."},{"q":"Oferiti garantie pentru acoperisul nou?","a":"Da. Oferim garantie de 10 ani pe manopera si respectam garantiile producatorilor pentru materiale: 10-15 ani pentru tigla metalica, 30-50 ani pentru tigla ceramica. Totul este documentat intr-un certificat de garantie scris."},{"q":"Faceti si reparatii urgente?","a":"Da, pe langa constructii noi gestionam si urgente — securizare acoperis avariat, interventii rapide post-furtuna, acoperire provizorie. Sunati 0750 771 028 pentru interventie rapida."},{"q":"Ce tipuri de invelitoare montati?","a":"Montam toate tipurile: tigla metalica (Bilka, Lindab, Wetterbest), tigla ceramica (Bramac, Tondach), tabla faltuita, sindrila bituminoasa si table speciale. Va recomandam solutia optima pentru panta, zona climatica si bugetul dumneavoastra."}]} />

      <section className="py-20 bg-[#0d1547]">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Gata sa construim acoperisul tau?
          </h2>
          <p className="text-white/70 text-lg mb-10">
            Contacteaza-ne azi pentru evaluare gratuita la fata locului si o oferta clara, fara surprize.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:0750771028" className="inline-flex items-center justify-center gap-2 bg-white text-[#0d1547] px-8 py-4 rounded-full text-lg font-bold hover:bg-gray-100 transition-colors">
              <Phone size={18} /> 0750 771 028
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
