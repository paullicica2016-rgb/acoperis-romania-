import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import { Calendar, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog Acoperisuri - Sfaturi Montaj, Reparatii si Intretinere",
  description: "Articole utile despre montaj acoperisuri, reparatii, alegerea materialelor potrivite, intretinere si interventii de urgenta. Sfaturi de la expertii Reparatii Pro.",
};

const posts = [
  {
    slug: "interventie-urgenta-acoperis-furtuna",
    title: "Interventie de Urgenta la Acoperis Dupa Furtuna",
    excerpt: "Aflati cum echipa noastra raspunde rapid la deteriorarile provocate de furtuni si ce pasi urmam pentru a va proteja casa. Ghid complet pentru situatii de urgenta.",
    date: "15 Mar 2026",
    category: "Urgente",
    readTime: "5 min citire",
    image: "/images/hero-reparatii.webp",
  },
  {
    slug: "investitia-acoperis-calitativ",
    title: "De ce Investitia intr-un Acoperis Calitativ se Plateste Mereu",
    excerpt: "Un acoperis de calitate nu este o cheltuiala, ci o investitie pe termen lung. Descopera beneficiile materialelor premium si de ce merita sa investesti corect.",
    date: "10 Mar 2026",
    category: "Sfaturi",
    readTime: "7 min citire",
    image: "/images/tigla-metalica-alegere.webp",
  },
  {
    slug: "semne-reparatii-urgente-acoperis",
    title: "5 Semne ca Acoperisul Tau Are Nevoie de Reparatii Urgente",
    excerpt: "Nu ignora aceste semne! Identifica la timp problemele acoperisului pentru a evita costurile mari de reparatie. Ghid practic cu fotografii explicative.",
    date: "5 Mar 2026",
    category: "Ghid",
    readTime: "6 min citire",
    image: "/images/importanta-reparatie.webp",
  },
];

export default function BlogPage() {
  return (
    <>
      <PageHero
        title="Blog"
        subtitle="Articole si sfaturi utile despre acoperisuri -- de la intretinere si reparatii, pana la alegerea materialelor potrivite."
        breadcrumbs={[{ label: "Blog" }]}
      />

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="service-card bg-white rounded-2xl overflow-hidden border border-gray-100 block"
              >
                <div className="relative h-48">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs font-semibold text-accent bg-accent/10 px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                    <span className="text-xs text-gray-400 flex items-center gap-1">
                      <Calendar size={12} />
                      {post.date}
                    </span>
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2 text-lg leading-snug">
                    {post.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-1 text-accent font-semibold text-sm">
                      Citeste mai mult <ArrowRight size={16} />
                    </span>
                    <span className="text-xs text-gray-400">{post.readTime}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
