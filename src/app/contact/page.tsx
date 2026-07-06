"use client";

import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, MapPin, Clock, Send, MessageCircle, User, Briefcase, MessageSquare, CheckCircle2 } from "lucide-react";
import { useState, useRef } from "react";

const serviceOptions = [
  "Constructie acoperis nou",
  "Reparatii acoperis",
  "Renovare si modernizare",
  "Mansardare / Extindere",
  "Interventie de urgenta",
  "Curatare si intretinere",
  "Finisaje fatade exterioare",
  "Alt serviciu",
];

const countyOptions = [
  "Hunedoara", "Alba", "Sibiu", "Valcea", "Gorj", "Mehedinti",
  "Timis", "Arad", "Cluj", "Bihor", "Bucuresti", "Ilfov",
];

export default function ContactPage() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;
    setStatus("sending");
    try {
      const res = await fetch("https://formspree.io/f/xqenjjed", {
        method: "POST",
        body: new FormData(formRef.current),
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setStatus("sent");
        formRef.current.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <>
      {/* Hero */}
      <section className="relative bg-[#051D3E] text-white pt-16 pb-0 overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/hero-contact.webp" alt="Contact Acoperisuri Pro" fill className="object-cover" priority sizes="100vw" />
          <div className="absolute inset-0 bg-[#051D3E]/80" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 pb-28 pt-10">
          <nav className="flex items-center gap-2 text-sm text-white/60 mb-8">
            <Link href="/" className="hover:text-white transition-colors">Acasa</Link>
            <span className="text-white/40">›</span>
            <span className="text-white">Contact</span>
          </nav>
          <div className="max-w-2xl">
            <span className="inline-block bg-white/15 border border-white/20 text-white/90 text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-5">Raspundem in 24h</span>
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-5">Contacteaza-ne</h1>
            <div className="w-12 h-1 bg-[#E53935] rounded mb-6" />
            <p className="text-white/75 text-lg leading-relaxed">
              Cere o oferta gratuita sau suna direct. Venim la fata locului, evaluam si iti dam un deviz clar — fara costuri, fara obligatii.
            </p>
          </div>
        </div>
        <div className="relative h-16">
          <svg viewBox="0 0 1440 64" preserveAspectRatio="none" className="absolute bottom-0 w-full h-16">
            <path d="M0,32 C360,80 1080,0 1440,32 L1440,64 L0,64 Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* Main content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-5 gap-10">

            {/* Form — 3 cols */}
            <div className="lg:col-span-3">
              <div className="mb-8">
                <span className="text-[#0d1547] font-semibold text-sm uppercase tracking-wider block mb-2">Formular oferta</span>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Cere oferta gratuita</h2>
              </div>

              {status === "sent" ? (
                <div className="bg-green-50 border border-green-200 rounded-2xl p-12 text-center">
                  <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 size={32} className="text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-green-800 mb-2">Mesaj trimis cu succes!</h3>
                  <p className="text-green-600 mb-4">Te contactam in cel mai scurt timp posibil.</p>
                  <button onClick={() => setStatus("idle")} className="text-sm text-green-700 underline">
                    Trimite alt mesaj
                  </button>
                </div>
              ) : (
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={17} />
                      <input
                        name="from_name"
                        type="text"
                        required
                        placeholder="Nume si prenume *"
                        className="w-full pl-11 pr-4 py-3.5 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-[#0d1547]/20 focus:border-[#0d1547] outline-none transition-all text-gray-900 placeholder:text-gray-400 text-sm"
                      />
                    </div>
                    <div className="relative">
                      <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={17} />
                      <input
                        name="phone"
                        type="tel"
                        required
                        placeholder="Numar de telefon *"
                        className="w-full pl-11 pr-4 py-3.5 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-[#0d1547]/20 focus:border-[#0d1547] outline-none transition-all text-gray-900 placeholder:text-gray-400 text-sm"
                      />
                    </div>
                  </div>

                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={17} />
                    <input
                      name="from_email"
                      type="email"
                      placeholder="Adresa de email"
                      className="w-full pl-11 pr-4 py-3.5 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-[#0d1547]/20 focus:border-[#0d1547] outline-none transition-all text-gray-900 placeholder:text-gray-400 text-sm"
                    />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="relative">
                      <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={17} />
                      <select
                        name="county"
                        className="w-full pl-11 pr-4 py-3.5 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-[#0d1547]/20 focus:border-[#0d1547] outline-none transition-all text-gray-700 appearance-none text-sm"
                      >
                        <option value="">Selecteaza judetul</option>
                        {countyOptions.map((c) => (
                          <option key={c} value={c}>{c}</option>
                        ))}
                      </select>
                    </div>
                    <div className="relative">
                      <Briefcase className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={17} />
                      <select
                        name="service_type"
                        className="w-full pl-11 pr-4 py-3.5 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-[#0d1547]/20 focus:border-[#0d1547] outline-none transition-all text-gray-700 appearance-none text-sm"
                      >
                        <option value="">Tipul serviciului</option>
                        {serviceOptions.map((s) => (
                          <option key={s} value={s}>{s}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="relative">
                    <MessageSquare className="absolute left-4 top-4 text-gray-400 pointer-events-none" size={17} />
                    <textarea
                      name="message"
                      rows={5}
                      placeholder="Descrie pe scurt ce ai nevoie..."
                      className="w-full pl-11 pr-4 py-3.5 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-[#0d1547]/20 focus:border-[#0d1547] outline-none transition-all text-gray-900 placeholder:text-gray-400 resize-none text-sm"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="w-full py-4 rounded-xl font-bold text-sm flex items-center justify-center gap-2 bg-[#0d1547] hover:bg-[#0a1040] text-white transition-all disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    <Send size={16} />
                    {status === "sending" ? "Se trimite..." : "Trimite cererea"}
                  </button>

                  <p className="text-xs text-gray-400 text-center">
                    Datele tale sunt confidentiale. Raspundem in maxim 24 de ore.
                  </p>

                  {status === "error" && (
                    <p className="text-red-600 text-sm text-center bg-red-50 rounded-xl py-3">
                      Eroare la trimitere. Suna direct la 0735 097 539.
                    </p>
                  )}
                </form>
              )}
            </div>

            {/* Sidebar — 2 cols */}
            <div className="lg:col-span-2 space-y-4">

              {/* CTA phone */}
              <a href="tel:0735097539" className="group flex items-center gap-4 bg-[#051D3E] rounded-2xl p-6 hover:bg-[#0a1040] transition-colors">
                <div className="w-12 h-12 rounded-xl bg-white/15 text-white flex items-center justify-center shrink-0">
                  <Phone size={22} />
                </div>
                <div>
                  <span className="block text-white/60 text-xs uppercase tracking-wider mb-0.5">Suna acum</span>
                  <span className="font-bold text-white text-xl">0735 097 539</span>
                </div>
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/40735097539"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 bg-[#25D366] hover:bg-[#1faf52] rounded-2xl p-6 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-white/20 text-white flex items-center justify-center shrink-0">
                  <MessageCircle size={22} />
                </div>
                <div>
                  <span className="block text-white/80 text-xs uppercase tracking-wider mb-0.5">Scrie-ne pe</span>
                  <span className="font-bold text-white text-lg">WhatsApp</span>
                </div>
              </a>

              {/* Email */}
              <a href="mailto:montajacoperispro@gmail.com" className="group flex items-center gap-4 bg-white border border-gray-200 rounded-2xl p-5 hover:border-[#0d1547]/30 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-[#0d1547]/8 text-[#0d1547] flex items-center justify-center shrink-0">
                  <Mail size={20} />
                </div>
                <div className="min-w-0">
                  <span className="block text-gray-400 text-xs uppercase tracking-wider mb-0.5">Email</span>
                  <span className="font-semibold text-gray-800 text-sm truncate block">montajacoperispro@gmail.com</span>
                </div>
              </a>

              {/* Zone */}
              <div className="bg-gray-50 border border-gray-200 rounded-2xl p-5 flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#0d1547]/8 text-[#0d1547] flex items-center justify-center shrink-0">
                  <MapPin size={20} />
                </div>
                <div>
                  <span className="block text-gray-400 text-xs uppercase tracking-wider mb-0.5">Zona de activitate</span>
                  <span className="font-semibold text-gray-800 text-sm">Hunedoara si judete invecinate</span>
                  <p className="text-gray-500 text-xs mt-1">Alba, Sibiu, Timis, Arad, Cluj, Bihor si altele</p>
                </div>
              </div>

              {/* Program */}
              <div className="bg-gray-50 border border-gray-200 rounded-2xl p-5">
                <div className="flex items-center gap-2 mb-4">
                  <Clock size={16} className="text-[#0d1547]" />
                  <span className="font-bold text-gray-900 text-sm uppercase tracking-wide">Program de Lucru</span>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between border-b border-gray-100 pb-2">
                    <span className="text-gray-500">Luni – Vineri</span>
                    <span className="font-semibold text-gray-800">07:00 – 20:00</span>
                  </div>
                  <div className="flex justify-between border-b border-gray-100 pb-2">
                    <span className="text-gray-500">Sambata</span>
                    <span className="font-semibold text-gray-800">08:00 – 16:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Duminica</span>
                    <span className="text-gray-500 italic">Urgente</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Guarantees strip */}
      <section className="bg-gray-50 border-t border-gray-200 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { nr: "15+", label: "Ani experienta" },
              { nr: "500+", label: "Proiecte finalizate" },
              { nr: "24h", label: "Timp de raspuns" },
              { nr: "100%", label: "Garantie scrisa" },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-3xl font-extrabold text-[#0d1547] mb-1">{s.nr}</div>
                <div className="text-gray-500 text-sm">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/hero-dulgherie.webp" alt="Contact acoperisuri" fill className="object-cover" sizes="100vw" />
          <div className="absolute inset-0 bg-[#0d1547]/85" />
        </div>
        <div className="relative max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Preferi sa vorbim direct?</h2>
          <p className="text-white/70 text-lg mb-10">Suna acum si stabilim o vizita gratuita la acoperisul tau.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:0735097539" className="inline-flex items-center justify-center gap-2 bg-white text-[#0d1547] px-8 py-4 rounded-full text-lg font-bold hover:bg-gray-100 transition-colors">
              <Phone size={18} /> 0735 097 539
            </a>
            <a
              href="https://wa.me/40735097539"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1faf52] text-white px-8 py-4 rounded-full text-lg font-semibold transition-colors"
            >
              <MessageCircle size={18} /> WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
