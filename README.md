# Catálogo Volkswagen — Modelos + Leads

Webapp de catálogo de modelos Volkswagen (Argentina), con formulario de contacto
y panel admin de leads.

Diseño basado en [`design.md`](design.md) y en la estructura visual de
[volkswagen.com.ar/es/modelos.html](https://www.volkswagen.com.ar/es/modelos.html).

> Demo educativa. No es el sitio oficial de Volkswagen Argentina S.A.

## Setup

```bash
npm install
copy .env.example .env
copy .env.example .env.local
npx prisma migrate dev
npm run dev
```

Abrí [http://localhost:3000](http://localhost:3000).

## Variables de entorno

| Archivo | Uso |
|---------|-----|
| `.env` | Defaults no secretos (`DATABASE_URL`, `COOKIE_SECURE`) |
| `.env.local` | **Tus secretos** (`ADMIN_EMAIL`, `ADMIN_PASSWORD`, `SESSION_SECRET`) — no se sube a git |
| `.env.example` | Plantilla de referencia |

Editá `.env.local` y completá email, password y `SESSION_SECRET` antes de usar el admin.

## Admin

- URL: `/admin/login`
- Credenciales en `.env.local`

## Fotos

Las imágenes del catálogo se cargan desde el CDN público de la página de modelos
de VW (misma referencia visual). Si el CDN deja de responder o querés uso
comercial estable, reemplazá por archivos locales en `public/cars/` y actualizá
`src/data/cars.ts`.

## Scripts

```bash
npm run dev
npm run build
npm run start
```
