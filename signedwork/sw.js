self.addEventListener('install', event => {
    event.waitUntil(
        caches.open('signedwork-v1').then(cache => {
            return cache.addAll([
                './',
                './index.html',
                './style.css',
                './app.js',
                './manifest.webmanifest'
            ]);
        })
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request).then(resp => resp || fetch(event.request))
    );
});