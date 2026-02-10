self.addEventListener("install", (event) => {
  console.log("✅ Service Worker: Installed");
});

self.addEventListener("activate", (event) => {
  console.log("✅ Service Worker: Activated");
});

self.addEventListener("fetch", (event) => {
  // For now, just let requests pass through
  event.respondWith(fetch(event.request));
});