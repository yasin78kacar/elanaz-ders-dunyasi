/* eslint-disable no-restricted-globals */
/**
 * Elanaz'ın Ders Dünyası — PWA service worker
 * Soru verileri JS bundle içinde paketlenir; tüm statik varlıklar önbelleğe alınır.
 */

const BASE_PATH = '@@BASE_PATH@@';
const CACHE_VERSION = '@@CACHE_VERSION@@';
const SHELL_PRECACHE = @@SHELL_PRECACHE@@;

const CACHEABLE_EXTENSIONS = /\.(js|css|json|html|ico|jpg|jpeg|png|gif|webp|svg|woff2?|ttf|eot|mp3|mp4|wav|ogg)$/i;

function isAppRootPath(pathname) {
  return pathname === BASE_PATH || pathname === `${BASE_PATH}/`;
}

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches
      .open(CACHE_VERSION)
      .then((cache) => cache.addAll(SHELL_PRECACHE))
      .then(() => self.skipWaiting()),
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) =>
        Promise.all(keys.filter((key) => key !== CACHE_VERSION).map((key) => caches.delete(key))),
      )
      .then(() => self.clients.claim()),
  );
});

function isSameOrigin(request) {
  try {
    return new URL(request.url).origin === self.location.origin;
  } catch {
    return false;
  }
}

function shouldCache(request, response) {
  if (!response || response.status !== 200) return false;
  if (request.method !== 'GET') return false;
  if (!isSameOrigin(request)) return false;
  const path = new URL(request.url).pathname;
  if (path === `${BASE_PATH}/service-worker.js`) return false;
  return CACHEABLE_EXTENSIONS.test(path) || isAppRootPath(path) || path.endsWith('/');
}

self.addEventListener('fetch', (event) => {
  const { request } = event;
  if (request.method !== 'GET' || !isSameOrigin(request)) return;

  const url = new URL(request.url);
  const indexHtmlUrl = `${BASE_PATH}/index.html`;

  if (request.mode === 'navigate' || isAppRootPath(url.pathname) || url.pathname.endsWith('.html')) {
    event.respondWith(
      caches.match(indexHtmlUrl).then(
        (cached) =>
          cached ||
          fetch(request)
            .then((response) => {
              if (shouldCache(request, response)) {
                const clone = response.clone();
                caches.open(CACHE_VERSION).then((cache) => cache.put(indexHtmlUrl, clone));
              }
              return response;
            })
            .catch(() => caches.match(indexHtmlUrl)),
      ),
    );
    return;
  }

  event.respondWith(
    caches.match(request).then((cached) => {
      const networkFetch = fetch(request)
        .then((response) => {
          if (shouldCache(request, response)) {
            const clone = response.clone();
            caches.open(CACHE_VERSION).then((cache) => cache.put(request, clone));
          }
          return response;
        })
        .catch(() => cached);

      return cached || networkFetch;
    }),
  );
});
