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


/* ===========================================================
 * docsify sw.js
 * ===========================================================
 * Copyright 2016 @huxpro
 * Licensed under Apache 2.0
 * Register service worker.
 * ========================================================== */

const RUNTIME = 'docsify'
const HOSTNAME_WHITELIST = [
  self.location.hostname,
  'fonts.gstatic.com',
  'fonts.googleapis.com',
  'cdn.jsdelivr.net',
  'cdnjs.cloudflare.com',
  'dmj.one',
  'fonts.googleapis.com',
  'picsum.photos'
]

// The Util Function to hack URLs of intercepted requests
const getFixedUrl = (req) => {
  var now = Date.now()
  var url = new URL(req.url)

  // 1. fixed http URL
  // Just keep syncing with location.protocol
  // fetch(httpURL) belongs to active mixed content.
  // And fetch(httpRequest) is not supported yet.
  url.protocol = self.location.protocol

  // 2. add query for caching-busting.
  // Github Pages served with Cache-Control: max-age=600
  // max-age on mutable content is error-prone, with SW life of bugs can even extend.
  // Until cache mode of Fetch API landed, we have to workaround cache-busting with query string.
  // Cache-Control-Bug: https://bugs.chromium.org/p/chromium/issues/detail?id=453190
  if (url.hostname === self.location.hostname) {
    url.search += (url.search ? '&' : '?') + 'cache-bust=' + now
  }
  return url.href
}

/**
 *  @Lifecycle Activate
 *  New one activated when old isnt being used.
 *
 *  waitUntil(): activating ====> activated
 */
self.addEventListener('activate', event => {
  event.waitUntil(self.clients.claim())
})

/**
 *  @Functional Fetch
 *  All network requests are being intercepted here.
 *
 *  void respondWith(Promise<Response> r)
 */

self.addEventListener('fetch', event => {
  // Skip some of cross-origin requests, like those for Google Analytics.
  if (HOSTNAME_WHITELIST.indexOf(new URL(event.request.url).hostname) > -1) {
    // Check if internet is connected
    if (navigator.onLine) {
      // Check if cache is older than 24 hours
      const cacheAge = caches.match(event.request)
        .then(response => {
          if (response) {
            const age = Date.now() - response.headers.get('date');
            return age;
          }
        });
      if (cacheAge > 86400000) {
        // Invalidate cache and refresh from internet
        caches.delete(event.request);
        const fixedUrl = getFixedUrl(event.request);
        const fetched = fetch(fixedUrl, { cache: 'no-store' });
        event.respondWith(fetched);
        return;
      }
    }
    // Stale-while-revalidate
    const cached = caches.match(event.request);
    event.respondWith(cached);
  }
});
