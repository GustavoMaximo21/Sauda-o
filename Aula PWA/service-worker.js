self.addEventListener('install', event => {
  event.waitUntil(
    caches.open("app-saudacao-cache").then(cache => {
      return cache.addAll([
        "index.html",
        "manifest.json",
        "icone (192).png",
        "icone(512).png",
        "xicara.jpg",
        "lua.png",
        "sol.png",
        "bomdia.jpg",
        "boatarde.jpg",
        "boanoite.webp"
      ]);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});
