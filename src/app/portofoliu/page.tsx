import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import { MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Portofoliu Lucrari Acoperisuri - Proiecte Finalizate",
  description: "Galerie foto cu acoperisuri finalizate: tigla metalica, tigla ceramica, tabla faltuita, reparatii, renovari. Proiecte in Bucuresti, Ilfov, Constanta, Prahova, Brasov si alte judete.",
};

const projects = [
  {
    title: "Montaj Tigla Metalica",
    location: "Bucuresti",
    type: "Tigla Metalica",
    materials: "Tigla metalica Bilka, sarpanta lemn",
    image: "/images/projects/tigla-metalica-2-new.jpeg",
  },
  {
    title: "Acoperis Tigla Metalica Complet",
    location: "Ilfov",
    type: "Constructie Noua",
    materials: "Tigla metalica, jgheaburi Lindab",
    image: "/images/dragos/poza-5.jpeg",
  },
  {
    title: "Reparatii Acoperis Rezidential",
    location: "Prahova",
    type: "Reparatii",
    materials: "Inlocuire invelitoare, izolatie",
    image: "/images/projects/acoperis-rezidential.png",
  },
  {
    title: "Montaj Jgheaburi si Burlane",
    location: "Constanta",
    type: "Accesorii",
    materials: "Jgheaburi si burlane Lindab",
    image: "/images/projects/jgheaburi.webp",
  },
  {
    title: "Tigla Ceramica Vila",
    location: "Brasov",
    type: "Tigla Ceramica",
    materials: "Tigla ceramica Tondach",
    image: "/images/projects/tigla-ceramica-vila.jpeg",
  },
  {
    title: "Renovare Acoperis Complet",
    location: "Dambovita",
    type: "Renovare",
    materials: "Sarpanta noua, tigla metalica",
    image: "/images/projects/renovare-final.jpeg",
  },
  {
    title: "Dulgherie si Sarpanta",
    location: "Galati",
    type: "Dulgherie",
    materials: "Structura lemn masiv",
    image: "/images/projects/foisor.jpeg",
  },
  {
    title: "Hidroizolatii cu Membrana Bituminoasa",
    location: "Braila",
    type: "Sindrila",
    materials: "Sindrila bituminoasa premium",
    image: "/images/projects/bituminoasa.png",
  },
];

export default function PortofoliuPage() {
  return (
    <>
      <PageHero
        title="Portofoliu Lucrari"
        subtitle="O selectie din proiectele finalizate de echipa Reparatii Pro. Fiecare lucrare reflecta dedicarea noastra pentru calitate si profesionalism."
        breadcrumbs={[{ label: "Portofoliu" }]}
      />

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, i) => (
              <div
                key={i}
                className="service-card rounded-2xl overflow-hidden border border-gray-100"
              >
                <div className="relative h-56">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="text-xs font-semibold bg-accent text-white px-3 py-1 rounded-full">
                      {project.type}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-gray-900 text-lg mb-2">{project.title}</h3>
                  <div className="flex items-center gap-1 text-sm text-gray-500 mb-3">
                    <MapPin size={14} />
                    {project.location}
                  </div>
                  <p className="text-sm text-gray-400">
                    <span className="font-medium text-gray-600">Materiale:</span> {project.materials}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Vreti un rezultat similar?
          </h2>
          <p className="text-gray-500 mb-8">
            Contactati-ne pentru o consultatie gratuita si o oferta personalizata pentru proiectul dumneavoastra.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:0754456844" className="btn-accent inline-flex items-center justify-center gap-2 text-white px-8 py-3.5 rounded-full font-semibold">
              Apeleaza: 0754 456 844
            </a>
            <Link href="/contact" className="inline-flex items-center justify-center gap-2 border-2 border-gray-200 text-gray-700 px-8 py-3.5 rounded-full font-semibold hover:border-accent hover:text-accent transition-all">
              Formular Contact
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
