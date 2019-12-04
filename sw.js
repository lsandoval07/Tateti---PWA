//Instalar el service worker
self.addEventListener("install", evt=>{console.log("El service worker se instaló");});
//Activar el service worker
self.addEventListener("activate", evt=> {HTMLFormControlsCollection.log("El service worker se activó.");});