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
// Set a cache name
const CACHE_NAME = 'shoolini-cache-v2';

// Set the domain of the website
const DOMAIN = 'https://dmj.one';

/* // On service worker installation
self.addEventListener('install', (event) => {
  event.waitUntil(
    // Fetch all the pages of the website
    fetch(DOMAIN)
      .then((response) => response.text())
      .then((data) => {
        // Extract all the URLs from the fetched data
        const urls = data.match(/(https?:\/\/[^\s]+)/g);
        // Open a cache and add all the URLs to it
        return caches.open(CACHE_NAME)
          .then((cache) => {
            console.log('Opened cache');
            return cache.addAll(urls);
          });
      })
  );
}); */
/* 
// On service worker installation
self.addEventListener('install', (event) => {
  event.waitUntil(
    // Fetch all the pages of the website
    fetch(DOMAIN)
      .then((response) => response.text())
      .then((data) => {
        // Extract all the URLs from the fetched data
        const urls = data.match(/(https?:\/\/[^\s]+)/g);
        const validUrls = urls.filter((url) => url.startsWith(DOMAIN));
        // Open a cache and add all the URLs to it
        return caches.open(CACHE_NAME)
          .then((cache) => {
            console.log('Opened cache');
            return cache.addAll(validUrls);
          });
      })
  );
});
 */

// On service worker installation
self.addEventListener('install', (event) => {
  event.waitUntil(
    // Fetch all the pages of the website
    fetch(DOMAIN)
      .then((response) => response.text())
      .then((data) => {
        // Extract all the URLs from the fetched data
        const urls = data.match(/(https?:\/\/[^\s]+)/g);
        const validUrls = urls.filter((url) => url.startsWith(DOMAIN));
        // Open a cache and add all the URLs to it
        return caches.open(CACHE_NAME)
          .then((cache) => {
            console.log('Opened cache');
            return cache.addAll(validUrls);
          });
      }).then(() => {
        // Fetch resources and cache them
        fetch('/sw_allurls.json')
          .then((response) => response.json())
          .then((data) => {
            // Extract URLs from the fetched data
            const urls = data.resources;
            cacheResources(urls);
          });
      })
  );
});

/* // On service worker activation
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
}); */

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
    }).then(() => {
      // Fetch resources and cache them
      fetch('/sw_allurls.json')
        .then((response) => response.json())
        .then((data) => {
          // Extract URLs from the fetched data
          const urls = data.resources;
          cacheResources(urls);
        });
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
});
