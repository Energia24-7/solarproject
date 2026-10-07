# Solar Plant 1 MW – Interactive Electrical Solutions

Página web estática para presentar comercialmente los componentes eléctricos de una planta solar fotovoltaica de 1 MW.

## Estructura

```text
solar-1mw-prysmian/
├── index.html
├── README.md
├── css/
│   └── style.css
├── js/
│   └── app.js
├── data/
│   └── products.json
└── assets/
    ├── images/
    └── docs/
```

## Cómo probarla

No requiere servidor ni base de datos.

1. Descargar el repositorio.
2. Abrir `index.html` en un navegador.

Si el navegador bloquea la carga de `products.json` por seguridad al abrirlo como archivo local, usar una extensión de servidor local de VS Code o GitHub Pages.

## Publicar en GitHub Pages

1. Crear un repositorio, por ejemplo `solar-1mw-prysmian`.
2. Subir todos los archivos manteniendo la estructura.
3. En GitHub entrar a **Settings → Pages**.
4. Seleccionar **Deploy from a branch**.
5. Seleccionar `main` y carpeta `/root`.
6. Guardar.
7. GitHub generará la URL pública.

## Personalización

### Productos
Editar:

`data/products.json`

Cada componente tiene:

- `id`
- `name`
- `category`
- `brand`
- `voltage`
- `application`
- `description`
- `specs`
- `products`

### Contacto
Editar el correo dentro de `index.html`.

### Diseño
Editar:

`css/style.css`

### Diagrama
Editar:

`index.html`

Los elementos del diagrama tienen un `data-id`. Ese ID debe coincidir con el `id` de `data/products.json`.

## Próxima versión recomendada

- Logo oficial y branding de Prysmian/Cablec.
- Fotografías reales de cada producto.
- Fichas técnicas PDF.
- Botón de WhatsApp.
- Formulario de contacto.
- Base de productos desde Google Sheets.
- Selector 1 MW / 5 MW / 10 MW.
- Cálculo preliminar de cantidades de cable.
- Vista 3D/isométrica además del unifilar.
- Exportación de una lista de materiales.
