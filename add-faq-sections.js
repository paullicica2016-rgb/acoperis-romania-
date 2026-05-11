const fs = require('fs');

// FAQ data per page
const faqPages = [
  {
    file: 'src/app/servicii/reparatii-acoperisuri/page.tsx',
    heading: 'Intrebari Frecvente despre Reparatii Acoperisuri',
    items: [
      {
        q: 'Cat dureaza o reparatie de acoperis?',
        a: 'Reparatiile simple (inlocuire tigla, remediere infiltratie localizata) dureaza 1-2 zile. Reparatiile complexe care implica portiuni mari de sarpanta sau invelitoare pot dura 3-7 zile, in functie de amploare si conditii meteo.',
      },
      {
        q: 'Lucrati si iarna?',
        a: 'Da, efectuam reparatii urgente si iarna, cu exceptia perioadelor cu temperaturi sub -5°C sau cu ninsoare activa. Pentru lucrari planificate, recomandam perioadele cu temperaturi peste 5°C pentru aderenta optima a materialelor.',
      },
      {
        q: 'Oferiti garantie pentru reparatii?',
        a: 'Da, toate lucrarile de reparatie vin cu garantie scrisa. Oferim minim 2 ani garantie pe manopera si respectam garantia producatorului pentru materialele folosite (5-10 ani pentru tigla metalica, 30+ ani pentru ceramica).',
      },
      {
        q: 'Faceti si reparatii urgente?',
        a: 'Da, avem echipe disponibile 24/7 pentru interventii de urgenta — acoperisuri avariate de furtuna, infiltratii active, tabla smulsa. Sunati 0754 456 844 si ajungem in maxim 3 ore in zona Hunedoara si judete invecinate.',
      },
      {
        q: 'Cat costa o evaluare a acoperisului?',
        a: 'Evaluarea si devizul sunt complet gratuite. Un specialist vine la fata locului, inspecteaza acoperisul si va ofera un calcul detaliat fara niciun cost si fara nicio obligatie.',
      },
    ],
  },
  {
    file: 'src/app/servicii/constructie-acoperisuri-noi/page.tsx',
    heading: 'Intrebari Frecvente despre Constructia Acoperisurilor',
    items: [
      {
        q: 'Cat dureaza montajul unui acoperis nou?',
        a: 'Pentru o casa unifamiliala standard (100-150 mp), montajul complet — sarpanta, membrana, invelitoare, accesorii — dureaza 10-20 zile lucratoare, in functie de complexitate, forma acoperisului si conditii meteo.',
      },
      {
        q: 'Lucrati si iarna?',
        a: 'Lucrarile de sarpanta pot fi executate pe tot parcursul anului. Montajul invelitorii necesita temperaturi de peste 5°C. Planificam lucrarile in avans si va comunicam transparent daca conditiile meteo pot influenta termenele.',
      },
      {
        q: 'Oferiti garantie pentru acoperisul nou?',
        a: 'Da. Oferim garantie de 10 ani pe manopera si respectam garantiile producatorilor pentru materiale: 10-15 ani pentru tigla metalica, 30-50 ani pentru tigla ceramica. Totul este documentat intr-un certificat de garantie scris.',
      },
      {
        q: 'Faceti si reparatii urgente?',
        a: 'Da, pe langa constructii noi gestionam si urgente — securizare acoperis avariat, interventii rapide post-furtuna, acoperire provizorie. Sunati 0754 456 844 pentru interventie rapida.',
      },
      {
        q: 'Ce tipuri de invelitoare montati?',
        a: 'Montam toate tipurile: tigla metalica (Bilka, Lindab, Wetterbest), tigla ceramica (Bramac, Tondach), tabla faltuita, sindrila bituminoasa si table speciale. Va recomandam solutia optima pentru panta, zona climatica si bugetul dumneavoastra.',
      },
    ],
  },
  {
    file: 'src/app/servicii/interventii-de-urgenta/page.tsx',
    heading: 'Intrebari Frecvente despre Interventiile de Urgenta',
    items: [
      {
        q: 'Cat de repede ajungeti la o urgenta?',
        a: 'In zona Hunedoara si judete invecinate ajungem in maxim 1-3 ore. Suntem disponibili 24/7, inclusiv sambata, duminica si sarbatori legale. Sunati 0754 456 844 si va confirmam ora sosirii.',
      },
      {
        q: 'Lucrati si iarna sau pe timp de furtuna?',
        a: 'Da, intervenim in orice conditii meteo pentru securizarea acoperisurilor avariate. Daca montajul definitiv nu este posibil imediat din cauza conditiilor, aplicam o solutie provizorie sigura si revin pentru lucrarea definitiva.',
      },
      {
        q: 'Oferiti garantie pentru interventiile de urgenta?',
        a: 'Da, toate interventiile vin cu garantie scrisa, inclusiv cele de urgenta. Garantia acopera atat manopera cat si materialele folosite.',
      },
      {
        q: 'Cat costa o interventie de urgenta?',
        a: 'Pretul depinde de tipul si amploarea lucrarii. Deplasarea si evaluarea la fata locului sunt gratuite. Va oferim un deviz transparent inainte de inceperea lucrarii, fara costuri ascunse.',
      },
      {
        q: 'Ce tipuri de urgente rezolvati?',
        a: 'Acoperis avariat de furtuna sau grindina, tabla smulsa de vant, tigla sparta sau dislocata, infiltratii active, cosuri de fum desprinse, jgheaburi cazute. Orice situatie care pericliteaza siguranta locuintei sau permite patrunderea apei.',
      },
    ],
  },
];

const faqSectionTemplate = (heading, items) => `
      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-[#051D3E] mb-10 text-center">${heading}</h2>
          <div className="space-y-4">
            {[
${items.map((item, i) => `              {
                q: "${item.q}",
                a: "${item.a}",
              },`).join('\n')}
            ].map((item, i) => (
              <details key={i} className="group bg-white rounded-xl border border-gray-200 overflow-hidden">
                <summary className="flex items-center justify-between gap-4 px-6 py-4 cursor-pointer font-semibold text-[#051D3E] hover:bg-gray-50 transition-colors list-none">
                  {item.q}
                  <span className="shrink-0 text-[#0d1547] text-xl transition-transform group-open:rotate-45">+</span>
                </summary>
                <div className="px-6 pb-5 text-gray-600 leading-relaxed border-t border-gray-100 pt-4">
                  {item.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>
`;

// Updated FaqSchema items per page
const faqSchemaItems = {
  'src/app/servicii/reparatii-acoperisuri/page.tsx': faqPages[0].items,
  'src/app/servicii/constructie-acoperisuri-noi/page.tsx': faqPages[1].items,
  'src/app/servicii/interventii-de-urgenta/page.tsx': faqPages[2].items,
};

faqPages.forEach(({ file, heading, items }) => {
  let c = fs.readFileSync(file, 'utf8');

  // 1. Replace existing FaqSchema with expanded version
  const schemaItems = JSON.stringify(items.map(i => ({ q: i.q, a: i.a })));
  c = c.replace(
    /<FaqSchema items=\{[^}]+\}[^/]*(\/)?>/,
    `<FaqSchema items={${schemaItems}} />`
  );

  // 2. Insert visible FAQ section before the CTA navy section
  const ctaMarker = '      {/* CTA final */}';
  const faqSection = faqSectionTemplate(heading, items);
  if (c.includes(ctaMarker)) {
    c = c.replace(ctaMarker, faqSection + '\n      {/* CTA final */}');
  } else {
    // fallback: insert before last <section className="py-20 bg-[#0d1547]"
    c = c.replace(
      /(\s+)(<section className="py-20 bg-\[#0d1547\]")/,
      '\n' + faqSection + '\n$1$2'
    );
  }

  fs.writeFileSync(file, c);
  console.log('Updated:', file.replace(/.*src[\/\\]/, ''));
});

console.log('Done.');
