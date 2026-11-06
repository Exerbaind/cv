// Retire the service worker from older versions of the site.
self.addEventListener('install', () => self.skipWaiting())
self.addEventListener('activate', (event) => {
  event.waitUntil(
    (async () => {
      const names = await caches.keys()
      await Promise.all(
        names
          .filter(
            (name) =>
              name.startsWith('workbox-precache-') &&
              name.endsWith(self.registration.scope)
          )
          .map((name) => caches.delete(name))
      )
      await self.clients.claim()
      await self.registration.unregister()
    })()
  )
})
