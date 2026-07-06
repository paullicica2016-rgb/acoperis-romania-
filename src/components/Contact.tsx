"use client";

import {
  Phone,
  Mail,
  MapPin,
  Send,
  MessageCircle,
  User,
  Briefcase,
  MessageSquare,
} from "lucide-react";
import { useState, useRef } from "react";
import { trackFormConversion } from "@/lib/gtag";

const serviceOptions = [
  "Servicii de constructie acoperis",
  "Servicii de reparare acoperis de urgenta",
  "Renovare si modernizare acoperis",
  "Demolare si reconstructie acoperis",
  "Curatare si intretinere acoperis",
];

const countyOptions = [
  "Hunedoara", "Alba", "Sibiu", "Valcea", "Gorj", "Mehedinti",
  "Timis", "Arad", "Cluj", "Bihor", "Bucuresti", "Ilfov",
];

// Reusable input with icon
function IconInput({
  icon: Icon,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement> & { icon: React.ElementType }) {
  return (
    <div className="relative">
      <Icon className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
      <input
        {...props}
        className="w-full pl-11 pr-4 py-3.5 rounded-lg border border-gray-200 bg-white focus:ring-2 focus:ring-[#0d1547]/20 focus:border-[#0d1547] outline-none transition-all text-[#212121] placeholder:text-gray-400"
      />
    </div>
  );
}

export default function Contact() {
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
        trackFormConversion();
        formRef.current.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section className="py-16 md:py-20 bg-gradient-to-b from-[#f7f7f9] to-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-[#0d1547] font-semibold text-xs uppercase tracking-[0.25em] mb-3 block">
            // Hai sa stam de vorba
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-[#051D3E] mb-3 leading-tight">
            Cere o oferta gratuita
          </h2>
          <p className="text-[#555] max-w-xl mx-auto">
            Completeaza formularul si te contactam in maxim 24 de ore cu o oferta clara, fara obligatii.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-6 lg:gap-8">
          {/* Form card - 3 cols */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
              {/* Red top accent ribbon */}
              <div className="bg-[#0d1547] px-7 py-4 flex items-center gap-3">
                <Send size={20} className="text-white" />
                <h3 className="text-white font-bold text-base md:text-lg">
                  Formular de Contact
                </h3>
              </div>

              <div className="p-6 md:p-8">
                {status === "sent" ? (
                  <div className="bg-green-50 border border-green-200 rounded-xl p-10 text-center">
                    <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                      <span className="text-3xl">&#10003;</span>
                    </div>
                    <h3 className="text-xl font-bold text-green-800 mb-2">
                      Mesaj Trimis cu Succes!
                    </h3>
                    <p className="text-green-600">
                      Va vom contacta in cel mai scurt timp posibil.
                    </p>
                    <button
                      onClick={() => setStatus("idle")}
                      className="mt-4 text-sm text-green-700 underline"
                    >
                      Trimite alt mesaj
                    </button>
                  </div>
                ) : (
                  <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <IconInput
                        icon={User}
                        name="from_name"
                        type="text"
                        required
                        placeholder="Nume si prenume"
                        aria-label="Nume"
                      />
                      <IconInput
                        icon={Phone}
                        name="phone"
                        type="tel"
                        required
                        placeholder="Numar de telefon"
                        aria-label="Telefon"
                      />
                    </div>

                    <IconInput
                      icon={Mail}
                      name="from_email"
                      type="email"
                      placeholder="Adresa de email"
                      aria-label="Email"
                    />

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="relative">
                        <MapPin
                          className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
                          size={18}
                        />
                        <select
                          name="county"
                          aria-label="Judet"
                          className="w-full pl-11 pr-4 py-3.5 rounded-lg border border-gray-200 bg-white focus:ring-2 focus:ring-[#0d1547]/20 focus:border-[#0d1547] outline-none transition-all text-[#212121] appearance-none"
                        >
                          <option value="">Judet</option>
                          {countyOptions.map((c) => (
                            <option key={c} value={c}>{c}</option>
                          ))}
                        </select>
                      </div>
                      <div className="relative">
                        <Briefcase
                          className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
                          size={18}
                        />
                        <select
                          name="service_type"
                          aria-label="Serviciu dorit"
                          className="w-full pl-11 pr-4 py-3.5 rounded-lg border border-gray-200 bg-white focus:ring-2 focus:ring-[#0d1547]/20 focus:border-[#0d1547] outline-none transition-all text-[#212121] appearance-none"
                        >
                          <option value="">Serviciul dorit</option>
                          {serviceOptions.map((s) => (
                            <option key={s} value={s}>{s}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div className="relative">
                      <MessageSquare
                        className="absolute left-4 top-4 text-gray-400 pointer-events-none"
                        size={18}
                      />
                      <textarea
                        name="message"
                        rows={4}
                        placeholder="Spune-ne despre proiectul tau..."
                        aria-label="Mesaj"
                        className="w-full pl-11 pr-4 py-3.5 rounded-lg border border-gray-200 bg-white focus:ring-2 focus:ring-[#0d1547]/20 focus:border-[#0d1547] outline-none transition-all text-[#212121] placeholder:text-gray-400 resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={status === "sending"}
                      className="w-full py-4 rounded-lg font-bold text-base flex items-center justify-center gap-2 bg-[#0d1547] hover:bg-[#0a1040] text-white shadow-lg shadow-[#0d1547]/30 hover:shadow-[#0d1547]/50 transition-all disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      <Send size={18} />
                      {status === "sending" ? "Se trimite..." : "Trimite cererea"}
                    </button>

                    <p className="text-xs text-gray-500 text-center pt-1">
                      Raspundem in maxim 24 de ore. Datele tale sunt confidentiale.
                    </p>

                    {status === "error" && (
                      <p className="text-red-600 text-sm text-center">
                        Eroare la trimitere. Incercati din nou sau sunati la 0735 097 539.
                      </p>
                    )}
                  </form>
                )}
              </div>
            </div>
          </div>

          {/* Contact info - 2 cols */}
          <div className="lg:col-span-2 space-y-4">
            <a
              href="tel:0735097539"
              className="group flex items-center gap-4 bg-white rounded-xl p-5 border-l-4 border-[#0d1547] shadow-sm hover:shadow-md transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-[#0d1547]/10 text-[#0d1547] flex items-center justify-center shrink-0 group-hover:bg-[#0d1547] group-hover:text-white transition-colors">
                <Phone size={22} />
              </div>
              <div>
                <span className="block text-xs text-[#666] uppercase tracking-wider mb-0.5">
                  Apeleaza acum
                </span>
                <span className="font-bold text-[#051D3E] text-lg">0735 097 539</span>
              </div>
            </a>

            <a
              href="mailto:montajacoperispro@gmail.com"
              className="group flex items-center gap-4 bg-white rounded-xl p-5 border-l-4 border-[#0d1547] shadow-sm hover:shadow-md transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-[#0d1547]/10 text-[#0d1547] flex items-center justify-center shrink-0 group-hover:bg-[#0d1547] group-hover:text-white transition-colors">
                <Mail size={22} />
              </div>
              <div className="min-w-0">
                <span className="block text-xs text-[#666] uppercase tracking-wider mb-0.5">
                  Trimite mail
                </span>
                <span className="font-bold text-[#051D3E] text-sm md:text-base truncate block">
                  montajacoperispro@gmail.com
                </span>
              </div>
            </a>

            <div className="flex items-center gap-4 bg-white rounded-xl p-5 border-l-4 border-[#051D3E] shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-[#051D3E]/10 text-[#051D3E] flex items-center justify-center shrink-0">
                <MapPin size={22} />
              </div>
              <div>
                <span className="block text-xs text-[#666] uppercase tracking-wider mb-0.5">
                  Zona de activitate
                </span>
                <span className="font-bold text-[#051D3E]">Hunedoara si zona invecinata</span>
              </div>
            </div>

            <a
              href="https://wa.me/40735097539"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#1faf52] text-white rounded-xl p-5 font-semibold transition-colors shadow-sm hover:shadow-md"
            >
              <MessageCircle size={22} />
              Scrie-ne pe WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
