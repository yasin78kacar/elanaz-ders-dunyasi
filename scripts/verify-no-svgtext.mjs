/**
 * react-native-svg SvgText kullanımı kalmadığını doğrular (viewBox metin kırpması kök nedeni).
 */
import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';

const ROOT = new URL('..', import.meta.url).pathname;

function walk(dir, acc = []) {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    const st = statSync(p);
    if (st.isDirectory()) {
      if (name === 'node_modules' || name === '.git') continue;
      walk(p, acc);
    } else if (/\.(tsx?|jsx?)$/.test(name)) {
      acc.push(p);
    }
  }
  return acc;
}

const files = walk(join(ROOT, 'src')).concat(walk(join(ROOT, 'assets')));
let hata = 0;

for (const file of files) {
  const src = readFileSync(file, 'utf8');
  if (/<SvgText[\s/>]/.test(src)) {
    console.error(`FAIL: <SvgText> JSX → ${file.replace(ROOT, '')}`);
    hata++;
  }
  const imports = [...src.matchAll(/import\s*\{([^}]+)\}\s*from\s*['"]react-native-svg['"]/g)];
  for (const m of imports) {
    const names = m[1];
    if (/\bSvgText\b/.test(names)) {
      console.error(`FAIL: SvgText import → ${file.replace(ROOT, '')}`);
      hata++;
    }
    if (/\bText\b/.test(names) && !/Text\s+as\s+\w+/.test(names)) {
      console.error(`FAIL: react-native-svg Text import → ${file.replace(ROOT, '')}`);
      hata++;
    }
  }
}

if (hata > 0) {
  console.error(`verify-no-svgtext: ${hata} hata`);
  process.exit(1);
}
console.log(`verify-no-svgtext: ${files.length} dosya tarandı, SvgText yok`);
