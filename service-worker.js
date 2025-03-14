const cacheName = "youtube-pwa-cache-v1";
const assets = [
  "/index.html",
  "/manifest.json",
  "/main.js",
  "/icons/icon-192.png",
  "/icons/icon-512.png"
];

// Install Service Worker and Cache Files
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(cacheName).then((cache) => {
      return cache.addAll(assets);
    })
  );
});

// Serve Cached Files When Offline
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
