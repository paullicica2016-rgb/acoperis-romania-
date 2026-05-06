import type { Metadata } from "next";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Termeni si Conditii - Reparatii Pro",
  description: "Termenii si conditiile de utilizare a serviciilor Reparatii Pro.",
};

export default function TermeniPage() {
  return (
    <>
      <PageHero
        title="Termeni si Conditii"
        breadcrumbs={[{ label: "Termeni si Conditii" }]}
      />

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Informatii Generale</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Prezentul document stabileste termenii si conditiile de utilizare a site-ului reparatiipro.ro si a serviciilor oferite de Reparatii Pro. Prin accesarea si utilizarea acestui site, sunteti de acord cu acesti termeni si conditii. Daca nu sunteti de acord cu vreuna dintre prevederi, va rugam sa nu utilizati site-ul.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Serviciile Oferite</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Reparatii Pro ofera servicii de constructie, montaj, reparatii, renovari, intretinere si interventii de urgenta pentru acoperisuri in Bucuresti si in judetele Ilfov, Constanta, Ialomita, Prahova, Brasov, Braila, Galati, Dambovita, Arges, Tulcea si Buzau. Detaliile specifice ale fiecarui serviciu sunt prezentate pe paginile dedicate ale site-ului.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Oferte si Preturi</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Preturile prezentate pe site au caracter informativ si pot varia in functie de specificul fiecarui proiect. Oferta finala este stabilita dupa evaluarea la fata locului si este valabila pentru o perioada specificata in documentul de oferta. Reparatii Pro isi rezerva dreptul de a modifica preturile fara notificare prealabila.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Garantia Lucrarilor</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Toate lucrarile executate de Reparatii Pro beneficiaza de garantie pe materiale si manopera, conform legislatiei in vigoare si a contractului incheiat cu clientul. Perioada de garantie variaza in functie de tipul lucrarii si materialelor utilizate. Garantia nu acopera deteriorarile cauzate de catastrofe naturale, utilizare necorespunzatoare sau modificari efectuate de terti fara acordul Reparatii Pro.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Proprietate Intelectuala</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Continutul site-ului reparatiipro.ro -- texte, imagini, grafice, logo-uri si alte materiale -- este proprietatea Reparatii Pro si este protejat de legislatia privind drepturile de autor. Reproducerea, distribuirea sau utilizarea continutului fara acordul scris al Reparatii Pro este interzisa.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Limitarea Raspunderii</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Reparatii Pro depune toate eforturile pentru a asigura acuratetea informatiilor prezentate pe site. Cu toate acestea, nu garantam ca informatiile sunt complete, actualizate sau lipsite de erori. Utilizarea informatiilor de pe site se face pe propria responsabilitate a utilizatorului.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Modificarea Termenilor</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Reparatii Pro isi rezerva dreptul de a modifica acesti termeni si conditii in orice moment, fara notificare prealabila. Versiunea actualizata va fi publicata pe aceasta pagina. Continuarea utilizarii site-ului dupa modificare constituie acceptarea noilor termeni.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Contact</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Pentru orice intrebari legate de acesti termeni si conditii, ne puteti contacta la adresa de email office@reparatiipro.ro sau la numarul de telefon 0734 704 026.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
