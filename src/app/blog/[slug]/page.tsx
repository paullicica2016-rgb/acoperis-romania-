import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import PageHero from "@/components/PageHero";
import { Calendar, ArrowRight, Phone } from "lucide-react";

const blogHeroImages: Record<string, string> = {
  "interventie-urgenta-acoperis-furtuna": "/images/hero-reparatii.webp",
  "investitia-acoperis-calitativ": "/images/tigla-metalica-alegere.webp",
  "semne-reparatii-urgente-acoperis": "/images/importanta-reparatie.webp",
};

const blogInlineImages: Record<string, { src: string; alt: string; afterParagraph: number }[]> = {
  "interventie-urgenta-acoperis-furtuna": [
    { src: "/images/projects/reparatii.webp", alt: "Reparatie acoperis dupa furtuna", afterParagraph: 1 },
    { src: "/images/projects/reparatii-2.webp", alt: "Interventie de urgenta la acoperis", afterParagraph: 3 },
  ],
  "investitia-acoperis-calitativ": [
    { src: "/images/projects/tigla-metalica-1.webp", alt: "Acoperis cu tigla metalica de calitate", afterParagraph: 1 },
    { src: "/images/projects/tigla-ceramica-1.webp", alt: "Acoperis cu tigla ceramica premium", afterParagraph: 3 },
  ],
  "semne-reparatii-urgente-acoperis": [
    { src: "/images/projects/reparatii-3.webp", alt: "Semne de deteriorare pe acoperis", afterParagraph: 2 },
    { src: "/images/projects/jgheaburi.webp", alt: "Jgheaburi deteriorate care necesita reparatii", afterParagraph: 4 },
  ],
};

const blogPosts: Record<string, {
  title: string;
  date: string;
  category: string;
  readTime: string;
  content: string[];
}> = {
  "interventie-urgenta-acoperis-furtuna": {
    title: "Interventie de Urgenta la Acoperis Dupa Furtuna",
    date: "15 Martie 2026",
    category: "Urgente",
    readTime: "5 min citire",
    content: [
      "Furtunile puternice pot provoca daune semnificative acoperisurilor, de la tigle dislocate si jgheaburi rupte, pana la deteriorari structurale ale sarpantei. In astfel de situatii, reactia rapida este esentiala pentru a preveni agravarea problemelor si pentru a proteja interiorul locuintei de infiltratii de apa.",
      "Primul pas dupa o furtuna este inspectia vizuala a acoperisului de la sol. Cautati tigle lipsa sau deplasate, jgheaburi deteriorate, burlane rupte sau elemente de tinichigerie dislocate. Nu urcati pe acoperis pe cont propriu, deoarece structura poate fi compromisa si exista riscul de accidentare. In schimb, contactati o echipa profesionista care are echipamentele si experienta necesare pentru o interventie sigura.",
      "Daca observati infiltratii de apa in interiorul casei -- pete pe tavan, apa care curge pe pereti sau umiditate crescuta --, este esential sa protejati bunurile din zona afectata si sa contactati imediat un serviciu de interventie de urgenta. La Reparatii Pro, echipele noastre mobile sunt disponibile 24/7 si pot ajunge la fata locului in cel mai scurt timp posibil.",
      "Interventia de urgenta presupune, in primul rand, securizarea zonei afectate. Aceasta poate include acoperirea provizorie cu prelate profesionale a zonelor expuse, fixarea temporara a elementelor dislocate si stoparea infiltratiilor active. Scopul este de a preveni daunele suplimentare pana la realizarea reparatiilor definitive.",
      "Dupa securizare, echipa noastra realizeaza o inspectie detaliata a intregului acoperis pentru a identifica toate deteriorarile -- nu doar cele vizibile la prima vedere. Pe baza inspectiei, intocmim un raport complet si un deviz transparent pentru reparatiile necesare. In functie de gravitatea daunelor, reparatiile pot fi realizate in aceeasi zi sau pot necesita o planificare ulterioara. Important este ca acoperisul sa fie securizat imediat, iar reparatiile definitive sa fie realizate cat mai curand posibil pentru a preveni degradarea materialelor si a structurii.",
    ],
  },
  "investitia-acoperis-calitativ": {
    title: "De ce Investitia intr-un Acoperis Calitativ se Plateste Mereu",
    date: "10 Martie 2026",
    category: "Sfaturi",
    readTime: "7 min citire",
    content: [
      "Cand vine vorba de constructia sau renovarea unei case, acoperisul este adesea unul dintre cele mai importante elemente -- si, paradoxal, unul dintre cele mai neglijate. Multi proprietari opteaza pentru materiale ieftine sau manopera nespecializata, incercand sa economiseasca pe termen scurt. Insa experienta arata ca aceasta abordare se dovedeste intotdeauna mai costisitoare pe termen lung.",
      "Un acoperis de calitate, realizat cu materiale premium de la producatori recunoscuti precum Bilka, Lindab, Wetterbest sau Bramac, poate dura 30-50 de ani fara interventii majore. In comparatie, un acoperis executat cu materiale ieftine poate necesita reparatii semnificative dupa doar 5-10 ani. Costul acestor reparatii repetate depaseste rapid investitia initiala intr-un sistem de calitate.",
      "Izolata termica este un alt aspect unde calitatea face diferenta. Un acoperis bine izolat poate reduce consumul de energie pentru incalzire si racire cu pana la 30%. Aceasta se traduce in economii semnificative la facturile de utilitati, an dupa an. Materialele de izolatie premium, precum vatele minerale bazaltice de inalta densitate, ofera performante superioare si o durata de viata mult mai lunga decat alternativele ieftine.",
      "Garantia este un indicator important al calitatii. Producatorii de materiale premium ofera garantii extinse -- de la 15 la 50 de ani pe materiale, in functie de tipul de invelitoare. In combinatie cu garantia pe manopera oferita de o firma profesionista, aveti siguranta ca investitia dumneavoastra este protejata pe termen lung.",
      "In concluzie, investitia intr-un acoperis de calitate este una dintre cele mai inteligente decizii pe care le puteti lua pentru proprietatea dumneavoastra. Nu este doar o cheltuiala -- este o investitie care se recupereaza prin durabilitate, economii energetice si lipsa costurilor de reparatii. Alegeti cu intelepciune producatorii, materialele si echipa de montaj, iar acoperisul dumneavoastra va va proteja casa timp de decenii.",
    ],
  },
  "semne-reparatii-urgente-acoperis": {
    title: "5 Semne ca Acoperisul Tau Are Nevoie de Reparatii Urgente",
    date: "5 Martie 2026",
    category: "Ghid",
    readTime: "6 min citire",
    content: [
      "Acoperisul este prima linie de aparare a casei tale impotriva intemperiilor. Cu toate acestea, multi proprietari ignora semnele de uzura pana cand problemele devin grave si costisitoare. Identificarea la timp a acestor semne poate face diferenta intre o reparatie minora si o renovare completa. Iata cele 5 semne de alarma pe care nu ar trebui sa le ignorati.",
      "1. Pete de umezeala pe tavan sau pereti. Acesta este cel mai evident semn ca acoperisul are o problema. Petele de umezeala indica faptul ca apa patrunde prin invelitoare sau prin racorduri si ajunge in interiorul casei. Chiar daca petele par mici, problema reala poate fi mult mai extinsa, deoarece apa poate curge de-a lungul grinzilor inainte de a pica pe tavan. Nu ignorati aceste semne -- contactati un specialist cat mai curand.",
      "2. Tigle sparte, fisurate sau lipsa. Verificati periodic acoperisul de la sol, cu un binoclu daca este necesar. Tiglele sparte sau lipsa expun straturile de sub invelitoare la intemperii, ducand la degradarea rapida a izolatiei si a sarpantei. O singura tigla lipsa poate permite infiltrarea unor cantitati mari de apa, mai ales in timpul ploilor torentiale.",
      "3. Jgheaburi si burlane deteriorate sau infundate. Sistemul pluvial joaca un rol critic in protejarea acoperisului si a fundatiei cladirii. Jgheaburile infundate cu frunze sau resturi fac ca apa sa se acumuleze si sa curga pe sub invelitoare. Jgheaburile ruginite sau cu imbinari deteriorate permit apa sa curga direct pe peretii cladirii, provocand umezeala si degradare. Verificati si curatati jgheaburile cel putin de doua ori pe an.",
      "4. Muschi, licheni sau mucegai pe acoperis. Cresterea abundenta de muschi sau licheni pe invelitoare indica o problema de ventilatie si umiditate. Muschiul retine apa si poate deteriora materialele acoperisului in timp. De asemenea, radacinile muschiului pot ridica tiglele si pot crea spatii prin care apa patrunde. Un tratament profesional de curatare si aplicare de solutii preventive poate rezolva aceasta problema.",
      "5. Deformarea sau curbarea sarpantei. Daca observati ca acoperisul pare deformat, cu zone care se lasa sau care par umflate, este un semn serios ca structura de sustinere a acoperisului -- sarpanta -- este compromisa. Aceasta poate fi cauzata de umiditate excesiva, atac de insecte xilofage sau suprasolicitare (de exemplu, din cauza zapezii). O sarpanta deformata necesita interventie urgenta, deoarece poate pune in pericol siguranta intregii cladiri. Contactati imediat un specialist pentru o evaluare detaliata.",
    ],
  },
};

const allPosts = Object.entries(blogPosts).map(([slug, data]) => ({
  slug,
  title: data.title,
  category: data.category,
  date: data.date,
}));

export async function generateStaticParams() {
  return Object.keys(blogPosts).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts[slug];
  if (!post) return { title: "Articol Negasit - Reparatii Pro" };
  return {
    title: `${post.title} - Blog Reparatii Pro`,
    description: post.content[0].substring(0, 160),
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts[slug];
  if (!post) notFound();

  const relatedPosts = allPosts.filter((p) => p.slug !== slug);

  return (
    <>
      <PageHero
        title={post.title}
        image={blogHeroImages[slug]}
        breadcrumbs={[
          { label: "Blog", href: "/blog" },
          { label: post.title },
        ]}
      />

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Article */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-4 mb-8">
                <span className="text-sm font-semibold text-accent bg-accent/10 px-4 py-1.5 rounded-full">
                  {post.category}
                </span>
                <span className="text-sm text-gray-400 flex items-center gap-1">
                  <Calendar size={14} />
                  {post.date}
                </span>
                <span className="text-sm text-gray-400">{post.readTime}</span>
              </div>

              <article className="prose prose-lg max-w-none">
                {post.content.map((p, i) => {
                  const inlineImgs = blogInlineImages[slug] || [];
                  const imgAfter = inlineImgs.find((img) => img.afterParagraph === i);
                  return (
                    <div key={i}>
                      <p className="text-gray-600 leading-relaxed mb-6 text-lg">{p}</p>
                      {imgAfter && (
                        <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden my-8">
                          <Image
                            src={imgAfter.src}
                            alt={imgAfter.alt}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 66vw"
                          />
                        </div>
                      )}
                    </div>
                  );
                })}
              </article>

              {/* CTA */}
              <div className="mt-12 bg-gradient-to-r from-primary to-accent rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-3">Ai nevoie de ajutor profesionist?</h3>
                <p className="text-white/80 mb-6">
                  Echipa Reparatii Pro iti sta la dispozitie pentru orice problema legata de acoperis. Contacteaza-ne acum!
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a href="tel:0734704026" className="inline-flex items-center justify-center gap-2 bg-white text-accent px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">
                    <Phone size={18} />
                    0734 704 026
                  </a>
                  <Link href="/contact" className="inline-flex items-center justify-center gap-2 border-2 border-white/30 text-white px-6 py-3 rounded-full font-semibold hover:bg-white/10 transition-colors">
                    Formular Contact
                  </Link>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-28 space-y-6">
                <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                  <h3 className="font-bold text-lg text-gray-900 mb-4">Articole Similare</h3>
                  <ul className="space-y-4">
                    {relatedPosts.map((p) => (
                      <li key={p.slug}>
                        <Link
                          href={`/blog/${p.slug}`}
                          className="group"
                        >
                          <span className="text-xs font-semibold text-accent">{p.category}</span>
                          <h4 className="font-medium text-gray-700 group-hover:text-accent transition-colors text-sm leading-snug mt-1">
                            {p.title}
                          </h4>
                          <span className="text-xs text-gray-400 mt-1 flex items-center gap-1">
                            <Calendar size={10} /> {p.date}
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-[#051D3E] rounded-2xl p-6 text-white">
                  <h3 className="font-bold text-lg mb-3">Ai o urgenta?</h3>
                  <p className="text-gray-400 text-sm mb-4">
                    Echipa noastra este disponibila 24/7 pentru interventii de urgenta la acoperisuri.
                  </p>
                  <a href="tel:0734704026" className="btn-accent block text-center text-white py-3 rounded-xl font-semibold text-sm">
                    Apeleaza Acum
                  </a>
                  <a
                    href="https://wa.me/40734704026"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-center bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl font-semibold text-sm mt-3 transition-colors"
                  >
                    WhatsApp
                  </a>
                </div>

                <Link href="/blog" className="flex items-center gap-2 text-accent font-semibold hover:gap-3 transition-all">
                  <ArrowRight size={16} className="rotate-180" />
                  Inapoi la Blog
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
