import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Calendar } from "lucide-react";

const posts = [
  {
    slug: "interventie-urgenta-acoperis-furtuna",
    title: "Interventie de Urgenta la Acoperis Dupa Furtuna",
    excerpt:
      "Aflati cum echipa noastra raspunde rapid la deteriorarile provocate de furtuni si ce pasi urmam pentru a va proteja casa.",
    date: "15 Mar 2026",
    category: "Interventii de urgenta",
    image: "/images/hero-reparatii.webp",
  },
  {
    slug: "investitia-acoperis-calitativ",
    title: "De ce Investitia intr-un Acoperis Calitativ se Plateste Mereu",
    excerpt:
      "Un acoperis de calitate nu este o cheltuiala, ci o investitie pe termen lung. Descopera beneficiile materialelor premium.",
    date: "10 Mar 2026",
    category: "Reglementari si Finantare",
    image: "/images/tigla-metalica-alegere.webp",
  },
  {
    slug: "semne-reparatii-urgente-acoperis",
    title: "5 Semne ca Acoperisul Tau Are Nevoie de Reparatii Urgente",
    excerpt:
      "Nu ignora aceste semne! Identifica la timp problemele acoperisului pentru a evita costurile mari de reparatie.",
    date: "5 Mar 2026",
    category: "Design si Inspiratie",
    image: "/images/importanta-reparatie.webp",
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
