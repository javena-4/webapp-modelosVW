# Checklist E2E — Playwright MCP

Usar el MCP de Playwright (`@playwright/mcp`) contra `http://localhost:3000`.

## Flujos mínimos

1. **Catálogo**
   - Abrir `/`
   - Ver título con “Modelos”
   - Ver link/nav “Menú”
   - Ver cards (Tera, Polo, etc.)

2. **Ficha de modelo**
   - Click en Tera → `/modelos/tera`
   - Ver resumen / destacados / versiones
   - Ver CTA de cotización / formulario

3. **Lead**
   - En ficha o home, completar nombre + email
   - Enviar formulario
   - Ver mensaje de éxito

4. **Admin**
   - Ir a `/admin/login`
   - Login con credenciales de `.env.local`
   - Ver el lead en `/admin/leads`

No hardcodear passwords en este archivo.
