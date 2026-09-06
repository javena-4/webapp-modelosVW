import { readFileSync } from "fs";

function parseEnv(path) {
  const out = {};
  for (const line of readFileSync(path, "utf8").split(/\r?\n/)) {
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

const e = parseEnv(".env.local");
const res = await fetch("http://localhost:3000/api/admin/login", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    email: e.ADMIN_EMAIL,
    password: e.ADMIN_PASSWORD,
  }),
});
console.log("loginStatus", res.status);
console.log("loginBody", await res.text());
console.log("cookie", res.headers.get("set-cookie") ? "YES" : "NO");
