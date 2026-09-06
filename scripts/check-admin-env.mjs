import { readFileSync } from "fs";

function parseEnv(path) {
  const out = {};
  const text = readFileSync(path, "utf8");
  for (const line of text.split(/\r?\n/)) {
    const t = line.trim();
    if (!t || t.startsWith("#")) continue;
    const i = t.indexOf("=");
    if (i < 0) continue;
    const k = t.slice(0, i).trim();
    let v = t.slice(i + 1).trim();
    if (
      (v.startsWith('"') && v.endsWith('"')) ||
      (v.startsWith("'") && v.endsWith("'"))
    ) {
      v = v.slice(1, -1);
    }
    out[k] = v;
  }
  return out;
}

const local = parseEnv(".env.local");
for (const k of ["ADMIN_EMAIL", "ADMIN_PASSWORD", "SESSION_SECRET"]) {
  const v = local[k];
  if (v === undefined) console.log(`${k}: MISSING`);
  else if (v.length === 0) console.log(`${k}: EMPTY`);
  else console.log(`${k}: SET len=${v.length} hasSpaces=${/\s/.test(v)}`);
}

// Simulate validation like the app
const email = (local.ADMIN_EMAIL || "").trim().toLowerCase();
const pass = local.ADMIN_PASSWORD || "";
const secret = local.SESSION_SECRET || "";
console.log(
  "canLogin=",
  Boolean(email && pass),
  "canSignSession=",
  Boolean(secret),
);
console.log("emailLooksOk=", /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email));
