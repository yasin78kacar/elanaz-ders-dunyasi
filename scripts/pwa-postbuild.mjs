#!/usr/bin/env node
/**
 * Expo web export sonrası service worker'a önbellek listesi enjekte eder.
 * JS bundle tüm soru JSON'larını içerir; shell + bundle + statik varlıklar önbelleğe alınır.
 */
import { createHash } from 'node:crypto';
import { readdir, readFile, writeFile } from 'node:fs/promises';
import { join, relative } from 'node:path';

const ROOT = new URL('..', import.meta.url).pathname;
const DIST = join(ROOT, 'dist');
const SW_PATH = join(DIST, 'service-worker.js');

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await walk(full)));
    } else {
      files.push(full);
    }
  }
  return files;
}

function toUrlPath(filePath) {
  const rel = relative(DIST, filePath).split('\\').join('/');
  return `/${rel}`;
}

async function main() {
  const allFiles = await walk(DIST);
  const urls = allFiles
    .map(toUrlPath)
    .filter((url) => url !== '/service-worker.js')
    .sort();

  const jsBundles = urls.filter((u) => u.includes('/_expo/static/js/web/') && u.endsWith('.js'));
  const shellUrls = [
    '/',
    '/index.html',
    '/manifest.json',
    '/metadata.json',
    ...jsBundles,
    '/icons/icon-192.jpg',
    '/icons/icon-512.jpg',
    '/icons/apple-touch-icon.jpg',
  ].filter((url, i, arr) => arr.indexOf(url) === i);

  const hash = createHash('sha256').update(urls.join('\n')).digest('hex').slice(0, 12);
  const cacheVersion = `elanaz-${hash}`;

  let sw = await readFile(SW_PATH, 'utf8');
  sw = sw.replaceAll('@@CACHE_VERSION@@', cacheVersion);
  sw = sw.replace('@@SHELL_PRECACHE@@', JSON.stringify(shellUrls, null, 2));

  await writeFile(SW_PATH, sw, 'utf8');

  console.log(`PWA postbuild: cache=${cacheVersion}`);
  console.log(`  Shell precache: ${shellUrls.length} URL`);
  console.log(`  Toplam dist dosyası: ${urls.length}`);
  console.log(`  JS bundle (soru verisi dahil): ${jsBundles.join(', ') || '(yok)'}`);
}

main().catch((err) => {
  console.error('PWA postbuild hatası:', err);
  process.exit(1);
});
