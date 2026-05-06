import Image from "next/image";
import Link from "next/link";

const partners = [
  { name: "Bilka", src: "/images/partners/bilka.webp" },
  { name: "Lindab", src: "/images/partners/lindab.webp" },
  { name: "Wetterbest", src: "/images/partners/wetterbest.webp" },
  { name: "Bramac", src: "/images/partners/bramac.webp" },
];

const bullets = [
  { strong: "Bilka Steel", rest: " – tabla cutata si tigla metalica" },
  { strong: "Lindab", rest: " – jgheaburi otel galvanizat" },
  { strong: "Wetterbest", rest: " – tigla metalica acoperis" },
  { strong: null, rest: "Garantie extinsa pe toate materialele" },
];

export default function Partners() {
  return (
    <section className="py-12 md:py-16 bg-[#f4f4f4]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 rounded-2xl overflow-hidden shadow-md">
          {/* Left - Red panel */}
          <div className="bg-[#C62828] text-white p-8 md:p-10 lg:p-12 flex flex-col justify-center">
            <span className="block text-white/80 font-semibold text-xs uppercase tracking-[0.25em] mb-4">
              Parteneri de Incredere
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-[1.05] mb-5">
              Parteneri &amp; Materiale cu Care Lucram
            </h2>
            <p className="text-white/90 leading-relaxed mb-6 max-w-md">
              Lucram exclusiv cu producatori recunoscuti. Materiale certificate cu garantie extinsa.
            </p>

            <ul className="space-y-3 mb-8 text-white text-sm md:text-base">
              {bullets.map((b, i) => (
                <li key={i} className="flex gap-2">
                  <span className="shrink-0">→</span>
                  <span>
                    {b.strong && <strong>{b.strong}</strong>}
                    {b.rest}
                  </span>
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/portofoliu"
                className="border-2 border-white text-white hover:bg-white hover:text-[#C62828] px-6 py-3 rounded-md font-semibold text-sm text-center transition-colors"
              >
                Vezi Portofoliu
              </Link>
              <a
                href="tel:0734704026"
                className="border-2 border-white text-white hover:bg-white hover:text-[#C62828] px-6 py-3 rounded-md font-semibold text-sm text-center transition-colors"
              >
                Apeleaza Acum
              </a>
            </div>
          </div>

          {/* Right - Logos grid */}
          <div className="bg-white p-6 md:p-8 lg:p-10 grid grid-cols-2 gap-3 md:gap-4 content-center">
            {partners.map((partner) => (
              <div
                key={partner.name}
                className="flex items-center justify-center min-h-[110px] md:min-h-[140px] rounded-xl border border-gray-200 bg-white p-4 md:p-6 hover:shadow-md transition-all"
              >
                <Image
                  src={partner.src}
                  alt={partner.name}
                  width={150}
                  height={60}
                  className="object-contain max-h-12 md:max-h-14 w-auto"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
