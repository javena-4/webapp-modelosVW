# Catálogo Volkswagen — Modelos + Leads

Webapp de catálogo de modelos Volkswagen (Argentina), con formulario de contacto
y panel admin de leads.

Diseño basado en [`design.md`](design.md) y en la estructura visual de
[volkswagen.com.ar/es/modelos.html](https://www.volkswagen.com.ar/es/modelos.html).

> Demo educativa. No es el sitio oficial de Volkswagen Argentina S.A.

## Demo en vivo

- **Sitio público:** https://webapp-modelos-vw.vercel.app
- **Código en GitHub:** https://github.com/javena-4/webapp-modelosVW
- Admin: `/admin/login` (credenciales solo en variables de entorno del host; no están en el repo)

## Git

- Remoto: `https://github.com/javena-4/webapp-modelosVW.git`
- Rama de trabajo: **`dev`**
- Rama estable: `main`

```bash
git checkout dev
git pull origin dev
```

## Setup local

1. Creá un proyecto gratis en [Neon](https://console.neon.tech) y copiá la connection string **pooled** (`-pooler` en el host).
2. Configurá env:

```bash
npm install
copy .env.example .env
copy .env.example .env.local
```

3. En `.env` poné `DATABASE_URL` de Neon. En `.env.local` poné `ADMIN_EMAIL`, `ADMIN_PASSWORD`, `SESSION_SECRET`.
4. Migrá y corré:

```bash
npx prisma migrate deploy
npm run dev
```

Abrí [http://localhost:3000](http://localhost:3000).

## Deploy gratis (Vercel + Neon)

Hosting **gratuito** público:

**URL de producción:** https://webapp-modelos-vw.vercel.app

### 1) Neon (base de datos)

1. Entrá a https://console.neon.tech y creá un proyecto (plan free).
2. Copiá la connection string **pooled**.
3. Ejecutá migraciones una vez (local, con esa URL en `.env`):

```bash
npx prisma migrate deploy
```

### 2) Vercel (webapp)

1. Entrá a https://vercel.com → Importá el repo `javena-4/webapp-modelosVW`.
2. Framework: Next.js (detectado).
3. Variables de entorno (Production + Preview):

| Variable | Valor |
|----------|--------|
| `DATABASE_URL` | URL pooled de Neon |
| `ADMIN_EMAIL` | tu email admin |
| `ADMIN_PASSWORD` | tu password admin |
| `SESSION_SECRET` | secreto largo aleatorio |
| `COOKIE_SECURE` | `true` |

4. Branch de producción: `main` (o `dev` si preferís demos desde ahí).
5. Deploy → Vercel te da una URL tipo `https://….vercel.app`.

### 3) Probar en producción

- Catálogo `/`
- Lead desde un modelo
- Admin `/admin/login` con las credenciales de env

## Variables de entorno

| Archivo | Uso |
|---------|-----|
| `.env` | Defaults (`DATABASE_URL`, `COOKIE_SECURE`) |
| `.env.local` | **Secretos** admin — no se sube a git |
| `.env.example` | Plantilla |
| Vercel Project Settings | Mismos secretos en la nube |

## Admin

- URL: `/admin/login`
- Credenciales solo en env (nunca en el código)

## Fotos

Las imágenes del catálogo se cargan desde el CDN público de la página de modelos
de VW. Si el CDN deja de responder, usá `public/cars/` y actualizá `src/data/cars.ts`.

## Scripts

```bash
npm run dev
npm run build
npm run start
npm run test
npm run test:e2e
npm run test:all
npm run db:deploy
```
