// 以下兩行參考：https://stackoverflow.com/questions/60491114/webpack-workbox-cant-find-self-wb-manifest-in-your-sw-source
import { precacheAndRoute } from 'workbox-precaching/precacheAndRoute';
precacheAndRoute(self.__WB_MANIFEST);


// if (workbox) {
//   console.log(`Yay! Workbox is loaded 🎉`)
// } else {
//   console.log(`Boo! Workbox didn't load 😬`)
// }


const STATIC_NAME = 'static-1'

self.addEventListener('install', (event) => {
    event.waitUntil(
      (async () => {
        const cache = await caches.open(STATIC_NAME)
        cache.add("./index.html");
      })()
    )
  })
  
  self.addEventListener('activate', (event) => {
    event.waitUntil(
      (async () => {
        const keys = await caches.keys()
        Promise.allSettled(keys.map(key => key !== STATIC_NAME ? caches.delete(key) : null))
      })()
    )
    clients.claim()
  })
  
  self.addEventListener('fetch', (event) => {
    event.respondWith(
      (async () => {
        const res = await caches.match(event.request)
        return res ? res : fetch(event.request)
      })()
    )
  })