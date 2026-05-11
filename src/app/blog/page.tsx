import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import { Calendar, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog Acoperisuri - Sfaturi Montaj, Reparatii si Intretinere",
  description: "Articole utile despre montaj acoperisuri, reparatii, alegerea materialelor potrivite, intretinere si interventii de urgenta. Sfaturi de la expertii Acoperisuri Pro.",
};

const posts = [
  {
    slug: "alegere-tigla-acoperis-ghid-complet",
    title: "Cum sa Alegi Tigla Potrivita pentru Acoperisul Casei Tale",
    excerpt: "Ceramica, metalica sau tabla faltuita? Comparam tipurile de invelitoare si te ajutam sa alegi solutia ideala pentru bugetul si stilul casei tale.",
    date: "1 Apr 2026",
    category: "Sfaturi",
    readTime: "6 min citire",
    image: "/images/faq-tigla-metalica.webp",
  },
  {
    slug: "intretinere-acoperis-calendar-anual",
    title: "Calendar de Intretinere Acoperis - Ce Verifici in Fiecare Sezon",
    excerpt: "Un acoperis bine intretinut dureaza de doua ori mai mult. Iata lista completa de verificari pe care trebuie sa le faci primavara, vara, toamna si iarna.",
    date: "25 Mar 2026",
    category: "Ghid",
    readTime: "5 min citire",
    image: "/images/reparatii-faq.webp",
  },
  {
    slug: "izolatie-termica-acoperis-economii",
    title: "Izolatia Termica a Acoperisului - Cum Reduci Factura cu Pana la 30%",
    excerpt: "Pana la 30% din pierderile termice ale unei case scapa prin acoperis. Afla ce materiale alegi, ce grosimi sunt recomandate si in cat timp se amortizeaza investitia.",
    date: "20 Mar 2026",
    category: "Sfaturi",
    readTime: "7 min citire",
    image: "/images/dulgherie-despre.webp",
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
