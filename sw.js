const VERSION = 'v1'

const CACHE_NAME = `period-tracker-${VERSION}`;
const BASE_PATH = '/disquesea-pwa';

const APP_RESOURCES = [
    `${BASE_PATH}/`,
    `${BASE_PATH}/index.html`,
    `${BASE_PATH}/style.css`,
    `${BASE_PATH}/app.js`,
    `${BASE_PATH}/icons/disquesea-logo.png`,
    `${BASE_PATH}/icons/expense.svg`,
    `${BASE_PATH}/icons/income.svg`,
    `${BASE_PATH}/js/dom.js`,
    `${BASE_PATH}/js/form.js`,
    `${BASE_PATH}/js/modal.js`,
    `${BASE_PATH}/js/storage.js`,
    `${BASE_PATH}/js/transaction.js`
]

self.addEventListener("install", (event) => {
    event.waitUntil(
      (async () => {
        const cache = await caches.open(CACHE_NAME);
        cache.addAll(APP_RESOURCES);
      })(),
    );
  });