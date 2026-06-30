import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Acoperisuri Pro - Cere Oferta Gratuita",
  description:
    "Contacteaza Acoperisuri Pro pentru oferta gratuita. Montaj si reparatii acoperisuri in Hunedoara si judete invecinate. Raspundem in 24h. Suna 0750 771 028.",
  alternates: {
    canonical: "https://montajacoperispro.ro/contact",
  },
  openGraph: {
    type: "website",
    locale: "ro_RO",
    url: "https://montajacoperispro.ro/contact",
    siteName: "Acoperisuri Pro",
    title: "Contact - Cere Oferta Gratuita | Acoperisuri Pro",
    description:
      "Trimite-ne un mesaj sau suna direct. Evaluare gratuita, raspuns rapid, garantie scrisa pe toate lucrarile de acoperis.",
    images: [
      {
        url: "/images/hero-dulgherie.webp",
        width: 1200,
        height: 630,
        alt: "Contact Acoperisuri Pro - Montaj si Reparatii Acoperisuri Hunedoara",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact - Cere Oferta Gratuita | Acoperisuri Pro",
    description:
      "Evaluare gratuita, raspuns rapid. Montaj si reparatii acoperisuri in Hunedoara si judete invecinate.",
    images: ["/images/hero-dulgherie.webp"],
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
