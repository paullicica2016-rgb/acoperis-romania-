import type { MetadataRoute } from "next";

const baseUrl = "https://reparatiipro.ro";

const services = [
  "constructie-acoperisuri-noi",
  "invelitori-pentru-acoperisuri",
  "accesorii-si-sisteme-de-montaj",
  "reparatii-acoperisuri",
  "renovari-si-modernizari",
  "mansardari-si-extinderi",
  "demolari-si-reconstruiri",
  "interventii-de-urgenta",
  "curatare-si-intretinere",
  "finisaje-fatade-exterioare",
];

const counties = [
  "hunedoara", "alba", "sibiu", "valcea", "gorj", "mehedinti",
  "timis", "arad", "cluj", "bihor", "bucuresti", "ilfov",
];

const blogSlugs = [
  "ce-tip-de-tigla-rezista-la-grindina",
  "greseli-montaj-acoperis",
  "cat-costa-un-acoperis-complet-2026",
  "alegere-tigla-acoperis-ghid-complet",
  "intretinere-acoperis-calendar-anual",
  "izolatie-termica-acoperis-economii",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString();

  const staticPages = [
    { url: baseUrl, lastModified: now, changeFrequency: "weekly" as const, priority: 1.0 },
    { url: `${baseUrl}/despre-noi`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${baseUrl}/servicii`, lastModified: now, changeFrequency: "weekly" as const, priority: 0.9 },
    { url: `${baseUrl}/portofoliu`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${baseUrl}/blog`, lastModified: now, changeFrequency: "weekly" as const, priority: 0.7 },
    { url: `${baseUrl}/contact`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${baseUrl}/termeni-si-conditii`, lastModified: now, changeFrequency: "yearly" as const, priority: 0.3 },
    { url: `${baseUrl}/politica-de-confidentialitate`, lastModified: now, changeFrequency: "yearly" as const, priority: 0.3 },
  ];

  const servicePages = services.map((slug) => ({
    url: `${baseUrl}/servicii/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const countyPages = counties.map((slug) => ({
    url: `${baseUrl}/judete/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const blogPages = blogSlugs.map((slug) => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticPages, ...servicePages, ...countyPages, ...blogPages];
}
