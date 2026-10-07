let components = [];
let activeCategory = "Todos";
let zoom = 1;

async function loadData() {
  try {
    const response = await fetch("data/products.json");
    components = await response.json();
    renderFilters();
    renderComponentList();
    renderCatalog();
  } catch (error) {
    console.error("No se pudo cargar products.json", error);
  }
}

function renderFilters() {
  const categories = ["Todos", ...new Set(components.map(c => c.category))];
  document.getElementById("categoryFilters").innerHTML = categories.map(c =>
    `<button class="filter ${c === activeCategory ? "active" : ""}" onclick="setCategory('${escapeHtml(c)}')">${escapeHtml(c)}</button>`
  ).join("");
}

function setCategory(category) {
  activeCategory = category;
  renderFilters();
  renderComponentList();
}

function renderComponentList() {
  const term = (document.getElementById("searchInput").value || "").toLowerCase();
  const filtered = components.filter(c =>
    (activeCategory === "Todos" || c.category === activeCategory) &&
    (`${c.name} ${c.brand} ${c.description}`).toLowerCase().includes(term)
  );
  document.getElementById("componentList").innerHTML = filtered.map(c =>
    `<button class="component-item ${c.id === selectedId ? "active" : ""}" onclick="selectComponent('${c.id}')">
      <strong>${escapeHtml(c.name)}</strong>
      <span>${escapeHtml(c.brand)} · ${escapeHtml(c.voltage)}</span>
    </button>`
  ).join("");
}

function renderCatalog() {
  document.getElementById("catalogGrid").innerHTML = components.map((c, i) =>
    `<article class="catalog-card" onclick="selectComponent('${c.id}')" style="cursor:pointer">
      <div class="number">${String(i+1).padStart(2,"0")}</div>
      <h3>${escapeHtml(c.name)}</h3>
      <p>${escapeHtml(c.description)}</p>
      <strong>${escapeHtml(c.brand)}</strong>
    </article>`
  ).join("");
}

let selectedId = null;

function selectComponent(id) {
  const item = components.find(c => c.id === id);
  if (!item) return;
  selectedId = id;
  document.querySelectorAll(".component.node, .component.mini").forEach(el => el.classList.toggle("selected", el.dataset.id === id));
  renderComponentList();

  const html = `
    <span class="eyebrow">${escapeHtml(item.category)}</span>
    <h3>${escapeHtml(item.name)}</h3>
    <p>${escapeHtml(item.description)}</p>
    <span class="detail-tag">${escapeHtml(item.application)}</span>
    <div class="specs">
      ${Object.entries(item.specs).map(([key, value]) =>
        `<div class="spec"><span>${escapeHtml(key)}</span><strong>${escapeHtml(value)}</strong></div>`
      ).join("")}
    </div>
    <div class="products">
      <strong style="font-size:12px">Producto / solución</strong>
      ${item.products.map(p => `<div class="product-card-mini"><strong>${escapeHtml(p.name)}</strong><span>${escapeHtml(p.note)}</span></div>`).join("")}
    </div>
    <button class="primary-btn" style="margin-top:18px;width:100%" onclick="openContact()">Solicitar información</button>
  `;
  document.getElementById("detailContent").innerHTML = html;
}

function closeDetail() {
  selectedId = null;
  document.querySelectorAll(".component").forEach(el => el.classList.remove("selected"));
  document.getElementById("detailContent").innerHTML = `
    <div class="empty-detail">
      <div class="big-icon">⌁</div>
      <h3>Selecciona un componente</h3>
      <p>Haz clic sobre cualquier elemento del diagrama o de la lista para visualizar detalles.</p>
    </div>`;
  renderComponentList();
}

function zoomDiagram(factor) {
  zoom = Math.max(.65, Math.min(1.55, zoom * factor));
  document.getElementById("diagramCanvas").style.transform = `scale(${zoom})`;
}
function resetZoom() {
  zoom = 1;
  document.getElementById("diagramCanvas").style.transform = "scale(1)";
}
function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({behavior:"smooth"});
}
function openContact() {
  document.getElementById("contactModal").classList.remove("hidden");
}
function closeContact() {
  document.getElementById("contactModal").classList.add("hidden");
}
function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, m => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[m]));
}
document.getElementById("contactModal").addEventListener("click", e => {
  if (e.target.id === "contactModal") closeContact();
});
loadData();
