# Solar Plant Explorer V4 — Prysmian / Procables

Sitio estático con visual isométrica, componentes interactivos, catálogo filtrable y familias de producto editables desde `data/products.json`.

## Familias comerciales incluidas
- **Puesta a tierra:** conductor de cobre desnudo.
- **Conexiones DC fotovoltaicas:** Prysun / Cable Tecsun y Cable Fotovoltaico PV.
- **Salida AC de inversores:** Voltenax ECO GRID; se listan otras familias BT para evaluación según el diseño.
- **Media tensión AC:** XAT, pendiente de confirmar designación exacta y ficha técnica vigente.
- **Red aérea, si aplica:** AAC, AAAC, ACSR o ACSS según criterios mecánicos y eléctricos.
- **Auxiliares BT:** Exzhellent Green, THHN/THWN-2 CT y XHHW-2, según ambiente y especificación.

**Nota técnica:** es una herramienta comercial de referencia, no una selección de ingeniería final. Antes de cotizar, verificar ficha técnica vigente, tensión, sección, ampacidad, cortocircuito, método de instalación, normas, disponibilidad y requisitos de la distribuidora.

## Publicar en GitHub Pages
1. Crea un repositorio y sube todos los archivos de esta carpeta.
2. Entra a `Settings → Pages`.
3. Elige `Deploy from a branch`, rama `main`, carpeta `/ (root)`.
4. Guarda y abre la URL publicada.

## Editar catálogo
Modifica `data/products.json`. Cada componente incluye descripción, familias sugeridas, especificaciones de referencia y nota de catálogo. No requiere API ni backend.

## Estructura
- `index.html`
- `css/style.css`
- `js/app.js`
- `data/products.json`
- `assets/images/`
- `assets/docs/`
