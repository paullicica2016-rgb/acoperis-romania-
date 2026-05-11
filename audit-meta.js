const fs = require('fs');
const path = require('path');

function getFiles(dir) {
  let r = [];
  fs.readdirSync(dir).forEach(f => {
    const p = path.join(dir, f);
    if (fs.statSync(p).isDirectory()) r = r.concat(getFiles(p));
    else if (f === 'page.tsx' || f === 'layout.tsx') r.push(p);
  });
  return r;
}

const pages = getFiles('src/app');
let issues = [];
let clean = 0;

pages.forEach(file => {
  const c = fs.readFileSync(file, 'utf8');
  if (!c.includes('export const metadata')) return;

  const short = file.replace(/.*app[\/\\]/, '');

  const tm = c.match(/title["']?\s*:\s*["'`]([^"'`\n]+)/);
  const dm = c.match(/description\s*:\n?\s*["'`]([^"'`]+)/s);
  const can = c.match(/canonical["']?\s*:\s*["']([^"']+)/);
  const hasDoubleComma = c.includes(',,');

  const t = tm ? tm[1].trim() : null;
  let d = dm ? dm[1].replace(/\s+/g, ' ').trim() : null;
  if (d) {
    const q = d.search(/["'`]/);
    if (q > 10) d = d.substring(0, q);
  }

  const pageIssues = [];
  if (!t) pageIssues.push('NO_TITLE');
  else if (t.length > 60) pageIssues.push('TITLE_LONG:' + t.length);

  if (!d) pageIssues.push('NO_DESC');
  else if (d.length > 160) pageIssues.push('DESC_LONG:' + d.length);
  else if (d.length < 120) pageIssues.push('DESC_SHORT:' + d.length);

  if (!can) pageIssues.push('NO_CANONICAL');
  if (hasDoubleComma) pageIssues.push('DOUBLE_COMMA');

  if (pageIssues.length) {
    issues.push({ page: short, issues: pageIssues, titleLen: t ? t.length : 0, descLen: d ? d.length : 0, title: t || 'NONE' });
  } else {
    clean++;
  }
});

console.log('\n=== FINAL METADATA AUDIT ===\n');

if (issues.length === 0) {
  console.log('✓ ALL CLEAN — ' + clean + ' pages pass. Zero issues found.');
} else {
  console.log('REMAINING ISSUES (' + issues.length + ' pages):');
  issues.forEach(i => {
    console.log('  [' + i.page + ']');
    console.log('    Issues : ' + i.issues.join(', '));
    console.log('    Title  : ' + i.title.substring(0, 60) + ' (' + i.titleLen + ' chars)');
    console.log('    DescLen: ' + i.descLen);
  });
  console.log('\nClean pages: ' + clean);
}

// Also verify no double commas remain anywhere in src
function getAllTSX(dir) {
  let r = [];
  fs.readdirSync(dir).forEach(f => {
    const p = path.join(dir, f);
    if (fs.statSync(p).isDirectory()) r = r.concat(getAllTSX(p));
    else if (f.endsWith('.tsx') || f.endsWith('.ts')) r.push(p);
  });
  return r;
}

const doubleCommaFiles = getAllTSX('src').filter(f => fs.readFileSync(f, 'utf8').includes(',,'));
console.log('\n=== DOUBLE COMMA CHECK ===');
if (doubleCommaFiles.length === 0) {
  console.log('✓ No double commas found in any source file.');
} else {
  doubleCommaFiles.forEach(f => console.log('  STILL HAS ,, : ' + f.replace(/.*src[\/\\]/, '')));
}
