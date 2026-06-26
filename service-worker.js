/* eslint-disable no-restricted-globals */
/**
 * Elanaz'ın Ders Dünyası — PWA service worker
 * Soru verileri JS bundle içinde paketlenir; tüm statik varlıklar önbelleğe alınır.
 */

const CACHE_VERSION = 'elanaz-712871342502';
const SHELL_PRECACHE = [
  "/",
  "/index.html",
  "/manifest.json",
  "/metadata.json",
  "/_expo/static/js/web/index-3bace6afdf5084c13a522af4ccdb051a.js",
  "/icons/icon-192.jpg",
  "/icons/icon-512.jpg",
  "/icons/apple-touch-icon.jpg"
];

const CACHEABLE_EXTENSIONS = /\.(js|css|json|html|ico|jpg|jpeg|png|gif|webp|svg|woff2?|ttf|eot|mp3|mp4|wav|ogg)$/i;

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
  if (path === '/service-worker.js') return false;
  return CACHEABLE_EXTENSIONS.test(path) || path === '/' || path.endsWith('/');
}

self.addEventListener('fetch', (event) => {
  const { request } = event;
  if (request.method !== 'GET' || !isSameOrigin(request)) return;

  const url = new URL(request.url);

  if (request.mode === 'navigate' || url.pathname === '/' || url.pathname.endsWith('.html')) {
    event.respondWith(
      caches.match('/index.html').then(
        (cached) =>
          cached ||
          fetch(request)
            .then((response) => {
              if (shouldCache(request, response)) {
                const clone = response.clone();
                caches.open(CACHE_VERSION).then((cache) => cache.put('/index.html', clone));
              }
              return response;
            })
            .catch(() => caches.match('/index.html')),
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
