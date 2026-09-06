import { readFileSync } from "fs";

const lines = readFileSync(".env.local", "utf8").split(/\r?\n/);
lines.forEach((line, idx) => {
  const n = idx + 1;
  const t = line.trim();
  if (!t) {
    console.log(`${n}: (blank)`);
    return;
  }
  if (t.startsWith("#")) {
    console.log(`${n}: #comment`);
    return;
  }
  const i = t.indexOf("=");
  if (i < 0) {
    console.log(`${n}: NO_EQUALS`);
    return;
  }
  const k = t.slice(0, i).trim();
  const raw = t.slice(i + 1);
  const trimmed = raw.trim();
  const quoted =
    (trimmed.startsWith('"') && trimmed.endsWith('"')) ||
    (trimmed.startsWith("'") && trimmed.endsWith("'"));
  const inner = quoted ? trimmed.slice(1, -1) : trimmed;
  console.log(
    `${n}: key=${k} quoted=${quoted} valueLen=${inner.length} empty=${inner.length === 0}`,
  );
});
