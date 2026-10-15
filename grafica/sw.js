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

const CACHE_NAME = 'marco-dadamo-v1'; // Incrementa la versione (es. v2, v3) quando pubblichi modifiche

// Installazione del Service Worker
self.addEventListener('install', (event) => {
    self.skipWaiting(); // Forza l'attivazione immediata del nuovo Service Worker
});

// Attivazione e pulizia vecchie cache
self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cache) => {
                    if (cache !== CACHE_NAME) {
                        return caches.delete(cache);
                    }
                })
            );
        })
    );
    self.clients.claim();
});

// Ascolta il comando per saltare l'attesa inviato dalla pagina
self.addEventListener('message', (event) => {
    if (event.data && event.data.type === 'SKIP_WAITING') {
        self.skipWaiting();
    }
});
