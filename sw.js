// Service worker de Peace Room: funciona sin conexión después de la primera visita.
// Al cambiar archivos, sube el número de versión para forzar la actualización.
const V = "peace-room-v5";
const CORE = ["./", "index.html", "manifest.json", "icon.svg", "icon-192.png", "icon-512.png", "icon-180.png", "icon-maskable-512.png"];
const THREE = "https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js";

self.addEventListener("install", e => {
  e.waitUntil(
    caches.open(V)
      .then(c => Promise.all([c.addAll(CORE), c.add(new Request(THREE, { mode: "cors" })).catch(() => {})]))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== V).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

// Responde desde la caché al instante y la actualiza en segundo plano.
self.addEventListener("fetch", e => {
  if (e.request.method !== "GET") return;
  const u = new URL(e.request.url);
  if (u.origin !== location.origin && u.href !== THREE) return;
  e.respondWith(
    caches.match(e.request).then(hit => {
      const net = fetch(e.request).then(res => {
        if (res.ok) { const cp = res.clone(); caches.open(V).then(c => c.put(e.request, cp)); }
        return res;
      }).catch(() => hit);
      return hit || net;
    })
  );
});
