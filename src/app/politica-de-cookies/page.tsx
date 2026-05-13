import type { Metadata } from "next";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Politica de Cookies - Acoperisuri Pro",
  description: "Politica de cookies Acoperisuri Pro. Informatii despre tipurile de cookie-uri utilizate, scopul lor si cum poti gestiona preferintele tale de confidentialitate.",
  alternates: { canonical: "https://montajacoperispro.ro/politica-de-cookies" },
};

export default function PoliticaCookiesPage() {
  return (
    <>
      <PageHero
        title="Politica de Cookies"
        breadcrumbs={[{ label: "Politica de Cookies" }]}
      />

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Ce sunt Cookie-urile?</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Cookie-urile sunt fisiere text de mici dimensiuni care sunt stocate pe dispozitivul dumneavoastra (computer, telefon, tableta) atunci cand vizitati un site web. Cookie-urile permit site-ului sa va recunoasca dispozitivul si sa retina anumite informatii despre preferintele sau actiunile dumneavoastra anterioare.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Tipuri de Cookie-uri Utilizate</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Site-ul montajacoperispro.ro utilizeaza urmatoarele tipuri de cookie-uri:
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
              <li><strong>Cookie-uri esentiale:</strong> Necesare pentru functionarea corecta a site-ului. Fara acestea, site-ul nu poate functiona corect.</li>
              <li><strong>Cookie-uri de performanta:</strong> Ne ajuta sa intelegem cum este utilizat site-ul, pentru a-l imbunatati. Colecteaza informatii anonime despre paginile vizitate.</li>
              <li><strong>Cookie-uri functionale:</strong> Permit site-ului sa retina alegerile dumneavoastra (de exemplu, limba preferata) pentru a va oferi o experienta personalizata.</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Cookie-uri de la Terti</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Este posibil ca pe site-ul nostru sa fie utilizate cookie-uri de la terti, cum ar fi servicii de analiza web (Google Analytics) sau platforme de social media. Aceste cookie-uri sunt guvernate de politicile de confidentialitate ale tertilor respectivi si nu sunt controlate de Acoperisuri Pro.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Gestionarea Cookie-urilor</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Puteti controla si gestiona cookie-urile prin setarile browserului dumneavoastra. Majoritatea browserelor va permit sa refuzati cookie-urile sau sa le stergeti. Cu toate acestea, dezactivarea cookie-urilor poate afecta functionarea corecta a unor parti ale site-ului.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Consimtamantul</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Prin continuarea navigarii pe site-ul montajacoperispro.ro, va exprimati consimtamantul pentru utilizarea cookie-urilor conform prezentei politici. Aveti dreptul de a va retrage consimtamantul in orice moment prin modificarea setarilor browserului.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Modificari ale Politicii de Cookies</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Acoperisuri Pro isi rezerva dreptul de a modifica aceasta politica de cookies. Orice modificare va fi publicata pe aceasta pagina cu data actualizarii.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Contact</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Pentru intrebari suplimentare despre utilizarea cookie-urilor pe site-ul nostru, ne puteti contacta la: email office@montajacoperispro.ro, telefon 0754 456 844.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
