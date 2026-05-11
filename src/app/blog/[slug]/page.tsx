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
  "ce-tip-de-tigla-rezista-la-grindina": "/images/hero-tigla-metalica.webp",
  "greseli-montaj-acoperis": "/images/tipuri-reparatii.webp",
  "cat-costa-un-acoperis-complet-2026": "/images/hero-dulgherie.webp",
};

const blogInlineImages: Record<string, { src: string; alt: string; afterParagraph: number }[]> = {
  "alegere-tigla-acoperis-ghid-complet": [
    { src: "/images/faq-tigla-metalica.webp", alt: "Acoperis cu tigla metalica", afterParagraph: 1 },
    { src: "/images/reparatii-faq.webp", alt: "Acoperis cu tigla ceramica", afterParagraph: 3 },
  ],
  "intretinere-acoperis-calendar-anual": [
    { src: "/images/importanta-reparatie.webp", alt: "Verificare jgheaburi acoperis", afterParagraph: 2 },
    { src: "/images/tipuri-reparatii.webp", alt: "Inspectie acoperis sezoniera", afterParagraph: 4 },
  ],
  "izolatie-termica-acoperis-economii": [
    { src: "/images/dulgherie-servicii.webp", alt: "Izolatie termica acoperis", afterParagraph: 1 },
    { src: "/images/hero-reparatii.webp", alt: "Acoperis izolat eficient termic", afterParagraph: 3 },
  ],
  "ce-tip-de-tigla-rezista-la-grindina": [
    { src: "/images/faq-tigla-metalica.webp", alt: "Tigla metalica rezistenta la grindina", afterParagraph: 1 },
    { src: "/images/reparatii-faq.webp", alt: "Acoperis dupa grindina - reparatii", afterParagraph: 3 },
  ],
  "greseli-montaj-acoperis": [
    { src: "/images/importanta-reparatie.webp", alt: "Greseli frecvente la montajul acoperisului", afterParagraph: 2 },
  ],
  "cat-costa-un-acoperis-complet-2026": [
    { src: "/images/hero-tigla-metalica.webp", alt: "Acoperis nou tigla metalica 2026", afterParagraph: 1 },
    { src: "/images/dulgherie-servicii.webp", alt: "Sarpanta si manopera acoperis", afterParagraph: 3 },
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
      "Inainte de a lua o decizie, recomandam o consultanta cu un specialist care sa evalueze structura existenta, panta acoperisului si conditiile climatice locale. La Acoperisuri Pro lucram cu toate tipurile de invelitoare si va putem oferi un calcul comparativ pentru fiecare optiune, astfel incat sa alegeti solutia cea mai potrivita pentru casa dumneavoastra. O alegere bine informata acum inseamna decenii de protectie si liniste pentru viitor.",
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
      "Iarna nu este momentul pentru lucrari pe acoperis, ci pentru monitorizare. Urmareste daca pe streasina apar tepi de gheata sau zone unde zapada se topeste neuniform - acestea sunt semne de izolatie deficitara sau de scurgeri de caldura. Daca strarul de zapada depaseste 30-40 cm, contacteaza un specialist pentru deszapezire profesionista, mai ales pe acoperisuri cu pante mici. Pentru orice lucrare, contacteaza Acoperisuri Pro - oferim si contracte de intretinere anuale, cu inspectii programate de doua ori pe an.",
    ],
  },
  "ce-tip-de-tigla-rezista-la-grindina": {
    title: "Ce Tip de Tigla Rezista cel mai Bine la Grindina?",
    date: "5 Mai 2026",
    category: "Sfaturi",
    readTime: "5 min citire",
    content: [
      "Grindina este unul dintre cei mai distructivi factori climatici pentru acoperisuri. In Romania, furtunile de grindina afecteaza anual zeci de mii de locuinte, iar costurile de reparatie pot ajunge la mii de euro per acoperis. Alegerea unui tip de invelitoare rezistenta la impact este, asadar, o decizie cu implicatii financiare directe — nu doar estetice. Dar care tip de tigla rezista cel mai bine?",
      "Tigla ceramica are o rezistenta la impact moderata spre buna. Testata conform standardului european EN 1297, tigla ceramica de calitate suporta impacte de grindina de dimensiuni medii (15-20 mm). Totusi, la grindina mare (peste 30 mm), poate fisura sau sparge, mai ales la unghiuri de impact defavorabile. Avantajul ei este ca o tigla sparta se inlocuieste punctual, fara a afecta restul acoperisului. Producatorii premium ofera garantii de rezistenta la impact de clasa FM 4473.",
      "Tigla metalica — in special profilele cu nervuri adanci din tabla groasa (0.5-0.6 mm) — are o rezistenta la grindina superioara tiglei ceramice. Tabla se poate deforma vizibil la impact, dar rareori se perforeaza sau permite infiltratii imediate. Unele sisteme metalice premium (Ruukki, Lindab, Bilka) sunt certificate la clasa de impact RC3-RC4 si pot rezista la grindinele cele mai severe inregistrate in Romania. Daca acoperisul se deformeaza vizibil, reparatia inseamna inlocuirea unor panouri, nu a intregii invelitori.",
      "Sindrila bituminoasa este cea mai vulnerabila la grindina. Granulele de protectie de pe suprafata se pot desprinde la impact, lasand material expus la UV si umiditate. Dupa o furtuna puternica, sindrila bituminoasa trebuie inspectata obligatoriu si adesea inlocuita partial sau total. Tabla faltuita (tip Lindab Seamline sau similar), datorita lipsei imbinarilor si a suprafetei continue, are comportament bun la grindina — se poate zamfli, dar etanseitatea nu este afectata imediat.",
      "Concluzia practica: daca locuiti intr-o zona cu frecventa ridicata a furtunilor cu grindina (Campia de Vest, Muntenia, Moldova), recomandam tigla metalica cu profil adanc si tabla groasa de 0.5 mm sau mai mult, sau tigla ceramica de clasa premium. Indiferent de alegere, o inspectie anuala dupa sezonul furtunilor este obligatorie. La Acoperisuri Pro oferim evaluare gratuita post-grindina si reparatii rapide cu garantie scrisa.",
    ],
  },
  "greseli-montaj-acoperis": {
    title: "5 Greseli la Montajul unui Acoperis (si cum le eviti)",
    date: "28 Aprilie 2026",
    category: "Ghid",
    readTime: "6 min citire",
    content: [
      "Un acoperis montat gresit nu se vede imediat — problemele apar dupa primul sezon ploios sau dupa prima iarna grea. Din pacate, pana atunci, daunele s-au extins deja: mucegai in pod, sarpanta putrezita, tencuiala patata pe interior. Reparatia unui acoperis cu greseli de montaj costa de 3-5 ori mai mult decat daca lucrarea ar fi fost facuta corect de la inceput. Iata cele mai frecvente 5 greseli pe care le vedem la Acoperisuri Pro.",
      "Prima greseala: montajul membranei hidroizolatoare gresit sau absent. Membrana trebuie sa acopere intreaga suprafata a sarpantei, montata cu suprapuneri de minim 15 cm si fixata corect la coame, dolii si streasina. O membrana montata cu tensiune, fara lagaruire, sau fara suprapuneri suficiente permite infiltratii de apa in primul an. Solutia: folositi membrane certificate (minim 150 g/mp) si verificati ca meserul stie sa le monteze corect.",
      "A doua greseala: distanta intre sipci calculata gresit pentru tipul de tigla ales. Fiecare producator specifica exact distanta optima intre sipci pentru modelul sau. O distanta mai mare duce la bataie de vant, una mai mica la curbarea tiglelor. Verificati intotdeauna fisele tehnice ale materialului ales si cereti meserului sa confirme calculul inainte de montaj.",
      "A treia greseala: ignorarea ventilatiei acoperisului. Un pod neventilat corect acumuleaza condens in lunile reci, care satureaza izolatia si degradeaza sarpanta in 5-10 ani. Solutia este simpla: aerisitoare de coama, aerisitoare de streasina si un calcul corect al suprafetei de ventilatie (minim 1/300 din suprafata planseului). Multi constructori sar peste acest pas pentru a economisi cateva sute de lei — si creeaza daune de zeci de mii.",
      "A patra greseala: tinichigeria executata neglijent. Sorturile la cosul de fum, doliile, racordurile la pereti verticali — toate trebuie executate cu raburi si sigilate cu chit special. O singura imbinare slaba inseamna infiltratie directa in pod la prima ploaie puternica. A cincea greseala: folosirea tiglelor de la mai multe sarcini/loturi pentru acelasi acoperis. Diferentele de culoare si dimensionale duc la neetanseitate. Comandati intotdeauna un surplus de 5-10% din acelasi lot si pastrati-l pentru reparatii viitoare. La Acoperisuri Pro verificam fiecare etapa si oferim garantie de 10 ani pe manopera.",
    ],
  },
  "cat-costa-un-acoperis-complet-2026": {
    title: "Cat Costa un Acoperis Complet in 2026? Preturi si Calcule Reale",
    date: "15 Aprilie 2026",
    category: "Preturi",
    readTime: "8 min citire",
    content: [
      "Intrebarea pe care o primim cel mai des: cat costa un acoperis nou? Raspunsul sincer este: depinde — dar nu va lasam cu atat. In acest articol detaliem toti factorii de pret, oferim intervale realiste pentru 2026 si va aratam un calcul concret pentru o casa de 100 mp utili. Preturile includ materialele si manopera, fara TVA.",
      "Factorul 1 — Suprafata acoperisului: suprafata reala a acoperisului este intotdeauna mai mare decat suprafata utila a casei, datorita pantei si a stresinii. Pentru o casa de 100 mp la sol cu acoperis in doua ape si panta de 35 grade, suprafata reala a invelitorii este de aproximativ 140-160 mp. Cu cat panta este mai mare, cu atat suprafata creste si montajul devine mai dificil (si mai scump).",
      "Factorul 2 — Tipul de invelitoare. Tigla metalica (Bilka, Wetterbest, Lindab): 45-80 lei/mp montat. Tigla ceramica (Bramac, Tondach): 90-150 lei/mp montat. Tabla faltuita: 120-200 lei/mp montat. Sindrila bituminoasa: 40-65 lei/mp montata. La aceste preturi se adauga accesoriile (coame, dolii, jgheaburi, parazapezi) care pot reprezenta 15-25% din costul total al invelitorii.",
      "Factorul 3 — Sarpanta (structura de lemn). Daca sarpanta este noua sau trebuie refacuta, costul adaugat este de 80-150 lei/mp de suprafata construita, in functie de complexitatea formei si de sectiunile de lemn folosite. Lemn tratat anti-insecte si anti-mucegai este obligatoriu — nu faceti economii aici. Factorul 4 — Izolatia termica: vata minerala bazaltica 15 cm grosime costa 30-55 lei/mp montat; 25 cm grosime (recomandat) 50-80 lei/mp.",
      "Calcul concret pentru casa 100 mp, acoperis in doua ape, tigla metalica, fara sarpanta noua: suprafata acoperis ~150 mp x 60 lei/mp (tigla metalica medie) = 9.000 lei; accesorii (jgheaburi, coame, dolii) ~2.500 lei; izolatie 150 mp x 65 lei = 9.750 lei; total aproximativ 21.000-24.000 lei cu TVA. Pentru tigla ceramica premium acelasi acoperis ajunge la 35.000-45.000 lei. Recomandarea noastra: cereti minim 3 oferte, comparati specificatiile tehnice (nu doar pretul) si verificati referintele meserilor. La Acoperisuri Pro oferim deviz detaliat gratuit, cu specificatii complete si garantie scrisa.",
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
      "Pe langa economiile evidente la facturi, o izolatie termica corect executata creste valoarea de revanzare a casei, imbunatateste confortul interior (temperaturi mai uniforme, fara zone reci) si reduce zgomotul exterior. Pentru o casa de 100 mp, investitia totala in izolatie premium este de aproximativ 6.000-9.000 lei, iar economia anuala la incalzire poate ajunge la 2.000-3.000 lei. La Acoperisuri Pro oferim consultanta gratuita si calculam pentru tine optiunea cea mai eficienta, in functie de structura existenta a acoperisului si de bugetul disponibil.",
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
  if (!post) return { title: "Articol Negasit - Acoperisuri Pro" };
  return {
    title: `${post.title} - Blog Acoperisuri Pro`,
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
                  Echipa Acoperisuri Pro iti sta la dispozitie pentru orice problema legata de acoperis. Contacteaza-ne acum!
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a href="tel:0754456844" className="inline-flex items-center justify-center gap-2 bg-white text-accent px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">
                    <Phone size={18} />
                    0754 456 844
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
                  <a href="tel:0754456844" className="btn-accent block text-center text-white py-3 rounded-xl font-semibold text-sm">
                    Apeleaza Acum
                  </a>
                  <a
                    href="https://wa.me/40754456844"
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
