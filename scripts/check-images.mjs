import { readFileSync } from "fs";

const src = readFileSync("./src/data/cars.ts", "utf8");
const urls = [...src.matchAll(/https:\/\/[^"']+/g)].map((m) => m[0]);

for (const u of urls) {
  const label = u.includes("Camiones")
    ? "camiones"
    : u.match(/v3_[A-Za-z0-9]+/)?.[0] || "url";
  try {
    const res = await fetch(u, { method: "HEAD" });
    console.log(res.status, label);
  } catch (e) {
    console.log("ERR", label, e instanceof Error ? e.message : e);
  }
}
