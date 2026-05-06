import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageHero from "@/components/PageHero";
import { CheckCircle2, Phone, MapPin, ArrowRight } from "lucide-react";

const countiesData: Record<string, {
  name: string;
  description: string[];
  highlights: string[];
}> = {
  hunedoara: {
    name: "Hunedoara",
    description: [
      "Reparatii Pro ofera servicii complete de montaj si reparatii acoperisuri in judetul Hunedoara, zona noastra principala de activitate. Cu o experienta de peste 15 ani, echipele noastre au realizat proiecte in Deva, Hunedoara, Petrosani, Orastie, Brad, Simeria si in toate localitatile din judet.",
      "Specificul constructiilor din Hunedoara, cu zone montane intinse (Valea Jiului, Tinutul Padurenilor, Retezat) si zone de campie, necesita solutii adaptate fiecarei locatii. Folosim sarpante dimensionate corespunzator pentru sarcini mari de zapada si invelitori cu rezistenta crescuta la conditii climatice severe.",
      "Fiind o firma locala, oferim cei mai scurti timpi de raspuns in judetul Hunedoara, deplasare gratuita pentru evaluare si preturi competitive. Lucram cu materiale premium de la Bilka, Lindab, Wetterbest si Bramac, cu garantie extinsa pe toate lucrarile.",
    ],
    highlights: [
      "Firma locala in zona Hunedoara",
      "Prezenti in Deva, Petrosani, Orastie, Brad",
      "Timp de raspuns minim in judet",
      "Solutii pentru zone montane si campie",
    ],
  },
  alba: {
    name: "Alba",
    description: [
      "Reparatii Pro deserves judetul Alba cu servicii complete de montaj si reparatii acoperisuri in Alba Iulia, Sebes, Aiud, Blaj, Cugir si in toate localitatile din judet. Apropierea de Hunedoara ne permite sa oferim timpi de raspuns rapizi si preturi competitive in intregul judet.",
      "Specificul constructiilor din Alba, cu cetati si centre istorice (Alba Iulia, Sebes, Aiud), necesita atentie deosebita la detaliile arhitecturale. Echipa noastra are experienta in lucrarile care respecta caracterul cladirilor traditionale si a celor moderne din zona.",
      "Pentru zonele montane din Apuseni si Tara Motilor, dimensionam sarpantele pentru sarcini mari de zapada si folosim invelitori durabile -- tigla ceramica, tigla metalica sau sindrila bituminoasa, in functie de cerintele fiecarui proiect.",
    ],
    highlights: [
      "Prezenti in Alba Iulia, Sebes, Aiud, Blaj",
      "Experienta cu cladiri istorice si moderne",
      "Solutii pentru zona montana din Apuseni",
      "Deplasare gratuita din zona Hunedoara",
    ],
  },
  sibiu: {
    name: "Sibiu",
    description: [
      "Reparatii Pro este prezent activ in judetul Sibiu, cu servicii complete de acoperisuri in Sibiu, Medias, Cisnadie, Avrig, Agnita si in localitatile din judet. Sibiul, cu centrul sau istoric protejat UNESCO, necesita atentie speciala la lucrarile de acoperis pentru a respecta caracterul arhitectural al zonei.",
      "Lucram cu invelitori clasice de tigla ceramica si solzi, specifice zonei sasesti, dar si cu solutii moderne pentru constructiile noi din ansamblurile rezidentiale. Echipa noastra cunoaste specificul local si lucreaza cu materiale aprobate pentru cladirile istorice.",
      "Conditiile climatice din zona Sibiu, cu ierni reci si zapezi abundente, impun acoperisuri bine dimensionate. Folosim sarpante robuste si sisteme de evacuare a apei meteorice optimizate pentru zona montana din Marginimea Sibiului si imprejurimi.",
    ],
    highlights: [
      "Prezenti in Sibiu, Medias, Cisnadie, Agnita",
      "Experienta cu cladiri istorice (UNESCO)",
      "Invelitori clasice si moderne",
      "Solutii pentru clima montana",
    ],
  },
  valcea: {
    name: "Valcea",
    description: [
      "Reparatii Pro deserves judetul Valcea cu servicii profesionale de montaj si reparatii acoperisuri in Ramnicu Valcea, Dragasani, Calimanesti, Horezu si in toate localitatile din judet. Apropierea de Hunedoara prin Pasul Vulcan ne permite deplasari rapide si preturi competitive.",
      "Specificul Valcei, cu zone de deal si munte (Cozia, Capatanii, Lotrului) si zona viticola din Dragasani, necesita solutii adaptate fiecarui tip de teren. Echipa noastra are experienta cu acoperisuri pentru pensiuni, vile, case rurale si spatii comerciale.",
      "Folosim invelitori durabile -- tigla ceramica, tigla metalica, tabla faltuita si sindrila bituminoasa -- de la producatori recunoscuti, cu garantie pe lucrari. Consultanta si evaluarea sunt gratuite in toata zona Valcea.",
    ],
    highlights: [
      "Prezenti in Ramnicu Valcea, Dragasani, Calimanesti",
      "Experienta cu pensiuni si vile montane",
      "Solutii pentru zone de deal si munte",
      "Deplasare gratuita din Hunedoara",
    ],
  },
  gorj: {
    name: "Gorj",
    description: [
      "In judetul Gorj, Reparatii Pro ofera servicii complete de acoperisuri in Targu Jiu, Motru, Rovinari, Novaci, Tismana si in localitatile din judet. Vecinatatea cu Hunedoara face din Gorj o zona unde echipele noastre se deplaseaza regulat, oferind preturi competitive si timpi de raspuns scurti.",
      "Specificul Gorjului, cu zone montane (Parang, Valcan, Godeanu) si zone de campie, impune solutii diferite pentru fiecare proiect. Echipa noastra are experienta atat cu acoperisuri pentru case traditionale gorjenesti, cat si cu solutii moderne pentru constructiile noi.",
      "Oferim intreaga gama de servicii -- constructie acoperisuri noi, reparatii, renovari, mansardari, jgheaburi, parazapezi si interventii de urgenta. Materialele provin de la producatori certificati, cu garantie extinsa pe toate lucrarile.",
    ],
    highlights: [
      "Prezenti in Targu Jiu, Motru, Rovinari",
      "Experienta cu case traditionale gorjenesti",
      "Solutii pentru zone montane",
      "Vecinatate cu zona Hunedoara",
    ],
  },
  timis: {
    name: "Timis",
    description: [
      "Reparatii Pro este activ in judetul Timis, cu servicii de acoperisuri in Timisoara, Lugoj, Sannicolau Mare, Jimbolia si in toate localitatile din judet. Timisul, cu Timisoara ca centru economic puternic, ofera oportunitati pentru proiecte rezidentiale si industriale.",
      "Echipa noastra are experienta in proiecte diverse -- de la case individuale in cartierele rezidentiale ale Timisoarei, pana la hale industriale si spatii comerciale in zona metropolitana. Cunoastem specificul constructiilor din Banat si oferim solutii adaptate.",
      "Pentru zona de campie a Timisului, ne concentram pe solutii cu eficienta termica ridicata si invelitori durabile. Oferim deplasare, evaluare gratuita si preturi competitive in intregul judet, cu garantie completa pe toate lucrarile.",
    ],
    highlights: [
      "Prezenti in Timisoara, Lugoj, Sannicolau Mare",
      "Experienta cu proiecte rezidentiale si industriale",
      "Solutii pentru zona de campie a Banatului",
      "Materiale premium cu garantie extinsa",
    ],
  },
  arad: {
    name: "Arad",
    description: [
      "Reparatii Pro ofera servicii complete de acoperisuri in judetul Arad, cu echipe care lucreaza in Arad, Lipova, Ineu, Pancota, Sebis si in localitatile din judet. Apropierea de zona Hunedoara prin Deva ne permite sa oferim deplasare rapida si preturi accesibile.",
      "In zona Arad am realizat proiecte variate -- de la acoperisuri pentru casele din cartierele Aradului si din comunele apropiate, pana la spatii agricole si comerciale. Cunoastem specificul constructiilor din zona si oferim solutii personalizate.",
      "Pentru zona deluroasa din estul judetului (Muntii Codru-Moma, Zarand) folosim sarpante dimensionate pentru sarcini mari de zapada si invelitori durabile. In zona de campie ne concentram pe eficienta termica si rezistenta la intemperii.",
    ],
    highlights: [
      "Prezenti in Arad, Lipova, Ineu, Pancota",
      "Experienta cu constructii diverse",
      "Solutii pentru zona deluroasa si campie",
      "Deplasare rapida din Hunedoara",
    ],
  },
  cluj: {
    name: "Cluj",
    description: [
      "Reparatii Pro este prezent in judetul Cluj cu servicii profesionale de montaj si reparatii acoperisuri in Cluj-Napoca, Turda, Dej, Gherla, Campia Turzii si in toate localitatile din judet. Cluj-Napoca este un centru economic puternic, cu o piata imobiliara dinamica.",
      "Echipa noastra are experienta cu proiecte rezidentiale moderne din ansamblurile noi din Cluj, dar si cu acoperisuri pentru cladiri istorice din centrul orasului. Lucram cu invelitori diverse -- tigla ceramica, tigla metalica, tabla faltuita -- adaptate fiecarui tip de constructie.",
      "Conditiile climatice din zona Cluj, cu ierni reci si precipitatii moderate, impun acoperisuri bine izolate termic. Oferim solutii complete -- sarpanta, invelitoare, izolatie, jgheaburi si parazapezi -- cu garantie pe toate lucrarile.",
    ],
    highlights: [
      "Prezenti in Cluj-Napoca, Turda, Dej",
      "Experienta cu proiecte moderne si istorice",
      "Solutii izolate termic pentru ierni reci",
      "Sisteme complete de acoperis",
    ],
  },
  bihor: {
    name: "Bihor",
    description: [
      "In judetul Bihor, Reparatii Pro ofera servicii de acoperisuri in Oradea, Beius, Salonta, Marghita, Alesd si in localitatile din judet. Oradea, cu centrul istoric in stil Art Nouveau, necesita lucrari executate cu atentie la detalii arhitecturale.",
      "Echipa noastra are experienta cu acoperisuri pentru cladirile istorice din Oradea, dar si pentru constructiile moderne din ansamblurile rezidentiale. Folosim invelitori adaptate fiecarui tip de proiect, de la tigla ceramica clasica pana la solutii metalice moderne.",
      "Pentru zona montana din Apuseni (Padurea Craiului, Codru-Moma) si zona termala (Felix, 1 Mai), folosim sarpante robuste si invelitori cu rezistenta crescuta la umiditate. Oferim deplasare, evaluare gratuita si garantie extinsa pe toate lucrarile.",
    ],
    highlights: [
      "Prezenti in Oradea, Beius, Salonta, Marghita",
      "Experienta cu cladiri istorice (Art Nouveau)",
      "Solutii pentru Apuseni si zona termala",
      "Materiale premium cu garantie extinsa",
    ],
  },
  mehedinti: {
    name: "Mehedinti",
    description: [
      "Reparatii Pro ofera servicii complete de montaj si reparatii acoperisuri in judetul Mehedinti, cu echipe care lucreaza in Drobeta-Turnu Severin, Strehaia, Orsova, Vanju Mare si in localitatile din judet. Apropierea de Hunedoara prin zona Gorj ne permite deplasari rapide si preturi competitive.",
      "Specificul Mehediniului, cu zona Dunarii si Portile de Fier, impune solutii adaptate la umiditate ridicata si vanturi puternice. Folosim materiale cu rezistenta crescuta la coroziune si sisteme pluviale dimensionate pentru precipitatii abundente.",
      "Echipa noastra are experienta cu proiecte diverse -- de la case in Drobeta si Severin, pana la pensiuni in zona Cazanele Dunarii si constructii in zona montana Mehedinti. Oferim consultanta gratuita si garantie extinsa pe toate lucrarile.",
    ],
    highlights: [
      "Prezenti in Drobeta-Turnu Severin, Strehaia, Orsova",
      "Experienta cu zona Dunarii si Portile de Fier",
      "Solutii pentru umiditate si coroziune",
      "Deplasare rapida din Hunedoara",
    ],
  },
  bucuresti: {
    name: "Bucuresti",
    description: [
      "Reparatii Pro ofera servicii complete de montaj si reparatii acoperisuri in Bucuresti si in toate sectoarele capitalei. Echipele noastre au realizat numeroase proiecte in zona metropolitana, de la case individuale in cartierele rezidentiale pana la cladiri comerciale si industriale.",
      "Bucurestiul este o zona importanta pentru noi, cu echipe mobile care pot interveni rapid in orice sector al capitalei pentru montaj acoperisuri noi, reparatii sau interventii de urgenta. Lucram cu materiale premium de la Bilka, Lindab, Wetterbest si Bramac.",
      "Cunoastem bine specificul constructiilor din Bucuresti -- de la cladirile vechi din centrul istoric care necesita interventii delicate, pana la noile ansambluri rezidentiale care beneficiaza de solutii moderne de acoperis. Oferim consultanta personalizata si solutii adaptate fiecarui tip de constructie.",
    ],
    highlights: [
      "Acoperire in toate cele 6 sectoare",
      "Interventii rapide in orice sector",
      "Experienta cu toate tipurile de cladiri",
      "Materiale premium cu garantie extinsa",
    ],
  },
  ilfov: {
    name: "Ilfov",
    description: [
      "Judetul Ilfov, aflat in imediata apropiere a capitalei, este una dintre zonele cu cea mai intensa activitate de constructii din Romania. Reparatii Pro este prezent activ in toate comunele si orasele din judetul Ilfov, oferind servicii complete de acoperisuri pentru locuintele noi si existente.",
      "In zona Ilfov am realizat numeroase proiecte de constructie acoperisuri noi pentru casele din ansamblurile rezidentiale in plina dezvoltare -- Bragadiru, Chiajna, Popesti-Leordeni, Voluntari, Otopeni si multe alte localitati. De asemenea, oferim servicii de reparatii si renovari pentru acoperisurile existente.",
      "Proximitatea fata de Bucuresti ne permite sa oferim timp de raspuns rapid si preturi competitive, fara costuri suplimentare de deplasare pentru majoritatea localitatilor din judetul Ilfov.",
    ],
    highlights: [
      "Prezenti in toate localitatile din Ilfov",
      "Experienta cu ansambluri rezidentiale noi",
      "Fara costuri suplimentare de deplasare",
      "Proiecte in Voluntari, Bragadiru, Popesti",
    ],
  },
};

const allServices = [
  { slug: "constructie-acoperisuri-noi", title: "Constructie Acoperisuri Noi" },
  { slug: "invelitori-pentru-acoperisuri", title: "Invelitori pentru Acoperisuri" },
  { slug: "reparatii-acoperisuri", title: "Reparatii Acoperisuri" },
  { slug: "renovari-si-modernizari", title: "Renovari si Modernizari" },
  { slug: "mansardari-si-extinderi", title: "Mansardari si Extinderi" },
  { slug: "interventii-de-urgenta", title: "Interventii de Urgenta" },
  { slug: "curatare-si-intretinere", title: "Curatare si Intretinere" },
  { slug: "finisaje-fatade-exterioare", title: "Finisaje Fatade Exterioare" },
];

export async function generateStaticParams() {
  return Object.keys(countiesData).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const county = countiesData[slug];
  if (!county) return { title: "Judet Negasit - Reparatii Pro" };
  return {
    title: `Montaj si Reparatii Acoperisuri in ${county.name} - Reparatii Pro`,
    description: `Servicii profesionale de montaj, reparatii si intretinere acoperisuri in judetul ${county.name}. Echipe mobile, materiale premium, garantie completa.`,
  };
}

export default async function CountyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const county = countiesData[slug];
  if (!county) notFound();

  return (
    <>
      <PageHero
        title={`Montaj si Reparatii Acoperisuri in ${county.name}`}
        subtitle={`Servicii profesionale de acoperisuri in judetul ${county.name}. Echipe mobile, materiale premium, garantie completa.`}
        image="/images/hero.webp"
        breadcrumbs={[{ label: "Judete" }, { label: county.name }]}
      />

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              {/* Description */}
              <div className="mb-12">
                {county.description.map((p, i) => (
                  <p key={i} className="text-gray-600 leading-relaxed mb-6 text-lg">{p}</p>
                ))}
              </div>

              {/* Highlights */}
              <div className="bg-accent/5 rounded-2xl p-8 mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <MapPin size={24} className="text-accent" />
                  De ce Reparatii Pro in {county.name}?
                </h2>
                <ul className="space-y-3">
                  {county.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-3">
                      <CheckCircle2 size={20} className="text-accent shrink-0 mt-0.5" />
                      <span className="text-gray-700">{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Services available */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Servicii Disponibile in {county.name}</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {allServices.map((s) => (
                    <Link
                      key={s.slug}
                      href={`/servicii/${s.slug}`}
                      className="flex items-center gap-3 bg-gray-50 rounded-xl p-4 hover:bg-accent/5 hover:border-accent/20 border border-gray-100 transition-colors group"
                    >
                      <ArrowRight size={16} className="text-accent" />
                      <span className="text-gray-700 group-hover:text-accent transition-colors font-medium text-sm">{s.title}</span>
                    </Link>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="bg-gradient-to-r from-primary to-accent rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-3">Solicita o Oferta in {county.name}</h3>
                <p className="text-white/80 mb-6">
                  Contacteaza-ne pentru o consultatie gratuita si o oferta personalizata pentru proiectul tau din {county.name}.
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
                  <h3 className="font-bold text-lg text-gray-900 mb-4">Alte Judete</h3>
                  <ul className="space-y-2">
                    {Object.entries(countiesData)
                      .filter(([s]) => s !== slug)
                      .map(([s, data]) => (
                        <li key={s}>
                          <Link
                            href={`/judete/${s}`}
                            className="flex items-center gap-2 text-sm text-gray-600 hover:text-accent transition-colors py-1.5"
                          >
                            <MapPin size={14} />
                            {data.name}
                          </Link>
                        </li>
                      ))}
                  </ul>
                </div>

                <div className="bg-[#051D3E] rounded-2xl p-6 text-white">
                  <h3 className="font-bold text-lg mb-3">Contact Rapid</h3>
                  <p className="text-gray-400 text-sm mb-4">
                    Echipa noastra iti sta la dispozitie pentru proiecte in {county.name}.
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
    </>
  );
}
