//Instalar el service worker
self.addEventListener("install", evt=>{console.log("El service worker se instaló");});
//Activar el service worker
self.addEventListener("activate", evt=> {console.log("El service worker se activó.");});
//Eventos Fetch (fetch request o pedido de búsqueda).

self.addEventListener("fetch", evt=>{console.log("Se atrapó el evento: ", evt);});