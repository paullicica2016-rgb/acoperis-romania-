import Link from "next/link";
import Image from "next/image";

export default function About() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Images */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="relative rounded-xl overflow-hidden aspect-[3/4]">
                <Image src="/images/dragos/poza-1.jpeg" alt="Firma montaj acoperis" fill className="object-cover" />
              </div>
              <div className="relative rounded-xl overflow-hidden aspect-[3/4] mt-8">
                <Image src="/images/dragos/poza-5.jpeg" alt="Montaj acoperis" fill className="object-cover" />
              </div>
            </div>
          </div>

          {/* Right - Text */}
          <div>
            {/* Red banner header */}
            <div className="bg-[#0d1547] text-white px-6 py-6 mb-6 rounded-md">
              <span className="block text-white/90 font-semibold text-xs uppercase tracking-[0.2em] mb-2">
                Constructie · Montaj · Reparatii Acoperis
              </span>
              <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                Montaj si Reparatii Acoperisuri
              </h2>
            </div>

            <p className="text-[#212121] leading-relaxed mb-6">
              Suntem o firma cu experienta in <strong>montajul, intretinerea si reparatia acoperisurilor</strong>,
              activand de peste 15 ani. Echipa noastra este formata din{" "}
              <strong>mesteri specializati in structuri de acoperis</strong>.
            </p>

            <div className="space-y-3 mb-8">
              {[
                "Oferim servicii complete de montaj si reparatii acoperisuri",
                "Punem accent pe calitatea manoperei in construirea acoperisurilor",
                "Oferim solutii personalizate pentru orice tip de acoperis",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-stretch border border-gray-200 rounded-md overflow-hidden bg-white shadow-sm"
                >
                  <div className="w-1.5 bg-[#0d1547] shrink-0" />
                  <div className="px-4 py-3.5 text-[#212121]">{item}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/despre-noi"
                className="btn-navy inline-flex items-center justify-center px-7 py-3 rounded-lg font-semibold text-sm"
              >
                Vezi Mai Mult
              </Link>
              <a
                href="tel:0754456844"
                className="btn-accent inline-flex items-center justify-center px-7 py-3 rounded-lg font-semibold text-sm"
              >
                Apeleaza Acum
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
