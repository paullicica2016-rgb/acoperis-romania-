"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { trackFormConversion } from "@/lib/gtag";
import {
  Send,
  User,
  Phone,
  Mail,
  MapPin,
  Briefcase,
  MessageSquare,
} from "lucide-react";

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

export default function QuickContact() {
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
    <section className="py-16 bg-gradient-to-b from-white to-[#f7f7f9]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* Left - Form card */}
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
            {/* Red ribbon header */}
            <div className="bg-[#0d1547] px-6 py-4 flex items-center gap-3">
              <Send size={20} className="text-white" />
              <h2 className="text-white font-bold text-base md:text-lg leading-tight">
                Cauti firma pentru montaj acoperis? Contacteaza-ne!
              </h2>
            </div>

            <div className="p-6 md:p-8">
              {status === "sent" ? (
                <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
                  <div className="text-4xl mb-3">&#10003;</div>
                  <h3 className="text-xl font-bold text-green-800 mb-1">
                    Mesaj Trimis!
                  </h3>
                  <p className="text-green-600">Va contactam in cel mai scurt timp.</p>
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
                  </div>

                  <div className="relative">
                    <MessageSquare
                      className="absolute left-4 top-4 text-gray-400 pointer-events-none"
                      size={18}
                    />
                    <textarea
                      name="message"
                      rows={3}
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

          {/* Right - Image with experience badge overlay */}
          <div className="relative hidden lg:block">
            <div className="relative rounded-2xl overflow-hidden aspect-[6/5]">
              <Image
                src="/images/dragos/poza-1.jpeg"
                alt="Proiect acoperis realizat"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute bottom-6 left-6 bg-[#051D3E] rounded-xl px-6 py-4 shadow-xl">
              <div className="text-white/60 text-sm">Ani de Experienta in</div>
              <div className="text-white/60 text-sm">Montarea Acoperisurilor</div>
              <div className="text-[#0d1547] text-4xl font-bold mt-1">15+</div>
            </div>
            <div className="grid grid-cols-4 gap-3 mt-3">
              <div className="relative rounded-xl overflow-hidden aspect-[4/3]">
                <Image src="/images/dragos/poza-2.jpeg" alt="Proiect acoperis" fill className="object-cover" />
              </div>
              <div className="relative rounded-xl overflow-hidden aspect-[4/3]">
                <Image src="/images/dragos/poza-3.jpeg" alt="Proiect acoperis" fill className="object-cover" />
              </div>
              <div className="relative rounded-xl overflow-hidden aspect-[4/3]">
                <Image src="/images/dragos/poza-4.jpeg" alt="Proiect acoperis" fill className="object-cover" />
              </div>
              <div className="relative rounded-xl overflow-hidden aspect-[4/3]">
                <Image src="/images/dragos/poza-5.jpeg" alt="Proiect acoperis" fill className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
