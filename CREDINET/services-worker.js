
const CACHE_NAME = 'v6';

const ASSETS_TO_CACHE = [
    
    'homeshell.html',
    'tablero_alumno.html',
    'login.html',
    'manifest.json',
    'api/static/icons/icono-credinet.jpeg"'
    
    
];


self.addEventListener('install', e => {
    console.log('[Service Worker] Instalando y precacheando activos...');
    
    e.waitUntil(
        caches
            .open(CACHE_NAME)
            .then((cache) => {
                console.log('[Service Worker] Precacheando:', ASSETS_TO_CACHE.length, 'activos.');
                return cache.addAll(ASSETS_TO_CACHE);
            })
            .then(() => {
              
                self.skipWaiting(); 
            })
    );
});