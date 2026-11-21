CALENDARIO DE ADVIENTO - INSTRUCCIONES SENCILLAS


PERSONALIZAR LOS SOBRES
1. Abre el archivo content.js con un editor de texto (Bloc de notas, TextEdit, etc.).
2. Busca el día que quieras editar.
3. Cambia el texto entre comillas. No borres las comillas ni la coma al final de la línea.
   Ejemplo:
   {title:"Día 1", text:"Hoy te regalo un abrazo enorme ♡"}

Puedes añadir opcionalmente:
   image:"fotos/imagen.jpg"
   video:"https://..."
   link:"https://...", linkText:"Abrir sorpresa"

Para fotos, crea una carpeta "fotos" dentro de la carpeta de la web y coloca allí las imágenes.

DESBLOQUEO
La web usa la fecha local del dispositivo. En diciembre se abre el día que corresponde y
los días anteriores; fuera de diciembre se muestran todos bloqueados (para probar puedes
cambiar temporalmente la variable currentDay dentro de app.js).


PUBLICAR GRATIS CON GITHUB PAGES
1. Crea una cuenta gratis en https://github.com si no tienes.
2. Crea un repositorio nuevo, por ejemplo "adviento".
3. Sube los archivos index.html, style.css, app.js, content.js y (si hay) la carpeta fotos.
4. En Settings > Pages, elige Deploy from a branch, selecciona main y / (root), y guarda.
5. Github te dará un enlace público. Envíale ese enlace a tu pareja.

NOTA: GitHub Pages publica el contenido como web pública; el bloqueo por fecha es una función
visual de la página, no una protección de seguridad. No incluyas información privada.
