import type { Metadata } from "next";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Politica de Confidentialitate - Reparatii Pro",
  description: "Politica de confidentialitate a Reparatii Pro. Informatii despre colectarea si protejarea datelor personale.",
};

export default function PoliticaConfidentialitatePage() {
  return (
    <>
      <PageHero
        title="Politica de Confidentialitate"
        breadcrumbs={[{ label: "Politica de Confidentialitate" }]}
      />

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Introducere</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Reparatii Pro respecta confidentialitatea datelor dumneavoastra personale si se angajeaza sa le protejeze in conformitate cu Regulamentul General privind Protectia Datelor (GDPR) si cu legislatia nationala in vigoare. Aceasta politica descrie modul in care colectam, utilizam si protejam informatiile dumneavoastra personale.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Datele Colectate</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Colectam urmatoarele tipuri de date personale prin intermediul formularului de contact si al comunicarilor directe: nume si prenume, numar de telefon, adresa de email, judetul sau localitatea in care se afla proprietatea, si detaliile cererii de oferta. Aceste date sunt furnizate voluntar de catre dumneavoastra si sunt necesare pentru a va oferi serviciile solicitate.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Scopul Prelucrarii</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Datele personale colectate sunt utilizate exclusiv pentru: raspunsul la solicitarile dumneavoastra de oferta, comunicarea detaliilor privind serviciile solicitate, programarea evaluarilor si a lucrarilor, si imbunatatirea serviciilor noastre. Nu folosim datele dumneavoastra in scopuri de marketing fara consimtamantul dumneavoastra explicit.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Stocarea si Protectia Datelor</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Datele dumneavoastra personale sunt stocate in siguranta si sunt protejate prin masuri tehnice si organizatorice adecvate impotriva accesului neautorizat, pierderii sau distrugerii. Pastram datele dumneavoastra doar pe perioada necesara indeplinirii scopurilor pentru care au fost colectate.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Drepturile Dumneavoastra</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              In conformitate cu GDPR, aveti dreptul de acces, rectificare, stergere, restrictionare a prelucrarii, portabilitate a datelor si opozitie. Pentru exercitarea acestor drepturi, ne puteti contacta la adresa office@reparatiipro.ro. Vom raspunde solicitarii dumneavoastra in termen de maximum 30 de zile.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Transferul Datelor catre Terti</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Nu vindem, nu inchiriem si nu transferam datele dumneavoastra personale catre terti, cu exceptia situatiilor impuse de lege sau a furnizorilor de servicii care ne asista in desfasurarea activitatii (de exemplu, furnizori de hosting), care sunt obligati contractual sa protejeze datele dumneavoastra.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Modificari ale Politicii</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Ne rezervam dreptul de a actualiza aceasta politica de confidentialitate. Orice modificare va fi publicata pe aceasta pagina. Va recomandam sa verificati periodic aceasta pagina pentru a fi la curent cu eventualele modificari.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Contact</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Pentru orice intrebari sau solicitari legate de protectia datelor personale, ne puteti contacta la: email office@reparatiipro.ro, telefon 0754 456 844.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
