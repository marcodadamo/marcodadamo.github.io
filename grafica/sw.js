const CACHE_NAME = 'marco-dadamo-v4'; // Incrementa la versione (es. v2, v3, v4) quando pubblichi modifiche
const ASSETS_TO_CACHE = [
  './',
  './temaindex.html',
  './manifest.json'
];

// Installazione del Service Worker e pre-caching
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            return cache.addAll(ASSETS_TO_CACHE);
        })
    );
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

// Gestione delle richieste di rete (Fetch)
self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            return response || fetch(event.request);
        })
    );
});

// Ascolta il comando per saltare l'attesa inviato dalla pagina
self.addEventListener('message', (event) => {
    if (event.data && event.data.type === 'SKIP_WAITING') {
        self.skipWaiting();
    }
});
