import { config } from "dotenv";

config({ path: ".env" });
config({ path: ".env.local", override: true });

// Integración requiere Postgres (Neon). No forzar SQLite.
process.env.ADMIN_EMAIL ??= "admin@test.local";
process.env.ADMIN_PASSWORD ??= "test-password-123";
process.env.SESSION_SECRET ??= "test-session-secret-at-least-32-chars";
process.env.COOKIE_SECURE ??= "false";
