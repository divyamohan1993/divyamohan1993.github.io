/******* Option 1: CACHE SELECTIVE URLS AUTOMATICALLY *******/

/* // Set a cache name
const CACHE_NAME = 'shoolini-cache-v1';

// Set a list of files to be cached
const urlsToCache = [
  '/',
  '/logo.png',
  '/img/manifest/logo_512.png',
  '/img/manifest/logo_192.png',
  '/img/manifest/logo_128.png',
  '/img/manifest/logo_384.png',
  '/img/manifest/screenshot.png',
  '/course/'
];

// On service worker installation
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

// On service worker activation
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

// On service worker fetch
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // If the request is in the cache, return it
        if (response) {
          return response;
        }

        // Otherwise, fetch the request and cache it
        return fetch(event.request).then((response) => {
          // Check if the response is valid
          if (!response || response.status !== 200 || response.type !== 'basic') {
            return response;
          }

          // Clone the response
          var responseToCache = response.clone();

          caches.open(CACHE_NAME)
            .then((cache) => {
              cache.put(event.request, responseToCache);
            });

          return response;
        });
      })
  );
}); */




/******* CACHE ALL URLS OF DOMAIN AUTOMATICALLY *******/
/* const CACHE_NAME = 'shoolini-cache-v2';
const DOMAIN = 'https://dmj.one';

// Helper function to cache resources
function cacheResources(urls) {
  const requests = urls.map(url => new Request(url));
  return caches.open(CACHE_NAME)
    .then(cache => {
      return cache.addAll(requests);
    });
}

self.addEventListener('install', event => {
  event.waitUntil(
    fetch(DOMAIN)
      .then(response => response.text())
      .then(data => {
        // Extract URLs from the fetched data
        const urls = data.match(/(https?:\/\/[^\s]+)/g);
        // Filter URLs that belong to the current domain
        const validUrls = urls.filter(url => url.startsWith(DOMAIN));
        // Open cache and add URLs
        return caches.open(CACHE_NAME)
          .then(cache => {
            console.log('Opened cache');
            return cacheResources(validUrls);
          });
      })
      .then(() => {
        // Fetch additional resources and cache them
        return fetch('/sw_allurls.json')
          .then(response => response.json())
          .then(data => {
            // Extract URLs from the fetched data
            const urls = data.resources;
            return cacheResources(urls);
          });
      })
      .catch(error => {
        console.log("An error occured while caching: " + error);
      })
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
      .then(() => {
        // Fetch additional resources and cache them
        return fetch('/sw_allurls.json')
          .then(response => response.json())
          .then(data => {
            // Extract URLs from the fetched data
            const urls = data.resources;
            return cacheResources(urls);
          });
      })
      .catch(error => {
        console.log("An error occured while activating: " + error);
      })
  );
});

// On service worker fetch
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // If the request is in the cache, return it
        if (response) {
          return response;
        }

        // Otherwise, fetch the request and cache it
        return fetch(event.request).then((response) => {
          // Check if the response is valid
          if (!response || response.status !== 200 || response.type !== 'basic') {
            return response;
          }

          // Clone the response
          var responseToCache = response.clone();

          caches.open(CACHE_NAME)
            .then((cache) => {
              cache.put(event.request, responseToCache);
            });

          return response;
        });
      })
  );
}); */

const CACHE_NAME = "my-site-cache-v1";

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
  );
});

self.addEventListener('fetch', function (event) {
  if (event.request.url.endsWith('.js') || event.request.url.endsWith('.css')) {
    event.respondWith(
      caches.match(event.request)
        .then(function (response) {
          if (navigator.onLine) {
            // if online and there is a match in the cache, return it
            if (response) {
              return response;
            }
            // if online and no match in the cache, fetch from server
            else {
              return fetch(event.request)
                .then(function (res) {
                  return caches.open(CACHE_NAME)
                    .then(function (cache) {
                      cache.put(event.request.url, res.clone());
                      return res;
                    })
                });
            }
          } else {
            // if offline and there is a match in the cache, return it
            if (response) {
              return response;
            }
            // if offline and no match in the cache, return a default response
            else {
              return caches.match('/offline.html');
            }
          }
        })
    );
  }
});

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheNames) {
      return Promise.all(
        cacheNames.filter(function (cacheName) {
          // Return true if you want to remove this cache,
          // but remember that caches are shared across
          // the whole origin
        }).map(function (cacheName) {
          return caches.delete(cacheName);
        })
      );
    })
  );
});
