# Design System — WebApp de Modelos Volkswagen

> Referencia visual: página de modelos de Volkswagen Argentina y captura provista.
> Objetivo: usar este documento como guía de diseño para Cursor durante el armado de una webapp de catálogo/configurador de modelos.

---

## 1. Objetivo del producto

Construir una webapp moderna para explorar modelos de autos Volkswagen.

La interfaz debe transmitir:

- Diseño automotriz premium y limpio.
- Mucho espacio en blanco.
- Jerarquía visual clara.
- Navegación simple.
- Imágenes de los vehículos como protagonistas.
- Tarjetas grandes y fáciles de explorar.
- Estética corporativa sobria, tecnológica y minimalista.

La referencia principal presenta un catálogo de modelos con navegación superior, breadcrumb, título, filtro y una grilla de tarjetas.

---

# 2. Dirección visual

## Concepto

**Minimalismo automotriz + interfaz corporativa premium.**

La interfaz debe sentirse:

- Moderna.
- Ordenada.
- Confiable.
- Tecnológica.
- Amplia.
- Fácil de escanear.

Evitar:

- Gradientes fuertes.
- Sombras pesadas.
- Colores saturados en grandes superficies.
- Bordes excesivamente redondeados.
- Demasiados elementos decorativos.
- Interfaces tipo dashboard recargadas.

---

# 3. Layout general

## Estructura

```text
┌──────────────────────────────────────────────────────────────┐
│ HEADER / NAVBAR                                              │
│  [Logo]  Menú  Modelos  Ofertas  Configurá tu Volkswagen    │
│                                              [Buscar]        │
├──────────────────────────────────────────────────────────────┤
│                                                              │
│  Breadcrumb                                                  │
│                                                              │
│  11 Modelos                                                   │
│                                                              │
│  [ Body type                                     ˅ ]         │
│                                                              │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐       │
│  │              │  │              │  │              │       │
│  │   AUTO IMG   │  │   AUTO IMG   │  │   AUTO IMG   │       │
│  │              │  │              │  │              │       │
│  │ Tera         │  │ Polo         │  │ Virtus       │       │
│  └──────────────┘  └──────────────┘  └──────────────┘       │
│                                                              │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐       │
│  │   ...        │  │   ...        │  │   ...        │       │
│  └──────────────┘  └──────────────┘  └──────────────┘       │
│                                                              │
└──────────────────────────────────────────────────────────────┘
```

---

# 4. Contenedor principal

## Desktop

- Ancho máximo: `1280px` a `1440px`.
- Margen horizontal automático.
- Padding lateral: `48px` a `64px`.
- Padding superior después del header: `24px` a `40px`.

```css
.page-container {
  width: min(100% - 96px, 1440px);
  margin: 0 auto;
}
```

## Tablet

- Padding lateral: `32px`.

## Mobile

- Padding lateral: `16px` a `20px`.

---

# 5. Header

## Características

Header horizontal, blanco o gris muy claro.

Altura aproximada:

- Desktop: `72px`.
- Mobile: `56px` a `64px`.

Debe incluir:

### Izquierda

- Logo circular de Volkswagen.
- Navegación principal.

### Navegación

Items:

- Menú
- Modelos
- Ofertas
- Configurá tu Volkswagen

El item activo puede tener:

- Mayor peso tipográfico.
- Línea inferior discreta.
- Color más oscuro.

### Derecha

- Botón o icono de búsqueda.
- Opcionalmente perfil / menú de usuario en futuras versiones.

## Estilo

```css
.header {
  background: #ffffff;
  border-bottom: 1px solid #d9d9d9;
}
```

La navegación debe ser discreta y no competir visualmente con los vehículos.

---

# 6. Breadcrumb

Ubicación: debajo del header.

Ejemplo:

```text
Home › Modelos y configurador
```

Estilo:

- Tamaño pequeño.
- Color gris oscuro.
- Link anterior subrayado o con hover.
- Página actual en peso medio o semibold.

Espaciado inferior generoso antes del título.

---

# 7. Título principal

Ejemplo:

```text
11 Modelos
```

Jerarquía:

- El número puede tener un peso normal.
- “Modelos” debe tener mayor presencia visual.

## Desktop

- Tamaño: `34px` a `40px`.
- Peso: `600` o `700`.
- Color: azul oscuro / gris muy oscuro.

## Mobile

- Tamaño: `28px` a `32px`.

Color sugerido:

```css
--text-primary: #17263c;
```

---

# 8. Área de filtros

La referencia utiliza un selector principal:

```text
[ Body type                                      ˅ ]
```

## Diseño

- Ancho: `240px` a `280px`.
- Altura: `52px`.
- Fondo blanco.
- Borde gris.
- Radio moderado: `8px` a `10px`.
- Icono chevron a la derecha.

```css
.filter-select {
  height: 52px;
  padding: 0 16px;
  border: 1px solid #9da6b1;
  border-radius: 10px;
  background: #ffffff;
}
```

## Para la webapp

El filtro puede evolucionar a:

- Tipo de vehículo.
- Rango de precio.
- Combustible / motorización.
- Transmisión.
- Cantidad de plazas.

En desktop, mantener los filtros compactos y alineados horizontalmente.

---

# 9. Grilla de modelos

## Desktop

La captura utiliza una grilla de **3 columnas**.

```css
.models-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 16px;
}
```

Para pantallas grandes puede aumentarse el gap a:

```css
gap: 20px;
```

## Tablet

```css
grid-template-columns: repeat(2, 1fr);
```

## Mobile

```css
grid-template-columns: 1fr;
```

---

# 10. Card de vehículo

Cada modelo debe estar contenido dentro de una tarjeta grande.

## Estructura

```text
┌────────────────────────────────────┐
│                                    │
│                                    │
│            IMAGEN AUTO             │
│                                    │
│                                    │
├────────────────────────────────────┤
│  Nombre del modelo                 │
│                                    │
└────────────────────────────────────┘
```

## Características

- Fondo blanco.
- Borde muy sutil.
- Radio: `12px` a `16px`.
- Sombra extremadamente suave.
- Imagen centrada.
- Mucho espacio alrededor del vehículo.
- Nombre alineado abajo a la izquierda.

## CSS sugerido

```css
.model-card {
  background: #ffffff;
  border: 1px solid #e1e5e9;
  border-radius: 14px;
  overflow: hidden;
  min-height: 320px;
  cursor: pointer;
  transition:
    transform 180ms ease,
    box-shadow 180ms ease,
    border-color 180ms ease;
}
```

### Hover

El hover debe ser elegante y sutil.

```css
.model-card:hover {
  transform: translateY(-4px);
  border-color: #b8c1cb;
  box-shadow: 0 10px 28px rgba(0, 0, 0, 0.08);
}
```

Evitar animaciones exageradas.

---

# 11. Imagen del vehículo

La imagen es el elemento protagonista.

## Reglas

- Fondo transparente o fondo blanco.
- Auto centrado horizontalmente.
- Mantener proporciones.
- No recortar el vehículo.
- Gran espacio negativo alrededor.

```css
.model-card__image {
  width: 100%;
  height: 230px;
  object-fit: contain;
  padding: 24px;
}
```

En pantallas grandes se puede aumentar la altura a `260px`.

---

# 12. Nombre del modelo

Ubicación:

- Parte inferior de la tarjeta.
- Alineado a la izquierda.

Ejemplos:

- Tera
- Polo
- Virtus
- Nivus
- T-Cross
- Taos
- Vento
- Saveiro
- Amarok
- Tiguan

## Estilo

```css
.model-card__title {
  font-size: 18px;
  font-weight: 600;
  color: #17263c;
  padding: 20px 24px 24px;
}
```

---

# 13. Paleta de colores

Usar una paleta neutra y corporativa.

## Colores principales

```css
:root {
  --background: #f7f7f6;
  --surface: #ffffff;

  --text-primary: #17263c;
  --text-secondary: #4d5968;

  --border: #d9dfe5;
  --border-strong: #9da6b1;

  --accent-blue: #001e50;

  --hover-surface: #f3f5f7;

  --shadow: rgba(17, 24, 39, 0.08);
}
```

La interfaz debe depender principalmente de:

- Blanco.
- Gris muy claro.
- Azul oscuro.
- Gris oscuro para textos.

Los colores de los autos deben aportar la mayor parte del contraste visual.

---

# 14. Tipografía

Usar una tipografía sans-serif moderna.

Opciones adecuadas:

- Arial / system font como fallback.
- Inter.
- Una fuente corporativa similar a las utilizadas por Volkswagen, si está disponible legalmente en el proyecto.

Stack recomendado:

```css
font-family:
  Inter,
  Arial,
  Helvetica,
  sans-serif;
```

## Escala tipográfica

```text
Breadcrumb:       13–14px
Nav:              14–16px
Filtro:           15–16px
Nombre modelo:    18–20px
Título H1:        34–40px
```

---

# 15. Espaciado

Utilizar un sistema consistente basado en múltiplos de 4.

```text
4px
8px
12px
16px
20px
24px
32px
40px
48px
64px
```

## Espaciados recomendados

```text
Header → breadcrumb:      24px
Breadcrumb → título:      56px
Título → filtros:         20px
Filtros → grilla:         36px
Entre cards:              16–20px
Imagen → título card:     12–20px
```

---

# 16. Responsive design

## Desktop ≥ 1200px

- Header completo.
- Navegación visible.
- 3 columnas.
- Cards grandes.

## Tablet 768px–1199px

- 2 columnas.
- Header simplificado.
- Navegación posiblemente dentro de menú.

## Mobile < 768px

- Header compacto.
- Menú hamburguesa.
- 1 columna.
- Cards de ancho completo.
- Filtros apilados o en scroll horizontal.

Ejemplo:

```css
@media (max-width: 768px) {
  .models-grid {
    grid-template-columns: 1fr;
    gap: 16px;
  }

  .page-container {
    width: min(100% - 32px, 1440px);
  }
}
```

---

# 17. Interacciones

## Card

Al hacer click:

- Navegar a la página de detalle del modelo.
- O abrir un panel / modal de información rápida.

## Hover desktop

- Elevar la tarjeta levemente.
- Sombra suave.
- Opcional: mostrar CTA discreto.

Ejemplo:

```text
Polo
Ver modelo →
```

El CTA no debe estar visible permanentemente si genera demasiado ruido visual.

---

# 18. Filtros

Para la webapp, implementar filtros funcionales.

## Categorías iniciales

```text
Todos
SUV
Compactos
Sedanes
Deportivos
Pick-Up
Camiones y buses
```

## Comportamiento

Al seleccionar un filtro:

1. Actualizar los modelos visibles.
2. Mantener una animación breve de transición.
3. Mostrar cantidad de resultados.
4. Conservar el filtro seleccionado en URL o estado si es posible.

Ejemplo:

```text
11 Modelos
```

Luego:

```text
5 Modelos encontrados
```

---

# 19. Estructura de datos sugerida

```ts
type Vehicle = {
  id: string;
  name: string;
  category:
    | "suv"
    | "compact"
    | "sedan"
    | "sport"
    | "pickup"
    | "truck";
  image: string;
  shortDescription?: string;
  price?: number;
  featured?: boolean;
};
```

Ejemplo:

```ts
const vehicles = [
  {
    id: "tera",
    name: "Tera",
    category: "suv",
    image: "/images/vehicles/tera.png"
  },
  {
    id: "polo",
    name: "Polo",
    category: "compact",
    image: "/images/vehicles/polo.png"
  },
  {
    id: "virtus",
    name: "Virtus",
    category: "sedan",
    image: "/images/vehicles/virtus.png"
  }
];
```

---

# 20. Componentes recomendados

Separar la aplicación en componentes reutilizables.

```text
components/
│
├── layout/
│   ├── Header
│   ├── Navigation
│   └── PageContainer
│
├── models/
│   ├── ModelsGrid
│   ├── ModelCard
│   ├── ModelFilter
│   └── ModelsHeader
│
└── ui/
    ├── Select
    ├── Button
    ├── SearchInput
    └── IconButton
```

---

# 21. Página futura de detalle

Al seleccionar un modelo, la página de detalle debería seguir la misma estética.

## Layout sugerido

```text
┌───────────────────────────────────────────────┐
│ Breadcrumb                                    │
│                                               │
│ Nombre del vehículo                           │
│ Descripción corta                             │
│                                               │
│ [Información]     [Imagen grande del auto]    │
│                                               │
│ Precio / CTA                                  │
├───────────────────────────────────────────────┤
│ Versiones                                     │
├───────────────────────────────────────────────┤
│ Características                               │
├───────────────────────────────────────────────┤
│ Galería                                       │
└───────────────────────────────────────────────┘
```

CTAs posibles:

- Ver versiones.
- Configurar vehículo.
- Solicitar cotización.
- Agendar test drive.

---

# 22. Accesibilidad

Implementar:

- Contraste suficiente.
- Navegación por teclado.
- Estados `focus` visibles.
- `alt` descriptivo en imágenes.
- Botones reales para acciones.
- Labels asociados a filtros.
- Tamaños táctiles mínimos de `44px`.

Ejemplo:

```css
button:focus-visible,
a:focus-visible,
select:focus-visible {
  outline: 3px solid rgba(0, 30, 80, 0.35);
  outline-offset: 3px;
}
```

---

# 23. Rendimiento

Las imágenes de vehículos pueden ser pesadas.

Recomendaciones:

- Utilizar WebP o AVIF.
- Mantener imágenes transparentes optimizadas.
- Lazy loading para tarjetas fuera del viewport.
- Usar dimensiones definidas para evitar layout shift.

Ejemplo:

```html
<img
  src="/images/vehicles/polo.webp"
  alt="Volkswagen Polo"
  loading="lazy"
  width="800"
  height="500"
/>
```

---

# 24. Prompt de implementación para Cursor

Copiar esta instrucción junto con este archivo:

```text
Construí una webapp responsive de catálogo de modelos de autos Volkswagen
siguiendo estrictamente el archivo design.md.

Prioridades:

1. Diseño minimalista, premium y corporativo.
2. Mucho espacio en blanco.
3. Header limpio y horizontal.
4. Breadcrumb.
5. Título grande con cantidad de modelos.
6. Filtro de categorías.
7. Grilla responsive de 3 columnas en desktop, 2 en tablet y 1 en mobile.
8. Cards grandes con imagen del vehículo como elemento principal.
9. Animaciones y hover sutiles.
10. Componentes reutilizables.
11. Código limpio y mantenible.
12. No usar gradientes llamativos ni estilos tipo dashboard.
13. Priorizar una apariencia visual similar a un catálogo automotriz premium.
14. Mantener separación clara entre layout, datos y componentes.
15. Implementar accesibilidad y responsive design desde el inicio.

Usar el contenido de design.md como fuente principal de decisiones visuales.
```

---

# 25. Checklist final

Antes de considerar terminada la interfaz:

- [ ] El header se ve limpio y equilibrado.
- [ ] La grilla tiene aire y no se ve saturada.
- [ ] Las imágenes de los autos son protagonistas.
- [ ] Las cards tienen bordes y sombras sutiles.
- [ ] Los textos tienen jerarquía clara.
- [ ] El filtro es simple y fácil de encontrar.
- [ ] La interfaz funciona correctamente en desktop, tablet y mobile.
- [ ] Los estados hover y focus están implementados.
- [ ] Las imágenes están optimizadas.
- [ ] La estructura está preparada para agregar detalle y configurador.

---

## Referencia de contenido

La página de referencia de Volkswagen Argentina muestra un catálogo de 11 modelos y utiliza una navegación superior, breadcrumb, selector de tipo de vehículo y tarjetas individuales para cada modelo. La webapp debe tomar esta estructura como inspiración visual, sin necesidad de copiar literalmente todos los elementos.
