import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Calendar } from "lucide-react";

const posts = [
  {
    slug: "alegere-tigla-acoperis-ghid-complet",
    title: "Cum sa Alegi Tigla Potrivita pentru Acoperisul Casei Tale",
    excerpt:
      "Ceramica, metalica sau tabla faltuita? Comparam tipurile de invelitoare si te ajutam sa alegi solutia ideala pentru bugetul tau.",
    date: "1 Apr 2026",
    category: "Sfaturi",
    image: "/images/faq-tigla-metalica.webp",
  },
  {
    slug: "intretinere-acoperis-calendar-anual",
    title: "Calendar de Intretinere Acoperis - Ce Verifici in Fiecare Sezon",
    excerpt:
      "Un acoperis bine intretinut dureaza de doua ori mai mult. Lista completa de verificari pe care trebuie sa le faci in fiecare sezon.",
    date: "25 Mar 2026",
    category: "Ghid Practic",
    image: "/images/reparatii-faq.webp",
  },
  {
    slug: "izolatie-termica-acoperis-economii",
    title: "Izolatia Termica a Acoperisului - Cum Reduci Factura cu Pana la 30%",
    excerpt:
      "Pana la 30% din pierderile termice scapa prin acoperis. Afla ce materiale alegi si in cat timp se amortizeaza investitia.",
    date: "20 Mar 2026",
    category: "Eficienta Energetica",
    image: "/images/dulgherie-despre.webp",
  },
];

export default function Blog() {
  return (
    <section className="py-20 bg-[#f4f4f4]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-14">
          <span className="text-[#B91C1C] font-semibold text-sm uppercase tracking-wider mb-2 block">
            Blog
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#051D3E] mb-3">
            Noutati Montaj si Reparatii Acoperisuri
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="service-card bg-white rounded-xl overflow-hidden block"
            >
              <div className="relative h-52">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute top-3 left-3">
                  <span className="text-xs font-semibold text-white bg-accent px-3 py-1.5 rounded-full">
                    {post.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-7 h-7 rounded-full bg-gray-200 overflow-hidden">
                    <Image src="/images/projects/tigla-metalica-1.webp" alt="admin" width={28} height={28} className="object-cover" />
                  </div>
                  <span className="text-xs text-[#666666] flex items-center gap-1">
                    <Calendar size={12} />
                    {post.date}
                  </span>
                </div>
                <h3 className="font-bold text-[#051D3E] mb-3 text-lg leading-snug">
                  {post.title}
                </h3>
                <p className="text-sm text-[#444444] leading-relaxed mb-4">
                  {post.excerpt}
                </p>
                <span className="inline-flex items-center gap-1 text-[#B91C1C] font-semibold text-sm">
                  Citeste tot articolul <ArrowRight size={14} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
