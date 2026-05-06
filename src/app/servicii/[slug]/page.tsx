import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import PageHero from "@/components/PageHero";
import { CheckCircle2, ArrowRight, Phone } from "lucide-react";

const heroImages: Record<string, string> = {
  "reparatii-acoperisuri": "/images/hero-reparatii.webp",
  "constructie-acoperisuri-noi": "/images/hero-tigla-metalica.webp",
  "invelitori-pentru-acoperisuri": "/images/tigla-metalica-alegere.webp",
  "mansardari-si-extinderi": "/images/dulgherie-despre.webp",
  "demolari-si-reconstruiri": "/images/tipuri-reparatii.webp",
  "interventii-de-urgenta": "/images/hero-reparatii.webp",
  "curatare-si-intretinere": "/images/importanta-reparatie.webp",
  "finisaje-fatade-exterioare": "/images/cta-man.webp",
  "renovari-si-modernizari": "/images/reparatii-faq.webp",
  "accesorii-si-sisteme-de-montaj": "/images/dulgherie-servicii.webp",
};

const galleryImages: Record<string, string[]> = {
  "reparatii-acoperisuri": ["/images/projects/reparatii.webp", "/images/projects/reparatii-2.webp", "/images/projects/reparatii-3.webp"],
  "constructie-acoperisuri-noi": ["/images/projects/tigla-metalica-1.webp", "/images/projects/tigla-metalica-2.webp", "/images/projects/tigla-ceramica-1.webp", "/images/projects/dulgherie-1.webp"],
  "invelitori-pentru-acoperisuri": ["/images/projects/tigla-metalica-3.webp", "/images/projects/tigla-metalica-4.webp", "/images/projects/tigla-ceramica-2.webp", "/images/projects/tabla-faltuita-1.webp"],
  "mansardari-si-extinderi": ["/images/projects/dulgherie-1.webp", "/images/projects/tigla-metalica-1.webp", "/images/projects/tigla-ceramica-1.webp"],
  "demolari-si-reconstruiri": ["/images/projects/reparatii.webp", "/images/projects/dulgherie-1.webp", "/images/projects/tigla-metalica-2.webp"],
  "interventii-de-urgenta": ["/images/projects/reparatii.webp", "/images/projects/reparatii-2.webp", "/images/projects/reparatii-3.webp"],
  "curatare-si-intretinere": ["/images/projects/jgheaburi.webp", "/images/projects/jgheaburi-2.webp", "/images/projects/reparatii.webp"],
  "finisaje-fatade-exterioare": ["/images/projects/tabla-faltuita-1.webp", "/images/projects/tabla-faltuita-2.webp", "/images/projects/tigla-ceramica-1.webp"],
  "renovari-si-modernizari": ["/images/projects/tigla-metalica-1.webp", "/images/projects/tabla-cutata-1.webp", "/images/projects/sindrila-1.webp", "/images/projects/tigla-ceramica-2.webp"],
  "accesorii-si-sisteme-de-montaj": ["/images/projects/jgheaburi.webp", "/images/projects/jgheaburi-2.webp", "/images/projects/tigla-metalica-3.webp"],
};

const servicesData: Record<string, {
  title: string;
  description: string[];
  benefits: string[];
  materials: string[];
}> = {
  "constructie-acoperisuri-noi": {
    title: "Constructie Acoperisuri Noi",
    description: [
      "Constructia unui acoperis nou reprezinta una dintre cele mai importante etape in realizarea oricarei cladiri. Echipa Reparatii Pro are experienta necesara pentru a executa sisteme complete de acoperisuri pentru locuinte individuale, blocuri de apartamente, spatii comerciale si hale industriale. Fiecare proiect incepe cu o evaluare detaliata a cerintelor si o planificare riguroasa care sa respecte normele de constructie in vigoare.",
      "Oferim solutii de sarpanta din lemn masiv sau metal, in functie de specificul cladirii si de bugetul disponibil. Structurile din lemn sunt tratate cu substante ignifuge si fungicide pentru a asigura durabilitatea in timp, iar cele metalice sunt protejate anticoroziv. Indiferent de tipul de structura ales, montajul este realizat de echipe cu experienta vasta in dulgherie si constructii.",
      "Dupa realizarea sarpantei, urmeaza montajul invelitorii -- tigla ceramica, tigla metalica, tabla faltuita, sindrila bituminoasa sau panouri sandwich, in functie de preferintele dumneavoastra. Fiecare tip de invelitoare vine cu avantaje specifice, iar echipa noastra va poate consilia in alegerea celei mai potrivite variante.",
      "Pe langa structura si invelitoare, asiguram si montajul complet al izolatiei termice si al hidroizolatiei, al sistemelor pluviale (jgheaburi, burlane), al opritorilor de zapada, aeratoarelor si al tuturor elementelor de siguranta necesare unui acoperis functional si durabil. Toate lucrarile vin cu garantie completa pe materiale si manopera.",
    ],
    benefits: [
      "Executie completa de la zero -- structura, invelitoare, izolatie",
      "Sarpante din lemn tratat sau structuri metalice",
      "Toate tipurile de invelitori disponibile",
      "Izolatie termica si hidroizolatie profesionala",
      "Sisteme pluviale complete (jgheaburi, burlane)",
      "Garantie pe materiale si manopera",
      "Consultanta gratuita si oferta personalizata",
    ],
    materials: ["Bilka Steel", "Lindab", "Wetterbest", "Bramac", "Tondach", "Velux", "Gerard"],
  },
  "invelitori-pentru-acoperisuri": {
    title: "Invelitori pentru Acoperisuri",
    description: [
      "Alegerea invelitorii potrivite este esentiala pentru protectia si estetica casei dumneavoastra. Reparatii Pro ofera montaj profesional pentru toate tipurile de invelitori disponibile pe piata romaneasca, de la tigla ceramica traditionala pana la solutii moderne precum panourile sandwich sau tabla faltuita cu dublu falt.",
      "Tigla ceramica ramane una dintre cele mai apreciate optiuni datorita durabilitatii sale exceptionale si aspectului clasic. Montam tigla ceramica Tondach si Bramac, disponibila intr-o varietate larga de culori si profile. Pentru cei care prefera o solutie mai usoara si mai accesibila, tigla metalica de la Bilka, Lindab sau Wetterbest ofera un raport excelent calitate-pret.",
      "Tabla faltuita cu dublu falt este preferata pentru acoperisurile cu pante mici sau cu forme complexe, oferind o etanseitate perfecta si un aspect modern. Sindrila bituminoasa este ideala pentru acoperisurile cu geometrie complexa, iar panourile sandwich sunt solutia optima pentru hale industriale si spatii comerciale.",
      "Indiferent de tipul de invelitoare ales, echipa noastra asigura montajul conform specificatiilor producatorului, cu respectarea tuturor normelor tehnice. Folosim sisteme de fixare originale si accesorii de calitate pentru a garanta longevitatea acoperisului.",
    ],
    benefits: [
      "Montaj tigla ceramica -- Tondach, Bramac",
      "Montaj tigla metalica -- Bilka, Lindab, Wetterbest",
      "Tabla faltuita cu dublu falt",
      "Tabla cutata pentru hale si anexe",
      "Sindrila bituminoasa pentru acoperisuri complexe",
      "Panouri sandwich pentru spatii industriale",
      "Sisteme de fixare originale si accesorii premium",
    ],
    materials: ["Bilka Steel", "Lindab", "Wetterbest", "Bramac", "Tondach", "Gerard", "Ruukki"],
  },
  "accesorii-si-sisteme-de-montaj": {
    title: "Accesorii si Sisteme de Montaj",
    description: [
      "Un acoperis complet nu inseamna doar sarpanta si invelitoare. Accesoriile si sistemele de montaj joaca un rol crucial in functionarea corecta si in durabilitatea intregului sistem de acoperis. Reparatii Pro ofera instalarea profesionala a tuturor componentelor auxiliare necesare.",
      "Sistemele pluviale -- jgheaburi si burlane -- sunt esentiale pentru colectarea si evacuarea apelor pluviale, protejand atat acoperisul, cat si fundatia cladirii. Montam sisteme pluviale din tabla vopsita, cupru sau PVC, in functie de preferintele si bugetul dumneavoastra. Toate imbinarile sunt etanse si rezistente la intemperii.",
      "Opritorii de zapada previn alunecarea brusca a zapezii de pe acoperis, protejand persoanele si bunurile de la baza cladirii. Cosurile de fum si aeratoarele asigura ventilarea corecta a spatiului de sub acoperis, prevenind condensul si degradarea materialelor.",
      "Serviciile noastre de tinichigerie acopera realizarea sorturilor, a coamelor, a doliilors si a tuturor racordurilor speciale necesare unui acoperis etans. Folosim doar materiale de calitate superioara si tehnici de montaj validate de producatori.",
    ],
    benefits: [
      "Sisteme pluviale complete -- jgheaburi si burlane",
      "Opritori de zapada pentru siguranta",
      "Cosuri de fum si aeratoare",
      "Tinichigerie profesionala -- sorturi, coame, dolii",
      "Montaj conform specificatiilor producatorilor",
      "Materiale rezistente la intemperii",
      "Garantie pe montaj si materiale",
    ],
    materials: ["Lindab", "Bilka Steel", "Ruukki", "Wetterbest"],
  },
  "reparatii-acoperisuri": {
    title: "Reparatii Acoperisuri",
    description: [
      "Deteriorarea acoperisului poate avea cauze multiple -- de la uzura naturala a materialelor in timp, pana la daune provocate de furtuni, grindina sau zapada abundenta. Reparatii Pro ofera servicii profesionale de reparatii pentru orice tip de acoperis, indiferent de gravitatea deteriorarii.",
      "Procesul de reparatie incepe cu o inspectie detaliata a acoperisului pentru a identifica toate zonele afectate -- nu doar cele vizibile. Echipa noastra verifica starea sarpantei, a invelitorii, a izolatiei, a sistemului pluvial si a tuturor accesoriilor. Pe baza inspectiei, intocmim un raport complet si o oferta transparenta.",
      "Reparatiile pot include inlocuirea partiala a sarpantei deteriorate, repararea sau inlocuirea tiglelor sparte sau dislocate, refacerea izolatiei termice si a hidroizolatiei, repararea sau inlocuirea jgheaburilor si burlanelor deteriorate, precum si fixarea elementelor de tinichigerie.",
      "Intervenim rapid si eficient pentru a preveni agravarea daunelor si pentru a readuce acoperisul la parametrii optimi de functionare. Toate reparatiile sunt executate cu materiale de calitate si vin cu garantie, oferindu-va siguranta ca investitia dumneavoastra este protejata.",
    ],
    benefits: [
      "Inspectie detaliata si raport complet",
      "Inlocuire partiala sau totala a sarpantei",
      "Repararea sau inlocuirea invelitorii",
      "Refacerea izolatiei termice si hidroizolatiei",
      "Repararea sistemului pluvial",
      "Fixarea elementelor de tinichigerie",
      "Interventie rapida si eficienta",
    ],
    materials: ["Bilka Steel", "Lindab", "Wetterbest", "Bramac", "Tondach"],
  },
  "renovari-si-modernizari": {
    title: "Renovari si Modernizari",
    description: [
      "Renovarea unui acoperis vechi sau deteriorat este o investitie esentiala pentru siguranta si confortul locuintei. Reparatii Pro realizeaza proiecte complete de renovare si modernizare, transformand acoperisurile invechite in sisteme moderne, eficiente energetic si estetic atragatoare.",
      "Procesul de renovare poate include demontarea completa a invelitorii vechi si inlocuirea cu materiale noi, consolidarea sau inlocuirea sarpantei, aplicarea de izolatie termica performanta si hidroizolatie moderna, montarea de sisteme pluviale noi si instalarea tuturor accesoriilor necesare.",
      "Modernizarea acoperisului aduce beneficii semnificative: reducerea pierderilor de caldura cu pana la 30%, eliminarea infiltratiilor de apa, imbunatatirea aspectului estetic al cladirii si cresterea valorii proprietatii. De asemenea, un acoperis nou sau renovat elimina riscurile structurale asociate unui acoperis degradat.",
      "Echipa noastra va asista pe parcursul intregului proces -- de la evaluarea initiala si alegerea materialelor, pana la finalizarea lucrarii si predarea cu garantie. Ne adaptam fiecarui proiect si fiecarui buget, oferind solutii flexibile si eficiente.",
    ],
    benefits: [
      "Demontare completa si inlocuire invelitoare",
      "Consolidare sau inlocuire sarpanta",
      "Izolatie termica performanta",
      "Hidroizolatie moderna",
      "Sisteme pluviale noi",
      "Reducerea pierderilor de caldura cu pana la 30%",
      "Cresterea valorii proprietatii",
    ],
    materials: ["Bilka Steel", "Lindab", "Wetterbest", "Bramac", "Tondach", "Velux"],
  },
  "mansardari-si-extinderi": {
    title: "Mansardari si Extinderi",
    description: [
      "Mansardarea reprezinta una dintre cele mai eficiente modalitati de a castiga spatiu locuibil suplimentar fara a extinde amprenta la sol a cladirii. Reparatii Pro transforma podurile neutilizate in camere confortabile, birouri sau spatii de depozitare organizate, cu respectarea tuturor normelor de constructie.",
      "Procesul de mansardare implica mai multe etape: evaluarea structurii existente pentru a determina capacitatea portanta, proiectarea noii configuratii, realizarea modificarilor structurale necesare, aplicarea izolatiei termice si fonice, montajul ferestrelor de mansarda si finisajele interioare.",
      "Lucram cu ferestre de mansarda de la producatori de renume -- Velux si Fakro -- care ofera iluminare naturala excelenta, ventilatie controlata si izolatie termica superioara. Ferestrele sunt montate conform specificatiilor producatorului, cu etansare completa impotriva infiltratiilor.",
      "Extinderea acoperisului este o alta solutie pe care o oferim, fie prin cresterea suprafetei acoperite, fie prin modificarea formei acoperisului pentru a gazdui noi spatii. Fiecare proiect este tratat individual, cu atentie la detalii si cu respectarea caracteristicilor arhitecturale ale cladirii.",
    ],
    benefits: [
      "Spatiu locuibil suplimentar fara extindere la sol",
      "Evaluare structurala si proiectare profesionala",
      "Izolatie termica si fonica de inalta performanta",
      "Ferestre de mansarda Velux si Fakro",
      "Finisaje interioare complete",
      "Respectarea normelor de constructie",
      "Cresterea valorii proprietatii",
    ],
    materials: ["Velux", "Fakro", "Bilka Steel", "Lindab", "Wetterbest"],
  },
  "demolari-si-reconstruiri": {
    title: "Demolari si Reconstruiri",
    description: [
      "Uneori, starea avansata de degradare a unui acoperis face ca reparatiile sau renovarile sa nu mai fie viabile din punct de vedere economic sau structural. In astfel de situatii, demolarea completa si reconstructia de la zero reprezinta solutia optima. Reparatii Pro ofera servicii profesionale de demolare si reconstructie a acoperisurilor.",
      "Procesul incepe cu o evaluare tehnica detaliata pentru a stabili gradul de degradare si a determina cea mai buna abordare. Demontarea acoperisului vechi se realizeaza in conditii de siguranta, cu gestionarea corespunzatoare a deseurilor rezultate si cu protejarea structurii cladirii si a bunurilor din interior.",
      "Reconstructia include realizarea unei sarpante noi, dimensionate conform normelor actuale, montajul izolatiei termice si al hidroizolatiei, instalarea invelitorii alese, a sistemelor pluviale si a tuturor accesoriilor necesare. Practic, beneficiati de un acoperis complet nou, cu materiale si tehnologii de ultima generatie.",
      "Aceasta abordare ofera avantajul unui acoperis proiectat conform standardelor actuale de eficienta energetica si rezistenta structurala, eliminand complet problemele acumulate de-a lungul anilor. Oferim garantie completa pe intreaga lucrare, de la structura pana la ultimul accesoriu.",
    ],
    benefits: [
      "Demontare sigura a acoperisului vechi",
      "Gestionarea deseurilor conform normelor",
      "Sarpanta noua dimensionata la standarde actuale",
      "Izolatie termica si hidroizolatie moderne",
      "Invelitoare noua la alegere",
      "Sisteme pluviale si accesorii complete",
      "Garantie integrala pe lucrare",
    ],
    materials: ["Bilka Steel", "Lindab", "Wetterbest", "Bramac", "Tondach"],
  },
  "interventii-de-urgenta": {
    title: "Interventii de Urgenta",
    description: [
      "Furtunile violente, vanturile puternice, grindina si incarcarea excesiva cu zapada pot provoca daune grave acoperisurilor, punand in pericol siguranta locuintelor si a persoanelor. Reparatii Pro ofera servicii de interventie de urgenta 24/7, cu echipe mobile pregatite sa raspunda rapid in orice situatie.",
      "La primirea apelului de urgenta, echipa noastra se deplaseaza la fata locului in cel mai scurt timp posibil. Prioritatea imediata este securizarea zonei afectate pentru a preveni agravarea daunelor si pentru a proteja interiorul cladirii de infiltratii de apa, vant sau alte intemperii.",
      "Dupa securizare, realizam o evaluare rapida a pagubelor si stabilim planul de interventie. Reparatiile de urgenta pot include fixarea sau inlocuirea tiglelor dislocate, acoperirea provizorie a zonelor expuse, consolidarea elementelor structurale afectate si repararea sistemelor pluviale deteriorate.",
      "Odata situatia de urgenta rezolvata, va oferim o evaluare completa a starii acoperisului si un plan detaliat de reparatii definitive. Echipa noastra va asista pe parcursul intregului proces, de la interventie pana la restaurarea completa a acoperisului.",
    ],
    benefits: [
      "Disponibilitate 24/7, inclusiv in weekend",
      "Deplasare rapida la fata locului",
      "Securizarea imediata a zonei afectate",
      "Reparatii provizorii pentru protectie imediata",
      "Evaluare completa a pagubelor",
      "Plan de reparatii definitive",
      "Asistenta pe intregul proces de restaurare",
    ],
    materials: ["Prelate profesionale", "Materiale de securizare", "Bilka Steel", "Lindab"],
  },
  "curatare-si-intretinere": {
    title: "Curatare si Intretinere",
    description: [
      "Intretinerea regulata a acoperisului este esentiala pentru prelungirea duratei sale de viata si pentru prevenirea problemelor costisitoare. Reparatii Pro ofera servicii profesionale de curatare si intretinere preventiva, adaptate fiecarui tip de acoperis si fiecarui sezon.",
      "Serviciul de curatare include indepartarea frunzelor, ramurilor si a altor resturi organice acumulate pe acoperis si in jgheaburi, curatarea muschiurilor si lichenilor care pot deteriora invelitoarea, precum si verificarea si curatarea burlanelor pentru a asigura scurgerea corecta a apelor pluviale.",
      "Intretinerea preventiva presupune inspectia periodica a tuturor componentelor acoperisului -- invelitoare, sarpanta, izolatie, sisteme pluviale, racorduri si accesorii. Identificam si remediem la timp micile probleme inainte ca acestea sa se transforme in defectiuni majore si costisitoare.",
      "Recomandam cel putin doua inspectii pe an -- primavara, dupa sezonul rece, si toamna, inainte de venirea iernii. Aceasta abordare preventiva poate economisi sume semnificative pe termen lung si poate prelungi durata de viata a acoperisului cu ani buni.",
    ],
    benefits: [
      "Curatare profesionala a invelitorii",
      "Curatare jgheaburi si burlane",
      "Indepartare muschi si licheni",
      "Inspectie periodica completa",
      "Identificare si remediere probleme incipiente",
      "Raport detaliat dupa fiecare inspectie",
      "Prelungirea duratei de viata a acoperisului",
    ],
    materials: ["Echipamente profesionale de curatare", "Solutii antimuschi", "Produse de protectie"],
  },
  "finisaje-fatade-exterioare": {
    title: "Finisaje Fatade Exterioare",
    description: [
      "Fatada unei cladiri este cartea de vizita a oricarei proprietati. Reparatii Pro ofera servicii complete de finisaje exterioare si placari, folosind materiale de calitate superioara care asigura atat estetica, cat si protectia cladirii impotriva intemperiilor.",
      "Serviciile noastre de finisaje exterioare includ aplicarea tencuielii decorative, montajul placajelor din diverse materiale -- piatra naturala, caramida aparenta, panouri compozite sau lemn termotratat --, precum si realizarea elementelor decorative si a detaliilor arhitecturale.",
      "Lucram cu materiale certificate si echipamente profesionale pentru a asigura o aderenta perfecta, rezistenta la intemperii si un aspect estetic deosebit. Fiecare proiect este tratat cu atentie la detalii, respectand viziunea arhitecturala si preferintele clientului.",
      "Combinatia dintre un acoperis de calitate si o fatada bine realizata transforma orice cladire si ii creste semnificativ valoarea. Echipa noastra va poate consilia in alegerea materialelor si a finisajelor care se potrivesc cel mai bine stilului casei dumneavoastra.",
    ],
    benefits: [
      "Tencuiala decorativa profesionala",
      "Placaje din piatra naturala si caramida",
      "Panouri compozite si lemn termotratat",
      "Elemente decorative si detalii arhitecturale",
      "Materiale certificate si rezistente",
      "Aspect estetic deosebit",
      "Cresterea valorii proprietatii",
    ],
    materials: ["Materiale decorative premium", "Piatra naturala", "Panouri compozite", "Lemn termotratat"],
  },
};

const allServices = Object.entries(servicesData).map(([slug, data]) => ({
  slug,
  title: data.title,
}));

export async function generateStaticParams() {
  return Object.keys(servicesData).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = servicesData[slug];
  if (!service) return { title: "Serviciu Negasit - Reparatii Pro" };
  return {
    title: `${service.title} - Reparatii Pro`,
    description: service.description[0].substring(0, 160),
  };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = servicesData[slug];
  if (!service) notFound();

  const otherServices = allServices.filter((s) => s.slug !== slug);

  return (
    <>
      <PageHero
        title={service.title}
        image={heroImages[slug]}
        breadcrumbs={[
          { label: "Servicii", href: "/servicii" },
          { label: service.title },
        ]}
      />

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main content */}
            <div className="lg:col-span-2">
              <div className="prose prose-lg max-w-none mb-12">
                {service.description.map((p, i) => (
                  <p key={i} className="text-gray-600 leading-relaxed mb-6">{p}</p>
                ))}
              </div>

              {/* Benefits */}
              <div className="bg-accent/5 rounded-2xl p-8 mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Beneficii si Avantaje</h2>
                <ul className="space-y-3">
                  {service.benefits.map((b) => (
                    <li key={b} className="flex items-start gap-3">
                      <CheckCircle2 size={20} className="text-accent shrink-0 mt-0.5" />
                      <span className="text-gray-700">{b}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Materials */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Materiale Utilizate</h2>
                <div className="flex flex-wrap gap-3">
                  {service.materials.map((m) => (
                    <span key={m} className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm font-medium">
                      {m}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="bg-gradient-to-r from-primary to-accent rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-3">Solicita o Oferta Gratuita</h3>
                <p className="text-white/80 mb-6">
                  Contacteaza-ne pentru o consultatie gratuita si o oferta personalizata pentru serviciul de {service.title.toLowerCase()}.
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
              <div className="sticky top-28">
                <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 mb-6">
                  <h3 className="font-bold text-lg text-gray-900 mb-4">Alte Servicii</h3>
                  <ul className="space-y-2">
                    {otherServices.map((s) => (
                      <li key={s.slug}>
                        <Link
                          href={`/servicii/${s.slug}`}
                          className="flex items-center gap-2 text-sm text-gray-600 hover:text-accent transition-colors py-1.5"
                        >
                          <ArrowRight size={14} />
                          {s.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-[#051D3E] rounded-2xl p-6 text-white">
                  <h3 className="font-bold text-lg mb-3">Ai nevoie de ajutor?</h3>
                  <p className="text-gray-400 text-sm mb-4">
                    Echipa noastra iti sta la dispozitie pentru orice intrebare.
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
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      {galleryImages[slug] && galleryImages[slug].length > 0 && (
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-3">
                Portofoliu
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Exemple de Lucrari
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {galleryImages[slug].map((img, i) => (
                <div key={i} className="relative h-64 rounded-2xl overflow-hidden group">
                  <Image
                    src={img}
                    alt={`${service.title} - lucrare ${i + 1}`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-[#051D3E]/20 group-hover:bg-[#051D3E]/10 transition-colors" />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
