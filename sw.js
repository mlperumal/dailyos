const CACHE_NAME='dailyos-v9';
const ASSETS=['/dailyos/','/dailyos/index.html','/dailyos/manifest.json','/dailyos/icon-192.png','/dailyos/icon-512.png'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(CACHE_NAME).then(c=>c.addAll(ASSETS)).then(()=>self.skipWaiting()))});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==CACHE_NAME).map(k=>caches.delete(k)))).then(()=>self.clients.claim()))});
self.addEventListener('fetch',e=>{const u=new URL(e.request.url);if(u.hostname==='api.github.com'){e.respondWith(fetch(e.request));return}e.respondWith(caches.match(e.request).then(cached=>{const f=fetch(e.request).then(r=>{if(r.ok){const c=r.clone();caches.open(CACHE_NAME).then(ch=>ch.put(e.request,c))}return r}).catch(()=>cached);return cached||f}))});
