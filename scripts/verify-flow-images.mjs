/**
 * flowImages.generated.ts require path'lerinin dosya sisteminde var olduğunu doğrular.
 */
import { readFileSync, existsSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const generated = readFileSync(join(ROOT, 'src/assets/flowImages.generated.ts'), 'utf8');
const imports = [...generated.matchAll(/from '([^']+)'/g)];

let hata = 0;
for (const [, rel] of imports) {
  const abs = join(ROOT, rel.replace(/^\.\.\/\.\.\//, ''));
  if (!existsSync(abs)) {
    console.error(`FAIL: require path yok → ${rel}`);
    hata++;
  }
}

if (hata > 0) {
  console.error(`verify-flow-images: ${hata} hata`);
  process.exit(1);
}
console.log(`verify-flow-images: ${imports.length} require path OK`);
