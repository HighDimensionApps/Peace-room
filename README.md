# Peace Room · Om Console

Un rincón de calma para meditar con vela, estrellas y frecuencias solfeggio.
Creada por High Dimension Apps · https://ko-fi.com/highdimensionchannel

## Publicar en GitHub Pages
1. Crea un repositorio nuevo (por ejemplo `peace-room`) y sube TODOS estos archivos a la raíz.
2. En el repositorio: Settings → Pages → Source: "Deploy from a branch" → rama `main`, carpeta `/ (root)`.
3. Tu app quedará en `https://TU-USUARIO.github.io/peace-room/`.

## Archivos
- `index.html`: la app completa (Three.js se carga desde cdnjs).
- `manifest.json` + `sw.js`: permiten instalarla como app y usarla sin conexión.
- `icon.svg`: ícono vectorial. `icon-192/512/180.png` y `icon-maskable-512.png`: versiones PNG.
- `icon-maskable.svg`: ícono a sangre completa (para Android).

## Notas
- Si cambias algún archivo, sube el número de `V` en `sw.js` (por ejemplo `peace-room-v2`) para que los usuarios reciban la actualización.
- Para las pistas de audio, crea una carpeta `audio/` y agrega sus rutas a `CORE` en `sw.js` cuando las integremos.
