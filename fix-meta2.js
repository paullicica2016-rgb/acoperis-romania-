const fs = require('fs');

const fixes = [
  {
    file: 'src/app/judete/alba/page.tsx',
    desc: 'Constructie si reparatii acoperisuri in Alba — Alba Iulia, Sebes, Blaj, Aiud. Tigla metalica, ceramica, tabla faltuita. Evaluare gratuita, garantie scrisa.',
  },
  {
    file: 'src/app/judete/arad/page.tsx',
    desc: 'Servicii acoperisuri in judetul Arad — Arad, Lipova, Curtici, Ineu. Tigla metalica, ceramica, reparatii, renovari. Evaluare gratuita, garantie pe lucrare.',
  },
  {
    file: 'src/app/judete/bihor/page.tsx',
    desc: 'Acoperisuri in judetul Bihor — Oradea, Beius, Salonta, Marghita. Constructie, reparatii, renovari, mansardari. Deplasare gratuita, garantie scrisa.',
  },
  {
    file: 'src/app/judete/gorj/page.tsx',
    desc: 'Montaj si reparatii acoperisuri in judetul Gorj — Targu Jiu, Motru, Rovinari, Novaci. Tigla metalica, ceramica, tabla faltuita. Garantie scrisa.',
  },
  {
    file: 'src/app/judete/mehedinti/page.tsx',
    desc: 'Acoperisuri in judetul Mehedinti — Drobeta-Turnu Severin, Orsova, Strehaia. Constructie, reparatii urgenta, renovari complete. Deplasare gratuita.',
  },
  {
    file: 'src/app/judete/valcea/page.tsx',
    desc: 'Servicii acoperisuri in judetul Valcea — Ramnicu Valcea, Dragasani, Horezu. Constructie, reparatii, renovari. Evaluare gratuita la fata locului.',
  },
  {
    file: 'src/app/portofoliu/page.tsx',
    desc: 'Galerie foto lucrari finalizate: tigla metalica, ceramica, tabla faltuita, reparatii si renovari. Proiecte in Hunedoara, Alba, Sibiu, Cluj si Timis.',
  },
  {
    file: 'src/app/servicii/constructie-acoperisuri-noi/page.tsx',
    desc: 'Constructie acoperisuri noi pentru case, vile si hale. Sarpanta lemn sau metal, toate tipurile de invelitori. Evaluare gratuita si garantie completa.',
  },
  {
    file: 'src/app/servicii/invelitori-pentru-acoperisuri/page.tsx',
    desc: 'Montaj tigla ceramica, metalica, tabla faltuita, sindrila bituminoasa. Branduri Bilka, Lindab, Bramac, Tondach. Garantie completa, evaluare gratuita.',
  },
];

// layout.tsx has multi-line description — handle separately
const layoutFile = 'src/app/layout.tsx';
const newLayoutDesc = 'Montaj acoperisuri, reparatii, tigla metalica, ceramica, tabla faltuita. Firma cu 15+ ani in Hunedoara si judete invecinate. Garantie lucrari. 0754 456 844.';

fixes.forEach(({ file, desc }) => {
  let c = fs.readFileSync(file, 'utf8');
  const orig = c;
  // Replace existing description value (single-line pattern)
  c = c.replace(/(description\s*:\s*)["'`]([^"'`\n]+)["'`]/, (m, pre) => pre + '"' + desc + '"');
  if (c !== orig) {
    fs.writeFileSync(file, c);
    console.log('Fixed (' + desc.length + ' chars):', file.replace(/.*src[\/\\]app[\/\\]/, ''));
  } else {
    console.log('NO CHANGE:', file.replace(/.*src[\/\\]app[\/\\]/, ''));
  }
});

// Fix layout.tsx multi-line description
let lc = fs.readFileSync(layoutFile, 'utf8');
const lorig = lc;
lc = lc.replace(
  /(description\s*:\s*)\n(\s*)["'`]([^"'`]+)["'`]/,
  (m, pre, indent) => pre + '\n' + indent + '"' + newLayoutDesc + '"'
);
if (lc !== lorig) {
  fs.writeFileSync(layoutFile, lc);
  console.log('Fixed layout.tsx (' + newLayoutDesc.length + ' chars)');
} else {
  console.log('NO CHANGE: layout.tsx');
}
