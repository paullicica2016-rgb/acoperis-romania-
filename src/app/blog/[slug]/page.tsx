import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import PageHero from "@/components/PageHero";
import { Calendar, ArrowRight, Phone } from "lucide-react";

const blogHeroImages: Record<string, string> = {
  "alegere-tigla-acoperis-ghid-complet": "/images/faq-tigla-metalica.webp",
  "intretinere-acoperis-calendar-anual": "/images/reparatii-faq.webp",
  "izolatie-termica-acoperis-economii": "/images/dulgherie-despre.webp",
};

const blogInlineImages: Record<string, { src: string; alt: string; afterParagraph: number }[]> = {
  "alegere-tigla-acoperis-ghid-complet": [
    { src: "/images/projects/tigla-ceramica-1.webp", alt: "Acoperis cu tigla ceramica", afterParagraph: 1 },
    { src: "/images/projects/tigla-metalica-1.webp", alt: "Acoperis cu tigla metalica", afterParagraph: 3 },
  ],
  "intretinere-acoperis-calendar-anual": [
    { src: "/images/projects/jgheaburi-2.webp", alt: "Verificare jgheaburi acoperis", afterParagraph: 2 },
    { src: "/images/projects/reparatii-2.webp", alt: "Inspectie acoperis sezoniera", afterParagraph: 4 },
  ],
  "izolatie-termica-acoperis-economii": [
    { src: "/images/projects/dulgherie-1.webp", alt: "Izolatie termica acoperis", afterParagraph: 1 },
    { src: "/images/projects/tigla-metalica-2.webp", alt: "Acoperis izolat eficient termic", afterParagraph: 3 },
  ],
};

const blogPosts: Record<string, {
  title: string;
  date: string;
  category: string;
  readTime: string;
  content: string[];
}> = {
  "alegere-tigla-acoperis-ghid-complet": {
    title: "Cum sa Alegi Tigla Potrivita pentru Acoperisul Casei Tale",
    date: "1 Aprilie 2026",
    category: "Sfaturi",
    readTime: "6 min citire",
    content: [
      "Alegerea tipului de invelitoare este una dintre cele mai importante decizii pe care le iei atunci cand construiesti sau renovezi un acoperis. Aceasta influenteaza nu doar aspectul estetic al casei, ci si durabilitatea, costurile de intretinere si chiar valoarea proprietatii pe termen lung. Pe piata exista mai multe tipuri de tigla, fiecare cu avantaje si limitari proprii, iar alegerea potrivita depinde de bugetul disponibil, zona geografica, panta acoperisului si stilul arhitectural al cladirii.",
      "Tigla ceramica este alegerea clasica si cea mai durabila optiune disponibila. Realizata din argila arsa la temperaturi inalte, are o durata de viata de 50-100 de ani, rezistenta excelenta la foc si la radiatiile UV. Tigla ceramica ofera o estetica premium, traditionala, si este ideala pentru case construite in stil clasic sau pentru zone unde reglementarile urbanistice impun acest tip de invelitoare. Dezavantajele principale sunt greutatea ridicata - care necesita o sarpanta robusta - si pretul, care poate fi de 2-3 ori mai mare decat al tiglei metalice.",
      "Tigla metalica reprezinta solutia preferata in ultimii ani datorita raportului excelent calitate-pret. Confectionata din tabla zincata acoperita cu polimeri de protectie, este usoara, rapid de montat si durabila - cu o garantie de pana la 50 de ani de la producatori precum Bilka, Lindab sau Wetterbest. Este ideala pentru acoperisuri cu pante intre 14 si 60 de grade si vine intr-o gama larga de culori si profile care imita aspectul tiglei ceramice. Costul redus si montajul rapid o fac alegerea numarul unu pentru casele rezidentiale moderne.",
      "Tabla faltuita este o alternativa moderna, eleganta, folosita atat la cladiri rezidentiale, cat si comerciale. Se monteaza in panouri lungi, fara imbinari transversale, ceea ce o face extrem de eficienta in evacuarea apei si potrivita pentru pante mici (chiar si sub 7 grade). Aspectul ei minimalist si liniile drepte se potrivesc perfect cu arhitectura contemporana. Sindrila bituminoasa, pe de alta parte, este cea mai accesibila solutie - usor de montat pe forme complexe, dar cu o durata de viata mai scurta (15-25 de ani).",
      "Inainte de a lua o decizie, recomandam o consultanta cu un specialist care sa evalueze structura existenta, panta acoperisului si conditiile climatice locale. La Reparatii Pro lucram cu toate tipurile de invelitoare si va putem oferi un calcul comparativ pentru fiecare optiune, astfel incat sa alegeti solutia cea mai potrivita pentru casa dumneavoastra. O alegere bine informata acum inseamna decenii de protectie si liniste pentru viitor.",
    ],
  },
  "intretinere-acoperis-calendar-anual": {
    title: "Calendar de Intretinere Acoperis - Ce Verifici in Fiecare Sezon",
    date: "25 Martie 2026",
    category: "Ghid",
    readTime: "5 min citire",
    content: [
      "Un acoperis bine intretinut poate dura cu 15-20 de ani mai mult decat unul lasat la voia intamplarii. Multi proprietari fac greseala de a se gandi la acoperis doar atunci cand apare o problema - moment in care reparatiile costa de 5-10 ori mai mult decat o intretinere preventiva. Verificarile periodice, organizate sezonier, sunt cea mai eficienta metoda de a prelungi durata de viata a acoperisului si de a evita surprizele neplacute.",
      "Primavara este momentul ideal pentru o inspectie completa dupa rigorile iernii. Verifica daca exista tigle dislocate, fisurate sau lipsa - zapada si gheata pot deteriora chiar si cele mai durabile invelitori. Curata jgheaburile de frunzele si reziduurile acumulate in timpul iernii, pentru ca apa de ploaie sa se scurga corespunzator. Verifica daca elementele de tinichigerie - sorturile, dolii si racordurile la cosul de fum - sunt intacte si bine fixate.",
      "Vara este sezonul potrivit pentru lucrari de igiena si tratamente preventive. Daca observi muschi sau licheni pe tigle, aplica solutii speciale anti-muschi pentru a preveni deteriorarea materialelor. Verifica si tunde crengile copacilor care ating sau se apropie de acoperis - frunzele in cadere blocheaza jgheaburile, iar crengile in furtuna pot zgaria sau lovi invelitoarea. Tot acum poti planifica eventualele renovari sau extinderi, profitand de vremea uscata.",
      "Toamna este probabil cel mai important sezon de intretinere. Curata din nou jgheaburile dupa caderea frunzelor si verifica burlanele sa nu fie infundate. Inspecteaza izolatia podului - daca observi pete de umezeala sau zone reci, este momentul sa intervii inainte de iarna. Verifica daca tiglele sunt bine fixate si inlocuieste-le pe cele deteriorate. O singura tigla lipsa poate permite infiltrarea apei si formarea unor pungi de gheata care strica sarpanta.",
      "Iarna nu este momentul pentru lucrari pe acoperis, ci pentru monitorizare. Urmareste daca pe streasina apar tepi de gheata sau zone unde zapada se topeste neuniform - acestea sunt semne de izolatie deficitara sau de scurgeri de caldura. Daca strarul de zapada depaseste 30-40 cm, contacteaza un specialist pentru deszapezire profesionista, mai ales pe acoperisuri cu pante mici. Pentru orice lucrare, contacteaza Reparatii Pro - oferim si contracte de intretinere anuale, cu inspectii programate de doua ori pe an.",
    ],
  },
  "izolatie-termica-acoperis-economii": {
    title: "Izolatia Termica a Acoperisului - Cum Reduci Factura cu Pana la 30%",
    date: "20 Martie 2026",
    category: "Sfaturi",
    readTime: "7 min citire",
    content: [
      "Pana la 30% din pierderile termice ale unei case scapa prin acoperis - aceasta este realitatea pe care multi proprietari o ignora pana cand vad facturile la incalzire. Caldura urca natural, iar daca acoperisul nu este izolat corespunzator, energia consumata pentru incalzirea casei pleaca direct in atmosfera. Investitia intr-o izolatie termica de calitate este una dintre cele mai rentabile modernizari pe care le poti face, cu un retur al investitiei in doar 5-7 ani prin economiile la utilitati.",
      "Cele mai folosite materiale izolante sunt vata minerala bazaltica, vata de sticla, polistirenul expandat (EPS), polistirenul extrudat (XPS) si spumele poliuretanice. Vata minerala bazaltica este alegerea premium - are performante termice excelente (lambda 0.035-0.040 W/mK), este incombustibila, ofera si izolare fonica si rezista la atacul rozatoarelor sau insectelor. Polistirenul este mai ieftin si mai usor, dar are limitari la foc si trebuie protejat de razele UV. Spuma poliuretanica aplicata prin pulverizare este ideala pentru sarpante complicate, oferind o etansare perfecta.",
      "Grosimea izolatiei este la fel de importanta ca tipul materialului. Pentru zona climatica a Romaniei, recomandarea actuala este de minim 25-30 cm de vata minerala sau echivalent. Multi proprietari fac greseala de a monta izolatie subtire pentru a economisi pe termen scurt - insa diferenta de cost intre 15 si 30 de cm este minora comparativ cu economiile pe termen lung la incalzire si racire. O izolatie subdimensionata inseamna pierderi termice continue, ani de zile.",
      "Un element esential, adesea uitat, este bariera de vapori si membrana hidroizolatoare. Bariera de vapori, montata pe partea calda a izolatiei (interior), impiedica condensul sa patrunda in stratul izolator. Membrana hidroizolatoare, montata sub invelitoare, protejeaza izolatia de eventuale infiltratii si permite evacuarea umiditatii reziduale. Fara aceste membrane, chiar si cea mai scumpa izolatie isi pierde proprietatile in cativa ani din cauza umiditatii acumulate.",
      "Pe langa economiile evidente la facturi, o izolatie termica corect executata creste valoarea de revanzare a casei, imbunatateste confortul interior (temperaturi mai uniforme, fara zone reci) si reduce zgomotul exterior. Pentru o casa de 100 mp, investitia totala in izolatie premium este de aproximativ 6.000-9.000 lei, iar economia anuala la incalzire poate ajunge la 2.000-3.000 lei. La Reparatii Pro oferim consultanta gratuita si calculam pentru tine optiunea cea mai eficienta, in functie de structura existenta a acoperisului si de bugetul disponibil.",
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
