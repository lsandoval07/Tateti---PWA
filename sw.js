/*const nombreCache="Sitio-Caché";
const elementos=["/","/index.html","/css/estilo.css","/js/accion.js"]
//Instalar el service worker
self.addEventListener("install", evt=>{
    //console.log("El service worker se instaló");
    evt.waitUntil(
        caches.open(nombreCache).then((cache)=>
        {console.log("Definimos el cache predeterminado.");
        cache.addAll(elementos);
    })
    );
//Activar el service worker
self.addEventListener("activate", evt=> {console.log("El service worker se activó.");});
//Eventos Fetch (fetch request o pedido de búsqueda).
self.addEventListener("fetch", evt=>{console.log("Se atrapó el evento: ", evt);});
*/

const nombreCache="sitio-cache-v2";// era sin v2
const dinamicoCache="sitio-dinamico.vl";
const elementos=["https://lsandoval07.github.io/Tateti---PWA/","index.html","css/estilo.css","js/accion.js","manifest.json","js/app.js","fallback.html"];
/*
// Función para limitar el cache
const limiteCache =  (nombre, tamaño)=> {
    caches.open(nombre).then(cache => {
        cache.keys().then(keys => {
            if(keys.lenght > tamaño){
                cache.delete(keys[0]).then(limiteCache(nombre,tamaño));
            }
        })
    })
};

// Instalar el service worker
self.addEventListener("install", evt =>
{
	console.log("El Service Worker se instalo");
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
		caches.keys().then(keys => {
			console.log(keys);
			return Promise.all(keys
				.filter(key => key !== nombreCache && key !== dinamicoCache)
				.map(key => caches.delete(key))
				)
		})
		);
});
//Eventos Fetch - fetch request o pedido de busqueda
self.addEventListener("fetch", evt =>{
	//console.log("Se atrapo el Evento: ", evt);
	evt.respondWith(
		caches.match(evt.request).then(cacheRes => {
			return  cacheRes || fetch(evt.request).then(fetchRes =>{
                return caches.open(dinamicoCache).then(cache => {
                    cache.put(evt.request.url, fetchRes.clone());
                    limiteCache(dinamicoCache, 5);
                    return fetchRes;
                })
            })
		}).catch(()=>{
            if(evt.request.url.indexOf(".html") > -1){
                return caches.match("fallback.html");
            }
        })
	);
});


const limiteCache = (nombre, tamaño) => {
	caches.open(nombre).then(cache => {
		cache.keys().then(keys => {
			if(keys.length > tamaño){
				cache.delete(keys[0]).then(limiteCache(nombre, tamaño));
			}
		})
	})
};*/
// Instalar el service worker
self.addEventListener("install", evt =>
{
	console.log("El Service Worker se instalo");
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
		caches.keys().then(keys => {
			console.log(keys);
			return Promise.all(keys
				.filter(key => key !== nombreCache && key !== dinamicoCache)
				.map(key => caches.delete(key))
				)
		})
		);
});
//Eventos Fetch - fetch request o pedido de busqueda
self.addEventListener("fetch", evt =>{
	//console.log("Se atrapo el Evento: ", evt);
	evt.respondWith(
		caches.match(evt.request).then(cacheRes => {
			return  cacheRes || fetch(evt.request).then(fetchRes => {
				return caches.open(dinamicoCache).then(cache => {
					cache.put(evt.request.url, fetchRes.clone());
					limiteCache(dinamicoCache, 5);
					return fetchRes;
				})
			})
		}).catch(() => {
			if(evt.request.url.indexOf(".html") > -1){
				return caches.match("fallback.html");
			}
		})
	);
});