import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ClickGuard from "@/components/ClickGuard";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://montajacoperispro.ro"),
  title: {
    default: "Montaj si Reparatii Acoperisuri | Acoperisuri Pro - Firma Acoperisuri Hunedoara",
    template: "%s | Acoperisuri Pro",
  },
  description:
    "Montaj acoperisuri, reparatii, tigla metalica, ceramica, tabla faltuita. Firma cu 15+ ani in Hunedoara si judete invecinate. Garantie lucrari. 0735 097 539.",
  keywords: [
    "montaj acoperis", "reparatii acoperis", "firma acoperisuri", "acoperis Hunedoara",
    "tigla metalica", "tigla ceramica", "tabla faltuita", "sindrila bituminoasa",
    "constructie acoperis", "renovare acoperis", "mansardare", "dulgherie acoperis",
    "jgheaburi burlane", "interventii urgenta acoperis", "reparatii acoperis Hunedoara",
    "montaj tigla metalica", "montaj tigla ceramica", "acoperis pret", "firma montaj acoperis",
    "reparatii acoperis Alba", "reparatii acoperis Sibiu", "reparatii acoperis Cluj", "reparatii acoperis Timis",
    "acoperis nou", "invelitori acoperis", "Acoperisuri Pro",
  ],
  authors: [{ name: "Acoperisuri Pro" }],
  creator: "Acoperisuri Pro",
  publisher: "Acoperisuri Pro",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "ro_RO",
    url: "https://montajacoperispro.ro",
    siteName: "Acoperisuri Pro - Montaj si Reparatii Acoperisuri",
    title: "Montaj si Reparatii Acoperisuri | Acoperisuri Pro",
    description:
      "Firma cu peste 15 ani experienta in montaj si reparatii acoperisuri. Tigla metalica, ceramica, tabla faltuita. Hunedoara si judete invecinate. Suna 0735 097 539.",
    images: [
      {
        url: "/images/hero.webp",
        width: 1200,
        height: 630,
        alt: "Acoperisuri Pro - Montaj si Reparatii Acoperisuri Profesionale",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Montaj si Reparatii Acoperisuri | Acoperisuri Pro",
    description: "Firma cu 15+ ani experienta. Montaj acoperisuri, reparatii, renovari. Hunedoara si judete invecinate.",
    images: ["/images/hero.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://montajacoperispro.ro",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ro"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        {/* Google Ads Tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=AW-17767684704" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-17767684704');
              gtag('config', 'G-6GN88FEBLJ');
              gtag('config', 'GT-T5MMHLZK');

              // Auto-track ALL phone link clicks
              document.addEventListener('click', function(e) {
                var link = e.target.closest('a[href^="tel:"]');
                if (link) {
                  gtag('event', 'conversion', {
                    'send_to': 'AW-17767684704/qlzLCKfM1JQcEOC0pZhC',
                    'value': 1.0,
                    'currency': 'RON'
                  });
                }
              });

              // Auto-track ALL form submissions
              document.addEventListener('submit', function(e) {
                gtag('event', 'conversion', {
                  'send_to': 'AW-17767684704/lsnvCKrM1JQcEOC0pZhC',
                  'value': 1.0,
                  'currency': 'RON'
                });
              });
            `,
          }}
        />

        {/* Microsoft Clarity */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(c,l,a,r,i,t,y){
                  c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                  t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                  y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "w6hkdbr4n6");
            `,
          }}
        />

        {/* Local Business JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "RoofingContractor",
              name: "Acoperisuri Pro",
              description: "Firma cu peste 15 ani experienta in montaj si reparatii acoperisuri in Hunedoara si judete invecinate. Servicii complete: constructie acoperisuri noi, invelitori, reparatii, renovari, mansardari, interventii de urgenta.",
              url: "https://montajacoperispro.ro",
              telephone: "+40735097539",
              email: "montajacoperispro@gmail.com",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Hunedoara",
                addressCountry: "RO",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 45.7489,
                longitude: 22.9026,
              },
              areaServed: [
                "Hunedoara", "Alba", "Sibiu", "Valcea", "Gorj", "Mehedinti",
                "Timis", "Arad", "Cluj", "Bihor", "Bucuresti", "Ilfov",
              ],
              openingHoursSpecification: [
                { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday"], opens: "07:00", closes: "20:00" },
                { "@type": "OpeningHoursSpecification", dayOfWeek: "Saturday", opens: "08:00", closes: "16:00" },
              ],
              priceRange: "$$",
              image: "https://montajacoperispro.ro/images/hero.webp",
              sameAs: [],
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Servicii Acoperisuri",
                itemListElement: [
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "Constructie Acoperisuri Noi" } },
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "Montaj Tigla Metalica" } },
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "Montaj Tigla Ceramica" } },
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "Reparatii Acoperisuri" } },
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "Renovari Acoperisuri" } },
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "Mansardari si Extinderi" } },
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "Interventii de Urgenta" } },
                ],
              },
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.9",
                bestRating: "5",
                worstRating: "1",
                reviewCount: "89",
                ratingCount: "127",
              },
            }),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
        <ClickGuard />
      </body>
    </html>
  );
}
