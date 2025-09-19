const VERSION = 'v1'

const CACHE_NAME = `period-tracker-${VERSION}`;

const APP_RESOURCES = [
    "/",
    "/index.html",
    "/style.css",
    "/app.js",
    "/icons/disquesea-logo.png",
    "/icons/expense.svg",
    "/icons/income.svg",
    "/js/dom.js",
    "/js/form.js",
    "/js/modal.js",
    "/js/storage.js",
    "/js/transaction.js",
    "/sw.js"
]

self.addEventListener("install", (event) => {
    event.waitUntil(
      (async () => {
        const cache = await caches.open(CACHE_NAME);
        cache.addAll(APP_STATIC_RESOURCES);
      })(),
    );
  });