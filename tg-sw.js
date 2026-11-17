// TV Guide service worker: passes everything straight to the network.
// It exists so the guide can install as a full-screen app; it caches NOTHING,
// so the weekly issue swap always lands fresh.
self.addEventListener('install', function (e) { self.skipWaiting(); });
self.addEventListener('activate', function (e) { e.waitUntil(self.clients.claim()); });
self.addEventListener('fetch', function (e) { e.respondWith(fetch(e.request)); });
