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

/* const CACHE_NAME = 'shoolini-cache-v2';

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
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll([
          '/',
          '/index.html',
          '/sw.js',
          '/styles.css',
          '/app.js',
          '/favicon.ico',
        ]);
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

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
 */


/* const CACHE_NAME = "cache-v1";
const RESOURCES_JSON = "data.json";

// Listen for the install event
self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      // Fetch the resources.json file
      return fetch(RESOURCES_JSON)
        .then(response => {
          return response.json();
        })
        .then(resources => {
          // Add all URLs in resources.json to the cache
          return cache.addAll([...resources, "*.js", "*.css"]);
        });
    })
  );
});

// Listen for the activate event
self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames
          .filter(cacheName => {
            // Delete any cache that doesn't match the current cache name
            return cacheName !== CACHE_NAME;
          })
          .map(cacheName => {
            return caches.delete(cacheName);
          })
      );
    })
  );
});

// Listen for the fetch event
self.addEventListener("fetch", event => {
  event.respondWith(
    // Check if the internet is connected
    navigator.onLine
      ? // If connected, try to fetch the resource from the server
      fetch(event.request)
        .then(response => {
          // If the fetch is successful, update the cache with the new version
          let responseClone = response.clone();
          caches.open(CACHE_NAME).then(cache => {
            cache.put(event.request, responseClone);
          });
          return response;
        })
        .catch(() => {
          // If the fetch fails, return the cached version
          return caches.match(event.request);
        })
      : // If not connected, return the cached version
      caches.match(event.request)
  );
});
 */


const CACHE_NAME = "cache-v1";
const RESOURCES_JSON = "sw_allurl.json";

// Listen for the install event
self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      // Fetch the resources.json file
      return fetch(RESOURCES_JSON)
        .then(response => {
          return response.json();
        })
        .then(resources => {
          // Add all URLs in resources.json to the cache
          return cache.addAll([...resources, "*.js", "*.css"]);
        });
    })
  );
});

// Listen for the activate event
self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames
          .filter(cacheName => {
            // Delete any cache that doesn't match the current cache name
            return cacheName !== CACHE_NAME;
          })
          .map(cacheName => {
            return caches.delete(cacheName);
          })
      );
    })
  );
});

// Listen for the fetch event
self.addEventListener("fetch", event => {
  event.respondWith(
    // Check if the internet is connected
    navigator.onLine
      ? // If connected, try to fetch the resource from the server
      fetch(event.request)
        .then(response => {
          // If the fetch is successful, update the cache with the new version
          let responseClone = response.clone();
          caches.open(CACHE_NAME).then(cache => {
            cache.put(event.request, responseClone);
          });
          return response;
        })
        .catch(() => {
          // If the fetch fails, return the cached version
          return caches.match(event.request);
        })
      : // If not connected, return the cached version
      caches.match(event.request)
  );
});
