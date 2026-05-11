const fs = require('fs');
const path = require('path');

const fixes = [
  {
    file: 'src/app/page.tsx',
    title: 'Montaj Acoperisuri Hunedoara | Acoperisuri Pro',
    desc:  'Firma cu 15+ ani in montaj si reparatii acoperisuri. Tigla metalica, ceramica, tabla faltuita. Hunedoara si judete invecinate. Evaluare gratuita. 0754 456 844.',
  },
  {
    file: 'src/app/servicii/page.tsx',
    title: 'Servicii Acoperisuri - Montaj, Reparatii, Renovari',
    desc:  'Constructie, reparatii si renovari acoperisuri. Tigla metalica, ceramica, tabla faltuita. Hunedoara si judete invecinate. Oferta gratuita, garantie scrisa.',
    canonical: 'https://reparatiipro.ro/servicii',
  },
  {
    file: 'src/app/blog/page.tsx',
    desc: 'Articole despre montaj acoperisuri, reparatii si alegerea materialelor. Sfaturi de intretinere si interventii urgenta de la expertii Acoperisuri Pro.',
    canonical: 'https://reparatiipro.ro/blog',
  },
  {
    file: 'src/app/despre-noi/page.tsx',
    desc: 'Firma cu 15+ ani experienta in montaj acoperisuri, reparatii si renovari. Echipa specializata, materiale Bilka, Lindab, Wetterbest. Garantie pe toate lucrarile.',
    canonical: 'https://reparatiipro.ro/despre-noi',
  },
  {
    file: 'src/app/portofoliu/page.tsx',
    desc: 'Galerie foto lucrari finalizate: tigla metalica, ceramica, tabla faltuita, reparatii si renovari. Proiecte in Hunedoara, Alba, Sibiu, Cluj, Timis si alte judete.',
    canonical: 'https://reparatiipro.ro/portofoliu',
  },
  {
    file: 'src/app/termeni-si-conditii/page.tsx',
    desc: 'Termenii si conditiile de utilizare a serviciilor si site-ului Acoperisuri Pro. Informatii despre drepturi, obligatii si raspundere contractuala.',
    canonical: 'https://reparatiipro.ro/termeni-si-conditii',
  },
  {
    file: 'src/app/politica-de-confidentialitate/page.tsx',
    desc: 'Politica de confidentialitate Acoperisuri Pro. Cum colectam, utilizam si protejam datele personale ale utilizatorilor conform GDPR si legislatiei romane.',
    canonical: 'https://reparatiipro.ro/politica-de-confidentialitate',
  },
  {
    file: 'src/app/politica-de-cookies/page.tsx',
    desc: 'Politica de cookies Acoperisuri Pro. Informatii despre tipurile de cookie-uri utilizate, scopul lor si cum poti gestiona preferintele tale de confidentialitate.',
    canonical: 'https://reparatiipro.ro/politica-de-cookies',
  },
  {
    file: 'src/app/judete/alba/page.tsx',
    desc: 'Constructie si reparatii acoperisuri in judetul Alba — Alba Iulia, Sebes, Blaj, Aiud. Tigla metalica, ceramica, tabla faltuita. Evaluare gratuita, garantie scrisa.',
  },
  {
    file: 'src/app/judete/arad/page.tsx',
    desc: 'Servicii acoperisuri in judetul Arad — Arad, Lipova, Curtici, Ineu. Montaj tigla metalica si ceramica, reparatii, renovari. Evaluare gratuita, garantie pe lucrare.',
  },
  {
    file: 'src/app/judete/bihor/page.tsx',
    desc: 'Acoperisuri profesionale in judetul Bihor — Oradea, Beius, Salonta, Marghita. Constructie, reparatii, renovari si mansardari. Deplasare gratuita, garantie scrisa.',
  },
  {
    file: 'src/app/judete/bucuresti/page.tsx',
    desc: 'Constructie si reparatii acoperisuri in Bucuresti — toate sectoarele. Tigla metalica, ceramica, tabla faltuita, interventii urgenta 24/7. Evaluare gratuita.',
  },
  {
    file: 'src/app/judete/gorj/page.tsx',
    desc: 'Montaj si reparatii acoperisuri in judetul Gorj — Targu Jiu, Motru, Rovinari, Novaci. Tigla metalica, ceramica, tabla faltuita. Garantie scrisa pe toate lucrarile.',
  },
  {
    file: 'src/app/judete/ilfov/page.tsx',
    desc: 'Servicii acoperisuri in judetul Ilfov — Voluntari, Buftea, Otopeni, Pantelimon. Constructie, reparatii, renovari complete. Garantie scrisa, deplasare gratuita.',
  },
  {
    file: 'src/app/judete/mehedinti/page.tsx',
    desc: 'Acoperisuri in judetul Mehedinti — Drobeta-Turnu Severin, Orsova, Strehaia. Constructie, reparatii urgenta, renovari complete. Deplasare gratuita in tot judetul.',
  },
  {
    file: 'src/app/judete/sibiu/page.tsx',
    desc: 'Acoperisuri profesionale in judetul Sibiu — Sibiu, Medias, Cisnadie, Avrig. Constructie, reparatii, renovari. Materiale Bilka, Lindab. Garantie scrisa.',
  },
  {
    file: 'src/app/judete/timis/page.tsx',
    desc: 'Firma specializata in acoperisuri in judetul Timis — Timisoara, Lugoj, Buzias, Jimbolia. Constructie, reparatii, interventii urgenta 24/7. Garantie scrisa.',
  },
  {
    file: 'src/app/judete/valcea/page.tsx',
    desc: 'Servicii complete acoperisuri in judetul Valcea — Ramnicu Valcea, Dragasani, Horezu. Constructie acoperis, reparatii, renovari. Evaluare gratuita la fata locului.',
  },
  {
    file: 'src/app/servicii/constructie-acoperisuri-noi/page.tsx',
    desc: 'Constructie acoperisuri noi pentru case, vile si hale. Sarpanta lemn sau metal, toate tipurile de invelitori. Evaluare gratuita, garantie completa. Activi in 12 judete.',
  },
  {
    file: 'src/app/servicii/invelitori-pentru-acoperisuri/page.tsx',
    desc: 'Montaj profesional tigla ceramica, tigla metalica, tabla faltuita, sindrila bituminoasa. Branduri Bilka, Lindab, Bramac, Tondach. Garantie completa, evaluare gratuita.',
  },
  {
    file: 'src/app/servicii/mansardari-si-extinderi/page.tsx',
    desc: 'Transformam podul in spatiu locuibil — mansardari cu izolatie, ferestre Velux, finisaje complete. Extinderi acoperis pentru spatiu suplimentar. Garantie scrisa.',
  },
];

let totalChanged = 0;

fixes.forEach(({ file, title, desc, canonical }) => {
  if (!fs.existsSync(file)) { console.log('SKIP (not found):', file); return; }
  let c = fs.readFileSync(file, 'utf8');
  let orig = c;

  if (title) {
    c = c.replace(/(title\s*:\s*)["'`]([^"'`\n]+)["'`]/, (m, pre) => pre + '"' + title + '"');
  }

  if (desc) {
    // multi-line description: description:\n    "...",
    const multiLine = /(description\s*:\s*)\n(\s*)["'`]([^"'`]+)["'`]/;
    if (multiLine.test(c)) {
      c = c.replace(multiLine, (m, pre, indent) => pre + '\n' + indent + '"' + desc + '"');
    } else {
      // single-line
      c = c.replace(/(description\s*:\s*)["'`]([^"'`\n]+)["'`]/, (m, pre) => pre + '"' + desc + '"');
    }
  }

  if (canonical) {
    if (c.includes('alternates:')) {
      c = c.replace(/canonical\s*:\s*["']([^"']+)["']/, 'canonical: "' + canonical + '"');
    } else {
      // insert after description line - find description end
      c = c.replace(
        /(description\s*:\s*(?:\n\s*)?["'][^"'\n]+["']\s*,)/,
        '$1\n  alternates: { canonical: "' + canonical + '" },'
      );
    }
  }

  if (c !== orig) {
    fs.writeFileSync(file, c);
    totalChanged++;
    console.log('Fixed:', file.replace(/.*src[\/\\]/,''));
  } else {
    console.log('NO CHANGE (check regex):', file.replace(/.*src[\/\\]/,''));
  }
});

// Fix double commas globally
function getAllSrc(dir) {
  let r = [];
  fs.readdirSync(dir).forEach(f => {
    const p = path.join(dir, f);
    if (fs.statSync(p).isDirectory()) r = r.concat(getAllSrc(p));
    else if (f.endsWith('.tsx') || f.endsWith('.ts')) r.push(p);
  });
  return r;
}

let doubleFixed = 0;
getAllSrc('src').forEach(f => {
  const c = fs.readFileSync(f, 'utf8');
  if (c.includes(',,')) {
    fs.writeFileSync(f, c.replace(/,,/g, ','));
    doubleFixed++;
    console.log('Fixed double-comma:', f.replace(/.*src[\/\\]/,''));
  }
});

console.log('\nMetadata fixes: ' + totalChanged + ' | Double-comma fixes: ' + doubleFixed);
