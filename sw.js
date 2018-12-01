
self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('restaurant-review-v1').then(function(cache) {
      return cache.addAll([
        '/index.html',
        '/restaurant.html',
        'css/styles.css',
        'data/restaurants.json',
        'js/dbhelper.js',
        'js/main.js',
        'js/restaurant_info.js'
      ]);
    })
  );
});

// Intercept web requests
self.addEventListener('fetch', function(event) {
  console.log(event.request.url);

  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  );
});