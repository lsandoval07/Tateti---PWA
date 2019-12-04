const nombreCache="Sitio-Caché";
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