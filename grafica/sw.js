self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('marcodadamo-pwa-v1').then((cache) => {
      return cache.addAll(['temaindex.html']);
    })
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});
