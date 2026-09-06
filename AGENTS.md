<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# AGENTS.md — Catálogo Volkswagen Modelos + Leads

## Producto

Webapp de catálogo de modelos Volkswagen (mercado Argentina), alineada visualmente a
`https://www.volkswagen.com.ar/es/modelos.html`.

- UI pública **sin marca ni nombre de concesionario** (se ve como catálogo VW)
- Formulario de leads: nombre completo, email, auto seleccionado
- Panel admin `/admin` para ver leads (credenciales solo en `.env`)

Referencia oficial de modelos: lineup AR (Tera, Polo, Virtus, Nivus, T-Cross, Taos, Vento, Saveiro, Amarok, Tiguan, Camiones y buses).

---

## Reglas del agente

### 1. Siempre planificá antes de meter código

Antes de implementar: alcance, archivos a tocar, impacto en UI/API/DB y checklist de prueba.
Si el pedido cambia branding o layout, contrastá primero con `design.md`.

### 2. Elegí el stack según el tipo de producto y uso

Este producto es un **catálogo público + captura de leads + panel admin liviano**.

Stack actual (no cambiar sin motivo fuerte):

- Next.js (App Router) + TypeScript + Tailwind CSS
- Prisma + SQLite (leads locales, fácil de demo)
- `jose` para sesión admin (cookie JWT)
- `zod` para validación server-side

Priorizar carga rápida: Server Components, `next/image`, `next/font`, poco JS en el catálogo.

### 3. Usá npm y preferí librerías conocidas y bien mantenidas

- Package manager: **npm**
- Preferir ecosistema estable (Next, Prisma, zod, jose, Tailwind)
- Evitar dependencias obscuras o abandonadas
- Antes de agregar una lib, confirmar API actual con Context7 (regla 6)

### 4. Nunca hardcodees secretos ni credenciales

- `.env` → defaults no secretos (`DATABASE_URL`, `COOKIE_SECURE`)
- `.env.local` → **secretos locales** (`ADMIN_EMAIL`, `ADMIN_PASSWORD`, `SESSION_SECRET`)
- En servidor/prod: variables de entorno del host

No hardcodear passwords en código. No commitear `.env` / `.env.local` / `*.db`.
El email/password de admin **no** deben aparecer en la UI del catálogo.

### 5. Pantallas con skill `frontend-design` + Tailwind

Para crear o modificar UI:

1. Leer `.cursor/skills/frontend-design/SKILL.md`
2. Implementar con Tailwind
3. Mantener estética automotriz premium: limpia, mucha aire, sin gradientes fuertes ni look dashboard

### 6. Docs actualizadas con skill Context7

Para APIs de Next, Prisma, Tailwind, jose, zod, etc.:

- Usar `.cursor/skills/find-docs` / Context7 (`npx ctx7@latest`)
- No inventar firmas ni opciones de config desactualizadas

### 7. Cambios de UI guiados por `design.md` (branding)

`design.md` es la fuente de verdad visual/branding:

- Header blanco, breadcrumb, título “N Modelos”, filtro Body type
- Grilla 3 / 2 / 1, cards con imagen protagonista y nombre abajo
- Paleta y tipografía del documento
- Hover/focus sutiles; accesibilidad básica

La referencia visual es el **catálogo oficial VW**, no una landing de concesionario.

### 8. Testing: Vitest + Playwright MCP

- **Unitarias e integración:** Vitest (`npm run test`)
- **E2E:** MCP de Playwright (`@playwright/mcp`) para verificación interactiva del agente; suite repetible con Playwright Test (`npm run test:e2e`)

### 9. Nunca des por terminada una tarea sin antes correr los tests completos

Antes de cerrar un cambio:

```bash
npm run test:all
```

Eso corre Vitest + e2e. Si falla algún test, no dar la tarea por terminada.

### 10. Si aprendés algo importante sobre el proyecto, actualizá este AGENTS.md

Cuando descubras un pitfall, una convención, un comando útil o una decisión de
producto que el agente futuro debería conocer, documentala acá (regla nueva o
ajuste a una existente). El objetivo es mejorar el proceso de forma continua.

### 11. Cuando hagas cambios al producto, actualizá el README.md

Si el cambio afecta setup, variables de entorno, scripts, rutas, flujo de leads
o uso del admin, reflejalo en `README.md` en el mismo trabajo (no dejar la docs
desactualizada).

---

## Imágenes

- Usar las fotos del catálogo oficial (CDN de la página de modelos) o assets locales en `public/cars/`
- No inventar SVG/placeholders si ya hay fotos reales del lineup
- Para producción comercial estable: Brand Portal → `/public/cars/{slug}.webp` y actualizar `src/data/cars.ts`

## Archivos clave

| Path | Rol |
|------|-----|
| `design.md` | Guía visual / branding |
| `src/data/cars.ts` | Catálogo AR |
| `src/app/page.tsx` | Home catálogo |
| `src/components/models/` | Grilla / cards / filtro |
| `src/components/leads/` | Formulario contacto |
| `src/app/admin/` | Login + panel leads |
| `src/lib/auth.ts` | Sesión admin |
| `prisma/schema.prisma` | Modelo Lead |

## Comandos

```bash
npm install
npx prisma migrate dev
npm run dev
npm run test        # Vitest unit + integración
npm run test:e2e    # Playwright e2e
npm run test:all    # suite completa (obligatorio al cerrar tareas)
```

## No hacer

- No mostrar marca/nombre de concesionario en la UI pública
- No clonar copy legal largo de volkswagen.com.ar
- No hardcodear secretos
- No ignorar `design.md` en cambios de UI
- No commitear `.env` ni bases SQLite
