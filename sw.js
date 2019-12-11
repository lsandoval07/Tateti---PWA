const nombreCache="sitio-cache-v2";// era sin v2

const elementos=["https://cheloelian.github.io/TatetiPwa/","index.html","ejer6ok0711.css","ejer6ok0711.js","manifest.json","app.js"];

// Instalar el service worker
self.addEventListener("install", evt =>
{
	//console.log("El Service Worker se instalo");
	evt.waitUntil(
		caches.open(nombreCache).then((cache)=> 
		{
			console.log("Definimos el Cache Predeterminado.");
			cache.addAll(elementos);
		})
		);
});
//Activar el service worker
self.addEventListener("activate", evt =>{
	evt.waitUntil(
		caches.keys().then(Keys => {
			console.log(keys);
			return Promise.all(keys
				.filter(Key => key !== nombreCache)
				.map(key => caches.delete(key))
				)
		})
		);
});
//Eventos Fetch - fetch request o pedido de busqueda
self.addEventListener("fetch", evt =>{
	console.log("Se atrapo el Evento: ", evt);
	evt.respondWith(
		caches.match(evt.request).then(cacheRes => {
			return  cacheRes || fetch(evt.request)
		})
	);
});



